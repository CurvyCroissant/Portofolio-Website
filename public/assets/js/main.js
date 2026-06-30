document.addEventListener("DOMContentLoaded", () => {
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;
    const text = toggleBtn.querySelector(".toggle-text");
    const icon = toggleBtn.querySelector(".mode-icon");
    if (theme === "light") {
      text.innerText = "Dark";
      icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    } else {
      text.innerText = "Light";
      icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    }
  };

  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "dark";
      setTheme(currentTheme === "dark" ? "light" : "dark");
      themeToggle.blur(); // Removes focus state on mobile after tap
    });
  }

  if (document.getElementById("home")) {
    const savedScroll = sessionStorage.getItem("portfolioScrollPos");
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll, 10));
      sessionStorage.removeItem("portfolioScrollPos");
    }
  }

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      sessionStorage.setItem("portfolioScrollPos", window.scrollY);
    });
  });

  document.querySelectorAll(".social-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      const textSpan = this.querySelector(".link-text");
      if (!textSpan) return;
      const originalText = textSpan.innerText;
      if (this.id === "email-link") {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard
          .writeText(originalText)
          .then(() => {
            textSpan.innerText = "Copied!";
            setTimeout(() => {
              textSpan.innerText = originalText;
            }, 2000);
          })
          .catch(() => {});
      } else {
        textSpan.innerText = "Redirecting...";
        setTimeout(() => {
          textSpan.innerText = originalText;
        }, 1000);
      }
    });
  });

  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("modal-image");
  const closeBtn = document.querySelector(".modal-close");

  let scale = 1;
  let posX = 0;
  let posY = 0;
  let isDragging = false;
  let startX = 0,
    startY = 0;

  const setTransform = (smooth = false) => {
    const w = modalImg.offsetWidth;
    const h = modalImg.offsetHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const scaledW = w * scale;
    const scaledH = h * scale;

    const maxPosX = scaledW > vw ? (scaledW - vw) / 2 : 0;
    const maxPosY = scaledH > vh ? (scaledH - vh) / 2 : 0;

    posX = Math.max(-maxPosX, Math.min(maxPosX, posX));
    posY = Math.max(-maxPosY, Math.min(maxPosY, posY));

    modalImg.style.transition = smooth ? "transform 0.15s ease-out" : "none";
    modalImg.style.transform = `translate(calc(-50% + ${posX}px), calc(-50% + ${posY}px)) scale(${scale})`;

    if (scale > 1) {
      modalImg.style.cursor = isDragging ? "grabbing" : "grab";
    } else {
      modalImg.style.cursor = "grab";
    }
  };

  const lockScroll = () => {
    document.body.classList.add("no-scroll");
  };

  const unlockScroll = () => {
    document.body.classList.remove("no-scroll");
  };

  document
    .querySelectorAll(".cert-card, .proof-link, .lightbox-trigger")
    .forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        if (modal && modalImg) {
          modalImg.src =
            trigger.getAttribute("href") ||
            trigger.querySelector("img").getAttribute("src");
          modal.classList.add("active");
          lockScroll();

          scale = 1;
          posX = 0;
          posY = 0;
          modalImg.style.transition = "";
          modalImg.style.transform = "";
          modalImg.style.cursor = "grab";
        }
      });
    });

  const closeModal = () => {
    modal.classList.remove("active");
    unlockScroll();
    scale = 1;
    posX = 0;
    posY = 0;
    modalImg.style.transition = "";
    modalImg.style.transform = "";

    // Clear image source after modal fade-out completes to prevent flashing
    setTimeout(() => {
      if (!modal.classList.contains("active")) {
        modalImg.src = "";
      }
    }, 400);
  };

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (modal && modalImg) {
    // Custom Desktop Wheel Zoom
    modal.addEventListener(
      "wheel",
      (e) => {
        if (!modal.classList.contains("active")) return;
        e.preventDefault();

        const zoomSensitivity = 0.15;
        const delta = e.deltaY < 0 ? 1 : -1;
        const newScale = Math.max(
          1,
          Math.min(4, scale + delta * zoomSensitivity),
        );

        if (newScale !== scale) {
          const mouseX = e.clientX - window.innerWidth / 2;
          const mouseY = e.clientY - window.innerHeight / 2;
          const ratio = newScale / scale;

          posX = mouseX - (mouseX - posX) * ratio;
          posY = mouseY - (mouseY - posY) * ratio;
          scale = newScale;

          setTransform(true);
        }
      },
      { passive: false },
    );

    // Custom Desktop/Mobile Pan Dragging
    modalImg.addEventListener("pointerdown", (e) => {
      if (scale > 1) {
        isDragging = true;
        startX = e.clientX - posX;
        startY = e.clientY - posY;
        setTransform(false);
        e.preventDefault();
      }
    });

    window.addEventListener("pointermove", (e) => {
      if (isDragging) {
        posX = e.clientX - startX;
        posY = e.clientY - startY;
        setTransform(false);
      }
    });

    window.addEventListener("pointerup", () => {
      if (isDragging) {
        isDragging = false;
        setTransform(false);
      }
    });

    // Custom Mobile Pinch-to-Zoom
    let initialDistance = 0;
    let initialScale = 1;

    modal.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 2) {
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          initialDistance = Math.sqrt(dx * dx + dy * dy);
          initialScale = scale;
        }
      },
      { passive: false },
    );

    modal.addEventListener(
      "touchmove",
      (e) => {
        if (!modal.classList.contains("active")) return;
        if (scale > 1 && e.touches.length === 1) e.preventDefault();

        if (e.touches.length === 2) {
          e.preventDefault();
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const ratio = distance / initialDistance;

          const newScale = Math.max(1, Math.min(4, initialScale * ratio));

          if (newScale !== scale) {
            const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
            const mouseX = centerX - window.innerWidth / 2;
            const mouseY = centerY - window.innerHeight / 2;
            const scaleRatio = newScale / scale;

            posX = mouseX - (mouseX - posX) * scaleRatio;
            posY = mouseY - (mouseY - posY) * scaleRatio;
            scale = newScale;

            setTransform(false);
          }
        }
      },
      { passive: false },
    );
  }

  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Changed from toggle to add to prevent infinite layout bounce loop
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 },
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  const termOverlay = document.getElementById("terminal-overlay");
  const termInput = document.getElementById("term-input");
  const termHistory = document.getElementById("term-history");
  const termWindow = document.querySelector(".terminal-window");

  if (termOverlay && termInput && termWindow) {
    const openTerminal = () => {
      termOverlay.classList.add("active");
      termWindow.classList.remove("minimized");
      termWindow.classList.remove("fullscreen");
      lockScroll();
      setTimeout(() => termInput.focus(), 100);
    };

    const closeTerminal = () => {
      termOverlay.classList.remove("active");
      unlockScroll();
      termInput.value = "";
    };

    const termTrigger = document.getElementById("term-trigger");
    if (termTrigger) termTrigger.addEventListener("click", openTerminal);

    const btnClose = document.getElementById("term-close");
    const btnMin = document.getElementById("term-min");
    const btnMax = document.getElementById("term-max");

    if (btnClose) btnClose.addEventListener("click", closeTerminal);

    if (btnMin)
      btnMin.addEventListener("click", () => {
        termWindow.classList.toggle("minimized");
        if (termWindow.classList.contains("minimized")) {
          termWindow.classList.remove("fullscreen");
        }
      });

    if (btnMax)
      btnMax.addEventListener("click", () => {
        termWindow.classList.toggle("fullscreen");
        if (termWindow.classList.contains("fullscreen")) {
          termWindow.classList.remove("minimized");
        }
      });

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
      ) {
        e.preventDefault();
        openTerminal();
      }
      if (e.key === "Escape") {
        if (modal && modal.classList.contains("active")) {
          closeModal();
        } else if (termOverlay.classList.contains("active")) {
          closeTerminal();
        }
      }
    });

    termOverlay.addEventListener("click", (e) => {
      if (e.target === termOverlay) closeTerminal();
    });

    const terminalBody = document.querySelector(".terminal-body");
    if (terminalBody) {
      terminalBody.addEventListener("click", (e) => {
        if (e.target.tagName !== "A" && !window.getSelection().toString()) {
          termInput.focus();
        }
      });
    }

    const printLine = (text, isCommand = false) => {
      const line = document.createElement("div");
      line.className = "term-line";
      line.innerHTML = isCommand ? `C:\\Aaron-Nathanael&gt;${text}` : text;
      termHistory.appendChild(line);
      termHistory.parentElement.scrollTop =
        termHistory.parentElement.scrollHeight;
    };

    termInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const cmd = termInput.value.trim().toLowerCase();
        termInput.value = "";
        if (!cmd) return;

        printLine(cmd, true);

        switch (cmd) {
          case "help":
            printLine(
              "Available commands:\n  about    - Learn more about me\n  skills   - View technical stack\n  projects - View selected works\n  resume   - View experience & achievements\n  contact  - Get my email & links\n  clear    - Clear terminal\n  exit     - Close terminal",
            );
            break;
          case "about":
            printLine(
              "Aaron Nathanael\nComputer Science Undergraduate @ BINUS University (GPA: 3.92)\nCurrently on Exchange @ Shibaura Institute of Technology, Tokyo.\nActively learning Artificial Intelligence and Web Development.",
            );
            break;
          case "skills":
            printLine(
              "Languages: Python, PHP, JavaScript, Swift, C, HTML, CSS\n" +
                "AI/ML    : PyTorch, Scikit-Learn, YOLOv8, HuggingFace, MediaPipe, OpenCV\n" +
                "Web Dev  : Laravel, MySQL, Streamlit, Firebase, React/Astro\n" +
                "Tools    : Git, NLTK, Pandas, NumPy, Data Analytics",
            );
            break;
          case "projects":
            printLine(
              "1. Posture Alert App (Python, MediaPipe)\n" +
                "2. Code Documentation Generator (Python, Qwen2.5)\n" +
                "3. SafeFall: Fall Detection App (YOLOv8, OpenCV)\n" +
                "4. Personality Predictor (PyTorch, Flask)\n" +
                "5. Crop Yield Predictor (Scikit-Learn)\n" +
                "6. Public Transport Route Planner (Laravel, Firebase)",
            );
            break;
          case "resume":
            printLine(
              "2025: Dean's List @ BINUS University School of Computer Science\n" +
                "2025: 2nd Runner-up @ COMPFEST 17 Game Jam\n" +
                "2025: Academic & Web Dev Activist @ HIMTI BINUS\n" +
                "2024: Semi-Finalist @ Samsung Innovation Campus (Batch 5)\n" +
                "2024: Learning & Training Activist @ BNCC\n" +
                "2023: Participant @ Apple Developer Academy (iOS Foundation)",
            );
            break;
          case "contact":
            printLine(
              "Email    : aaronnathanaelishakleman@gmail.com\n" +
                "LinkedIn : linkedin.com/in/aaron-nathanael\n" +
                "GitHub   : github.com/CurvyCroissant",
            );
            break;
          case "clear":
            termHistory.innerHTML = "";
            const intro = document.getElementById("term-intro");
            if (intro) intro.style.display = "none";
            break;
          case "exit":
            closeTerminal();
            break;
          default:
            printLine(
              `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`,
            );
        }
      }
    });
  }

  const skillsContainer = document.querySelector(".skills-container");
  if (skillsContainer && typeof Matter !== "undefined") {
    const pills = Array.from(document.querySelectorAll(".skill-pill"));
    const bodyData = pills.map((pill) => {
      const rect = pill.getBoundingClientRect();
      return { pill, width: rect.width, height: rect.height };
    });

    const Engine = Matter.Engine,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create({
      positionIterations: 10,
      velocityIterations: 10,
    });
    engine.gravity.y = 0;
    engine.gravity.x = 0;

    const containerRect = skillsContainer.getBoundingClientRect();
    let width = containerRect.width || 648;
    const height = 270;

    const wallThickness = 1000;
    const wallOptions = {
      isStatic: true,
      render: { visible: false },
      restitution: 0,
      friction: 0,
    };

    const ground = Bodies.rectangle(
      width / 2,
      height + wallThickness / 2,
      width * 2,
      wallThickness,
      wallOptions,
    );
    const topWall = Bodies.rectangle(
      width / 2,
      -wallThickness / 2,
      width * 2,
      wallThickness,
      wallOptions,
    );
    const leftWall = Bodies.rectangle(
      -wallThickness / 2,
      height / 2,
      wallThickness,
      height * 2,
      wallOptions,
    );
    const rightWall = Bodies.rectangle(
      width + wallThickness / 2,
      height / 2,
      wallThickness,
      height * 2,
      wallOptions,
    );

    Composite.add(engine.world, [ground, topWall, leftWall, rightWall]);

    const cols = width < 500 ? 2 : 3;
    const cellWidth = width / cols;
    const cellHeight = height / Math.ceil(bodyData.length / cols);

    let indices = Array.from({ length: bodyData.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    bodyData.forEach((data, i) => {
      const shuffledIndex = indices[i];
      const col = shuffledIndex % cols;
      const row = Math.floor(shuffledIndex / cols);

      const x = col * cellWidth + cellWidth / 2;
      const y = row * cellHeight + cellHeight / 2;

      const body = Bodies.rectangle(x, y, data.width, data.height, {
        restitution: 0,
        frictionAir: 0.1,
        friction: 0.8,
        density: 0.01,
        chamfer: { radius: 18 },
      });

      Matter.Body.setInertia(body, Infinity);

      data.body = body;
      Composite.add(engine.world, body);
    });

    const mouse = Mouse.create(skillsContainer);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.0005,
        damping: 0.1,
        render: { visible: false },
      },
    });
    Composite.add(engine.world, mouseConstraint);

    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel,
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel,
    );

    skillsContainer.addEventListener("mouseleave", () => {
      if (mouseConstraint.body) {
        mouseConstraint.body = null;
      }
      mouseConstraint.mouse.button = -1;
    });

    const runner = Runner.create();
    let isRunning = false;

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!skillsContainer.classList.contains("physics-active")) {
              skillsContainer.classList.add("physics-active");
            }
            if (!isRunning) {
              Runner.run(runner, engine);
              isRunning = true;
            }
          } else {
            if (isRunning) {
              Runner.stop(runner);
              isRunning = false;
            }
          }
        });
      },
      { threshold: 0.1 },
    );
    skillsObserver.observe(skillsContainer);

    Matter.Events.on(engine, "afterUpdate", () => {
      bodyData.forEach((data) => {
        data.pill.style.left = `${data.body.position.x}px`;
        data.pill.style.top = `${data.body.position.y}px`;
        data.pill.style.transform = `translate(-50%, -50%)`;
      });
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newWidth = skillsContainer.getBoundingClientRect().width || 648;
        if (newWidth !== width) {
          width = newWidth;
          Matter.Body.setPosition(ground, {
            x: width / 2,
            y: height + wallThickness / 2,
          });
          Matter.Body.setPosition(topWall, {
            x: width / 2,
            y: -wallThickness / 2,
          });
          Matter.Body.setPosition(rightWall, {
            x: width + wallThickness / 2,
            y: height / 2,
          });
        }
      }, 250);
    });
  }
});
