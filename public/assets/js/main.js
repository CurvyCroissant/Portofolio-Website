document.addEventListener("DOMContentLoaded", () => {
  let currentLang = localStorage.getItem("lang") || "en";

  const langData = {
    "nav-term": { en: "Terminal", id: "Terminal", ja: "ターミナル" },
    "nav-theme-light": { en: "Light", id: "Terang", ja: "ライト" },
    "nav-theme-dark": { en: "Dark", id: "Gelap", ja: "ダーク" },
    "back-home": {
      en: "← Back to Home",
      id: "← Kembali ke Beranda",
      ja: "← ホームに戻る",
    },
    "view-cert": {
      en: "View Certificate",
      id: "Lihat Sertifikat",
      ja: "証明書を見る",
    },
    "view-repo": {
      en: "View Repository →",
      id: "Lihat Repositori →",
      ja: "リポジトリを見る →",
    },
    "sec-exp": { en: "Experience", id: "Pengalaman", ja: "経歴" },
    "sec-edu": { en: "Education", id: "Pendidikan", ja: "学歴" },
    "sec-skills": {
      en: "Technical Skills",
      id: "Keahlian Teknis",
      ja: "テクニカルスキル",
    },
    "sec-proj": { en: "Projects", id: "Proyek", ja: "プロジェクト" },
    "sec-ach": { en: "Achievements", id: "Pencapaian", ja: "実績" },
    "ctx-label": { en: "Context", id: "Konteks", ja: "コンテキスト" },
    "ts-label": { en: "Tech Stack", id: "Tech Stack", ja: "技術スタック" },
    "prob-label": { en: "The Problem", id: "Masalah", ja: "課題" },
    "sol-label": { en: "The Solution", id: "Solusi", ja: "解決策" },
    "imp-label": { en: "Impact", id: "Dampak", ja: "インパクト" },
    "gal-label": {
      en: "Project Gallery",
      id: "Galeri Proyek",
      ja: "プロジェクトギャラリー",
    },
    "ctx-ac": {
      en: "Academic Project",
      id: "Proyek Akademik",
      ja: "学術プロジェクト",
    },
    "ctx-pe": {
      en: "Personal Project",
      id: "Proyek Pribadi",
      ja: "個人プロジェクト",
    },

    "hero-desc": {
      en: "Computer Science undergraduate at BINUS University. Actively learning Machine Learning, Data Science, and Web Development. Currently in an exchange program at Shibaura Institute of Technology, Tokyo.",
      id: "Mahasiswa S1 Ilmu Komputer di BINUS University. Aktif mempelajari Machine Learning, Data Science, dan Web Development. Saat ini sedang mengikuti program pertukaran pelajar di Shibaura Institute of Technology, Tokyo.",
      ja: "ビヌス大学のコンピュータサイエンス学部生。機械学習、データサイエンス、ウェブ開発を積極的に学んでいます。現在、東京の芝浦工業大学で交換留学プログラムに参加しています。",
    },

    "date-yummy": {
      en: "Jun 2026 - Present",
      id: "Jun 2026 - Sekarang",
      ja: "2026年6月 - 現在",
    },
    "date-himti-aca": {
      en: "Mar 2025 - Dec 2025",
      id: "Mar 2025 - Des 2025",
      ja: "2025年3月 - 2025年12月",
    },
    "date-himti-web": {
      en: "Mar 2024 - Dec 2024",
      id: "Mar 2024 - Des 2024",
      ja: "2024年3月 - 2024年12月",
    },
    "date-sic": {
      en: "Feb 2024 - Oct 2024",
      id: "Feb 2024 - Okt 2024",
      ja: "2024年2月 - 2024年10月",
    },
    "date-bncc": {
      en: "Jan 2024 - Jun 2024",
      id: "Jan 2024 - Jun 2024",
      ja: "2024年1月 - 2024年6月",
    },
    "date-ios": {
      en: "Jul 2023 - Aug 2023",
      id: "Jul 2023 - Agu 2023",
      ja: "2023年7月 - 2023年8月",
    },
    "date-sit": {
      en: "Apr 2026 - Jul 2026",
      id: "Apr 2026 - Jul 2026",
      ja: "2026年4月 - 2026年7月",
    },
    "date-binus": {
      en: "Sep 2023 - Present",
      id: "Sep 2023 - Sekarang",
      ja: "2023年9月 - 現在",
    },
    "date-smak": {
      en: "Jul 2020 - Jun 2023",
      id: "Jul 2020 - Jun 2023",
      ja: "2020年7月 - 2023年6月",
    },

    "exp-guide": { en: "Tour Guide", id: "Pemandu Wisata", ja: "ツアーガイド" },
    "exp-guide-desc": {
      en: "Provide comprehensive guides entirely in English of the Ghibli Museum in Mitaka, Tokyo. The guests are mostly tourists travelling in Japan.",
      id: "Memberikan panduan komprehensif sepenuhnya dalam bahasa Inggris di Museum Ghibli di Mitaka, Tokyo. Sebagian besar tamu adalah turis yang bepergian di Jepang.",
      ja: "東京・三鷹のジブリ美術館で、すべて英語による総合的なガイドを提供。ゲストは主に日本を旅行中の観光客です。",
    },
    "exp-aca": {
      en: "Academic Events Activist",
      id: "Aktivis Acara Akademik",
      ja: "学術イベント推進メンバー",
    },
    "exp-aca-desc": {
      en: "Created and carried out events under HIMTI.",
      id: "Membuat dan menyelenggarakan acara di bawah HIMTI.",
      ja: "HIMTIのもとでイベントを企画・実行。",
    },
    "exp-web": {
      en: "Web Development Activist",
      id: "Aktivis Web Development",
      ja: "ウェブ開発推進メンバー",
    },
    "exp-web-desc": {
      en: "Developed the frontend of HIMTI's website and other events using HTML, CSS, and JS.",
      id: "Mengembangkan frontend situs web HIMTI dan acara lainnya menggunakan HTML, CSS, dan JS.",
      ja: "HTML、CSS、JSを使用してHIMTIのウェブサイトやイベントのフロントエンドを開発。",
    },
    "exp-sic": {
      en: "Semi Finalist",
      id: "Semi Finalis",
      ja: "セミファイナリスト",
    },
    "exp-sic-desc": {
      en: 'Completed the intensive bootcamps for AI/ML, Python, and IoT. Delivered "SafeFall", which is a real-time fall detection app using YOLO computer vision models. Successfully reached the semi finals as the top 80 out of 1,898 participants.',
      id: 'Menyelesaikan bootcamp intensif untuk AI/ML, Python, dan IoT. Membangun "SafeFall", aplikasi deteksi jatuh real-time menggunakan model visi komputer YOLO. Berhasil mencapai babak semi final sebagai 80 terbaik dari 1.898 peserta.',
      ja: "AI/ML、Python、IoTの集中ブートキャンプを修了。YOLOモデルを使用したリアルタイム転倒検知アプリ「SafeFall」を開発。1,898人の参加者の中からトップ80としてセミファイナルに進出。",
    },
    "exp-bncc": {
      en: "Learning & Training Activist",
      id: "Aktivis Pembelajaran & Pelatihan",
      ja: "学習・トレーニング推進メンバー",
    },
    "exp-bncc-desc": {
      en: "Planned out and created comprehensive computer science learning modules for university students.",
      id: "Merencanakan dan membuat modul pembelajaran ilmu komputer yang komprehensif untuk mahasiswa.",
      ja: "大学生向けの包括的なコンピュータサイエンス学習モジュールを計画および作成。",
    },
    "exp-ios": { en: "Participant", id: "Peserta", ja: "参加者" },
    "exp-ios-desc": {
      en: "Developed an AR-based iOS mobile app which is able to project traditional Balinese house designs onto real-world surfaces.",
      id: "Mengembangkan aplikasi seluler iOS berbasis AR yang dapat memproyeksikan desain rumah tradisional Bali ke permukaan dunia nyata.",
      ja: "現実世界の表面に伝統的なバリの家のデザインを投影できる、ARベースのiOSモバイルアプリを開発。",
    },

    "edu-sit-sub": {
      en: "Student Exchange Program",
      id: "Program Pertukaran Pelajar",
      ja: "交換留学プログラム",
    },
    "edu-sit-desc": {
      en: "Partook in a Student Exchange Program at Shibaura Institute of Technology, Tokyo. Learned plenty about engineering in Japan, as well as cross-cultural perspectives.",
      id: "Mengikuti Program Pertukaran Pelajar di Shibaura Institute of Technology, Tokyo. Mempelajari banyak hal tentang teknik di Jepang, serta perspektif lintas budaya.",
      ja: "東京の芝浦工業大学での交換留学プログラムに参加。日本のエンジニアリングや異文化の視点について多くを学びました。",
    },
    "edu-binus-sub": {
      en: "Bachelor of Computer Science",
      id: "S1 Ilmu Komputer",
      ja: "コンピュータサイエンス学士",
    },
    "edu-binus-desc": {
      en: "Computer Science Undergraduate with a cumulative GPA of 3.92. Within the Global Class Program, meaning that everything is presented in English, along with a semester of International Study Exchange. Currently pursuing Machine Learning, Data Science, and Web Development.",
      id: "Mahasiswa S1 Ilmu Komputer dengan IPK kumulatif 3,92. Tergabung dalam Program Global Class, yang berarti semuanya disajikan dalam bahasa Inggris, ditambah satu semester Pertukaran Pelajar Internasional. Saat ini mendalami Machine Learning, Data Science, dan Web Development.",
      ja: "累積GPA 3.92のコンピュータサイエンス学部生。グローバルクラスプログラムに在籍しており、すべての授業が英語で行われるほか、1学期分の国際交換留学も含まれます。現在、機械学習、データサイエンス、ウェブ開発を専攻。",
    },
    "edu-smak-sub": {
      en: "High School Diplomat",
      id: "Ijazah SMA",
      ja: "高校卒業証明",
    },
    "edu-smak-desc": {
      en: "General high school in the Mathematics and Natural Sciences (MIPA) major.",
      id: "Sekolah menengah atas jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA).",
      ja: "数学・自然科学（MIPA）を専攻する普通科高校。",
    },

    "ach-dl": {
      en: "Dean's List 2025",
      id: "Dean's List 2025",
      ja: "成績優秀者 (Dean's List) 2025",
    },
    "ach-dl-desc": {
      en: "BINUS University School of Computer Science",
      id: "Fakultas Ilmu Komputer Universitas BINUS",
      ja: "ビヌス大学 コンピュータサイエンス学部",
    },
    "ach-gj": {
      en: "2nd Runner-Up Game Jam",
      id: "Juara 3 Game Jam",
      ja: "Game Jam 3位",
    },

    "proj-pa-title": {
      en: "Posture Alert App",
      id: "Aplikasi Posture Alert",
      ja: "姿勢警告アプリ",
    },
    "proj-pa-desc": {
      en: "Posture Detection web using webcam.",
      id: "Web Deteksi Postur menggunakan webcam.",
      ja: "ウェブカメラを用いた姿勢検知ウェブアプリ。",
    },
    "pa-prob": {
      en: "Slouching causes back pain, but physical posture correctors are annoying to wear. Software alternatives exist, but they usually break if the user wears headphones or has a busy background.",
      id: "Postur yang buruk menyebabkan sakit punggung, namun alat fisik mengganggu. Perangkat lunak sering gagal jika pengguna memakai headphone atau memiliki latar belakang yang ramai.",
      ja: "猫背は背中の痛みの原因になりますが、物理的な姿勢矯正器具は煩わしいものです。ソフトウェアの代替品もありますが、ヘッドフォンを使用していたり、背景が複雑だと正常に動作しないことがよくあります。",
    },
    "pa-sol": {
      en: "A web app was built to track posture using a regular webcam. To fix the headphone issue, tracking was mapped to eye coordinates instead of ears. A calibration step was added to lock onto the user's size and ignore background movement.",
      id: "Aplikasi web dibangun untuk melacak postur menggunakan webcam biasa. Untuk masalah headphone, pelacakan dipetakan ke mata, bukan telinga. Kalibrasi ditambahkan untuk mengunci ukuran dan mengabaikan latar belakang.",
      ja: "一般的なウェブカメラを使用して姿勢を追跡するウェブアプリを構築しました。ヘッドフォンの問題を解決するため、耳ではなく目の座標にマッピングしました。また、ユーザーのサイズをロックし、背景の動きを無視するキャリブレーション機能を追加しました。",
    },
    "pa-imp": {
      en: "A free, zero-hardware posture monitor that works in real-world conditions. It alerts the user when they slouch and provides exportable data on their session habits.",
      id: "Monitor postur gratis tanpa perangkat keras yang bekerja dengan baik. Sistem mengingatkan pengguna saat membungkuk dan menyediakan data yang dapat diekspor.",
      ja: "追加のハードウェアを必要としない、無料で実用的な姿勢モニターです。猫背になったときにユーザーに警告し、習慣データをエクスポートできます。",
    },
    "pa-gal-1": {
      en: "Slouch Detection",
      id: "Deteksi Bungkuk",
      ja: "猫背の検知",
    },
    "pa-gal-2": {
      en: "Occlusion Handling",
      id: "Penanganan Oklusi",
      ja: "オクルージョン対応",
    },
    "pa-gal-3": {
      en: "Background Filtering",
      id: "Penyaringan Latar",
      ja: "背景フィルタリング",
    },
    "pa-gal-4": {
      en: "Head Tilt Detection",
      id: "Deteksi Kemiringan Kepala",
      ja: "頭の傾き検知",
    },

    "proj-cd-title": {
      en: "Code Documentation Generator",
      id: "Pembuat Dokumentasi Kode",
      ja: "コード仕様書自動生成",
    },
    "proj-cd-desc": {
      en: "Generates Python documentation.",
      id: "Menghasilkan dokumentasi Python.",
      ja: "Pythonドキュメントを生成します。",
    },
    "cd-prob": {
      en: "Writing documentation is tedious. Existing AI tools often hallucinate, making up variables that don't exist in the code, or they cost money to use via cloud APIs.",
      id: "Menulis dokumentasi itu membosankan. Alat AI yang ada sering berhalusinasi, membuat variabel yang tidak ada, atau berbayar via API cloud.",
      ja: "ドキュメントの作成は面倒です。既存のAIツールはコードに存在しない変数を捏造（ハルシネーション）したり、クラウドAPI経由で使用するとコストがかかることがよくあります。",
    },
    "cd-sol": {
      en: "A local-first Python tool was created using the Qwen2.5 model. By strictly enforcing JSON outputs, it avoids chatty responses. A validation step was added to check the AI's output against the actual code's Abstract Syntax Tree (AST) to completely block fake parameters.",
      id: "Alat Python lokal dibuat menggunakan model Qwen2.5. Dengan menerapkan output JSON, respons bertele-tele dihindari. Validasi ditambahkan untuk memeriksa output AI dengan AST kode asli untuk memblokir parameter palsu.",
      ja: "Qwen2.5モデルを使用してローカルファーストのPythonツールを作成しました。JSON出力を厳格に適用することで、不要な応答を回避します。AIの出力を実際のコードの抽象構文木（AST）と照合する検証ステップを追加し、偽のパラメータを完全にブロックしました。",
    },
    "cd-imp": {
      en: "Fast, free, and accurate docstrings generated in 5-20 seconds per file without needing an internet connection. The output quality was verified using standard NLP benchmarks like BLEU and ROUGE-L.",
      id: "Docstring cepat, gratis, dan akurat dihasilkan dalam 5-20 detik per file tanpa koneksi internet. Kualitas output diverifikasi dengan tolok ukur NLP seperti BLEU dan ROUGE-L.",
      ja: "インターネット接続なしで、1ファイルあたり5〜20秒で高速、無料、正確なDocstringを生成します。出力品質は、BLEUやROUGE-Lなどの標準的なNLPベンチマークで検証されました。",
    },
    "cd-gal-1": {
      en: "Web Interface",
      id: "Antarmuka Web",
      ja: "ウェブインターフェース",
    },
    "cd-gal-2": {
      en: "Validated Outputs",
      id: "Output Tervalidasi",
      ja: "検証済みの出力",
    },

    "proj-sf-title": { en: "SafeFall", id: "SafeFall", ja: "SafeFall" },
    "proj-sf-desc": {
      en: "Fall Detection web.",
      id: "Web Deteksi Jatuh.",
      ja: "転倒検知ウェブアプリ。",
    },
    "sf-prob": {
      en: "Elderly fall detection usually relies on smartwatches or pendants. Unfortunately, these devices are easily forgotten, taken off to charge, or actively avoided by the users who need them most.",
      id: "Deteksi jatuh lansia biasanya bergantung pada smartwatch. Sayangnya, perangkat ini mudah terlupa, dilepas untuk diisi daya, atau dihindari oleh pengguna yang paling membutuhkannya.",
      ja: "高齢者の転倒検知は通常、スマートウォッチやペンダントに依存しています。しかし、これらのデバイスは忘れられやすく、充電のために外されたり、最も必要とするユーザーに敬遠されたりすることがよくあります。",
    },
    "sf-sol": {
      en: "A YOLOv8 computer vision model was trained to detect falls using standard camera feeds. It tracks sudden vertical movement and logs each event with a confidence score, sending alerts without any physical interaction from the user.",
      id: "Model visi komputer YOLOv8 dilatih untuk mendeteksi jatuh dari kamera standar. Ini melacak gerakan vertikal tiba-tiba dan mencatat setiap peristiwa dengan skor keyakinan, mengirim peringatan tanpa interaksi fisik.",
      ja: "一般的なカメラ映像から転倒を検知するために、YOLOv8コンピュータービジョンモデルを訓練しました。突然の垂直方向の動きを追跡し、各イベントを信頼度スコアと共に記録し、ユーザーとの物理的な接触なしにアラートを送信します。",
    },
    "sf-imp": {
      en: "A non-intrusive safety net deployed to work continuously in the background. The solution was selected as a Top Semi-Finalist submission out of 1,898 participating teams in the Samsung Innovation Campus program.",
      id: "Jaring pengaman non-intrusif yang bekerja terus menerus di latar belakang. Solusi ini terpilih sebagai Semi-Finalis Teratas dari 1.898 tim di program Samsung Innovation Campus.",
      ja: "バックグラウンドで継続的に動作する、邪魔にならないセーフティネットです。このソリューションは、Samsung Innovation Campusプログラムの1,898の参加チームの中からトップセミファイナリストに選ばれました。",
    },
    "sf-gal-1": {
      en: "Fall Detected",
      id: "Jatuh Terdeteksi",
      ja: "転倒を検知",
    },
    "sf-gal-2": { en: "Normal State", id: "Keadaan Normal", ja: "通常状態" },
    "sf-gal-3": { en: "Event Logs", id: "Log Peristiwa", ja: "イベントログ" },

    "proj-rp-title": {
      en: "Public Transport Route Planner",
      id: "Perencana Rute Transportasi Publik",
      ja: "公共交通機関ルートプランナー",
    },
    "proj-rp-desc": {
      en: "Public transport routing web.",
      id: "Web perutean transportasi publik.",
      ja: "公共交通機関のルーティングウェブアプリ。",
    },
    "rp-prob": {
      en: "Public transport can be frustratingly unreliable. Commuters often don't know if a bus is delayed or exactly when it will arrive, and a single centralized source for this information rarely exists.",
      id: "Transportasi publik bisa sangat tidak bisa diandalkan. Penumpang sering tidak tahu kapan bus akan tiba, dan sumber informasi terpusat jarang ada.",
      ja: "公共交通機関は時に非常に信頼性が低く、ストレスの原因となります。通勤者はバスが遅れているのか、正確にいつ到着するのかわからないことが多く、情報の一元化されたソースが存在することは稀です。",
    },
    "rp-sol": {
      en: "A full-stack app was built using Laravel and Leaflet.js. It pulls live GPS coordinates from Firebase for real-time tracking. However, to make it truly reliable, a fallback system was added: if the live connection drops, it automatically defaults to static schedule data in MySQL.",
      id: "Aplikasi full-stack dibangun dengan Laravel dan Leaflet.js. Aplikasi ini menarik GPS dari Firebase untuk pelacakan real-time. Sebagai cadangan jika koneksi terputus, aplikasi beralih ke jadwal statis di MySQL.",
      ja: "LaravelとLeaflet.jsを使用してフルスタックアプリを構築しました。FirebaseからリアルタイムのGPS座標を取得して追跡します。さらに信頼性を高めるため、リアルタイム接続が切断された場合、自動的にMySQLの静的なスケジュールデータに切り替わるフォールバックシステムを追加しました。",
    },
    "rp-imp": {
      en: "Provides users with clear, interactive ETAs drawn directly on a map. A feature was also added that calculates a historical 'on-time' rating for different routes, helping people make better commuting decisions.",
      id: "Memberikan ETA interaktif yang digambar di peta. Fitur tambahan menghitung peringkat ketepatan waktu historis untuk berbagai rute, membantu membuat keputusan komuter yang lebih baik.",
      ja: "地図上に直接描画される、明確でインタラクティブな到着予定時刻(ETA)をユーザーに提供します。また、様々なルートの過去の「定時運行」評価を計算する機能も追加し、人々の通勤の意思決定を支援します。",
    },
    "rp-gal-1": {
      en: "Main Route Planner",
      id: "Perencana Rute Utama",
      ja: "メインルートプランナー",
    },
    "rp-gal-2": {
      en: "Account Registration",
      id: "Registrasi Akun",
      ja: "アカウント登録",
    },

    "proj-cy-title": {
      en: "Crop Yield Predictor",
      id: "Prediktor Hasil Panen",
      ja: "収穫量予測ツール",
    },
    "proj-cy-desc": {
      en: "Predicts agricultural yield.",
      id: "Memprediksi hasil pertanian.",
      ja: "農業の収穫量を予測します。",
    },
    "cy-prob": {
      en: "Predicting how much a farm will produce is tough because weather and resources vary wildly. Inaccurate predictions lead to wasted resources and poor financial planning for farmers.",
      id: "Memprediksi produksi pertanian sulit karena cuaca dan sumber daya bervariasi. Prediksi yang tidak akurat menyebabkan pemborosan sumber daya dan perencanaan keuangan yang buruk.",
      ja: "天候や資源の変動が激しいため、農場の生産量を予測することは困難です。不正確な予測は、資源の無駄遣いや農家の資金計画の失敗につながります。",
    },
    "cy-sol": {
      en: "Raw agricultural data was cleaned and processed to handle missing values, and high-cardinality locations were categorized using One-Hot Encoding. Several machine learning models were then benchmarked against each other to determine which predicted yields best based on inputs like rainfall, temperature, and pesticides.",
      id: "Data pertanian mentah dibersihkan dan diproses. Lokasi dengan kardinalitas tinggi dikategorikan dengan One-Hot Encoding. Beberapa model ML diuji untuk menentukan prediksi hasil terbaik berdasarkan curah hujan, suhu, dan pestisida.",
      ja: "未加工の農業データをクリーニングして欠損値を処理し、高カーディナリティの場所をOne-Hotエンコーディングを使用して分類しました。その後、いくつかの機械学習モデルを比較し、降雨量、温度、農薬などの入力に基づいてどのモデルが最も正確に収穫量を予測できるかを決定しました。",
    },
    "cy-imp": {
      en: "The final Gradient Boosting model reached 96% accuracy. A simulation was also run to identify anomaly clusters and show how this data could be used to target underperforming farms, complete with an estimated financial ROI.",
      id: "Model Gradient Boosting mencapai akurasi 96%. Simulasi dijalankan untuk mengidentifikasi cluster anomali dan menunjukkan bagaimana data ini digunakan untuk menargetkan pertanian berkinerja buruk, lengkap dengan perkiraan ROI.",
      ja: "最終的なGradient Boostingモデルは96%の精度を達成しました。また、異常なクラスタを特定し、このデータを活用してパフォーマンスの低い農場をターゲットにする方法を示すシミュレーションを実行し、推定される財務ROIも算出しました。",
    },
    "cy-gal-1": {
      en: "Model Benchmarking",
      id: "Benchmarking Model",
      ja: "モデルのベンチマーク",
    },
    "cy-gal-2": {
      en: "Anomaly Detection",
      id: "Deteksi Anomali",
      ja: "異常検知",
    },
    "cy-gal-3": {
      en: "Business Value Simulation",
      id: "Simulasi Nilai Bisnis",
      ja: "ビジネス価値シミュレーション",
    },

    "proj-pp-title": {
      en: "Personality Predictor",
      id: "Prediktor Kepribadian",
      ja: "性格予測ツール",
    },
    "proj-pp-desc": {
      en: "Predicts personality traits based on users' clothing choice.",
      id: "Memprediksi kepribadian berdasarkan pilihan pakaian pengguna.",
      ja: "ユーザーの服装から性格特性を予測します。",
    },
    "pp-prob": {
      en: "Personality tests traditionally rely on self-reported surveys, which are inherently biased by how individuals wish to be perceived. They lack an objective, visual correlation to an individual's actual presentation to the outside world.",
      id: "Tes kepribadian umumnya bergantung pada survei yang bias oleh bagaimana individu ingin dilihat. Tes ini kurang memiliki korelasi visual yang objektif terhadap presentasi nyata seseorang di dunia luar.",
      ja: "性格テストは伝統的に自己申告のアンケートに依存しており、個人が「どう見られたいか」によるバイアスが本質的に生じます。個人の実際の外見との客観的で視覚的な相関関係が欠けています。",
    },
    "pp-sol": {
      en: "A PyTorch neural network was developed to analyze photographs of user outfits. The system programmatically extracts specific fashion features and processes them through a classification model, mapping visual clothing choices directly to the Big Five (OCEAN) personality traits.",
      id: "Jaringan saraf PyTorch dikembangkan untuk menganalisis foto pakaian pengguna. Sistem mengekstrak fitur mode dan memprosesnya melalui model klasifikasi, memetakan pilihan pakaian visual ke sifat kepribadian OCEAN.",
      ja: "ユーザーの服装写真を分析するためにPyTorchニューラルネットワークを開発しました。システムは特定のファッションの特徴をプログラム的に抽出し、分類モデルを通じて処理することで、視覚的な服装の選択をビッグファイブ（OCEAN）の性格特性に直接マッピングします。",
    },
    "pp-imp": {
      en: "An interactive web application was deployed, seamlessly combining behavioral psychology with computer vision. It provides users with instant, AI-driven psychological predictions to contrast against their own self-assessments.",
      id: "Aplikasi web interaktif diterapkan, menggabungkan psikologi perilaku dengan visi komputer. Ini memberikan prediksi psikologis berbasis AI secara instan untuk dikontraskan dengan penilaian diri mereka sendiri.",
      ja: "行動心理学とコンピュータービジョンをシームレスに組み合わせたインタラクティブなウェブアプリケーションを展開しました。ユーザーの自己評価と比較できる、AI駆動の心理予測を即座に提供します。",
    },
    "pp-gal-1": {
      en: "Upload & Survey",
      id: "Unggah & Survei",
      ja: "アップロードとアンケート",
    },
    "pp-gal-2": {
      en: "AI Trait Analysis",
      id: "Analisis Sifat AI",
      ja: "AI特性分析",
    },
    "pp-gal-3": {
      en: "Trait Breakdowns",
      id: "Rincian Sifat",
      ja: "特性の分析結果",
    },

    "term-intro": {
      en: "(c) Aaron Nathanael. All rights reserved.<br /><br />Type 'help' to see available commands.",
      id: "(c) Aaron Nathanael. Hak Cipta Dilindungi.<br /><br />Ketik 'help' untuk melihat perintah.",
      ja: "(c) Aaron Nathanael. All rights reserved.<br /><br />コマンドを見るには 'help' と入力してください。",
    },
  };

  const termData = {
    en: {
      help: "Available commands:\n  about    - Learn more about me\n  skills   - View technical stack\n  projects - View selected works\n  resume   - View experience & achievements\n  contact  - Get my email & links\n  clear    - Clear terminal\n  exit     - Close terminal",
      about:
        "Aaron Nathanael\nComputer Science Undergraduate @ BINUS University (GPA: 3.92)\nCurrently on Exchange @ Shibaura Institute of Technology, Tokyo.\nActively learning Artificial Intelligence and Web Development.",
      skills:
        "Languages: Python, PHP, JavaScript, Swift, C, HTML, CSS\nAI/ML    : PyTorch, Scikit-Learn, YOLOv8, HuggingFace, MediaPipe, OpenCV\nWeb Dev  : Laravel, MySQL, Streamlit, Firebase, React/Astro\nTools    : Git, NLTK, Pandas, NumPy, Data Analytics",
      projects:
        "1. Posture Alert App (Python, MediaPipe)\n2. Code Documentation Generator (Python, Qwen2.5)\n3. SafeFall: Fall Detection App (YOLOv8, OpenCV)\n4. Personality Predictor (PyTorch, Flask)\n5. Crop Yield Predictor (Scikit-Learn)\n6. Public Transport Route Planner (Laravel, Firebase)",
      resume:
        "2026: Tour Guide @ Yummy Guide\n2025: Dean's List @ BINUS University School of Computer Science\n2025: 2nd Runner-up @ COMPFEST 17 Game Jam\n2025: Academic & Web Dev Activist @ HIMTI BINUS\n2024: Semi-Finalist @ Samsung Innovation Campus (Batch 5)\n2024: Learning & Training Activist @ BNCC\n2023: Participant @ Apple Developer Academy (iOS Foundation)",
      contact:
        "Email    : aaronnathanaelishakleman@gmail.com\nLinkedIn : linkedin.com/in/aaron-nathanael\nGitHub   : github.com/CurvyCroissant",
      unrecognized: (cmd) =>
        `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`,
    },
    id: {
      help: "Perintah tersedia:\n  about    - Tentang saya\n  skills   - Keahlian teknis\n  projects - Proyek pilihan\n  resume   - Pengalaman & pencapaian\n  contact  - Kontak saya\n  clear    - Bersihkan terminal\n  exit     - Tutup terminal",
      about:
        "Aaron Nathanael\nMahasiswa S1 Ilmu Komputer @ BINUS University (IPK: 3.92)\nSedang Pertukaran Pelajar @ Shibaura Institute of Technology, Tokyo.\nAktif mempelajari AI dan Web Development.",
      skills:
        "Bahasa   : Python, PHP, JavaScript, Swift, C, HTML, CSS\nAI/ML    : PyTorch, Scikit-Learn, YOLOv8, HuggingFace, MediaPipe, OpenCV\nWeb Dev  : Laravel, MySQL, Streamlit, Firebase, React/Astro\nAlat     : Git, NLTK, Pandas, NumPy, Data Analytics",
      projects:
        "1. Posture Alert App (Python, MediaPipe)\n2. Code Documentation Generator (Python, Qwen2.5)\n3. SafeFall: Fall Detection (YOLOv8, OpenCV)\n4. Personality Predictor (PyTorch, Flask)\n5. Crop Yield Predictor (Scikit-Learn)\n6. Public Transport Route Planner (Laravel, Firebase)",
      resume:
        "2026: Pemandu Wisata @ Yummy Guide\n2025: Dean's List @ BINUS University\n2025: Juara 3 @ COMPFEST 17 Game Jam\n2025: Aktivis HIMTI BINUS\n2024: Semi Finalis @ Samsung Innovation Campus\n2024: Aktivis BNCC\n2023: Peserta @ Apple Developer Academy",
      contact:
        "Email    : aaronnathanaelishakleman@gmail.com\nLinkedIn : linkedin.com/in/aaron-nathanael\nGitHub   : github.com/CurvyCroissant",
      unrecognized: (cmd) =>
        `'${cmd}' tidak dikenali sebagai perintah internal atau eksternal.`,
    },
    ja: {
      help: "利用可能なコマンド:\n  about    - 私について\n  skills   - 技術スタック\n  projects - プロジェクト\n  resume   - 経歴と実績\n  contact  - 連絡先\n  clear    - ターミナルをクリア\n  exit     - ターミナルを閉じる",
      about:
        "Aaron Nathanael\nビヌス大学 コンピュータサイエンス学部 (GPA: 3.92)\n芝浦工業大学にて交換留学生。\n人工知能とウェブ開発を専攻。",
      skills:
        "言語      : Python, PHP, JavaScript, Swift, C, HTML, CSS\nAI/ML    : PyTorch, Scikit-Learn, YOLOv8, HuggingFace, MediaPipe, OpenCV\nWeb 開発  : Laravel, MySQL, Streamlit, Firebase, React/Astro\nツール    : Git, NLTK, Pandas, NumPy, Data Analytics",
      projects:
        "1. 姿勢警告アプリ (Python, MediaPipe)\n2. コード仕様書自動生成 (Python, Qwen2.5)\n3. SafeFall: 転倒検知アプリ (YOLOv8, OpenCV)\n4. 性格予測ツール (PyTorch, Flask)\n5. 収穫量予測 (Scikit-Learn)\n6. 路線プランナー (Laravel, Firebase)",
      resume:
        "2026: ツアーガイド @ Yummy Guide\n2025: 成績優秀者 @ ビヌス大学\n2025: 3位 @ COMPFEST 17 Game Jam\n2025: HIMTI BINUS 活動メンバー\n2024: セミファイナリスト @ Samsung Innovation Campus\n2024: BNCC 活動メンバー\n2023: 参加者 @ Apple Developer Academy",
      contact:
        "Email    : aaronnathanaelishakleman@gmail.com\nLinkedIn : linkedin.com/in/aaron-nathanael\nGitHub   : github.com/CurvyCroissant",
      unrecognized: (cmd) =>
        `'${cmd}' は内部コマンドまたは外部コマンドとして認識されていません。`,
    },
  };

  const updateThemeText = (theme, lang) => {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;
    const text = toggleBtn.querySelector(".toggle-text");
    text.innerText =
      theme === "light"
        ? langData["nav-theme-dark"][lang]
        : langData["nav-theme-light"][lang];
  };

  const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    document.getElementById("current-lang-text").innerText = lang.toUpperCase();

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (langData[key] && langData[key][lang]) {
        el.innerHTML = langData[key][lang];
      }
    });

    document.querySelectorAll(".lang-option").forEach((btn) => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active-lang");
      } else {
        btn.classList.remove("active-lang");
      }
    });

    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "dark";
    updateThemeText(currentTheme, lang);
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;
    const icon = toggleBtn.querySelector(".mode-icon");
    if (theme === "light") {
      icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    } else {
      icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    }
    updateThemeText(theme, currentLang);
  };

  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
  setLanguage(currentLang);

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", (e) => {
      e.preventDefault();
      const newTheme =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      setTheme(newTheme);
      themeToggle.blur();
    });
  }

  const langContainer = document.getElementById("lang-dropdown-container");
  const langToggle = document.getElementById("lang-toggle");
  const langMenu = document.getElementById("lang-menu");

  if (langToggle && langMenu && langContainer) {
    langToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!langContainer.contains(e.target))
        langMenu.classList.remove("active");
    });

    document.querySelectorAll(".lang-option").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        setLanguage(e.target.getAttribute("data-lang"));
        langMenu.classList.remove("active");
      });
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

  let scale = 1,
    posX = 0,
    posY = 0,
    isDragging = false,
    startX = 0,
    startY = 0;

  const setTransform = (smooth = false) => {
    const w = modalImg.offsetWidth,
      h = modalImg.offsetHeight,
      vw = window.innerWidth,
      vh = window.innerHeight;
    const maxPosX = w * scale > vw ? (w * scale - vw) / 2 : 0;
    const maxPosY = h * scale > vh ? (h * scale - vh) / 2 : 0;
    posX = Math.max(-maxPosX, Math.min(maxPosX, posX));
    posY = Math.max(-maxPosY, Math.min(maxPosY, posY));
    modalImg.style.transition = smooth ? "transform 0.15s ease-out" : "none";
    modalImg.style.transform = `translate(calc(-50% + ${posX}px), calc(-50% + ${posY}px)) scale(${scale})`;
    modalImg.style.cursor =
      scale > 1 ? (isDragging ? "grabbing" : "grab") : "grab";
  };

  const lockScroll = () => document.body.classList.add("no-scroll");
  const unlockScroll = () => document.body.classList.remove("no-scroll");

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
    setTimeout(() => {
      if (!modal.classList.contains("active")) modalImg.src = "";
    }, 400);
  };

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (modal && modalImg) {
    modal.addEventListener(
      "wheel",
      (e) => {
        if (!modal.classList.contains("active")) return;
        e.preventDefault();
        const newScale = Math.max(
          1,
          Math.min(4, scale + (e.deltaY < 0 ? 1 : -1) * 0.15),
        );
        if (newScale !== scale) {
          const mouseX = e.clientX - window.innerWidth / 2,
            mouseY = e.clientY - window.innerHeight / 2,
            ratio = newScale / scale;
          posX = mouseX - (mouseX - posX) * ratio;
          posY = mouseY - (mouseY - posY) * ratio;
          scale = newScale;
          setTransform(true);
        }
      },
      { passive: false },
    );

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

    let initDist = 0,
      initScale = 1;
    modal.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 2) {
          initDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY,
          );
          initScale = scale;
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
          const newScale = Math.max(
            1,
            Math.min(
              4,
              initScale *
                (Math.hypot(
                  e.touches[0].clientX - e.touches[1].clientX,
                  e.touches[0].clientY - e.touches[1].clientY,
                ) /
                  initDist),
            ),
          );
          if (newScale !== scale) {
            const mouseX =
                (e.touches[0].clientX + e.touches[1].clientX) / 2 -
                window.innerWidth / 2,
              mouseY =
                (e.touches[0].clientY + e.touches[1].clientY) / 2 -
                window.innerHeight / 2,
              ratio = newScale / scale;
            posX = mouseX - (mouseX - posX) * ratio;
            posY = mouseY - (mouseY - posY) * ratio;
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
        if (entry.isIntersecting) entry.target.classList.add("active");
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
      termWindow.classList.remove("minimized", "fullscreen");
      lockScroll();
      setTimeout(() => termInput.focus(), 100);
    };
    const closeTerminal = () => {
      termOverlay.classList.remove("active");
      unlockScroll();
      termInput.value = "";
    };

    document
      .getElementById("term-trigger")
      ?.addEventListener("click", openTerminal);
    document
      .getElementById("term-close")
      ?.addEventListener("click", closeTerminal);
    document.getElementById("term-min")?.addEventListener("click", () => {
      termWindow.classList.toggle("minimized");
      termWindow.classList.remove("fullscreen");
    });
    document.getElementById("term-max")?.addEventListener("click", () => {
      termWindow.classList.toggle("fullscreen");
      termWindow.classList.remove("minimized");
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
        if (modal && modal.classList.contains("active")) closeModal();
        else if (termOverlay.classList.contains("active")) closeTerminal();
      }
    });
    termOverlay.addEventListener("click", (e) => {
      if (e.target === termOverlay) closeTerminal();
    });

    const terminalBody = document.querySelector(".terminal-body");
    if (terminalBody)
      terminalBody.addEventListener("click", (e) => {
        if (e.target.tagName !== "A" && !window.getSelection().toString())
          termInput.focus();
      });

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
        const t = termData[currentLang] || termData["en"];

        switch (cmd) {
          case "help":
            printLine(t.help);
            break;
          case "about":
            printLine(t.about);
            break;
          case "skills":
            printLine(t.skills);
            break;
          case "projects":
            printLine(t.projects);
            break;
          case "resume":
            printLine(t.resume);
            break;
          case "contact":
            printLine(t.contact);
            break;
          case "clear":
            termHistory.innerHTML = "";
            document.getElementById("term-intro").style.display = "none";
            break;
          case "exit":
            closeTerminal();
            break;
          default:
            printLine(t.unrecognized(cmd));
        }
      }
    });
  }

  const skillsContainer = document.querySelector(".skills-container");
  if (skillsContainer && typeof Matter !== "undefined") {
    const pills = Array.from(document.querySelectorAll(".skill-pill"));
    const bodyData = pills.map((pill) => ({
      pill,
      width: pill.getBoundingClientRect().width,
      height: pill.getBoundingClientRect().height,
    }));
    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint } =
      Matter;
    const engine = Engine.create({
      positionIterations: 10,
      velocityIterations: 10,
    });
    engine.gravity.y = 0;
    engine.gravity.x = 0;

    let width = skillsContainer.getBoundingClientRect().width || 648,
      height = 270,
      wallThickness = 1000;
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

    const cols = width < 500 ? 2 : 3,
      cellWidth = width / cols,
      cellHeight = height / Math.ceil(bodyData.length / cols);
    let indices = Array.from({ length: bodyData.length }, (_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    bodyData.forEach((data, i) => {
      const col = indices[i] % cols,
        row = Math.floor(indices[i] / cols);
      const body = Bodies.rectangle(
        col * cellWidth + cellWidth / 2,
        row * cellHeight + cellHeight / 2,
        data.width,
        data.height,
        {
          restitution: 0,
          frictionAir: 0.1,
          friction: 0.8,
          density: 0.01,
          chamfer: { radius: 18 },
        },
      );
      Matter.Body.setInertia(body, Infinity);
      data.body = body;
      Composite.add(engine.world, body);
    });

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: Mouse.create(skillsContainer),
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
      if (mouseConstraint.body) mouseConstraint.body = null;
      mouseConstraint.mouse.button = -1;
    });

    const runner = Runner.create();
    let isRunning = false;
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skillsContainer.classList.add("physics-active");
            if (!isRunning) {
              Runner.run(runner, engine);
              isRunning = true;
            }
          } else if (isRunning) {
            Runner.stop(runner);
            isRunning = false;
          }
        });
      },
      { threshold: 0.1 },
    ).observe(skillsContainer);

    Matter.Events.on(engine, "afterUpdate", () => {
      bodyData.forEach((data) => {
        data.pill.style.left = `${data.body.position.x}px`;
        data.pill.style.top = `${data.body.position.y}px`;
        // Forced hardware acceleration for mobile WebKit paint fixes
        data.pill.style.transform = `translate(-50%, -50%) translateZ(0)`;
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
