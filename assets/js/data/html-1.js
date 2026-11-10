window.LESSONS = window.LESSONS || [];
window.LESSONS.push(...[
  {
    id: "html-01-what-is-html",
    course: "html",
    module: 1,
    moduleTitle: "মডিউল ১: HTML মৌলিক বিষয়",
    order: 1,
    title: "HTML কী?",
    objectives: [
      "HTML কী এবং এটি কেন দরকার তা বলতে পারবেন।",
      "HTML-এর মূল ধারণা (ট্যাগ, এলিমেন্ট) চিনতে পারবেন।",
      "একটি সাধারণ HTML ডকুমেন্ট পড়ে তার অংশগুলো শনাক্ত করতে পারবেন।"
    ],
    explanation: [
      "HTML হলো **HyperText Markup Language**। এটি ওয়েবপেজের কাঠামো (structure) তৈরি করার ভাষা। যেমন একটি বাড়ি তৈরি করতে আগে দেয়াল, দরজা, জানালার পরিকল্পনা লাগে, তেমনি একটি ওয়েবপেজে কোথায় শিরোনাম, কোথায় লেখা, কোথায় ছবি বা লিংক থাকবে তা HTML দিয়ে ঠিক করা হয়।",
      "HTML কোনো প্রোগ্রামিং ভাষা নয়, বরং একটি **মার্কআপ ভাষা (markup language)**। এখানে আপনি ট্যাগ (tag) ব্যবহার করে বলে দেন কোন অংশটি শিরোনাম, কোনটি প্যারাগ্রাফ, কোনটি ছবি। ব্রাউজার এই ট্যাগগুলো পড়ে পেজটি দেখায়।",
      "একটি HTML ফাইলের সাধারণ নাম `index.html` হয়। এই ফাইলটি ব্রাউজারে খুললে আপনি সেটি দেখতে পাবেন।"
    ],
    whyUseful: "HTML ছাড়া কোনো ওয়েবসাইট তৈরি করা সম্ভব নয়। CSS দিয়ে রং ও লেআউট, আর JavaScript দিয়ে ইন্টারঅ্যাকশন যোগ করা হয়, কিন্তু মূল কাঠামোটি HTML-এ থাকে। সার্চ ইঞ্জিন ও স্ক্রিন রিডার (দৃষ্টিহীন ব্যবহারকারীদের জন্য) HTML কাঠামো পড়েই পেজের অর্থ বোঝে।",
    syntax: {
      lang: "html",
      code: `<tagname>কনটেন্ট</tagname>`
    },
    example: {
      title: "সবচেয়ে সাধারণ HTML ডকুমেন্ট",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>আমার প্রথম পেজ</title>
</head>
<body>
  <h1>স্বাগতম!</h1>
  <p>এটি আমার প্রথম HTML পেজ।</p>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<!DOCTYPE html>", explain: "ব্রাউজারকে জানায় এটি আধুনিক HTML5 ডকুমেন্ট। এটি সবসময় প্রথম লাইনে থাকে।" },
      { code: `<html lang="bn">`, explain: "পুরো পেজের ভাষা বাংলা (`bn`) বলে দেওয়া হয়েছে। স্ক্রিন রিডার ও সার্চ ইঞ্জিন এতে সাহায্য পায়।" },
      { code: "<head>", explain: "এখানে পেজের তথ্য থাকে, যা সরাসরি স্ক্রিনে দেখা যায় না (যেমন শিরোনাম, মেটা তথ্য)।" },
      { code: `<meta charset="UTF-8">`, explain: "বাংলা অক্ষর সঠিকভাবে দেখানোর জন্য অক্ষর-এনকোডিং UTF-8 নির্ধারণ করা হয়।" },
      { code: `<title>আমার প্রথম পেজ</title>`, explain: "ব্রাউজারের ট্যাবে এবং সার্চ রেজাল্টে এই শিরোনামটি দেখা যায়।" },
      { code: "<body>", explain: "পেজে যা কিছু দেখা যাবে, সব এই `body` ট্যাগের ভেতরে লেখা হয়।" },
      { code: "<h1>স্বাগতম!</h1>", explain: "`h1` হলো সবচেয়ে বড় শিরোনাম। একটি পেজে সাধারণত একটি `h1` থাকে।" },
      { code: "<p>এটি আমার প্রথম HTML পেজ।</p>", explain: "`p` ট্যাগ একটি প্যারাগ্রাফ (অনুচ্ছেদ) তৈরি করে।" }
    ],
    output: "ব্রাউজারের ট্যাবে \"আমার প্রথম পেজ\" লেখা দেখাবে। পেজের ভেতরে বড় অক্ষরে \"স্বাগতম!\" এবং তার নিচে সাধারণ লেখায় \"এটি আমার প্রথম HTML পেজ।\" দেখা যাবে।",
    mistakes: [
      {
        wrong: "<h1>স্বাগতম!</h1>",
        right: "<!DOCTYPE html>\n<html lang=\"bn\">\n<head>...</head>\n<body>\n  <h1>স্বাগতম!</h1>\n</body>\n</html>",
        explain: "শুধু ট্যাগ লিখলেই পূর্ণ ডকুমেন্ট হয় না। ব্রাউজার কাজ করে, কিন্তু সঠিক কাঠামো না থাকলে ভাষা, এনকোডিং ও শিরোনাম ঠিকমতো কাজ করে না।"
      },
      {
        wrong: "",
        right: "",
        explain: "ফাইলের নাম .txt দিয়ে সেভ করলে ব্রাউজার HTML হিসেবে চালায় না। ফাইলের নাম অবশ্যই .html দিয়ে শেষ হতে হবে।"
      }
    ],
    bestPractices: [
      "প্রতিটি পেজে `<!DOCTYPE html>` এবং `lang` অ্যাট্রিবিউট দিন।",
      "ফাইল সেভ করার সময় UTF-8 এনকোডিং ব্যবহার করুন, যাতে বাংলা অক্ষর নষ্ট না হয়।",
      "প্রতিটি পেজের জন্য অর্থবহ `title` লিখুন।"
    ],
    useCase: "একটি স্থানীয় দোকানের পরিচিতি পেজ তৈরি করতে HTML দিয়ে দোকানের নাম, ঠিকানা ও যোগাযোগের তথ্য সাজানো হয়। পরে CSS দিয়ে সেটিকে আকর্ষণীয় করা হয়।",
    practice: [
      {
        level: "easy",
        task: "একটি HTML ফাইল বানান যেখানে `h1` দিয়ে আপনার নাম এবং `p` দিয়ে একটি বাক্য লিখুন।",
        hint: "উপরের উদাহরণটি কপি করে শুধু লেখা বদলান।",
        solution: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>আমার পরিচয়</title>
</head>
<body>
  <h1>রহিম উদ্দিন</h1>
  <p>আমি HTML শিখছি।</p>
</body>
</html>`,
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি পেজে দুটি প্যারাগ্রাফ এবং একটি উপশিরোনাম (h2) যোগ করুন।",
        hint: "প্রতিটি প্যারাগ্রাফের জন্য আলাদা `p` ট্যাগ ব্যবহার করুন।",
        solution: `<body>
  <h1>আমার শহর</h1>
  <h2>শহরের পরিচিতি</h2>
  <p>এটি একটি সুন্দর শহর।</p>
  <p>এখানে অনেক মানুষ বাস করে।</p>
</body>`,
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি পেজ তৈরি করুন যেখানে ব্রাউজারের ট্যাবে \"আমার বই তালিকা\" লেখা থাকবে এবং পেজে তিনটি বইয়ের নাম থাকবে (প্রতিটি আলাদা প্যারাগ্রাফে)।",
        hint: "`title` ট্যাগ `head`-এর ভেতরে থাকে।",
        solution: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>আমার বই তালিকা</title>
</head>
<body>
  <h1>প্রিয় বই</h1>
  <p>১. পথের পাঁচালী</p>
  <p>২. গোরা</p>
  <p>৩. আমার সোনার বাংলা</p>
</body>
</html>`,
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "HTML-এর পুরো নাম কী?",
        options: ["HyperText Markup Language", "High Text Modern Language", "HyperTool Multi Language", "Home Tool Markup Language"],
        answer: 0,
        explanation: "HTML-এর পুরো নাম HyperText Markup Language। এটি ওয়েবপেজের কাঠামো তৈরি করে।"
      },
      {
        question: "ওয়েবপেজের বাংলা অক্ষর সঠিকভাবে দেখানোর জন্য কোন ট্যাগ দরকার?",
        options: ["<meta charset=\"UTF-8\">", "<link rel=\"bangla\">", "<font face=\"bn\">", "<title lang=\"bn\">"],
        answer: 0,
        explanation: "`<meta charset=\"UTF-8\">` অক্ষর-এনকোডিং নির্ধারণ করে, যা বাংলার জন্য দরকারি।"
      },
      {
        question: "ব্রাউজারের ট্যাবে যে শিরোনাম দেখা যায়, সেটি কোন ট্যাগে লেখা হয়?",
        options: ["<h1>", "<title>", "<head>", "<header>"],
        answer: 1,
        explanation: "`<title>` ট্যাগের লেখা ব্রাউজারের ট্যাবে এবং সার্চ রেজাল্টে দেখানো হয়।"
      }
    ]
  },
  {
    id: "html-02-how-websites-work",
    course: "html",
    module: 1,
    moduleTitle: "মডিউল ১: HTML মৌলিক বিষয়",
    order: 2,
    title: "ওয়েবসাইট কীভাবে কাজ করে",
    objectives: [
      "Browser, Server ও URL-এর অর্থ বলতে পারবেন।",
      "HTTP request ও response কী তা ব্যাখ্যা করতে পারবেন।",
      "একটি ওয়েবপেজ খোলার ধাপগুলো ক্রমানুসারে বলতে পারবেন।"
    ],
    explanation: [
      "আপনি যখন ব্রাউজারের ঠিকানার ঘরে `https://example.com` লিখে Enter চাপেন, তখন একটি সুনির্দিষ্ট প্রক্রিয়া শুরু হয়। ব্রাউজার (Chrome, Firefox ইত্যাদি) হলো ক্লায়েন্ট, অর্থাৎ যা তথ্য চায়। যে কম্পিউটারে ওয়েবসাইটের ফাইল রাখা থাকে তাকে বলে **সার্ভার (server)**, যা তথ্য পাঠায়।",
      "ব্রাউজার সার্ভারের কাছে একটি **HTTP request** পাঠায়, যেখানে লেখা থাকে কোন পেজ চাওয়া হচ্ছে। সার্ভার সেই পেজের ফাইল (HTML, CSS, JavaScript, ছবি) ফেরত পাঠায়, যাকে বলা হয় **HTTP response**। এই আদান-প্রদান প্রতিটি ফাইলের জন্য হয়।",
      "ব্রাউজার HTML পড়ে ধাপে ধাপে পেজ তৈরি করে। HTML-এ CSS বা ছবির লিংক থাকলে ব্রাউজার সেগুলোও আলাদাভাবে আনে। একে বলে **রেন্ডারিং (rendering)**।"
    ],
    whyUseful: "ওয়েব কীভাবে কাজ করে জানলে আপনি বুঝতে পারবেন কেন ফাইলের পথ (path) ভুল হলে ছবি দেখা যায় না, কেন একটি পেজ ধীরে খোলে, এবং কেন HTTPS নিরাপদ।",
    syntax: null,
    example: {
      title: "ব্রাউজার যে ফাইলগুলো আনে তার একটি উদাহরণ",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>ওয়েব কাজের উদাহরণ</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>ব্রাউজার কী কী আনে?</h1>
  <img src="logo.png" alt="লোগো">
  <script src="app.js"></script>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: `<link rel="stylesheet" href="style.css">`, explain: "ব্রাউজার এই লাইন দেখে আলাদা একটি CSS ফাইল (`style.css`) সার্ভার থেকে আনার অনুরোধ পাঠায়।" },
      { code: `<img src="logo.png" alt="লোগো">`, explain: "ছবি আনার জন্য আরেকটি request যায়। `alt` লেখাটি ছবি লোড না হলে বা স্ক্রিন রিডারে শোনা যায়।" },
      { code: `<script src="app.js"></script>`, explain: "JavaScript ফাইল আনা হয় এবং চালানো হয়। এটি পেজে আচরণ যোগ করে।" }
    ],
    output: "পেজ খুললে ব্রাউজার নিজে থেকে `style.css`, `logo.png` ও `app.js` ফাইলও সার্ভার থেকে আনে। ফাইলগুলো না পেলে ডেভেলপার টুলসের Network ট্যাবে 404 (Not Found) দেখা যায়।",
    mistakes: [
      {
        wrong: `<img src="C:\\Users\\me\\logo.png">`,
        right: `<img src="images/logo.png">`,
        explain: "কম্পিউটারের নিজস্ব পথ (absolute path) ওয়েবসাইটে কাজ করে না। ওয়েবসাইটের ফাইলের জন্য সম্পর্কিত পথ (relative path) ব্যবহার করুন।"
      },
      {
        wrong: "",
        right: "",
        explain: "HTML ফাইল ও ছবি আলাদা ফোল্ডারে থাকলে ছবির পথ ভুল হতে পারে। ফোল্ডার কাঠামো মিলিয়ে পথ লিখুন।"
      }
    ],
    bestPractices: [
      "ফাইলের নাম ছোট হাতের অক্ষরে ও ইংরেজিতে রাখুন, যেমন `my-page.html`।",
      "ফাইলের পথ সবসময় সম্পর্কিত (relative) রাখুন।",
      "ব্রাউজারের Developer Tools (F12) খুলে Network ট্যাবে কোন ফাইল আসছে তা দেখুন।"
    ],
    useCase: "একটি অনলাইন শপে প্রোডাক্টের ছবি, দাম ও বিবরণ আলাদা আলাদা ফাইল ও সার্ভার থেকে আসে। ব্রাউজার সবগুলো জোড়া লাগিয়ে একটি পেজ দেখায়।",
    practice: [
      {
        level: "easy",
        task: "Browser ও Server-এর পার্থক্য দুই লাইনে লিখুন।",
        hint: "একটি যে তথ্য চায়, অন্যটি যে তথ্য দেয়।",
        solution: "ব্রাউজার হলো ক্লায়েন্ট যা তথ্য চায় এবং পেজ দেখায়। সার্ভার হলো যে কম্পিউটার ওয়েবসাইটের ফাইল রাখে এবং অনুরোধের উত্তরে ফাইল পাঠায়।",
        solutionLang: "text"
      },
      {
        level: "medium",
        task: "একটি HTML পেজে একটি CSS ফাইল ও একটি ছবি লিংক করুন, যেখানে ছবিটি `images` ফোল্ডারে আছে।",
        hint: "ফোল্ডারের নাম সহ relative path লিখুন।",
        solution: `<link rel="stylesheet" href="css/style.css">
<img src="images/photo.jpg" alt="আমার ছবি">`,
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "HTTP request ও response-এর আদান-প্রদান ধাপে ধাপে লিখুন, যখন একটি পেজে তিনটি ছবি আছে।",
        hint: "প্রথমে পেজ, তারপর প্রতিটি ছবির জন্য আলাদা request ভাবুন।",
        solution: "১. ব্রাউজার পেজের জন্য একটি request পাঠায়। ২. সার্ভার HTML ফাইল response হিসেবে ফেরত দেয়। ৩. ব্রাউজার HTML পড়ে তিনটি ছবির জন্য তিনটি আলাদা request পাঠায়। ৪. সার্ভার প্রতিটি ছবি response হিসেবে পাঠায়। ৫. ব্রাউজার সব মিলিয়ে পেজ দেখায়।",
        solutionLang: "text"
      }
    ],
    quiz: [
      {
        question: "ওয়েবসাইটের ফাইল যে কম্পিউটারে রাখা থাকে, তাকে কী বলে?",
        options: ["Client", "Server", "Router", "Browser"],
        answer: 1,
        explanation: "যে কম্পিউটারে ওয়েবসাইটের ফাইল থাকে এবং অনুরোধের উত্তরে পাঠায়, তাকে সার্ভার বলে।"
      },
      {
        question: "ব্রাউজার সার্ভারের কাছে যে অনুরোধ পাঠায়, তাকে কী বলে?",
        options: ["HTTP response", "HTTP request", "HTML tag", "CSS rule"],
        answer: 1,
        explanation: "ব্রাউজারের অনুরোধকে HTTP request বলে, আর সার্ভারের উত্তরকে HTTP response বলে।"
      },
      {
        question: "কোনো ফাইল পাওয়া না গেলে Network ট্যাবে সাধারণত কোন কোড দেখা যায়?",
        options: ["200", "301", "404", "500"],
        answer: 2,
        explanation: "404 মানে Not Found, অর্থাৎ সার্ভার অনুরোধ করা ফাইলটি খুঁজে পায়নি।"
      }
    ]
  },
  {
    id: "html-03-html-vs-css-vs-js",
    course: "html",
    module: 1,
    moduleTitle: "মডিউল ১: HTML মৌলিক বিষয়",
    order: 3,
    title: "HTML vs CSS vs JavaScript",
    objectives: [
      "HTML, CSS ও JavaScript-এর আলাদা দায়িত্ব বলতে পারবেন।",
      "একটি পেজের কোন অংশ কোন প্রযুক্তিতে লেখা হয় তা চিহ্নিত করতে পারবেন।",
      "এই তিনটির সঠিক সমন্বয়ের ধারণা পাবেন।"
    ],
    explanation: [
      "একটি ওয়েবপেজ তিনটি স্তরে তৈরি হয়। **HTML** হলো কাঠামো (structure), যেমন বাড়ির দেয়াল ও ছাদ। **CSS** হলো চেহারা (presentation), যেমন বাড়ির রং, ফার্নিচার ও সাজসজ্জা। **JavaScript** হলো আচরণ (behavior), যেমন বাড়ির দরজা খোলা, লাইট জ্বালানো।",
      "উদাহরণ হিসেবে একটি বাটনের কথা ভাবুন। HTML দিয়ে বাটন তৈরি হয় (`<button>`)। CSS দিয়ে বাটনের রং ও আকার ঠিক হয়। JavaScript দিয়ে বাটনে ক্লিক করলে কী হবে তা ঠিক হয়।",
      "এই তিনটি আলাদা রাখা একটি ভালো অভ্যাস। ফলে পরে ডিজাইন বদলাতে হলে শুধু CSS বদলাতে হয়, কাঠামো ভাঙে না।"
    ],
    whyUseful: "কোন সমস্যা কোথায় আছে বুঝতে এই পার্থক্যটি জরুরি। লেখা ঠিকমতো না দেখালে সম্ভবত HTML সমস্যা, রং বা লেআউট ভুল হলে CSS, আর বাটন কাজ না করলে JavaScript দেখতে হবে।",
    syntax: null,
    example: {
      title: "তিনটি প্রযুক্তি একসাথে",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>তিন প্রযুক্তি</title>
  <style>
    h1 { color: #1d4ed8; }
    button { padding: 8px 16px; }
  </style>
</head>
<body>
  <h1>আমার পেজ</h1>
  <button id="hello">ক্লিক করুন</button>
  <p id="message"></p>
  <script>
    document.getElementById("hello").addEventListener("click", function () {
      document.getElementById("message").textContent = "আপনি ক্লিক করেছেন!";
    });
  </script>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<h1>আমার পেজ</h1>", explain: "HTML: শিরোনামের কাঠামো তৈরি করছে। লেখাটি কোনটি শিরোনাম তা ব্রাউজার জানে।" },
      { code: "h1 { color: #1d4ed8; }", explain: "CSS: সব `h1` শিরোনামের রং নীল করা হয়েছে। এটি শুধু চেহারা বদলায়।" },
      { code: `<button id="hello">ক্লিক করুন</button>`, explain: "HTML: বাটনের কাঠামো। `id` দিয়ে JavaScript একে চিনতে পারে।" },
      { code: `addEventListener("click", ...)`, explain: "JavaScript: বাটনে ক্লিক হলে কী করতে হবে তা নির্ধারণ করে।" },
      { code: `textContent = "আপনি ক্লিক করেছেন!";`, explain: "JavaScript: `p` ট্যাগের লেখা বদলে দেয়। এটি পেজের আচরণ।" }
    ],
    output: "পেজে নীল শিরোনাম দেখা যাবে। বাটনে ক্লিক করলে নিচে \"আপনি ক্লিক করেছেন!\" লেখাটি আসবে।",
    mistakes: [
      {
        wrong: `<p style="color: red;">লেখা</p>`,
        right: `<p class="warning">লেখা</p>`,
        explain: "সব স্টাইল HTML-এর ভেতরে লিখলে পরে বদলানো কঠিন হয়। রং ও চেহারা CSS-এ রাখুন এবং HTML-এ শুধু ক্লাস নাম দিন।"
      },
      {
        wrong: `<h1 onclick="...">`,
        right: `addEventListener দিয়ে JavaScript ফাইলে লিখুন`,
        explain: "HTML-এর ভেতরে অনেক JavaScript লিখলে কোড জট পাকায়। আচরণ JavaScript ফাইলে রাখা ভালো।"
      }
    ],
    bestPractices: [
      "HTML-এ অর্থবহ ট্যাগ ব্যবহার করুন; শুধু চেহারার জন্য `div` ও `span` বেশি ব্যবহার করবেন না।",
      "CSS আলাদা ফাইলে রাখুন (`style.css`), JavaScript আলাদা ফাইলে রাখুন (`script.js`)।",
      "এক দায়িত্ব এক জায়গায়: কাঠামো HTML, চেহারা CSS, আচরণ JavaScript।"
    ],
    useCase: "একটি নিউজ পোর্টালে খবরের শিরোনাম ও লেখা HTML-এ থাকে, পত্রিকার রং ও ফন্ট CSS-এ, আর \"আরও পড়ুন\" বাটন বা ডার্ক মোড JavaScript-এ কাজ করে।",
    practice: [
      {
        level: "easy",
        task: "নিচের বিষয়গুলো HTML, CSS বা JavaScript-এর মধ্যে ভাগ করুন: শিরোনাম, বাটনের রং, বাটনের ক্লিক, ছবি, ফন্টের আকার।",
        hint: "কাঠামো, চেহারা, আচরণ এই তিন শ্রেণিতে ভাবুন।",
        solution: "HTML: শিরোনাম, ছবি। CSS: বাটনের রং, ফন্টের আকার। JavaScript: বাটনের ক্লিক।",
        solutionLang: "text"
      },
      {
        level: "medium",
        task: "একটি পেজে `p` ট্যাগের লেখার রং CSS দিয়ে লাল করুন (HTML-এ কোনো style অ্যাট্রিবিউট ছাড়া)।",
        hint: "`<style>` ট্যাগের ভেতরে `p { color: red; }` লিখুন।",
        solution: `<style>
  p { color: red; }
</style>
<p>এই লেখাটি লাল হবে।</p>`,
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি বাটনে ক্লিক করলে একটি `p` ট্যাগের লেখা বদলে যাবে, কিন্তু HTML-এ কোনো inline JavaScript থাকবে না।",
        hint: "`<script>` ট্যাগ ও `addEventListener` ব্যবহার করুন।",
        solution: `<button id="btn">বদলান</button>
<p id="text">প্রথম লেখা</p>
<script>
  document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("text").textContent = "নতুন লেখা";
  });
</script>`,
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "ওয়েবপেজের রং ও ফন্ট ঠিক করার দায়িত্ব কোনটির?",
        options: ["HTML", "CSS", "JavaScript", "URL"],
        answer: 1,
        explanation: "CSS চেহারা বা প্রেজেন্টেশন নিয়ন্ত্রণ করে, যেমন রং, ফন্ট ও লেআউট।"
      },
      {
        question: "বাটনে ক্লিক করলে কী ঘটবে তা কোনটি নির্ধারণ করে?",
        options: ["HTML", "CSS", "JavaScript", "Server"],
        answer: 2,
        explanation: "JavaScript পেজের আচরণ বা ইন্টারঅ্যাকশন নিয়ন্ত্রণ করে, যেমন ক্লিকের প্রতিক্রিয়া।"
      },
      {
        question: "ওয়েবপেজের মূল কাঠামো (শিরোনাম, অনুচ্ছেদ, ছবি) তৈরি করে কোনটি?",
        options: ["HTML", "CSS", "JavaScript", "Browser"],
        answer: 0,
        explanation: "HTML হলো কাঠামো বা structure তৈরির ভাষা।"
      }
    ]
  },
  {
    id: "html-04-setting-up-environment",
    course: "html",
    module: 1,
    moduleTitle: "মডিউল ১: HTML মৌলিক বিষয়",
    order: 4,
    title: "কোডিং পরিবেশ সেটআপ",
    objectives: [
      "কম্পিউটার বা Android ফোনে HTML লেখার জন্য একটি এডিটর বেছে নিতে পারবেন।",
      "লেখা HTML ফাইল ব্রাউজারে খোলার উপায় জানবেন।",
      "ফাইল ও ফোল্ডার সাজানোর সহজ নিয়ম বুঝবেন।"
    ],
    explanation: [
      "HTML লেখার জন্য বিশেষ কোনো ভারী সফটওয়্যার লাগে না। যেকোনো **টেক্সট এডিটর** এবং একটি **ওয়েব ব্রাউজার** থাকলেই যথেষ্ট। তবে কোড লেখা সহজ করে এমন এডিটর ব্যবহার করলে ভুল ধরা সহজ হয়।",
      "**কম্পিউটারে (Windows, macOS, Linux):** VS Code একটি জনপ্রিয় ও বিনামূল্যের এডিটর। এতে HTML ট্যাগ বাছাই করে রং দেখায় এবং সংক্ষেপে ট্যাগ লেখার সুবিধা দেয়। ফাইল সেভ করে ব্রাউজারে খুললেই ফল দেখা যায়।",
      "**Android ফোনে:** Acode বা Dcoder অ্যাপ দিয়ে সরাসরি HTML লেখা যায়। এগুলোতে HTML ফাইল খুলে প্রিভিউ দেখার সুবিধাও থাকে। এই ওয়েবসাইটের প্লেগ্রাউন্ড ফোনের ব্রাউজারেও কাজ করে, তাই আলাদা অ্যাপ ছাড়াও শুরু করা যায়।"
    ],
    whyUseful: "সঠিক সরঞ্জাম থাকলে কোড লেখা দ্রুত হয় এবং ভুল সহজে ধরা পড়ে। ফাইল সঠিক ফোল্ডারে থাকলে ছবি ও CSS লিংক ঠিকমতো কাজ করে।",
    syntax: null,
    example: {
      title: "প্রজেক্ট ফোল্ডারের সাজানো কাঠামো",
      files: [
        {
          lang: "html",
          code: `<!-- ফোল্ডার কাঠামো (নিচের মতো সাজান):
my-website/
├── index.html
├── css/
│   └── style.css
└── images/
    └── photo.jpg
-->
<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>আমার ওয়েবসাইট</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <img src="images/photo.jpg" alt="আমার ছবি">
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<!-- ফোল্ডার কাঠামো ... -->", explain: "এটি একটি কমেন্ট। ব্রাউজার এটি দেখায় না, শুধু লেখককে বোঝাতে লেখা হয়।" },
      { code: `<link rel="stylesheet" href="css/style.css">`, explain: "`css` ফোল্ডারের ভেতর থেকে `style.css` ফাইল লোড হবে। পথটি ফোল্ডার কাঠামোর সাথে মিলতে হবে।" },
      { code: `<img src="images/photo.jpg" alt="আমার ছবি">`, explain: "`images` ফোল্ডারের ছবিটি দেখানো হবে। ফোল্ডারের নাম বা ফাইলের নাম ভুল হলে ছবি আসবে না।" }
    ],
    output: "ফাইলগুলো ঠিকমতো সাজানো থাকলে ব্রাউজারে ছবি ও স্টাইল দুটোই দেখা যাবে। ফাইল ভুল জায়গায় থাকলে ছবি ভাঙা আইকন হিসেবে দেখাবে।",
    mistakes: [
      {
        wrong: `<link rel="stylesheet" href="style.css">`,
        right: `<link rel="stylesheet" href="css/style.css">`,
        explain: "ফাইল যে ফোল্ডারে আছে সেই অনুযায়ী পথ লিখুন। ফোল্ডার থেকে ফাইলের নাম ভুল হলে CSS কাজ করবে না।"
      },
      {
        wrong: "",
        right: "",
        explain: "Windows-এ ফাইলের নাম `index.html.txt` হয়ে গেলে ব্রাউজার HTML হিসেবে চালায় না। Extension (.html) দেখতে নিশ্চিত হন।"
      }
    ],
    bestPractices: [
      "প্রতিটি ওয়েবসাইটের জন্য আলাদা ফোল্ডার বানান।",
      "ফাইল ও ফোল্ডারের নামে বাংলা বা স্পেস না রাখাই ভালো; যেমন `my-website`, `photo.jpg`।",
      "কাজ শুরুর আগে ব্যাকআপ বা সেভ নিশ্চিত করুন।"
    ],
    useCase: "একজন ফ্রিল্যান্সার তার ক্লায়েন্টের ওয়েবসাইট প্রথমে নিজের কম্পিউটারের একটি ফোল্ডারে বানান, ব্রাউজারে পরীক্ষা করেন, তারপর সার্ভারে আপলোড করেন।",
    practice: [
      {
        level: "easy",
        task: "নিজের কম্পিউটার বা ফোনে `my-first-site` নামে একটি ফোল্ডার বানিয়ে তার ভেতরে `index.html` ফাইল তৈরি করুন।",
        hint: "ফাইল ম্যানেজার বা এডিটরের New File অপশন ব্যবহার করুন।",
        solution: "ফোল্ডার: my-first-site/index.html। ফাইলের ভেতরে সবচেয়ে সহজ HTML ডকুমেন্ট লিখে সেভ করুন।",
        solutionLang: "text"
      },
      {
        level: "medium",
        task: "একটি `css` ফোল্ডার তৈরি করে সেখানে `style.css` রাখুন, তারপর `index.html`-এ সঠিক পথে লিংক দিন।",
        hint: "পথ হবে `css/style.css`।",
        solution: `<link rel="stylesheet" href="css/style.css">`,
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি ফোল্ডারে একটি HTML পেজ, একটি CSS ফাইল ও একটি ছবি এমনভাবে রাখুন যেন ছবিটি `images` ফোল্ডার থেকে দেখায়। পেজে এই দুটি লাইন সঠিকভাবে লিখুন।",
        hint: "`images/` এবং `css/` দুটি আলাদা সাবফোল্ডার।",
        solution: `<link rel="stylesheet" href="css/style.css">
<img src="images/logo.png" alt="লোগো">`,
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "HTML ফাইলের সঠিক এক্সটেনশন কোনটি?",
        options: [".htm.txt", ".html", ".web", ".doc"],
        answer: 1,
        explanation: "HTML ফাইলের এক্সটেনশন `.html` (বা কখনো `.htm`)। `.txt` দিলে ব্রাউজার ট্যাগগুলো চালায় না।"
      },
      {
        question: "Android ফোনে HTML লেখার জন্য কোন অ্যাপ ব্যবহার করা যায়?",
        options: ["Acode", "Photoshop", "Excel", "Calculator"],
        answer: 0,
        explanation: "Acode বা Dcoder হলো Android-এর জন্য কোড এডিটর, যেখানে HTML লেখা ও প্রিভিউ দেখা যায়।"
      },
      {
        question: "CSS ফাইলের পথ `css/style.css` হলে ফাইলটি কোথায় থাকবে?",
        options: ["HTML ফাইলের ভেতরে", "css নামের ফোল্ডারের ভেতরে", "images ফোল্ডারে", "ব্রাউজারে"],
        answer: 1,
        explanation: "`css/style.css` মানে `css` ফোল্ডারের ভেতরে `style.css` ফাইল, যা HTML ফাইলের সাথে সম্পর্কিত।"
      }
    ]
  },
  {
    id: "html-05-first-html-file",
    course: "html",
    module: 1,
    moduleTitle: "মডিউল ১: HTML মৌলিক বিষয়",
    order: 5,
    title: "প্রথম HTML ফাইল তৈরি",
    objectives: [
      "একটি নতুন `index.html` ফাইল তৈরি ও সেভ করতে পারবেন।",
      "লেখা ফাইলটি ব্রাউজারে খুলে ফলাফল দেখতে পারবেন।",
      "পরিবর্তন করে আবার রিফ্রেশ করে দেখার অভ্যাস তৈরি করবেন।"
    ],
    explanation: [
      "প্রথমে একটি নতুন ফোল্ডার বানান, তারপর সেখানে `index.html` নামের ফাইল তৈরি করুন। ফাইলের নাম `index.html` রাখা একটি প্রচলিত নিয়ম, কারণ ওয়েব সার্ভার সাধারণত প্রথমে এই ফাইলটিই খোঁজে।",
      "ফাইলের ভেতরে HTML লিখে সেভ করুন। তারপর ফাইলে ডাবল ক্লিক করুন অথবা ব্রাউজারে ফাইল খুলুন। ব্রাউজারের ঠিকানায় `file:///` দিয়ে শুরু হওয়া একটি লিংক দেখা যাবে, সেটি আপনার কম্পিউটারের ফাইল।",
      "কোড বদলালে ফাইল সেভ করে ব্রাউজারে রিফ্রেশ (F5 বা রিফ্রেশ বাটন) দিতে হয়। এই চক্রটি বারবার করতে হবে: লেখা, সেভ, দেখা।"
    ],
    whyUseful: "নিজের প্রথম পেজ নিজে বানিয়ে দেখা শেখার সবচেয়ে ভালো উপায়। ছোট ছোট পরিবর্তন করে ফল দেখলে ধারণা দ্রুত পরিষ্কার হয়।",
    syntax: null,
    example: {
      title: "প্রথম পেজের ছোট উদাহরণ",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>আমার প্রথম পেজ</title>
</head>
<body>
  <h1>আমি ওয়েব ডেভেলপার হতে চাই</h1>
  <p>আজ আমি প্রথম HTML ফাইল বানালাম।</p>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, explain: "মোবাইলে পেজ যেন স্ক্রিনের প্রস্থ অনুযায়ী দেখায় তা নিশ্চিত করে। এটি রেসপন্সিভ ডিজাইনের ভিত্তি।" },
      { code: "<h1>আমি ওয়েব ডেভেলপার হতে চাই</h1>", explain: "পেজের প্রধান শিরোনাম। বড় অক্ষরে দেখাবে।" },
      { code: "<p>আজ আমি প্রথম HTML ফাইল বানালাম।</p>", explain: "একটি অনুচ্ছেদ। ব্রাউজার স্বয়ংক্রিয়ভাবে লাইন ভেঙে লেখা সাজায়।" }
    ],
    output: "ব্রাউজারে বড় শিরোনাম এবং তার নিচে সাধারণ আকারের একটি বাক্য দেখা যাবে।",
    mistakes: [
      {
        wrong: "ফাইল সেভ না করে ব্রাউজার রিফ্রেশ করা",
        right: "আগে Ctrl+S (বা Save) চাপুন, তারপর রিফ্রেশ করুন",
        explain: "সেভ না করলে ব্রাউজার পুরনো ফাইল দেখায়, ফলে মনে হয় পরিবর্তন কাজ করছে না।"
      },
      {
        wrong: "",
        right: "",
        explain: "ফাইল খোলার সময় অন্য কোনো এডিটরে পুরনো কপি খোলা থাকলে সমস্যা হয়। একটি ফাইলের একটি কপি নিয়ে কাজ করুন।"
      }
    ],
    bestPractices: [
      "ছোট পরিবর্তন করে বারবার পরীক্ষা করুন, একসাথে অনেক কিছু লিখবেন না।",
      "ট্যাগ খোলার সাথে সাথে বন্ধ ট্যাগ লিখুন, যেমন `<p>` এর পর `</p>`।",
      "ব্রাউজারের Console (F12) খোলা রাখুন, ভুল থাকলে সেখানে বার্তা আসে।"
    ],
    useCase: "একজন শিক্ষার্থী প্রতিদিন একটি নতুন পেজ বানিয়ে নিজের শেখা ও প্রকল্পের অগ্রগতি সংরক্ষণ করতে পারে।",
    practice: [
      {
        level: "easy",
        task: "একটি `index.html` ফাইল বানিয়ে তাতে আপনার নাম ও আপনার পছন্দের একটি বাক্য লিখে ব্রাউজারে খুলুন।",
        hint: "উপরের উদাহরণের মতো কাঠামো রাখুন।",
        solution: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>আমার পরিচিতি</title>
</head>
<body>
  <h1>আমার নাম করিম</h1>
  <p>আমার পছন্দ ওয়েব ডিজাইন।</p>
</body>
</html>`,
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "পেজে একটি `h2` শিরোনাম ও তিনটি আলাদা `p` অনুচ্ছেদ যোগ করুন।",
        hint: "প্রতিটি ট্যাগ আলাদা লাইনে লিখুন।",
        solution: `<h2>আমার লক্ষ্য</h2>
<p>প্রথমে HTML শিখব।</p>
<p>তারপর CSS শিখব।</p>
<p>শেষে JavaScript শিখব।</p>`,
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "পেজে ইচ্ছাকৃতভাবে একটি ভুল (যেমন `</p>` বাদ) দিন, ব্রাউজারে কী হয় দেখুন, তারপর সেটি ঠিক করুন। ঠিক করা পেজের কাঠামো লিখুন।",
        hint: "ভুল হলে ব্রাউজার সাধারণত সমস্যাটি নিজে থেকে সামলে নেয়; তবু সঠিক কোডই লিখুন।",
        solution: `<p>এটি একটি অনুচ্ছেদ।</p>
<p>এই অনুচ্ছেদটিও ঠিকভাবে বন্ধ।</p>`,
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "ওয়েব সার্ভার সাধারণত কোন ফাইলটি প্রথমে খোঁজে?",
        options: ["index.html", "main.css", "app.js", "logo.png"],
        answer: 0,
        explanation: "index.html হলো প্রচলিত প্রবেশপথের ফাইল, যা সার্ভার প্রথমে খোঁজে।"
      },
      {
        question: "কোড বদলানোর পর পরিবর্তন দেখতে কী করা উচিত?",
        options: ["শুধু ফাইল বন্ধ করা", "সেভ করে ব্রাউজার রিফ্রেশ করা", "কম্পিউটার রিস্টার্ট করা", "নতুন ফোল্ডার বানানো"],
        answer: 1,
        explanation: "ফাইল সেভ করে ব্রাউজার রিফ্রেশ করলে নতুন পরিবর্তন দেখা যায়।"
      },
      {
        question: "ব্রাউজারের ঠিকানায় `file:///` দিয়ে শুরু হলে সেটি কী বোঝায়?",
        options: ["ইন্টারনেটের পেজ", "কম্পিউটারের লোকাল ফাইল", "মোবাইল অ্যাপ", "ডাটাবেস"],
        answer: 1,
        explanation: "`file:///` দিয়ে শুরু হওয়া ঠিকানা আপনার কম্পিউটারের লোকাল ফাইল নির্দেশ করে।"
      }
    ]
  },
  {
    id: "html-06-document-structure",
    course: "html",
    module: 1,
    moduleTitle: "মডিউল ১: HTML মৌলিক বিষয়",
    order: 6,
    title: "HTML ডকুমেন্টের মূল কাঠামো",
    objectives: [
      "`<!DOCTYPE>`, `<html>`, `<head>` ও `<body>` এর কাজ বুঝবেন।",
      "`<head>`-এর ভেতরে কোন তথ্য রাখা হয় তা জানবেন।",
      "একটি সম্পূর্ণ, সঠিক কাঠামোর HTML ডকুমেন্ট লিখতে পারবেন।"
    ],
    explanation: [
      "প্রতিটি HTML ডকুমেন্টের একটি নির্দিষ্ট কাঠামো থাকে। প্রথমে `<!DOCTYPE html>` বলে দেয় এটি HTML5 ডকুমেন্ট। এরপর `<html>` ট্যাগ পুরো ডকুমেন্টকে মোড়ায়। এর ভেতরে দুটি প্রধান অংশ থাকে: `<head>` এবং `<body>`।",
      "`<head>` অংশে থাকে পেজের তথ্য বা **মেটাডেটা**: ভাষা, এনকোডিং, শিরোনাম, CSS ফাইলের লিংক ইত্যাদি। এই অংশ সরাসরি স্ক্রিনে দেখা যায় না। `<body>` অংশে থাকে সব দৃশ্যমান কনটেন্ট: শিরোনাম, লেখা, ছবি, বাটন।",
      "মনে রাখুন, `<head>` ও `<body>` একে অপরের ভেতরে থাকে না। দুটি `<html>` ট্যাগের ভেতরে পাশাপাশি থাকে।"
    ],
    whyUseful: "সঠিক কাঠামো থাকলে ব্রাউজার, সার্চ ইঞ্জিন ও স্ক্রিন রিডার পেজটি সঠিকভাবে বোঝে। বাংলা অক্ষর, ট্যাবের শিরোনাম ও মোবাইল ভিউ সবই এই কাঠামোর ওপর নির্ভর করে।",
    syntax: {
      lang: "html",
      code: `<!DOCTYPE html>
<html lang="bn">
  <head>
    <!-- পেজের তথ্য -->
  </head>
  <body>
    <!-- দৃশ্যমান কনটেন্ট -->
  </body>
</html>`
    },
    example: {
      title: "সম্পূর্ণ কাঠামোসহ একটি পেজ",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="HTML ডকুমেন্টের কাঠামো শেখার একটি উদাহরণ পেজ।">
  <title>ডকুমেন্ট কাঠামো</title>
</head>
<body>
  <header>
    <h1>আমার ব্লগ</h1>
  </header>
  <main>
    <p>এটি মূল কনটেন্ট অংশ।</p>
  </main>
  <footer>
    <p>&copy; ২০২৬ আমার ব্লগ</p>
  </footer>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<!DOCTYPE html>", explain: "HTML5 ডকুমেন্টের ঘোষণা। সবসময় সবার উপরে।" },
      { code: `<html lang="bn">`, explain: "পুরো পেজের ভাষা বাংলা।" },
      { code: `<meta name="description" content="...">`, explain: "সার্চ রেজাল্টে দেখানোর একটি সংক্ষিপ্ত বিবরণ। এটি `head`-এর ভেতরে থাকে।" },
      { code: "<header> ... </header>", explain: "পেজের উপরের অংশ, যেমন শিরোনাম ও নেভিগেশন। সেমান্টিক ট্যাগ (অর্থবহ ট্যাগ)।" },
      { code: "<main> ... </main>", explain: "পেজের প্রধান কনটেন্ট। একটি পেজে সাধারণত একটি `main` থাকে।" },
      { code: "&copy;", explain: "কপিরাইট চিহ্ন ©। এটি একটি HTML entity, যা বিশেষ চিহ্ন দেখায়।" }
    ],
    output: "ব্রাউজারের ট্যাবে \"ডকুমেন্ট কাঠামো\" লেখা থাকবে। পেজে উপরে শিরোনাম, মাঝে একটি অনুচ্ছেদ এবং নিচে কপিরাইট লেখা দেখা যাবে।",
    mistakes: [
      {
        wrong: `<body>
<head>...</head>
</body>`,
        right: `<head>...</head>
<body>...</body>`,
        explain: "`head` ও `body` একে অপরের ভেতরে রাখা যাবে না। দুটি আলাদাভাবে `html`-এর ভেতরে থাকবে।"
      },
      {
        wrong: `<html>
<body>...</body>
</html>`,
        right: `<!DOCTYPE html>
<html lang="bn">
<head>...</head>
<body>...</body>
</html>`,
        explain: "DOCTYPE ও lang না দিলে ব্রাউজার পুরনো মোডে দেখায় এবং বাংলার জন্য সমস্যা হতে পারে।"
      }
    ],
    bestPractices: [
      "প্রতিটি পেজে `lang`, `charset`, `viewport` ও `title` দিন।",
      "কাঠামো বোঝাতে `header`, `main`, `footer` ব্যবহার করুন।",
      "ইন্ডেন্টেশন দিয়ে `head` ও `body` আলাদা করে লিখুন, যাতে পড়া সহজ হয়।"
    ],
    useCase: "একটি ব্লগ সাইটের প্রতিটি পেজের শুরুর কাঠামো একই থাকে। নতুন পেজ বানানোর সময় একই টেমপ্লেট কপি করে শুধু ভেতরের কনটেন্ট বদলানো হয়।",
    practice: [
      {
        level: "easy",
        task: "উপরের উদাহরণ থেকে `head` ও `body`-এর ভেতরের যেকোনো তিনটি উপাদানের নাম লিখুন।",
        hint: "meta, title, header, main, footer ইত্যাদি দেখুন।",
        solution: "head-এর ভেতরে: meta, title। body-এর ভেতরে: header, main, footer (যে কোনো তিনটি)।",
        solutionLang: "text"
      },
      {
        level: "medium",
        task: "একটি নতুন পেজ লিখুন যেখানে `head`-এ title ও description থাকবে, এবং `body`-তে একটি `h1` ও একটি `p` থাকবে।",
        hint: "উপরের কাঠামোর মতো লিখুন, শুধু লেখা বদলান।",
        solution: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="আমার শেখার যাত্রা।">
  <title>শেখার যাত্রা</title>
</head>
<body>
  <h1>আমার শেখার যাত্রা</h1>
  <p>আজ থেকে শুরু।</p>
</body>
</html>`,
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি পেজে `header`, `main` ও `footer` ব্যবহার করুন, এবং `main`-এর ভেতরে দুটি অনুচ্ছেদ দিন।",
        hint: "প্রতিটি সেকশন একটি আলাদা ট্যাগের ভেতরে রাখুন।",
        solution: `<body>
  <header><h1>আমার সাইট</h1></header>
  <main>
    <p>প্রথম অনুচ্ছেদ।</p>
    <p>দ্বিতীয় অনুচ্ছেদ।</p>
  </main>
  <footer><p>যোগাযোগ: example@mail.com</p></footer>
</body>`,
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "`<!DOCTYPE html>` কী বোঝায়?",
        options: ["পেজের রং", "এটি HTML5 ডকুমেন্ট", "ফন্টের নাম", "লিংক"],
        answer: 1,
        explanation: "`<!DOCTYPE html>` ব্রাউজারকে জানায় এটি HTML5 ডকুমেন্ট।"
      },
      {
        question: "ব্রাউজারের ট্যাবের শিরোনাম কোথায় লিখতে হয়?",
        options: ["body-এর ভেতরে", "head-এর ভেতরে title ট্যাগে", "footer-এ", "CSS ফাইলে"],
        answer: 1,
        explanation: "`<title>` ট্যাগ `<head>`-এর ভেতরে থাকে এবং ব্রাউজারের ট্যাবে দেখায়।"
      },
      {
        question: "দৃশ্যমান কনটেন্ট (লেখা, ছবি, বাটন) কোথায় থাকে?",
        options: ["head-এ", "body-তে", "DOCTYPE-এ", "meta-তে"],
        answer: 1,
        explanation: "পেজের দৃশ্যমান কনটেন্ট সবসময় `<body>` ট্যাগের ভেতরে থাকে।"
      }
    ]
  },
  {
    id: "html-07-tags-elements-attributes",
    course: "html",
    module: 1,
    moduleTitle: "মডিউল ১: HTML মৌলিক বিষয়",
    order: 7,
    title: "ট্যাগ, এলিমেন্ট ও অ্যাট্রিবিউট",
    objectives: [
      "ট্যাগ, এলিমেন্ট ও অ্যাট্রিবিউটের পার্থক্য বলতে পারবেন।",
      "অ্যাট্রিবিউটের নাম ও মান সঠিকভাবে লিখতে পারবেন।",
      "void (একক) ট্যাগ ও জোড়া ট্যাগের পার্থক্য বুঝবেন।"
    ],
    explanation: [
      "**ট্যাগ (tag)** হলো `<` ও `>` চিহ্নের ভেতরের নাম, যেমন `<p>`। এটি শুরু ও শেষ নির্দেশ করে। শুরুর ট্যাগকে **opening tag** এবং শেষের ট্যাগকে **closing tag** বলে, যেমন `<p>` ও `</p>`।",
      "**এলিমেন্ট (element)** হলো শুরুর ট্যাগ, ভেতরের কনটেন্ট এবং শেষের ট্যাগ মিলিয়ে পুরো অংশ। যেমন `<p>আমি শিখছি</p>` একটি এলিমেন্ট।",
      "**অ্যাট্রিবিউট (attribute)** হলো ট্যাগের অতিরিক্ত তথ্য। এটি শুরুর ট্যাগের ভেতরে `নাম=\"মান\"` আকারে লেখা হয়, যেমন `<a href=\"https://example.com\">`। কিছু ট্যাগ (যেমন `<img>`, `<br>`) শেষ ট্যাগ লাগে না; এদের বলে void element।"
    ],
    whyUseful: "ট্যাগ ও অ্যাট্রিবিউটের ধারণা না থাকলে HTML পড়া ও লেখা কঠিন মনে হয়। লিংক, ছবি, ফর্ম সব কিছুই এই নিয়মে কাজ করে।",
    syntax: {
      lang: "html",
      code: `<tagname attribute="value">কনটেন্ট</tagname>
<img src="ছবি.jpg" alt="বিবরণ">`
    },
    example: {
      title: "ট্যাগ, এলিমেন্ট ও অ্যাট্রিবিউট একসাথে",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>ট্যাগ ও অ্যাট্রিবিউট</title>
</head>
<body>
  <a href="https://developer.mozilla.org/bn/" target="_blank" rel="noopener noreferrer">MDN ডকুমেন্টেশন</a>
  <p class="intro" id="first">এটি একটি <strong>গুরুত্বপূর্ণ</strong> বাক্য।</p>
  <img src="images/sample.jpg" alt="একটি নমুনা ছবি" width="120">
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: `<a href="..." target="_blank" rel="noopener noreferrer">`, explain: "`a` হলো লিংক। `href` লিংকের ঠিকানা, `target` নতুন ট্যাবে খোলার জন্য। `rel` নিরাপত্তার জন্য যোগ করা হয়।" },
      { code: `<p class="intro" id="first">`, explain: "`p` এলিমেন্টে দুটি অ্যাট্রিবিউট আছে: `class` (স্টাইলের জন্য) এবং `id` (একটি নির্দিষ্ট এলিমেন্টের পরিচয়)।" },
      { code: "<strong>গুরুত্বপূর্ণ</strong>", explain: "`strong` ট্যাগের ভেতরের লেখা গুরুত্বপূর্ণ হিসেবে জোর দেয় (সাধারণত গাঢ় দেখায়)।" },
      { code: `<img src="..." alt="..." width="120">`, explain: "`img` একটি void element, তাই শেষ ট্যাগ নেই। `alt` অবশ্যই দিতে হবে।" }
    ],
    output: "পেজে একটি নীল লিংক দেখা যাবে, তার নিচে একটি অনুচ্ছেদ যার একটি শব্দ গাঢ় দেখাবে, এবং একটি ছবি (ইন্টারনেট না থাকলে ভাঙা ছবি ও alt লেখা)।",
    mistakes: [
      {
        wrong: `<a href=https://example.com>লিংক</a>`,
        right: `<a href="https://example.com">লিংক</a>`,
        explain: "অ্যাট্রিবিউটের মান উদ্ধৃতি চিহ্ন (\") দিয়ে লেখা ভালো। মানে স্পেস থাকলে বা কিছু চিহ্ন থাকলে এটি জরুরি।"
      },
      {
        wrong: `<p>এটি একটি অনুচ্ছেদ`,
        right: `<p>এটি একটি অনুচ্ছেদ</p>`,
        explain: "জোড়া ট্যাগের শেষ ট্যাগ ভুলে গেলে পরের সব কনটেন্ট ভুল জায়গায় যেতে পারে।"
      },
      {
        wrong: `<img src="a.jpg"></img>`,
        right: `<img src="a.jpg" alt="বিবরণ">`,
        explain: "`img` void element, তাই `</img>` দরকার নেই। এছাড়া `alt` না দিলে অ্যাক্সেসিবিলিটি কমে।"
      }
    ],
    bestPractices: [
      "অ্যাট্রিবিউটের মান সবসময় দুইটি ডাবল কোটেশনে (\"\") লিখুন।",
      "`id` একটি পেজে একবারই ব্যবহার করুন; `class` একাধিক এলিমেন্টে ব্যবহার করা যায়।",
      "ট্যাগের নাম ছোট হাতের অক্ষরে লিখুন, যেমন `<p>`।"
    ],
    useCase: "একটি ই-কমার্স সাইটে প্রতিটি প্রোডাক্টের ছবিতে `alt` অ্যাট্রিবিউট থাকে, যাতে দৃষ্টিহীন ব্যবহারকারী পণ্যের বিবরণ শুনতে পারেন।",
    practice: [
      {
        level: "easy",
        task: "নিচের লাইনে ট্যাগ, অ্যাট্রিবিউট ও এলিমেন্টের নাম চিহ্নিত করুন: `<a href=\"index.html\">হোম</a>`",
        hint: "`a` ট্যাগ, `href` অ্যাট্রিবিউট, পুরো লাইনটি এলিমেন্ট।",
        solution: "ট্যাগ: a। অ্যাট্রিবিউট: href। এলিমেন্ট: `<a href=\"index.html\">হোম</a>` পুরোটাই।",
        solutionLang: "text"
      },
      {
        level: "medium",
        task: "একটি `div` এলিমেন্টে `class=\"box\"` এবং `id=\"main-box\"` দিয়ে ভেতরে \"হ্যালো\" লিখুন।",
        hint: "শুরুর ট্যাগে অ্যাট্রিবিউট যোগ করুন।",
        solution: `<div class="box" id="main-box">হ্যালো</div>`,
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি ছবি যোগ করুন যার উচ্চতা ও প্রস্থ আছে, `alt` বিবরণ আছে, এবং ছবিতে ক্লিক করলে একটি নতুন ট্যাবে `example.com` খুলবে।",
        hint: "ছবিটি `a` ট্যাগের ভেতরে রাখুন।",
        solution: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  <img src="logo.png" alt="কোম্পানির লোগো" width="100" height="100">
</a>`,
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "`<a href=\"...\">` এর `href` কী নির্দেশ করে?",
        options: ["লিংকের রং", "লিংকের ঠিকানা", "লিংকের আকার", "লিংকের নাম"],
        answer: 1,
        explanation: "`href` অ্যাট্রিবিউট লিংকের গন্তব্য বা ঠিকানা নির্দেশ করে।"
      },
      {
        question: "নিচের কোনটি void element (শেষ ট্যাগ লাগে না)?",
        options: ["<p>", "<div>", "<img>", "<h1>"],
        answer: 2,
        explanation: "`<img>` হলো void element, তাই এর কোনো closing tag লাগে না।"
      },
      {
        question: "এলিমেন্টের শুরু থেকে শেষ পর্যন্ত পুরো অংশকে কী বলে?",
        options: ["Attribute", "Element", "Entity", "Comment"],
        answer: 1,
        explanation: "শুরুর ট্যাগ, কনটেন্ট ও শেষের ট্যাগ মিলে একটি এলিমেন্ট হয়।"
      }
    ]
  },
  {
    id: "html-08-headings-paragraphs-breaks",
    course: "html",
    module: 1,
    moduleTitle: "মডিউল ১: HTML মৌলিক বিষয়",
    order: 8,
    title: "শিরোনাম, প্যারাগ্রাফ ও লাইন ব্রেক",
    objectives: [
      "`h1` থেকে `h6` পর্যন্ত শিরোনামের ক্রম বুঝবেন।",
      "`p`, `br` ও `hr` ট্যাগের ব্যবহার জানবেন।",
      "একটি পেজে সঠিক শিরোনাম ক্রম (heading hierarchy) তৈরি করতে পারবেন।"
    ],
    explanation: [
      "HTML-এ ছয় স্তরের শিরোনাম আছে: `h1` সবচেয়ে গুরুত্বপূর্ণ ও বড়, `h6` সবচেয়ে ছোট। একটি পেজের মূল শিরোনাম সাধারণত একটি `h1`, তারপর `h2` দিয়ে প্রধান বিভাগ, `h3` দিয়ে উপবিভাগ ইত্যাদি। এটিকে **শিরোনাম ক্রম (heading hierarchy)** বলে।",
      "`p` ট্যাগ একটি অনুচ্ছেদ (paragraph) তৈরি করে। ব্রাউজার `p`-এর আগে ও পরে স্বয়ংক্রিয়ভাবে ফাঁকা জায়গা দেয়। সাধারণ লেখা শুধু কোডে লিখলেও তা একটানা দেখায়, তাই অনুচ্ছেদের জন্য `p` ব্যবহার করুন।",
      "`br` একটি লাইন ভাঙে (একই অনুচ্ছেদের ভেতরে), আর `hr` একটি আনুভূমিক বিভাজক রেখা আঁকে। `br` ও `hr` দুটিই void element।"
    ],
    whyUseful: "সঠিক শিরোনাম ক্রম পেজের বিষয়বস্তু গঠন স্পষ্ট করে। এতে সার্চ ইঞ্জিন ও স্ক্রিন রিডার ব্যবহারকারীরা সহজে পেজের কাঠামো বুঝতে পারেন।",
    syntax: {
      lang: "html",
      code: `<h1>মূল শিরোনাম</h1>
<h2>উপশিরোনাম</h2>
<p>একটি অনুচ্ছেদ।</p>
<br>
<hr>`
    },
    example: {
      title: "শিরোনাম, অনুচ্ছেদ ও লাইন ব্রেক",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>শিরোনাম ও অনুচ্ছেদ</title>
</head>
<body>
  <h1>বাংলাদেশের প্রকৃতি</h1>
  <h2>নদী</h2>
  <p>বাংলাদেশে অনেক নদী আছে। পদ্মা, যমুনা ও মেঘনা প্রধান নদী।</p>
  <h3>পদ্মা</h3>
  <p>পদ্মা একটি বড় নদী।<br>এটি দক্ষিণে প্রবাহিত হয়।</p>
  <hr>
  <h2>পাহাড়</h2>
  <p>বান্দরবান অঞ্চলে অনেক পাহাড় আছে।</p>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<h1>বাংলাদেশের প্রকৃতি</h1>", explain: "পেজের মূল শিরোনাম। একটি পেজে সাধারণত একটি `h1` থাকে।" },
      { code: "<h2>নদী</h2>", explain: "`h1`-এর অধীনে একটি প্রধান বিভাগ।" },
      { code: "<h3>পদ্মা</h3>", explain: "`h2`-এর ভেতরের একটি উপবিভাগ।" },
      { code: "<p>পদ্মা একটি বড় নদী।<br>এটি ...</p>", explain: "`br` একই অনুচ্ছেদের ভেতরে লাইন ভাঙে। নতুন অনুচ্ছেদের জন্য নতুন `p` ব্যবহার করুন।" },
      { code: "<hr>", explain: "বিষয় বদলের জন্য একটি সোজা রেখা আঁকে।" }
    ],
    output: "পেজে বড় শিরোনাম, তার নিচে ছোট শিরোনাম ও অনুচ্ছেদ দেখা যাবে। \"পদ্মা একটি বড় নদী।\" এর পরে লাইন ভেঙে \"এটি দক্ষিণে প্রবাহিত হয়।\" আসবে, এবং একটি রেখা দিয়ে নতুন বিভাগ শুরু হবে।",
    mistakes: [
      {
        wrong: `<h2>শিরোনাম</h2>
<h1>ছোট শিরোনাম</h1>`,
        right: `<h1>শিরোনাম</h1>
<h2>উপশিরোনাম</h2>`,
        explain: "শিরোনামকে শুধু আকারের জন্য ব্যবহার করবেন না। কাঠামো অনুযায়ী ক্রম রাখুন।"
      },
      {
        wrong: `<h1>লেখা</h1>
<br><br><br>`,
        right: `<h1>লেখা</h1>
<p>নতুন অনুচ্ছেদ</p>`,
        explain: "অনেক `br` দিয়ে ফাঁকা জায়গা বানানো ভালো অভ্যাস নয়। ফাঁকা জায়গার জন্য CSS margin ব্যবহার করুন।"
      },
      {
        wrong: "<p>শিরোনাম বোঝাতে শুধু বড় লেখা</p>",
        right: "<h2>শিরোনাম</h2>",
        explain: "শুধু আকার বড় করলে ব্রাউজার বুঝতে পারে না এটি শিরোনাম। সঠিক ট্যাগ ব্যবহার করুন।"
      }
    ],
    bestPractices: [
      "একটি পেজে একটি `h1` রাখুন এবং শিরোনাম ক্রম ধারাবাহিক রাখুন।",
      "অনুচ্ছেদের জন্য `p` ব্যবহার করুন, `br` শুধু একই অনুচ্ছেদে লাইন ভাঙতে।",
      "শিরোনামের লেখা সংক্ষিপ্ত ও বিবরণমূলক রাখুন।"
    ],
    useCase: "একটি নিউজ আর্টিকেলে `h1` দিয়ে খবরের শিরোনাম, `h2` দিয়ে উপশিরোনাম, এবং `p` দিয়ে খবরের বিস্তারিত লেখা হয়।",
    practice: [
      {
        level: "easy",
        task: "`h1` থেকে `h3` পর্যন্ত তিনটি শিরোনাম লিখুন, তাদের নিচে একটি করে `p`।",
        hint: "প্রতিটি শিরোনামের পরে একটি অনুচ্ছেদ দিন।",
        solution: `<h1>আমার বই</h1>
<p>বইয়ের পরিচিতি।</p>
<h2>অধ্যায় ১</h2>
<p>প্রথম অধ্যায়ের লেখা।</p>
<h3>উপ-অধ্যায়</h3>
<p>বিস্তারিত।</p>`,
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি অনুচ্ছেদে তিন লাইনের কবিতা লিখুন, যেখানে প্রতি লাইন `br` দিয়ে আলাদা হবে।",
        hint: "একটি `p` ট্যাগ ও দুইটি `br` ব্যবহার করুন।",
        solution: `<p>আকাশে মেঘ ভাসে,<br>বাতাসে সুর আসে,<br>মন হয় উড়ু উড়ু।</p>`,
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি পেজে একটি `h1`, দুইটি `h2` ও প্রতিটি `h2`-এর নিচে একটি করে `h3` ও `p` দিন, এবং প্রতিটি বিভাগের পর `hr` দিন।",
        hint: "কাঠামোটি ক্রমানুসারে লিখুন।",
        solution: `<h1>কোর্স পরিচিতি</h1>
<h2>মডিউল ১</h2>
<h3>পাঠ ১</h3>
<p>প্রথম পাঠের বিবরণ।</p>
<hr>
<h2>মডিউল ২</h2>
<h3>পাঠ ১</h3>
<p>দ্বিতীয় মডিউলের বিবরণ।</p>
<hr>`,
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "একটি পেজে সাধারণত কয়টি `h1` থাকা উচিত?",
        options: ["কোনোটিই না", "একটি", "দশটি", "যতগুলো খুশি"],
        answer: 1,
        explanation: "একটি পেজের মূল শিরোনাম একটি `h1`, যা বিষয়বস্তুর প্রধান পরিচয় দেয়।"
      },
      {
        question: "একই অনুচ্ছেদের ভেতরে লাইন ভাঙতে কোন ট্যাগ ব্যবহার করা হয়?",
        options: ["<hr>", "<br>", "<h6>", "<img>"],
        answer: 1,
        explanation: "`<br>` একই অনুচ্ছেদের ভেতরে লাইন ভাঙে। `<hr>` একটি বিভাজক রেখা আঁকে।"
      },
      {
        question: "নতুন অনুচ্ছেদ তৈরির সঠিক ট্যাগ কোনটি?",
        options: ["<p>", "<b>", "<span>", "<font>"],
        answer: 0,
        explanation: "`<p>` হলো অনুচ্ছেদের জন্য সঠিক ট্যাগ।"
      }
    ]
  },
  {
    id: "html-09-comments-indentation",
    course: "html",
    module: 1,
    moduleTitle: "মডিউল ১: HTML মৌলিক বিষয়",
    order: 9,
    title: "কমেন্ট ও ইন্ডেন্টেশন",
    objectives: [
      "HTML কমেন্ট (`<!-- -->`) লেখার নিয়ম জানবেন।",
      "কখন ও কেন কমেন্ট লিখতে হয় তা বুঝবেন।",
      "ইন্ডেন্টেশন (লাইনের ফাঁকা জায়গা) দিয়ে কোড পরিষ্কার রাখার নিয়ম শিখবেন।"
    ],
    explanation: [
      "**কমেন্ট (comment)** হলো কোডের ভেতরে লেখা নোট, যা ব্রাউজার দেখায় না। HTML কমেন্ট লেখা হয় `<!--` দিয়ে শুরু এবং `-->` দিয়ে শেষ করে। কমেন্ট এক লাইনে বা একাধিক লাইনে লেখা যায়।",
      "কমেন্ট দিয়ে বিভাগ বোঝানো, কী কাজ করছে বোঝানো বা কোনো অংশ সাময়িকভাবে বন্ধ রাখা যায়। তবে কমেন্টে গোপন তথ্য বা পাসওয়ার্ড লেখা উচিত নয়, কারণ যে কেউ পেজের সোর্স কোড দেখে তা পড়তে পারে।",
      "**ইন্ডেন্টেশন (indentation)** হলো ট্যাগের ভেতরের লাইনগুলো ডানদিকে সরিয়ে লেখা। এতে কোন ট্যাগ কার ভেতরে আছে তা এক নজরে বোঝা যায়। সাধারণত দুই বা চার স্পেস ব্যবহার করা হয়।"
    ],
    whyUseful: "বড় পেজে ভালো ইন্ডেন্টেশন ও কমেন্ট না থাকলে কোথায় ভুল তা খোঁজা কঠিন হয়। টিমে কাজ করলে অন্যরাও সহজে কোড বুঝতে পারে।",
    syntax: {
      lang: "html",
      code: `<!-- এক লাইনের কমেন্ট -->
<!--
  একাধিক লাইনের
  কমেন্ট
-->`
    },
    example: {
      title: "কমেন্ট ও সঠিক ইন্ডেন্টেশন",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>কমেন্ট উদাহরণ</title>
</head>
<body>
  <!-- ১. হেডার অংশ -->
  <header>
    <h1>আমার ওয়েবসাইট</h1>
  </header>

  <!--
    ২. মূল কনটেন্ট
    এই অংশে প্রধান লেখা থাকবে
  -->
  <main>
    <p>স্বাগতম!</p>
  </main>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "<!-- ১. হেডার অংশ -->", explain: "এক লাইনের কমেন্ট। ব্রাউজারে কিছু দেখায় না।" },
      { code: "<!--\n    ২. মূল কনটেন্ট\n    এই অংশে ...\n  -->", explain: "একাধিক লাইনের কমেন্ট। শুরু `<!--` এবং শেষ `-->`।" },
      { code: "  <header>\n    <h1>...</h1>\n  </header>", explain: "`h1` `header`-এর ভেতরে, তাই দুই স্পেস বেশি ডানে লেখা হয়েছে। এটিই ইন্ডেন্টেশন।" }
    ],
    output: "পেজে \"আমার ওয়েবসাইট\" শিরোনাম ও \"স্বাগতম!\" লেখা দেখা যাবে। কমেন্টের লেখা স্ক্রিনে দেখাবে না, তবে পেজের সোর্স কোডে (View Source) দেখা যাবে।",
    mistakes: [
      {
        wrong: "<!-- আমার পাসওয়ার্ড: 1234 -->",
        right: "<!-- লগইন ফর্ম এখানে থাকবে -->",
        explain: "কমেন্টে গোপন তথ্য লিখবেন না। যে কেউ সোর্স কোড দেখে তা পড়তে পারে।"
      },
      {
        wrong: `<!-- <p>পুরনো লেখা</p> -->`,
        right: "কমেন্ট শেষ করতে ভুলবেন না: -->",
        explain: "কমেন্ট ঠিকভাবে বন্ধ না করলে পরের সব কোড কমেন্টের ভেতরে চলে যেতে পারে।"
      },
      {
        wrong: `<div><p><span>লেখা</span></p></div>`,
        right: `<div>
  <p>
    <span>লেখা</span>
  </p>
</div>`,
        explain: "একই লাইনে সব লিখলে পড়া কঠিন। ইন্ডেন্টেশন দিয়ে সাজালে কাঠামো স্পষ্ট হয়।"
      }
    ],
    bestPractices: [
      "কমেন্ট এমনভাবে লিখুন যাতে কেন কাজটি করা হচ্ছে তা বোঝা যায়, শুধু কী হচ্ছে তা নয়।",
      "একই ধরনের ইন্ডেন্টেশন (যেমন ২ স্পেস) পুরো প্রজেক্টে ধরে রাখুন।",
      "অপ্রয়োজনীয় পুরনো কোড কমেন্টে রেখে না দিয়ে মুছে ফেলুন; সংস্করণ নিয়ন্ত্রণ (Git) এ ইতিহাস থাকে।"
    ],
    useCase: "একটি টিমের বড় পেজে প্রতিটি বিভাগের শুরুতে কমেন্ট থাকে, যেমন \"<!-- Hero section -->\", যাতে নতুন সদস্য সহজে কোড খুঁজে পান।",
    practice: [
      {
        level: "easy",
        task: "একটি এক লাইনের কমেন্ট লিখুন যেখানে লেখা থাকবে \"এটি আমার প্রথম পেজ\"।",
        hint: "`<!--` দিয়ে শুরু, `-->` দিয়ে শেষ।",
        solution: "<!-- এটি আমার প্রথম পেজ -->",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি `div` ও তার ভেতরে একটি `p` লিখুন যেখানে সঠিক ইন্ডেন্টেশন থাকবে এবং `div`-এর ওপরে কমেন্ট থাকবে।",
        hint: "ভেতরের লাইন ডানদিকে সরান।",
        solution: `<!-- বিষয়বস্তুর বক্স -->
<div>
  <p>এখানে লেখা।</p>
</div>`,
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "নিচের অগোছালো কোডটি ইন্ডেন্টেশন দিয়ে সাজান: `<ul><li>এক</li><li>দুই</li></ul>`।",
        hint: "`ul`-এর ভেতরের `li` গুলো আলাদা লাইনে এবং ডানদিকে সরিয়ে লিখুন।",
        solution: `<ul>
  <li>এক</li>
  <li>দুই</li>
</ul>`,
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "HTML কমেন্ট শুরু হয় কোন চিহ্ন দিয়ে?",
        options: ["//", "<!--", "/*", "#"],
        answer: 1,
        explanation: "HTML কমেন্ট শুরু হয় `<!--` দিয়ে এবং শেষ হয় `-->` দিয়ে।"
      },
      {
        question: "কমেন্টে কোন তথ্য লেখা উচিত নয়?",
        options: ["কোডের ব্যাখ্যা", "বিভাগের নাম", "পাসওয়ার্ড বা গোপন তথ্য", "কাজের নোট"],
        answer: 2,
        explanation: "পেজের সোর্স কোড যে কেউ দেখতে পারে, তাই কমেন্টে গোপন তথ্য রাখা উচিত নয়।"
      },
      {
        question: "ইন্ডেন্টেশনের প্রধান উদ্দেশ্য কী?",
        options: ["পেজের রং বদলানো", "কোডের কাঠামো স্পষ্ট করা", "ছবির আকার বাড়ানো", "ব্রাউজার দ্রুত করা"],
        answer: 1,
        explanation: "ইন্ডেন্টেশন দিয়ে কোন ট্যাগ কার ভেতরে আছে তা সহজে বোঝা যায়, যা কোড পড়া ও ডিবাগ সহজ করে।"
      }
    ]
  }
]);
