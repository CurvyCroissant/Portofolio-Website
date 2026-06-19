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
    });
  }

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
          .catch((err) => {});
      } else {
        textSpan.innerText = "Redirecting...";
        setTimeout(() => {
          textSpan.innerText = originalText;
        }, 1000);
      }
    });
  });

  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
      });
    },
    { threshold: 0.1 },
  );
  revealElements.forEach((el) => revealObserver.observe(el));
});
