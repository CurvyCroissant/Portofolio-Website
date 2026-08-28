document.addEventListener("DOMContentLoaded", () => {
  let currentLang = document.documentElement.getAttribute("lang") || "en";
  let currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";

  const langData = {
    "nav-term": { id: "Terminal", ja: "ターミナル" },
    "nav-theme-light": { en: "Light", id: "Terang", ja: "ライト" },
    "nav-theme-dark": { en: "Dark", id: "Gelap", ja: "ダーク" },
    "back-home": { id: "← Kembali ke Beranda", ja: "← ホームに戻る" },
    "view-cert": { id: "Lihat Sertifikat", ja: "証明書を見る" },
    "view-repo": { id: "Lihat Repositori →", ja: "リポジトリを見る →" },
    "sec-exp": { id: "Pengalaman", ja: "経歴" },
    "sec-edu": { id: "Pendidikan", ja: "学歴" },
    "sec-skills": { id: "Keahlian Teknis", ja: "テクニカルスキル" },
    "sec-proj": { id: "Proyek", ja: "プロジェクト" },
    "sec-ach": { id: "Pencapaian", ja: "実績" },
    "ctx-label": { id: "Konteks", ja: "コンテキスト" },
    "ts-label": { id: "Tech Stack", ja: "技術スタック" },
    "prob-label": { id: "Masalah", ja: "課題" },
    "sol-label": { id: "Solusi", ja: "解決策" },
    "imp-label": { id: "Dampak", ja: "インパクト" },
    "gal-label": { id: "Galeri Proyek", ja: "プロジェクトギャラリー" },
    "ctx-ac": { id: "Proyek Akademik", ja: "学術プロジェクト" },
    "ctx-pe": { id: "Proyek Pribadi", ja: "個人プロジェクト" },

    "my-name": { id: "Aaron Nathanael", ja: "アーロン・ナタナエル" },
    "footer-copy": {
      id: "&copy; 2026 Aaron Nathanael",
      ja: "&copy; 2026 アーロン・ナタナエル",
    },

    "hero-desc": {
      id: "Mahasiswa S1 Ilmu Komputer tahun ke-4 di BINUS University. Saat ini sedang magang sebagai Application Developer di PT Bank Central Asia Tbk. Aktif mempelajari cara teknologi diimplementasikan dalam skenario bisnis dunia nyata.",
      ja: "ビヌス大学のコンピュータサイエンス学部4年生。現在、PT Bank Central Asia Tbkでアプリケーション開発インターンとして勤務。現実のビジネスシナリオでテクノロジーがどのように実装されているかを積極的に学んでいます。",
    },

    "date-bca": { id: "Agu 2026 - Sekarang", ja: "2026年8月 - 現在" },
    "date-yummy": { id: "Jun 2026 - Jul 2026", ja: "2026年6月 - 2026年7月" },
    "date-himti-aca": {
      id: "Mar 2025 - Des 2025",
      ja: "2025年3月 - 2025年12月",
    },
    "date-himti-web": {
      id: "Mar 2024 - Des 2024",
      ja: "2024年3月 - 2024年12月",
    },
    "date-sic": { id: "Feb 2024 - Okt 2024", ja: "2024年2月 - 2024年10月" },
    "date-bncc": { id: "Jan 2024 - Jun 2024", ja: "2024年1月 - 2024年6月" },
    "date-ios": { id: "Jul 2023 - Agu 2023", ja: "2023年7月 - 2023年8月" },
    "date-sit": { id: "Apr 2026 - Jul 2026", ja: "2026年4月 - 2026年7月" },
    "date-binus": { id: "Sep 2023 - Sekarang", ja: "2023年9月 - 現在" },
    "date-smak": { id: "Jul 2020 - Jun 2023", ja: "2020年7月 - 2023年6月" },

    "exp-bca": {
      id: "Application Developer Intern",
      ja: "アプリケーション開発インターン",
    },
    "exp-bca-desc": {
      id: "Bekerja di tim iOS Development yang bertanggung jawab untuk terus mengembangkan dan memelihara aplikasi Merchant BCA.",
      ja: "iOS開発チームに所属し、Merchant BCAアプリケーションの継続的な開発と保守を担当しています。",
    },
    "exp-guide": { id: "Pemandu Wisata", ja: "ツアーガイド" },
    "exp-guide-desc": {
      id: "Memandu tur Museum Ghibli di Mitaka, Tokyo. Tur dilakukan sepenuhnya dalam bahasa Inggris dan bahasa Jepang dasar. Sebagian besar tamu adalah penutur bahasa Inggris yang bepergian di Jepang.",
      ja: "東京・三鷹のジブリ美術館でツアーを案内。ツアーはすべて英語と基礎的な日本語で行われました。ゲストは主に日本を旅行中の英語圏の方々でした。",
    },
    "exp-aca": { id: "Aktivis Acara Akademik", ja: "学術イベント推進メンバー" },
    "exp-aca-desc": {
      id: "Bekerja dalam tim, berbasis proyek, untuk membuat dan melaksanakan acara HIMTI.",
      ja: "プロジェクトベースでチームと協力し、HIMTIのイベントを企画・実行しました。",
    },
    "exp-web": { id: "Aktivis Web Development", ja: "ウェブ開発推進メンバー" },
    "exp-web-desc": {
      id: "Bekerja dalam tim, berbasis proyek, untuk mengembangkan frontend situs web HIMTI menggunakan HTML, CSS, dan JS.",
      ja: "プロジェクトベースでチームと協力し、HTML、CSS、JSを使用してHIMTIウェブサイトのフロントエンドを開発しました。",
    },
    "exp-sic": { id: "Peserta", ja: "参加者" },
    "exp-sic-desc": {
      id: 'Menyelesaikan bootcamp intensif untuk AI/ML, Python, dan IoT. Membangun "SafeFall", aplikasi deteksi jatuh real-time menggunakan model visi komputer YOLO. Berhasil mencapai babak semi final sebagai 80 terbaik dari 1.898 peserta.',
      ja: "AI/ML、Python、IoTの集中ブートキャンプを修了。YOLOモデルを使用したリアルタイム転倒検知アプリ「SafeFall」を開発。1,898人の参加者の中からトップ80としてセミファイナルに進出。",
    },
    "exp-bncc": {
      id: "Aktivis Pembelajaran & Pelatihan",
      ja: "学習・トレーニング推進メンバー",
    },
    "exp-bncc-desc": {
      id: "Bekerja dalam tim, berbasis proyek, untuk merencanakan dan membuat modul pembelajaran ilmu komputer yang komprehensif untuk mahasiswa.",
      ja: "プロジェクトベースでチームと協力し、大学生向けの包括的なコンピュータサイエンス学習モジュールを計画および作成しました。",
    },
    "exp-ios": { id: "Peserta", ja: "参加者" },
    "exp-ios-desc": {
      id: "Bekerja dalam tim untuk mengembangkan aplikasi seluler iOS berbasis AR yang dapat memproyeksikan desain rumah tradisional Bali ke permukaan dunia nyata.",
      ja: "チームで協力し、現実世界の表面に伝統的なバリの家のデザインを投影できるARベースのiOSモバイルアプリを開発しました。",
    },

    "edu-sit-sub": {
      id: "Program Pertukaran Pelajar",
      ja: "交換留学プログラム",
    },
    "edu-sit-desc": {
      id: "Pertukaran pelajar di Shibaura Institute of Technology, Tokyo. Mempelajari tentang teknik di Jepang, serta berkomunikasi dan bekerja dengan orang-orang dari budaya dan latar belakang yang sangat berbeda.",
      ja: "東京の芝浦工業大学で交換留学。日本のエンジニアリングについて学び、全く異なる文化や背景を持つ人々とのコミュニケーションや協働を経験しました。",
    },
    "edu-binus-sub": {
      id: "S1 Ilmu Komputer",
      ja: "コンピュータサイエンス学士",
    },
    "edu-binus-desc": {
      id: "Mahasiswa S1 Ilmu Komputer dengan IPK kumulatif 3.92. Tergabung dalam Global Class Program, yang berarti seluruh materi diberikan dalam bahasa Inggris, beserta satu semester Pertukaran Pelajar Internasional. Saat ini mendalami iOS App Development, Full-Stack Web Development, dan Machine Learning.",
      ja: "累積GPA 3.92のコンピュータサイエンス学部生。グローバルクラスプログラムに在籍し、すべての教材が英語で提供されるほか、1学期分の国際交換留学も含まれます。現在、iOSアプリ開発、フルスタックウェブ開発、機械学習を専攻しています。",
    },
    "edu-smak-sub": { id: "Ijazah SMA", ja: "高校卒業証明" },
    "edu-smak-desc": {
      id: "Sekolah menengah atas jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA).",
      ja: "数学・自然科学（MIPA）を専攻する普通科高校。",
    },

    "ach-dl": { id: "Dean's List 2025", ja: "成績優秀者 (Dean's List) 2025" },
    "ach-dl-desc": {
      id: "Fakultas Ilmu Komputer Universitas BINUS",
      ja: "ビヌス大学 コンピュータサイエンス学部",
    },
    "ach-gj": { id: "Juara 3 Game Jam", ja: "Game Jam 3位" },
    "ach-sic": { id: "Semi Finalis", ja: "セミファイナリスト" },
    "ach-sic-desc": {
      id: "Samsung Innovation Campus by Skilvul",
      ja: "Samsung Innovation Campus by Skilvul",
    },

    "proj-pa-title": { id: "Aplikasi Posture Alert", ja: "姿勢警告アプリ" },
    "proj-pa-desc": {
      id: "Aplikasi web deteksi postur menggunakan webcam.",
      ja: "ウェブカメラを使用した姿勢検知ウェブアプリ。",
    },
    "pa-prob": {
      id: "Postur yang buruk menyebabkan sakit punggung, namun alat fisik mengganggu. Perangkat lunak sering gagal jika pengguna memakai headphone atau memiliki latar belakang yang ramai.",
      ja: "猫背は背中の痛みの原因になりますが、物理的な姿勢矯正器具は煩わしいものです。ソフトウェアの代替品もありますが、ヘッドフォンを使用していたり、背景が複雑だと正常に動作しないことがよくあります。",
    },
    "pa-sol": {
      id: "Aplikasi web dibangun untuk melacak postur menggunakan webcam biasa. Untuk masalah headphone, pelacakan dipetakan ke mata, bukan telinga. Kalibrasi ditambahkan untuk mengunci ukuran dan mengabaikan latar belakang.",
      ja: "一般的なウェブカメラを使用して姿勢を追跡するウェブアプリを構築しました。ヘッドフォンの問題を解決するため、耳ではなく目の座標にマッピングしました。また、ユーザーのサイズをロックし、背景の動きを無視するキャリブレーション機能を追加しました。",
    },
    "pa-imp": {
      id: "Monitor postur gratis tanpa perangkat keras yang bekerja dengan baik. Sistem mengingatkan pengguna saat membungkuk dan menyediakan data yang dapat diekspor.",
      ja: "追加のハードウェアを必要としない、無料で実用的な姿勢モニターです。猫背になったときにユーザーに警告し、習慣データをエクスポートできます。",
    },
    "pa-gal-1": { id: "Deteksi Bungkuk", ja: "猫背の検知" },
    "pa-gal-2": { id: "Penanganan Oklusi", ja: "オクルージョン対応" },
    "pa-gal-3": { id: "Penyaringan Latar", ja: "背景フィルタリング" },
    "pa-gal-4": { id: "Deteksi Kemiringan Kepala", ja: "頭の傾き検知" },

    "proj-cd-title": {
      id: "Pembuat Dokumentasi Kode",
      ja: "コード仕様書自動生成",
    },
    "proj-cd-desc": {
      id: "Aplikasi web dan CLI pembuat dokumentasi Python.",
      ja: "Pythonドキュメント生成ウェブアプリおよびCLI。",
    },
    "cd-prob": {
      id: "Menulis dokumentasi itu membosankan. Alat AI yang ada sering berhalusinasi, membuat variabel yang tidak ada, atau berbayar via API cloud.",
      ja: "ドキュメントの作成は面倒です。既存のAIツールはコードに存在しない変数を捏造（ハルシネーション）したり、クラウドAPI経由で使用するとコストがかかることがよくあります。",
    },
    "cd-sol": {
      id: "Alat Python lokal dibuat menggunakan model Qwen2.5. Dengan menerapkan output JSON, respons bertele-tele dihindari. Validasi ditambahkan untuk memeriksa output AI dengan AST kode asli untuk memblokir parameter palsu.",
      ja: "Qwen2.5モデルを使用してローカルファーストのPythonツールを作成しました。JSON出力を厳格に適用することで、不要な応答を回避します。AIの出力を実際のコードの抽象構文木（AST）と照合する検証ステップを追加し、偽のパラメータを完全にブロックしました。",
    },
    "cd-imp": {
      id: "Docstring cepat, gratis, dan akurat dihasilkan dalam 5-20 detik per file tanpa koneksi internet. Kualitas output diverifikasi dengan tolok ukur NLP seperti BLEU dan ROUGE-L.",
      ja: "インターネット接続なしで、1ファイルあたり5〜20秒で高速、無料、正確なDocstringを生成します。出力品質は、BLEUやROUGE-Lなどの標準的なNLPベンチマークで検証されました。",
    },
    "cd-gal-1": { id: "Antarmuka Web", ja: "ウェブインターフェース" },
    "cd-gal-2": { id: "Output Tervalidasi", ja: "検証済みの出力" },

    "proj-sf-title": { id: "SafeFall", ja: "SafeFall" },
    "proj-sf-desc": {
      id: "Aplikasi web deteksi jatuh.",
      ja: "転倒検知ウェブアプリ。",
    },
    "sf-prob": {
      id: "Deteksi jatuh lansia biasanya bergantung pada smartwatch. Sayangnya, perangkat ini mudah terlupa, dilepas untuk diisi daya, atau dihindari oleh pengguna yang paling membutuhkannya.",
      ja: "高齢者の転倒検知は通常、スマートウォッチやペンダントに依存しています。しかし、これらのデバイスは忘れられやすく、充電のために外されたり、最も必要とするユーザーに敬遠されたりすることがよくあります。",
    },
    "sf-sol": {
      id: "Model visi komputer YOLOv8 dilatih untuk mendeteksi jatuh dari kamera standar. Ini melacak gerakan vertikal tiba-tiba dan mencatat setiap peristiwa dengan skor keyakinan, mengirim peringatan tanpa interaksi fisik.",
      ja: "一般的なカメラ映像から転倒を検知するために、YOLOv8コンピュータービジョンモデルを訓練しました。突然の垂直方向の動きを追跡し、各イベントを信頼度スコアと共に記録し、ユーザーとの物理的な接触なしにアラートを送信します。",
    },
    "sf-imp": {
      id: "Jaring pengaman non-intrusif yang bekerja terus menerus di latar belakang. Solusi ini terpilih sebagai Semi-Finalis Teratas dari 1.898 tim di program Samsung Innovation Campus.",
      ja: "バックグラウンドで継続的に動作する、邪魔にならないセーフティネットです。このソリューションは、Samsung Innovation Campusプログラムの1,898の参加チームの中からトップセミファイナリストに選ばれました。",
    },
    "sf-gal-1": { id: "Jatuh Terdeteksi", ja: "転倒を検知" },
    "sf-gal-2": { id: "Keadaan Normal", ja: "通常状態" },
    "sf-gal-3": { id: "Log Peristiwa", ja: "イベントログ" },

    "proj-rp-title": {
      id: "Perencana Rute Transportasi Publik",
      ja: "公共交通機関ルートプランナー",
    },
    "proj-rp-desc": {
      id: "Aplikasi web perencana rute transportasi publik.",
      ja: "公共交通機関ルートプランナーのウェブアプリ。",
    },
    "rp-prob": {
      id: "Transportasi publik bisa sangat tidak bisa diandalkan. Penumpang sering tidak tahu kapan bus akan tiba, dan sumber informasi terpusat jarang ada.",
      ja: "公共交通機関は時に非常に信頼性が低く、ストレスの原因となります。通勤者はバスが遅れているのか、正確にいつ到着するのかわからないことが多く、情報の一元化されたソースが存在することは稀です。",
    },
    "rp-sol": {
      id: "Aplikasi full-stack dibangun dengan Laravel dan Leaflet.js. Aplikasi ini menarik GPS dari Firebase untuk pelacakan real-time. Sebagai cadangan jika koneksi terputus, aplikasi beralih ke jadwal statis di MySQL.",
      ja: "LaravelとLeaflet.jsを使用してフルスタックアプリを構築しました。FirebaseからリアルタイムのGPS座標を取得して追跡します。さらに信頼性を高めるため、リアルタイム接続が切断された場合、自動的にMySQLの静的なスケジュールデータに切り替わるフォールバックシステムを追加しました。",
    },
    "rp-imp": {
      id: "Memberikan ETA interaktif yang digambar di peta. Fitur tambahan menghitung peringkat ketepatan waktu historis untuk berbagai rute, membantu membuat keputusan komuter yang lebih baik.",
      ja: "地図上に直接描画される、明確でインタラクティブな到着予定時刻(ETA)をユーザーに提供します。また、様々なルートの過去の「定時運行」評価を計算する機能も追加し、人々の通勤の意思決定を支援します。",
    },
    "rp-gal-1": { id: "Perencana Rute Utama", ja: "メインルートプランナー" },
    "rp-gal-2": { id: "Registrasi Akun", ja: "アカウント登録" },

    "proj-cy-title": { id: "Prediktor Hasil Panen", ja: "収穫量予測ツール" },
    "proj-cy-desc": {
      id: "Model prediktif hasil pertanian.",
      ja: "農業収穫量の予測モデル。",
    },
    "cy-prob": {
      id: "Memprediksi produksi pertanian sulit karena cuaca dan sumber daya bervariasi. Prediksi yang tidak akurat menyebabkan pemborosan sumber daya dan perencanaan keuangan yang buruk.",
      ja: "天候や資源の変動が激しいため、農場の生産量を予測することは困難です。不正確な予測は、資源の無駄遣いや農家の資金計画の失敗につながります。",
    },
    "cy-sol": {
      id: "Data pertanian mentah dibersihkan dan diproses. Lokasi dengan kardinalitas tinggi dikategorikan dengan One-Hot Encoding. Beberapa model ML diuji untuk menentukan prediksi hasil terbaik berdasarkan curah hujan, suhu, dan pestisida.",
      ja: "未加工の農業データをクリーニングして欠損値を処理し、高カーディナリティの場所をOne-Hotエンコーディングを使用して分類しました。その後、いくつかの機械学習モデルを比較し、降雨量、温度、農薬などの入力に基づいてどのモデルが最も正確に収穫量を予測できるかを決定しました。",
    },
    "cy-imp": {
      id: "Model Gradient Boosting mencapai akurasi 96%. Simulasi dijalankan untuk mengidentifikasi cluster anomali dan menunjukkan bagaimana data ini digunakan untuk menargetkan pertanian berkinerja buruk, lengkap dengan perkiraan ROI.",
      ja: "最終的なGradient Boostingモデルは96%の精度を達成しました。また、異常なクラスタを特定し、このデータを活用してパフォーマンスの低い農場をターゲットにする方法を示すシミュレーションを実行し、推定される財務ROIも算出しました。",
    },
    "cy-gal-1": { id: "Benchmarking Model", ja: "モデルのベンチマーク" },
    "cy-gal-2": { id: "Deteksi Anomali", ja: "異常検知" },
    "cy-gal-3": {
      id: "Simulasi Nilai Bisnis",
      ja: "ビジネス価値シミュレーション",
    },

    "proj-pp-title": { id: "Prediktor Kepribadian", ja: "性格予測ツール" },
    "proj-pp-desc": {
      id: "Aplikasi web prediktor sifat kepribadian berdasarkan pakaian.",
      ja: "服装に基づく性格特性予測ウェブアプリ。",
    },
    "pp-prob": {
      id: "Tes kepribadian umumnya bergantung pada survei yang bias oleh bagaimana individu ingin dilihat. Tes ini kurang memiliki korelasi visual yang objektif terhadap presentasi nyata seseorang di dunia luar.",
      ja: "性格テストは伝統的に自己申告のアンケートに依存しており、個人が「どう見られたいか」によるバイアスが本質的に生じます。個人の実際の外見との客観的で視覚的な相関関係が欠けています。",
    },
    "pp-sol": {
      id: "Jaringan saraf PyTorch dikembangkan untuk menganalisis foto pakaian pengguna. Sistem mengekstrak fitur mode dan memprosesnya melalui model klasifikasi, memetakan pilihan pakaian visual ke sifat kepribadian OCEAN.",
      ja: "ユーザーの服装写真を分析するためにPyTorchニューラルネットワークを開発しました。システムは特定のファッションの特徴をプログラム的に抽出し、分類モデルを通じて処理することで、視覚的な服装の選択をビッグファイブ（OCEAN）の性格特性に直接マッピングします。",
    },
    "pp-imp": {
      id: "Aplikasi web interaktif diterapkan, menggabungkan psikologi perilaku dengan visi komputer. Ini memberikan prediksi psikologis berbasis AI secara instan untuk dikontraskan dengan penilaian diri mereka sendiri.",
      ja: "行動心理学とコンピュータービジョンをシームレスに組み合わせたインタラクティブなウェブアプリケーションを展開しました。ユーザーの自己評価と比較できる、AI駆動の心理予測を即座に提供します。",
    },
    "pp-gal-1": { id: "Unggah & Survei", ja: "アップロードとアンケート" },
    "pp-gal-2": { id: "Analisis Sifat AI", ja: "AI特性分析" },
    "pp-gal-3": { id: "Rincian Sifat", ja: "特性の分析結果" },

    "term-intro": {
      id: "Ketik 'help' untuk melihat perintah.",
      ja: "コマンドを見るには 'help' と入力してください。",
    },
  };

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!langData[key]) langData[key] = {};
    if (!langData[key].en) langData[key].en = el.innerHTML;
  });

  const termData = {
    en: {
      help: "Available commands:\n  about        - Learn more about me\n  education    - View academic background\n  experience   - View professional experience\n  achievements - View awards & honors\n  skills       - View technical stack\n  projects     - View selected works\n  contact      - Get my email & links\n  clear        - Clear terminal\n  exit         - Close terminal",
      about:
        "Aaron Nathanael\n4th-year Computer Science Undergraduate @ BINUS University (GPA: 3.92)\nCurrently interning as an Application Developer at PT Bank Central Asia Tbk.\nActively learning ways tech is implemented in real-world business scenarios.",
      education:
        "2023 - Present: Bachelor of Computer Science @ BINUS University (GPA: 3.92)\n2026: Student Exchange @ Shibaura Institute of Technology\n2020 - 2023: High School Diplomat @ SMAK 1 BPK PENABUR Jakarta",
      experience:
        "2026 - Present: Application Developer Intern @ PT Bank Central Asia Tbk\n2026: Tour Guide @ Yummy Guide\n2025: Academic Events Activist @ HIMTI BINUS\n2024: Web Development Activist @ HIMTI BINUS\n2024: Learning & Training Activist @ BNCC\n2024: Participant @ Samsung Innovation Campus\n2023: Participant @ Apple Developer Academy",
      achievements:
        "2025: Dean's List @ BINUS University School of Computer Science\n2025: 2nd Runner-up @ COMPFEST 17 Game Jam\n2024: Semi Finalist @ Samsung Innovation Campus",
      skills:
        "Languages: Python, PHP, JavaScript, Swift, C, HTML, CSS\nAI/ML    : PyTorch, Scikit-Learn, YOLOv8, HuggingFace, MediaPipe, OpenCV\nWeb Dev  : Laravel, MySQL, Streamlit, Firebase, React/Astro\nTools    : Git, NLTK, Pandas, NumPy, Data Analytics",
      projects:
        "1. Posture Alert App (Python, MediaPipe)\n2. Code Documentation Generator (Python, Qwen2.5)\n3. SafeFall: Fall Detection App (YOLOv8, OpenCV)\n4. Personality Predictor (PyTorch, Flask)\n5. Crop Yield Predictor (Scikit-Learn)\n6. Public Transport Route Planner (Laravel, Firebase)",
      contact:
        "Email    : aaronnathanaelishakleman@gmail.com\nLinkedIn : linkedin.com/in/aaron-nathanael\nGitHub   : github.com/CurvyCroissant",
      unrecognized: (cmd) =>
        `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`,
    },
    id: {
      help: "Perintah tersedia:\n  about        - Tentang saya\n  education    - Latar belakang pendidikan\n  experience   - Pengalaman profesional\n  achievements - Penghargaan & pencapaian\n  skills       - Keahlian teknis\n  projects     - Proyek pilihan\n  contact      - Kontak saya\n  clear        - Bersihkan terminal\n  exit         - Tutup terminal",
      about:
        "Aaron Nathanael\nMahasiswa S1 Ilmu Komputer tahun ke-4 @ BINUS University (IPK: 3.92)\nSaat ini sedang magang sebagai Application Developer di PT Bank Central Asia Tbk.\nAktif mempelajari cara teknologi diimplementasikan dalam skenario bisnis dunia nyata.",
      education:
        "2023 - Sekarang: S1 Ilmu Komputer @ BINUS University (IPK: 3.92)\n2026: Pertukaran Pelajar @ Shibaura Institute of Technology\n2020 - 2023: SMA @ SMAK 1 BPK PENABUR Jakarta",
      experience:
        "2026 - Sekarang: Application Developer Intern @ PT Bank Central Asia Tbk\n2026: Pemandu Wisata @ Yummy Guide\n2025: Aktivis Acara Akademik @ HIMTI BINUS\n2024: Aktivis Web Development @ HIMTI BINUS\n2024: Aktivis Pembelajaran & Pelatihan @ BNCC\n2024: Semi Finalis @ Samsung Innovation Campus\n2023: Peserta @ Apple Developer Academy",
      achievements:
        "2025: Dean's List @ BINUS University School of Computer Science\n2025: Juara 3 @ COMPFEST 17 Game Jam\n2024: Semi Finalis @ Samsung Innovation Campus",
      skills:
        "Bahasa   : Python, PHP, JavaScript, Swift, C, HTML, CSS\nAI/ML    : PyTorch, Scikit-Learn, YOLOv8, HuggingFace, MediaPipe, OpenCV\nWeb Dev  : Laravel, MySQL, Streamlit, Firebase, React/Astro\nAlat     : Git, NLTK, Pandas, NumPy, Data Analytics",
      projects:
        "1. Posture Alert App (Python, MediaPipe)\n2. Code Documentation Generator (Python, Qwen2.5)\n3. SafeFall: Fall Detection (YOLOv8, OpenCV)\n4. Personality Predictor (PyTorch, Flask)\n5. Crop Yield Predictor (Scikit-Learn)\n6. Public Transport Route Planner (Laravel, Firebase)",
      contact:
        "Email    : aaronnathanaelishakleman@gmail.com\nLinkedIn : linkedin.com/in/aaron-nathanael\nGitHub   : github.com/CurvyCroissant",
      unrecognized: (cmd) =>
        `'${cmd}' tidak dikenali sebagai perintah internal atau eksternal.`,
    },
    ja: {
      help: "利用可能なコマンド:\n  about        - 私について\n  education    - 学歴\n  experience   - 職歴・経験\n  achievements - 受賞歴・実績\n  skills       - 技術スタック\n  projects     - プロジェクト\n  contact      - 連絡先\n  clear        - ターミナルをクリア\n  exit         - ターミナルを閉じる",
      about:
        "アーロン・ナタナエル\nビヌス大学 コンピュータサイエンス学部 4年生 (GPA: 3.92)\n現在、PT Bank Central Asia Tbkにてアプリケーション開発インターン。\n現実のビジネスシナリオでテクノロジーがどのように実装されているかを積極的に学んでいます。",
      education:
        "2023 - 現在: コンピュータサイエンス学士 @ ビヌス大学 (GPA: 3.92)\n2026: 交換留学プログラム @ 芝浦工業大学\n2020 - 2023: 高校 @ SMAK 1 BPK PENABUR Jakarta",
      experience:
        "2026 - 現在: アプリケーション開発インターン @ PT Bank Central Asia Tbk\n2026: ツアーガイド @ Yummy Guide\n2025: 学術イベント推進メンバー @ HIMTI BINUS\n2024: ウェブ開発推進メンバー @ HIMTI BINUS\n2024: 学習・トレーニング推進メンバー @ BNCC\n2024: セミファイナリスト @ Samsung Innovation Campus\n2023: 参加者 @ Apple Developer Academy",
      achievements:
        "2025: 成績優秀者 @ ビヌス大学 School of Computer Science\n2025: 3位 @ COMPFEST 17 Game Jam\n2024: セミファイナリスト @ Samsung Innovation Campus",
      skills:
        "言語      : Python, PHP, JavaScript, Swift, C, HTML, CSS\nAI/ML    : PyTorch, Scikit-Learn, YOLOv8, HuggingFace, MediaPipe, OpenCV\nWeb 開発  : Laravel, MySQL, Streamlit, Firebase, React/Astro\nツール    : Git, NLTK, Pandas, NumPy, Data Analytics",
      projects:
        "1. 姿勢警告アプリ (Python, MediaPipe)\n2. コード仕様書自動生成 (Python, Qwen2.5)\n3. SafeFall: 転倒検知アプリ (YOLOv8, OpenCV)\n4. 性格予測ツール (PyTorch, Flask)\n5. 収穫量予測 (Scikit-Learn)\n6. 路線プランナー (Laravel, Firebase)",
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

  const setLanguage = (lang, save = true) => {
    currentLang = lang;
    if (save) localStorage.setItem("lang", lang);
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
    updateThemeText(currentTheme, lang);
  };

  const setTheme = (theme, save = true) => {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    if (save) localStorage.setItem("theme", theme);

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

  setTheme(currentTheme, false);
  setLanguage(currentLang, false);

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

  let scale = 1,
    posX = 0,
    posY = 0,
    isDragging = false,
    startX = 0,
    startY = 0,
    currentRotation = 0;

  let originRect = null;

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
    modalImg.style.transform = `translate3d(calc(-50% + ${posX}px), calc(-50% + ${posY}px), 0) scale(${scale}) rotate(${currentRotation}deg)`;
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
          const targetEl =
            trigger.querySelector("img") ||
            trigger.querySelector(".cert-image") ||
            trigger;
          originRect = targetEl.getBoundingClientRect();
          currentRotation = parseInt(
            trigger.getAttribute("data-rotate") || "0",
            10,
          );

          if (
            Math.abs(currentRotation) === 90 ||
            Math.abs(currentRotation) === 270
          ) {
            modalImg.style.maxWidth = "90vh";
            modalImg.style.maxHeight = "90vw";
          } else {
            modalImg.style.maxWidth = "90vw";
            modalImg.style.maxHeight = "90vh";
          }

          modalImg.style.opacity = "0";
          modalImg.style.transition = "none";

          modalImg.onload = () => {
            scale = 1;
            posX = 0;
            posY = 0;

            const isRotated =
              Math.abs(currentRotation) === 90 ||
              Math.abs(currentRotation) === 270;
            const unzoomedWidth = isRotated
              ? modalImg.offsetHeight
              : modalImg.offsetWidth;
            const startScale = originRect.width / (unzoomedWidth || 1) || 0.5;

            const startOffsetX =
              originRect.left + originRect.width / 2 - window.innerWidth / 2;
            const startOffsetY =
              originRect.top + originRect.height / 2 - window.innerHeight / 2;

            modalImg.style.transform = `translate3d(calc(-50% + ${startOffsetX}px), calc(-50% + ${startOffsetY}px), 0) scale(${startScale}) rotate(${currentRotation}deg)`;
            modalImg.style.opacity = "1";

            modalImg.offsetHeight;

            modalImg.style.transition =
              "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
            modalImg.style.transform = `translate3d(-50%, -50%, 0) scale(1) rotate(${currentRotation}deg)`;

            modalImg.onload = null;
          };

          modalImg.src =
            trigger.getAttribute("href") ||
            trigger.querySelector("img")?.getAttribute("src");
          modal.classList.add("active");
          lockScroll();
        }
      });
    });

  const closeModal = () => {
    modal.classList.remove("active");
    unlockScroll();

    if (originRect) {
      const isRotated =
        Math.abs(currentRotation) === 90 || Math.abs(currentRotation) === 270;
      const unzoomedWidth = isRotated
        ? modalImg.offsetHeight
        : modalImg.offsetWidth;
      const endScale = originRect.width / (unzoomedWidth || 1);

      const endOffsetX =
        originRect.left + originRect.width / 2 - window.innerWidth / 2;
      const endOffsetY =
        originRect.top + originRect.height / 2 - window.innerHeight / 2;

      modalImg.style.transition =
        "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
      modalImg.style.transform = `translate3d(calc(-50% + ${endOffsetX}px), calc(-50% + ${endOffsetY}px), 0) scale(${endScale}) rotate(${currentRotation}deg)`;
    }

    setTimeout(() => {
      if (!modal.classList.contains("active")) {
        modalImg.src = "";
        modalImg.style.opacity = "0";
        modalImg.style.transform = "";
        modalImg.style.transition = "";
        modalImg.style.maxWidth = "";
        modalImg.style.maxHeight = "";
        originRect = null;
        currentRotation = 0;
      }
    }, 400);
  };

  if (modal) {
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
          case "education":
            printLine(t.education);
            break;
          case "experience":
            printLine(t.experience);
            break;
          case "achievements":
            printLine(t.achievements);
            break;
          case "skills":
            printLine(t.skills);
            break;
          case "projects":
            printLine(t.projects);
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

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (
    skillsContainer &&
    typeof Matter !== "undefined" &&
    !prefersReducedMotion
  ) {
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

    let width = skillsContainer.getBoundingClientRect().width || 648;
    let height = width < 450 ? 400 : width < 600 ? 340 : 270;
    skillsContainer.style.minHeight = `${height}px`;

    let wallThickness = 1000;
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

    const cols = width < 450 ? 1 : width < 600 ? 2 : 3,
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
        data.pill.style.transform = `translate3d(-50%, -50%, 0)`;
      });
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newWidth = skillsContainer.getBoundingClientRect().width || 648;
        const newHeight = newWidth < 450 ? 400 : newWidth < 600 ? 340 : 270;

        if (newWidth !== width || newHeight !== height) {
          width = newWidth;
          height = newHeight;
          skillsContainer.style.minHeight = `${height}px`;

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
