window.LESSONS = window.LESSONS || [];
window.LESSONS.push(...[
  {
    id: "css-01-what-is-css",
    course: "css",
    module: 1,
    moduleTitle: "মডিউল ১: CSS মৌলিক বিষয়",
    order: 1,
    title: "CSS কী?",
    objectives: [
      "CSS এর পুরো নাম ও কাজ বলতে পারবেন।",
      "HTML ও CSS একসাথে কীভাবে কাজ করে তা বুঝবেন।",
      "একটি সাধারণ CSS নিয়ম (rule) লিখতে পারবেন।"
    ],
    explanation: [
      "CSS হলো **Cascading Style Sheets**। এটি ওয়েবপেজের চেহারা নিয়ন্ত্রণ করে: রং, ফন্ট, আকার, জায়গা, লেআউট। HTML যেখানে কাঠামো তৈরি করে, CSS সেখানে সাজসজ্জা যোগ করে।",
      "একটি CSS নিয়ম তিন অংশে গঠিত: **সিলেক্টর** (কোন এলিমেন্ট), **প্রপার্টি** (কোন দিক), এবং **ভ্যালু** (কী মান)। যেমন `h1 { color: blue; }` মানে সব `h1` শিরোনামের রং নীল।",
      "CSS ছাড়া ওয়েবপেজ সাদা-কালো ডকুমেন্টের মতো দেখায়। CSS যোগ করলেই পেজ আকর্ষণীয় ও পড়তে সহজ হয়।"
    ],
    whyUseful: "আধুনিক প্রতিটি ওয়েবসাইট ডিজাইন CSS দিয়ে হয়। রেসপন্সিভ লেআউট, ডার্ক মোড, অ্যানিমেশন, সবই CSS-এর কাজ।",
    syntax: {
      lang: "css",
      code: `selector {
  property: value;
}`
    },
    example: {
      title: "প্রথম CSS নিয়ম",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>প্রথম CSS</title>
  <style>
    h1 {
      color: #1d4ed8;
      text-align: center;
    }
    p {
      font-size: 18px;
      line-height: 1.7;
    }
  </style>
</head>
<body>
  <h1>আমার রঙিন পেজ</h1>
  <p>CSS যোগ করলে পেজ আরও সুন্দর দেখায়।</p>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: "h1 {", explain: "সিলেক্টর। এখানে `h1` মানে সব শিরোনাম বোঝায়।" },
      { code: "color: #1d4ed8;", explain: "প্রপার্টি `color` (লেখার রং) এবং ভ্যালু `#1d4ed8` (নীল)।" },
      { code: "text-align: center;", explain: "লেখাকে মাঝখানে সাজায়।" },
      { code: "font-size: 18px;", explain: "লেখার আকার ১৮ পিক্সেল।" },
      { code: "line-height: 1.7;", explain: "লাইনের মাঝের দূরত্ব, বাংলা লেখা পড়ার জন্য ভালো।" },
      { code: "<style> ... </style>", explain: "HTML-এর ভেতরে CSS লেখার একটি উপায়। পরের লেসনে আরও উপায় দেখবেন।" }
    ],
    output: "পেজের শিরোনাম নীল ও মাঝখানে, এবং অনুচ্ছেদের লেখা একটু বড় ও আরামদায়ক দূরত্বে দেখাবে।",
    mistakes: [
      {
        wrong: "h1 color: blue;",
        right: "h1 { color: blue; }",
        explain: "নিয়মের জন্য সিলেক্টরের পর `{ }` ব্রেস লাগে।"
      },
      {
        wrong: "h1 { color blue; }",
        right: "h1 { color: blue; }",
        explain: "প্রপার্টি ও ভ্যালুর মাঝে কোলন (`:`) লাগে।"
      },
      {
        wrong: "h1 { color: blue }",
        right: "h1 { color: blue; }",
        explain: "শেষ ঘোষণার পরে সেমিকোলন (`;`) ভালো অভ্যাস এবং ভুল এড়ায়।"
      }
    ],
    bestPractices: [
      "প্রতিটি ঘোষণা আলাদা লাইনে লিখুন।",
      "ব্রাউজারের Developer Tools (F12) খুলে Elements ট্যাবে স্টাইল পরিবর্তন করে দেখুন।",
      "শুরুতে ছোট নিয়ম লিখে ধীরে ধীরে বাড়ান।"
    ],
    useCase: "একটি রেস্টুরেন্টের ওয়েবসাইটে CSS দিয়ে ব্র্যান্ডের রং, ফন্ট ও ছবির আকার ঠিক করা হয়, যাতে সবগুলো পেজ একই রকম দেখায়।",
    practice: [
      {
        level: "easy",
        task: "একটি `p` ট্যাগের লেখার রং সবুজ করার CSS নিয়ম লিখুন।",
        hint: "`color` প্রপার্টি ব্যবহার করুন।",
        solution: "p {\n  color: green;\n}",
        solutionLang: "css"
      },
      {
        level: "medium",
        task: "সব `h2` শিরোনামকে মাঝখানে সাজানো ও লেখার আকার ২৪ পিক্সেল করার CSS লিখুন।",
        hint: "দুইটি প্রপার্টি এক নিয়মের ভেতরে লিখুন।",
        solution: "h2 {\n  text-align: center;\n  font-size: 24px;\n}",
        solutionLang: "css"
      },
      {
        level: "challenging",
        task: "একটি HTML পেজে `<style>` ব্যবহার করে শিরোনামের রং লাল ও অনুচ্ছেদের লাইন-দূরত্ব ১.৮ করুন।",
        hint: "দুটি আলাদা নিয়ম লিখুন।",
        solution: "<style>\n  h1 { color: red; }\n  p { line-height: 1.8; }\n</style>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "CSS-এর পুরো নাম কী?",
        options: ["Computer Style Sheet", "Cascading Style Sheets", "Creative Style Syntax", "Colorful Site Structure"],
        answer: 1,
        explanation: "CSS এর পুরো নাম Cascading Style Sheets।"
      },
      {
        question: "CSS নিয়মে সিলেক্টরের পর কোন চিহ্ন দিয়ে ঘোষণা লেখা হয়?",
        options: ["( )", "[ ]", "{ }", "< >"],
        answer: 2,
        explanation: "CSS ঘোষণা `{ }` ব্রেসের ভেতরে লেখা হয়।"
      },
      {
        question: "প্রপার্টি ও ভ্যালুর মাঝে কোন চিহ্ন লাগে?",
        options: ["=", "-", ":", "/"],
        answer: 2,
        explanation: "প্রপার্টি ও ভ্যালুর মাঝে কোলন (`:`) ব্যবহার করা হয়।"
      }
    ]
  },
  {
    id: "css-02-inline-internal-external",
    course: "css",
    module: 1,
    moduleTitle: "মডিউল ১: CSS মৌলিক বিষয়",
    order: 2,
    title: "Inline, internal ও external CSS",
    objectives: [
      "CSS যোগ করার তিনটি উপায় চিনবেন।",
      "কোন পদ্ধতি কখন ব্যবহার করা উচিত তা বলতে পারবেন।",
      "CSS ফাইল আলাদাভাবে লিংক করতে পারবেন।"
    ],
    explanation: [
      "**Inline CSS** হলো সরাসরি এলিমেন্টের `style` অ্যাট্রিবিউটে লেখা, যেমন `<p style=\"color: red;\">`। এটি দ্রুত পরীক্ষার জন্য ভালো, কিন্তু বড় পেজে একই স্টাইল বারবার লিখতে হয় এবং পরিবর্তন কঠিন।",
      "**Internal CSS** হলো HTML-এর `head`-এর ভেতরে `<style>` ট্যাগে লেখা। একটি পেজের জন্য এটি সুবিধাজনক। **External CSS** হলো আলাদা `.css` ফাইল, যা `<link>` দিয়ে যুক্ত হয়। একাধিক পেজে একই ফাইল ব্যবহার করা যায়।",
      "বাস্তব প্রজেক্টে সাধারণত external CSS-ই সবচেয়ে ভালো: এক ফাইল বদলালে পুরো সাইট বদলে যায়, এবং ব্রাউজার ফাইলটি ক্যাশ করে রাখে।"
    ],
    whyUseful: "সঠিক পদ্ধতি বেছে নিলে কোড সহজে রক্ষণাবেক্ষণ করা যায়। সব স্টাইল HTML-এর ভেতরে থাকলে পরে বদলানো কষ্টকর হয়।",
    syntax: {
      lang: "html",
      code: `<link rel="stylesheet" href="css/style.css">`
    },
    example: {
      title: "External CSS ফাইল যুক্ত করা",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>External CSS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 class="title">সবুজ শিরোনাম</h1>
  <p>এই লেখাটি external CSS থেকে স্টাইল পায়।</p>
  <p style="color: red;">এই লাইনটি inline style-এ লাল।</p>
</body>
</html>`
        },
        {
          lang: "css",
          code: `.title {
  color: #15803d;
  text-align: center;
}

p {
  font-family: system-ui, sans-serif;
}`
        }
      ]
    },
    lineByLine: [
      { code: `<link rel="stylesheet" href="style.css">`, explain: "External CSS ফাইল যুক্ত করে। `href` ফাইলের পথ।" },
      { code: `<h1 class="title">`, explain: "`class` অ্যাট্রিবিউট দিয়ে CSS-এ এলিমেন্টটিকে চেনানো হয়।" },
      { code: `<p style="color: red;">`, explain: "Inline style। এটি সবচেয়ে বেশি অগ্রাধিকার পায়, তাই একে সাধারণত এড়িয়ে চলা হয়।" },
      { code: `.title { ... }`, explain: "CSS ফাইলে `.title` (ক্লাস সিলেক্টর) দিয়ে ঐ শিরোনাম সবুজ হয়।" }
    ],
    output: "শিরোনাম সবুজ ও মাঝখানে, প্রথম অনুচ্ছেদ ফন্টসহ সাধারণ রঙে, এবং inline style-এর অনুচ্ছেদটি লাল।",
    mistakes: [
      {
        wrong: `<link href="style.css">`,
        right: `<link rel="stylesheet" href="style.css">`,
        explain: "`rel=\"stylesheet\"` না দিলে ব্রাউজার ফাইলটিকে CSS হিসেবে চিনতে পারে না।"
      },
      {
        wrong: `<link rel="stylesheet" href="css/style.css">`,
        right: `<link rel="stylesheet" href="css/style.css">  (ফাইলটি আসলে css ফোল্ডারে থাকতে হবে)`,
        explain: "লিংক ঠিক থাকলেও ফাইল ভুল ফোল্ডারে থাকলে CSS কাজ করবে না। Network ট্যাবে 404 দেখুন।"
      },
      {
        wrong: `<p style="color:red; font-size:20px; margin:0; padding:0;">...</p>`,
        right: `<p class="warning">...</p>`,
        explain: "অনেক inline style লিখলে কোড অগোছালো হয়। ক্লাস ও external CSS ব্যবহার করুন।"
      }
    ],
    bestPractices: [
      "বাস্তব প্রজেক্টে external CSS ব্যবহার করুন।",
      "Inline style শুধু দ্রুত পরীক্ষা বা JavaScript-এর ডাইনামিক মানের জন্য রাখুন।",
      "`<link>` সবসময় `head`-এর ভেতরে রাখুন।"
    ],
    useCase: "একটি ই-কমার্স সাইটের সব পেজ একই `style.css` ব্যবহার করে, ফলে ব্র্যান্ডের রং বদলাতে একটি ফাইলই সম্পাদনা করতে হয়।",
    practice: [
      {
        level: "easy",
        task: "একটি `p` ট্যাগে `style` অ্যাট্রিবিউট দিয়ে লেখার রং নীল করুন।",
        hint: "`style=\"color: blue;\"`।",
        solution: "<p style=\"color: blue;\">নীল লেখা</p>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি `head`-এর ভেতরে internal `<style>` লিখুন, যেখানে সব `h2` শিরোনামের রং লাল।",
        hint: "`<style>` ট্যাগের ভেতরে CSS নিয়ম লিখুন।",
        solution: "<head>\n  <style>\n    h2 { color: red; }\n  </style>\n</head>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি `css/main.css` ফাইল তৈরি করে `index.html`-এ যুক্ত করুন। ফাইলে `body`-র ব্যাকগ্রাউন্ড হালকা ধূসর করুন।",
        hint: "HTML-এ `<link>` এবং CSS ফাইলে `body { background: #f1f5f9; }`।",
        solution: "<!-- index.html -->\n<link rel=\"stylesheet\" href=\"css/main.css\">\n\n/* css/main.css */\nbody {\n  background: #f1f5f9;\n}",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "এলিমেন্টের `style` অ্যাট্রিবিউটে লেখা CSS-কে কী বলে?",
        options: ["External CSS", "Internal CSS", "Inline CSS", "Global CSS"],
        answer: 2,
        explanation: "এলিমেন্টের ভেতরে `style` অ্যাট্রিবিউটে লেখা CSS-কে Inline CSS বলে।"
      },
      {
        question: "External CSS ফাইল যুক্ত করতে কোন ট্যাগ ব্যবহার হয়?",
        options: ["<style>", "<link>", "<script>", "<css>"],
        answer: 1,
        explanation: "`<link rel=\"stylesheet\" href=\"...\">` দিয়ে external CSS যুক্ত হয়।"
      },
      {
        question: "বাস্তব প্রজেক্টে সাধারণত কোন পদ্ধতি সবচেয়ে ভালো?",
        options: ["সব inline", "External CSS ফাইল", "শুধু HTML-এ", "কোনোটিই না"],
        answer: 1,
        explanation: "External CSS এক জায়গায় রাখা যায় এবং একাধিক পেজে ব্যবহার করা যায়।"
      }
    ]
  },
  {
    id: "css-03-syntax-selectors",
    course: "css",
    module: 1,
    moduleTitle: "মডিউল ১: CSS মৌলিক বিষয়",
    order: 3,
    title: "CSS সিনট্যাক্স ও সিলেক্টর",
    objectives: [
      "Element, class, id ও universal সিলেক্টরের পার্থক্য বলতে পারবেন।",
      "একাধিক সিলেক্টর একসাথে লেখার (grouping) নিয়ম জানবেন।",
      "কোন সিলেক্টর কখন ব্যবহার করবেন তা বেছে নিতে পারবেন।"
    ],
    explanation: [
      "**Element সিলেক্টর** সব একই ট্যাগকে বোঝায়, যেমন `p` সব অনুচ্ছেদ। **Class সিলেক্টর** একটি নাম দিয়ে একাধিক এলিমেন্টকে গোষ্ঠীবদ্ধ করে, যেমন `.card`। HTML-এ `class=\"card\"` লিখতে হয়, CSS-এ লেখা হয় `.card`।",
      "**ID সিলেক্টর** একটি নির্দিষ্ট এলিমেন্টকে চেনায়, যেমন `#header`। একটি পেজে একটি `id` একবারই থাকে। **Universal সিলেক্টর** `*` সব এলিমেন্টকে বোঝায়।",
      "একাধিক সিলেক্টর একসাথে লিখতে কমা (`,`) দিন: `h1, h2, h3 { font-family: ...; }`। সাধারণত class সিলেক্টর বেশি ব্যবহার করা হয়, কারণ এটি পুনঃব্যবহারযোগ্য ও অনুমানযোগ্য।"
    ],
    whyUseful: "সঠিক সিলেক্টর বেছে নিলে CSS ছোট হয়, পরিবর্তন সহজ হয়, এবং একই স্টাইল একাধিক জায়গায় সহজে প্রয়োগ করা যায়।",
    syntax: {
      lang: "css",
      code: `p { }          /* element */
.card { }      /* class */
#header { }    /* id */
* { }          /* universal */
h1, h2 { }     /* grouping */`
    },
    example: {
      title: "বিভিন্ন সিলেক্টরের উদাহরণ",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>সিলেক্টর</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header id="site-header">
    <h1>আমার সাইট</h1>
  </header>
  <div class="card">প্রথম কার্ড</div>
  <div class="card">দ্বিতীয় কার্ড</div>
  <p>একটি সাধারণ অনুচ্ছেদ।</p>
</body>
</html>`
        },
        {
          lang: "css",
          code: `/* element */
p {
  color: #334155;
}

/* class */
.card {
  background: #e0f2fe;
  padding: 12px;
  margin: 8px;
  border-radius: 8px;
}

/* id */
#site-header {
  background: #1e3a8a;
  color: #ffffff;
  padding: 12px;
}

/* grouping */
h1, h2 {
  font-family: system-ui, sans-serif;
}`
        }
      ]
    },
    lineByLine: [
      { code: "p { color: #334155; }", explain: "Element সিলেক্টর: সব `p` ট্যাগের রং ধূসর-নীল।" },
      { code: ".card { ... }", explain: "Class সিলেক্টর: `class=\"card\"` থাকা সব এলিমেন্টে প্রযোজ্য।" },
      { code: "#site-header { ... }", explain: "ID সিলেক্টর: `id=\"site-header\"` এলিমেন্টের জন্য; `#` চিহ্ন দিয়ে লেখা হয়।" },
      { code: "h1, h2 { ... }", explain: "Grouping: দুটি সিলেক্টরে একই স্টাইল একসাথে প্রয়োগ হয়।" }
    ],
    output: "উপরে গাঢ় নীল হেডার, তাতে সাদা লেখা। দুটি কার্ড হালকা নীল বাক্সে দেখাবে। অনুচ্ছেদের রং ধূসর হবে।",
    mistakes: [
      {
        wrong: `.card { }   /* HTML-এ id="card" লেখা */`,
        right: `HTML-এ class="card" লিখুন`,
        explain: "ক্লাস সিলেক্টর `.` দিয়ে শুরু হয়, এবং HTML-এ `class` অ্যাট্রিবিউট লাগে, `id` নয়।"
      },
      {
        wrong: `#card { } /* একাধিক এলিমেন্টে id="card" */`,
        right: `.card { } /* একাধিক এলিমেন্টে class="card" */`,
        explain: "একটি `id` একটি পেজে একবারই হওয়া উচিত। একাধিক এলিমেন্টে স্টাইল দিতে class ব্যবহার করুন।"
      },
      {
        wrong: `h1 h2 { }`,
        right: `h1, h2 { }`,
        explain: "স্পেস দিলে \"h2 যা h1-এর ভেতরে\" বোঝায়। আলাদা দুইটি সিলেক্টরের জন্য কমা দিন।"
      }
    ],
    bestPractices: [
      "স্টাইলের জন্য প্রধানত class ব্যবহার করুন।",
      "`id` শুধু JavaScript বা ইন্টারনাল লিংকের জন্য রাখুন।",
      "সিলেক্টর যতটা সম্ভব সহজ রাখুন, অতিরিক্ত নেস্টিং এড়িয়ে চলুন।"
    ],
    useCase: "একটি ব্লগ সাইটে সব লেখার অনুচ্ছেদ `p` দিয়ে, প্রতিটি পোস্টের কার্ড `.post-card` ক্লাস দিয়ে এবং মূল হেডার `#site-header` দিয়ে স্টাইল করা হয়।",
    practice: [
      {
        level: "easy",
        task: "সব `a` ট্যাগের রং লাল করার CSS লিখুন।",
        hint: "Element সিলেক্টর ব্যবহার করুন।",
        solution: "a {\n  color: red;\n}",
        solutionLang: "css"
      },
      {
        level: "medium",
        task: "`.highlight` ক্লাসের এলিমেন্টের জন্য হলুদ ব্যাকগ্রাউন্ড ও `#main` এলিমেন্টের জন্য ৩২ পিক্সেল প্যাডিং লিখুন।",
        hint: "Class ও ID সিলেক্টর আলাদা নিয়মে লিখুন।",
        solution: ".highlight {\n  background: yellow;\n}\n\n#main {\n  padding: 32px;\n}",
        solutionLang: "css"
      },
      {
        level: "challenging",
        task: "`h1`, `h2`, `h3` এর জন্য একটি নিয়ম লিখুন যাতে ফন্ট `system-ui` হয়, এবং `.note` ক্লাসের ভেতরের `p` গুলোর রং ধূসর হয়।",
        hint: "কমা দিয়ে গ্রুপিং এবং স্পেস দিয়ে descendant সিলেক্টর।",
        solution: "h1, h2, h3 {\n  font-family: system-ui, sans-serif;\n}\n\n.note p {\n  color: #64748b;\n}",
        solutionLang: "css"
      }
    ],
    quiz: [
      {
        question: "একটি ক্লাসের CSS সিলেক্টর কোন চিহ্ন দিয়ে শুরু হয়?",
        options: ["#", ".", "*", "&"],
        answer: 1,
        explanation: "ক্লাস সিলেক্টর `.` দিয়ে শুরু হয়, যেমন `.card`।"
      },
      {
        question: "একটি পেজে সাধারণত `id` কতবার ব্যবহার করা উচিত?",
        options: ["যতবার খুশি", "দুইবার", "একবার", "শূন্যবার"],
        answer: 2,
        explanation: "`id` একটি পেজে একবারই হওয়া উচিত; একাধিক এলিমেন্টের জন্য class ব্যবহার করুন।"
      },
      {
        question: "`h1, h2 { }`-এ কমা কী কাজ করে?",
        options: ["দুটি সিলেক্টরকে একসাথে গ্রুপ করে", "শুধু প্রথমটি বোঝায়", "বিয়োগ বোঝায়", "কিছুই না"],
        answer: 0,
        explanation: "কমা দিয়ে একাধিক সিলেক্টরকে একই নিয়মে যুক্ত করা হয়।"
      }
    ]
  },
  {
    id: "css-04-colors-backgrounds",
    course: "css",
    module: 1,
    moduleTitle: "মডিউল ১: CSS মৌলিক বিষয়",
    order: 4,
    title: "রং ও ব্যাকগ্রাউন্ড",
    objectives: [
      "রং লেখার পাঁচটি সাধারণ উপায় (নাম, HEX, RGB, HSL, রঙের স্বচ্ছতা) জানবেন।",
      "`color` ও `background-color` আলাদাভাবে ব্যবহার করতে পারবেন।",
      "`background-image` দিয়ে ব্যাকগ্রাউন্ড ছবি বসাতে পারবেন।"
    ],
    explanation: [
      "CSS-এ রং লেখার কয়েকটি উপায় আছে। নাম দিয়ে (`red`, `navy`), HEX দিয়ে (`#1d4ed8`), `rgb(29, 78, 216)` দিয়ে, বা `hsl(220 80% 50%)` দিয়ে। HEX ও HSL বেশি ব্যবহৃত হয়, কারণ এগুলো পরিবর্তনে সুবিধা দেয়।",
      "`color` লেখার রং নির্ধারণ করে। `background-color` এলিমেন্টের পেছনের রং। দুটি মিলিয়ে ব্যবহার করলে পড়ার উপযোগী কনট্রাস্ট তৈরি হয়। ব্যাকগ্রাউন্ডে লেখা পড়তে সমস্যা হলে কনট্রাস্ট বাড়ান।",
      "`background-image: url(\"...\")` দিয়ে ছবি বসানো যায়। ছবি সাজানোর জন্য `background-size` ও `background-position` ব্যবহৃত হয়। সাধারণ তথ্যমূলক ছবির জন্য HTML `img` ভালো, ব্যাকগ্রাউন্ড শুধু সজ্জার জন্য।"
    ],
    whyUseful: "রং ও ব্যাকগ্রাউন্ড পেজের আবেগ ও পড়ার সহজতা ঠিক করে। ভালো কনট্রাস্ট না থাকলে অনেকে লেখা পড়তে পারেন না।",
    syntax: {
      lang: "css",
      code: `color: red;
color: #1d4ed8;
color: rgb(29 78 216);
background-color: hsl(220 80% 96%);`
    },
    example: {
      title: "রং ও ব্যাকগ্রাউন্ডের বিভিন্ন উপায়",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>রং ও ব্যাকগ্রাউন্ড</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <section class="named">নাম দিয়ে রং</section>
  <section class="hex">HEX দিয়ে রং</section>
  <section class="alpha">স্বচ্ছ রং (rgba)</section>
</body>
</html>`
        },
        {
          lang: "css",
          code: `section {
  padding: 16px;
  margin: 10px;
  border-radius: 8px;
}

.named {
  background-color: lightyellow;
  color: navy;
}

.hex {
  background-color: #dcfce7;
  color: #166534;
}

.alpha {
  background-color: rgba(37, 99, 235, 0.2);
  color: #1e3a8a;
}`
        }
      ]
    },
    lineByLine: [
      { code: "background-color: lightyellow;", explain: "রঙের নাম দিয়ে হালকা হলুদ ব্যাকগ্রাউন্ড।" },
      { code: "color: navy;", explain: "লেখার রং গাঢ় নীল।" },
      { code: "background-color: #dcfce7;", explain: "HEX কোড (`#RRGGBB`) দিয়ে হালকা সবুজ।" },
      { code: "rgba(37, 99, 235, 0.2)", explain: "RGB + alpha: লাল, সবুজ, নীল ও স্বচ্ছতা (0 থেকে 1)। ০.২ মানে ২০% দৃশ্যমান।" }
    ],
    output: "তিনটি বক্স আলাদা রঙে দেখাবে: হালকা হলুদ, হালকা সবুজ ও হালকা নীল স্বচ্ছ ব্যাকগ্রাউন্ড। লেখাগুলো গাঢ় রঙে থাকবে।",
    mistakes: [
      {
        wrong: "color: #12",
        right: "color: #1d4ed8",
        explain: "HEX কোড ৩ বা ৬ অঙ্কের হতে হয় (ছোট ফরম্যাট #rgb বা #rrggbb)। ৩/৬ অঙ্কের বাইরে কাজ করে না।"
      },
      {
        wrong: "background: red; color: red;",
        right: "background: #fef3c7; color: #78350f;",
        explain: "লেখা ও ব্যাকগ্রাউন্ডের রং একই হলে লেখা দেখা যায় না। কনট্রাস্ট রাখুন।"
      },
      {
        wrong: "background-image: url(photo.jpg);",
        right: "background-image: url(\"images/photo.jpg\");",
        explain: "URL-এর পথ ঠিক থাকতে হবে। তথ্যমূলক ছবির জন্য HTML `img` ব্যবহার করুন।"
      }
    ],
    bestPractices: [
      "নাম বা HEX-এর বদলে কাস্টম প্রপার্টি (CSS variables) দিয়ে রঙের পরিবর্তনযোগ্য সেট রাখুন।",
      "লেখা ও ব্যাকগ্রাউন্ডের কনট্রাস্ট অনুপাত কমপক্ষে ৪.৫:১ রাখুন (WCAG)।",
      "অর্থ বোঝাতে শুধু রং ব্যবহার করবেন না; আইকন বা লেখাও যোগ করুন।"
    ],
    useCase: "একটি সতর্কবার্তা বক্সে হালকা লাল ব্যাকগ্রাউন্ড ও গাঢ় লাল লেখা দেওয়া হয়, যাতে বার্তাটি সহজে নজরে আসে।",
    practice: [
      {
        level: "easy",
        task: "একটি `div`-এর ব্যাকগ্রাউন্ড হালকা হলুদ ও লেখার রং গাঢ় বাদামি করুন।",
        hint: "`background-color` ও `color` লিখুন।",
        solution: "div {\n  background-color: #fef9c3;\n  color: #713f12;\n}",
        solutionLang: "css"
      },
      {
        level: "medium",
        task: "`rgba` ব্যবহার করে একটি বাটনের ব্যাকগ্রাউন্ড ৫০% স্বচ্ছ কালো করুন।",
        hint: "alpha মান ০.৫।",
        solution: "button {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n}",
        solutionLang: "css"
      },
      {
        level: "challenging",
        task: "একটি `hero` ক্লাসের এলিমেন্টে `hsl` ব্যবহার করে একটি নীল ব্যাকগ্রাউন্ড দিন এবং একটি `url(\"images/bg.jpg\")` ছবিও বসান, ছবিটি পুরো এলিমেন্ট ঢেকে থাকবে।",
        hint: "`background-image` ও `background-size: cover`।",
        solution: ".hero {\n  background-color: hsl(220 80% 50%);\n  background-image: url(\"images/bg.jpg\");\n  background-size: cover;\n  color: white;\n}",
        solutionLang: "css"
      }
    ],
    quiz: [
      {
        question: "লেখার রং নির্ধারণ করে কোন প্রপার্টি?",
        options: ["background", "color", "border", "font"],
        answer: 1,
        explanation: "`color` প্রপার্টি লেখার রং ঠিক করে।"
      },
      {
        question: "`rgba(0, 0, 0, 0.5)`-এ শেষের ০.৫ কী বোঝায়?",
        options: ["লাল মান", "স্বচ্ছতা (আলফা)", "সবুজ মান", "আকার"],
        answer: 1,
        explanation: "চতুর্থ মান আলফা, যা স্বচ্ছতা নির্দেশ করে (০ = স্বচ্ছ, ১ = পুরোপুরি অস্বচ্ছ)।"
      },
      {
        question: "HEX কালার `#1d4ed8` কোন ফরম্যাটে লেখা?",
        options: ["RGB", "HSL", "HEX", "নাম"],
        answer: 2,
        explanation: "`#` দিয়ে শুরু ছয় অঙ্কের কোড HEX ফরম্যাট।"
      }
    ]
  },
  {
    id: "css-05-units",
    course: "css",
    module: 1,
    moduleTitle: "মডিউল ১: CSS মৌলিক বিষয়",
    order: 5,
    title: "ইউনিট: px, %, em, rem, vw, vh",
    objectives: [
      "`px`, `%`, `em`, `rem`, `vw`, `vh` এর অর্থ বুঝবেন।",
      "কোন পরিস্থিতিতে কোন ইউনিট ভালো তা বলতে পারবেন।",
      "`rem` ও `vw` ব্যবহার করে সহজ রেসপন্সিভ আকার লিখতে পারবেন।"
    ],
    explanation: [
      "`px` (পিক্সেল) একটি নির্দিষ্ট আকার। `১৬px` সবসময় ১৬ পিক্সেল, তাই এটি সহজ ও অনুমানযোগ্য, তবে স্ক্রিন বদলালে নমনীয় হয় না।",
      "`%` বর্তমান প্যারেন্ট এলিমেন্টের সাপেক্ষে আকার। `em` বর্তমান এলিমেন্টের ফন্ট সাইজের সাপেক্ষে, আর `rem` হলো root (`html`) এর ফন্ট সাইজের সাপেক্ষে। `rem` সাধারণত বেশি ভালো, কারণ এটি সমস্ত জায়গায় একই ভিত্তি মেনে চলে।",
      "`vw` হলো ভিউপোর্টের প্রস্থের ১%, `vh` হলো উচ্চতার ১%। `100vh` পুরো স্ক্রিনের উচ্চতা। ফন্ট বা প্যাডিং স্ক্রিনের সাথে বদলাতে `vw` কাজে লাগে।"
    ],
    whyUseful: "সঠিক ইউনিট বেছে নিলে ব্যবহারকারী ফন্ট বড় করলে বা মোবাইলে ঘোরালে লেআউট ভাঙে না।",
    syntax: {
      lang: "css",
      code: `width: 300px;
width: 50%;
font-size: 1.25rem;
padding: 2em;
height: 100vh;
font-size: 4vw;`
    },
    example: {
      title: "বিভিন্ন ইউনিটের তুলনা",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ইউনিট</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>ইউনিটের উদাহরণ</h1>
  <p class="px">এই লেখা ১৬px।</p>
  <p class="rem">এই লেখা ১.২rem।</p>
  <div class="box">৫০% প্রস্থের বক্স</div>
  <p class="vw">এই লেখা স্ক্রিন প্রস্থের সাথে বদলায় (vw)।</p>
</body>
</html>`
        },
        {
          lang: "css",
          code: `body {
  font-family: system-ui, sans-serif;
  padding: 1rem;
}

.px {
  font-size: 16px;
}

.rem {
  font-size: 1.2rem;
}

.box {
  width: 50%;
  background: #e0e7ff;
  padding: 0.75em;
}

.vw {
  font-size: 4vw;
}`
        }
      ]
    },
    lineByLine: [
      { code: "font-size: 16px;", explain: "নির্দিষ্ট পিক্সেল আকার।" },
      { code: "font-size: 1.2rem;", explain: "root ফন্ট সাইজের ১.২ গুণ। ব্যবহারকারী ব্রাউজারের ফন্ট বড় করলে এটি সাথে বাড়ে।" },
      { code: "width: 50%;", explain: "প্যারেন্টের অর্ধেক প্রস্থ।" },
      { code: "padding: 0.75em;", explain: "নিজের ফন্ট সাইজের ০.৭৫ গুণ প্যাডিং।" },
      { code: "font-size: 4vw;", explain: "স্ক্রিনের প্রস্থের ৪%। স্ক্রিন ছোট হলে লেখাও ছোট হয়।" }
    ],
    output: "শিরোনাম ও লেখাগুলো আলাদা আকারে দেখাবে। ৫০% বক্সটি আধা প্রস্থ নেবে। স্ক্রিন ছোট-বড় করলে vw লেখার আকার বদলাবে।",
    mistakes: [
      {
        wrong: "font-size: 16;",
        right: "font-size: 16px;",
        explain: "ইউনিট ছাড়া মান কাজ করে না (শূন্য বাদে)। সবসময় ইউনিট লিখুন।"
      },
      {
        wrong: "font-size: 100vw;",
        right: "font-size: 4vw;",
        explain: "১০০vw পুরো স্ক্রিন প্রস্থ; এটি ফন্টের জন্য অনেক বড়। ছোট মান ব্যবহার করুন।"
      },
      {
        wrong: "padding: 2em; (প্রতিটি ছোট বক্সে ভিন্ন ফন্ট সাইজে)",
        right: "padding: 2rem; (সব জায়গায় একই ভিত্তি)",
        explain: "`em` নেস্টেড এলিমেন্টে গুণিত হয়ে বেড়ে যায়। সর্বত্র সমান আকার চাইলে `rem` ব্যবহার করুন।"
      }
    ],
    bestPractices: [
      "লেখার আকারে `rem` ব্যবহার করুন, যাতে ব্যবহারকারীর সেটিং মানা হয়।",
      "স্থির বর্ডার বা ছোট আইকনে `px` ঠিক আছে।",
      "মোবাইলে `100vh` এর বদলে `100dvh` ব্যবহার করা ভালো (অ্যাড্রেস বার পরিবর্তনে ঠিক থাকে)।"
    ],
    useCase: "একটি সংবাদ সাইটে লেখার আকার `rem` দিয়ে রাখা হয়, যাতে দৃষ্টিশক্তির কারণে যারা বড় ফন্ট চান তারা সুবিধা পান।",
    practice: [
      {
        level: "easy",
        task: "একটি `p` ট্যাগের লেখার আকার `1.1rem` করার CSS লিখুন।",
        hint: "`font-size` প্রপার্টি ব্যবহার করুন।",
        solution: "p {\n  font-size: 1.1rem;\n}",
        solutionLang: "css"
      },
      {
        level: "medium",
        task: "একটি `.sidebar` এলিমেন্টের প্রস্থ ৩০০px এবং একটি `.content` এলিমেন্টের প্রস্থ বাকি জায়গার (৭০%) সমান করার CSS লিখুন।",
        hint: "দুটি আলাদা নিয়মে `width` লিখুন।",
        solution: ".sidebar {\n  width: 300px;\n}\n\n.content {\n  width: 70%;\n}",
        solutionLang: "css"
      },
      {
        level: "challenging",
        task: "একটি হিরো সেকশন লিখুন যার উচ্চতা পুরো স্ক্রিনের সমান (`100vh`) এবং শিরোনামের ফন্ট `vw` দিয়ে স্ক্রিনের সাথে বদলায়, তবে সর্বোচ্চ `3rem` এর বেশি নয়।",
        hint: "`min()` ফাংশন পরের মডিউলে বিস্তারিত; এখন আলাদা নিয়ম লিখুন।",
        solution: ".hero {\n  height: 100vh;\n}\n\n.hero h1 {\n  font-size: 6vw;\n  max-width: 100%;\n}",
        solutionLang: "css"
      }
    ],
    quiz: [
      {
        question: "`rem` কিসের সাপেক্ষে হিসাব হয়?",
        options: ["প্যারেন্ট এলিমেন্ট", "root (html) এর ফন্ট সাইজ", "বর্তমান এলিমেন্টের ফন্ট", "স্ক্রিনের প্রস্থ"],
        answer: 1,
        explanation: "`rem` হলো root এলিমেন্টের (`html`) ফন্ট সাইজের সাপেক্ষে।"
      },
      {
        question: "`100vh` কী বোঝায়?",
        options: ["পুরো স্ক্রিনের উচ্চতা", "পুরো স্ক্রিনের প্রস্থ", "১০০ পিক্সেল", "১০০% প্রস্থ"],
        answer: 0,
        explanation: "`vh` ভিউপোর্টের উচ্চতার ১%, তাই `100vh` পুরো উচ্চতা।"
      },
      {
        question: "নেস্টেড এলিমেন্টে `em` কেন বেড়ে যেতে পারে?",
        options: ["ব্রাউজার ভুল করে", "প্রতিটি স্তরের ফন্টের সাপেক্ষে গুণিত হয়", "`em` কখনো বাড়ে না", "পিক্সেলে রূপান্তর হয় না"],
        answer: 1,
        explanation: "`em` বর্তমান এলিমেন্টের ফন্ট সাইজের সাপেক্ষে, তাই নেস্টেড এলিমেন্টে ধাপে ধাপে গুণিত হয়।"
      }
    ]
  },
  {
    id: "css-06-typography",
    course: "css",
    module: 1,
    moduleTitle: "মডিউল ১: CSS মৌলিক বিষয়",
    order: 6,
    title: "টাইপোগ্রাফি",
    objectives: [
      "`font-family`, `font-size`, `font-weight`, `line-height` ব্যবহার করতে পারবেন।",
      "Google Fonts থেকে Hind Siliguri ফন্ট যুক্ত করতে পারবেন।",
      "বাংলা লেখার জন্য পড়ার উপযোগী টাইপোগ্রাফি বেছে নিতে পারবেন।"
    ],
    explanation: [
      "`font-family` লেখার ফন্ট ঠিক করে। একাধিক ফন্ট কমা দিয়ে লিখলে প্রথমটি না পেলে পরেরটি ব্যবহৃত হয়। এটিকে **ফন্ট স্ট্যাক** বলে। বাংলা লেখার জন্য `\"Hind Siliguri\"` (Google Fonts) ভালো, তারপর `\"Noto Sans Bengali\"` ও সিস্টেমের ফন্ট যোগ করা হয়।",
      "`font-weight` লেখার ঘনত্ব (400 সাধারণ, 700 গাঢ়)। `line-height` লাইনের মাঝের দূরত্ব; বাংলা লেখার জন্য ১.৬ থেকে ১.৮ আরামদায়ক। `letter-spacing` অক্ষরের মাঝের ফাঁক। `text-align` লেখা সাজায় (`left`, `center`, `right`, `justify`)।",
      "Google Fonts ব্যবহার করতে HTML-এর `head`-এ `<link>` দিয়ে ফন্ট লোড করতে হয়, তারপর CSS-এ নাম লিখতে হয়। ইন্টারনেট না থাকলে ফন্ট লোড হয় না, তখন ফন্ট স্ট্যাকের পরের ফন্ট দেখায়।"
    ],
    whyUseful: "সঠিক টাইপোগ্রাফি বাংলা লেখাকে সহজে পড়ার উপযোগী করে। বিশেষ করে মোবাইলে ছোট স্ক্রিনে লেখা আরামদায়ক হওয়া জরুরি।",
    syntax: {
      lang: "css",
      code: `body {
  font-family: "Hind Siliguri", system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.7;
}`
    },
    example: {
      title: "বাংলা লেখার টাইপোগ্রাফি",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>টাইপোগ্রাফি</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>বাংলা টাইপোগ্রাফি</h1>
  <p class="lead">ভালো টাইপোগ্রাফি লেখা পড়তে সহজ করে। লাইনের দূরত্ব ঠিক থাকলে চোখ আরামে এগোয়।</p>
  <p>এই অনুচ্ছেদে সাধারণ ওজনের লেখা। এটি মাঝারি দূরত্বে সাজানো।</p>
</body>
</html>`
        },
        {
          lang: "css",
          code: `body {
  font-family: "Hind Siliguri", "Noto Sans Bengali", system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.75;
  color: #1e293b;
  max-width: 60ch;
  margin: 2rem auto;
  padding: 0 1rem;
}

h1 {
  font-weight: 700;
  font-size: 1.8rem;
}

.lead {
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}`
        }
      ]
    },
    lineByLine: [
      { code: `<link href="...Hind+Siliguri...">`, explain: "Google Fonts থেকে বাংলা ফন্ট লোড করে। ইন্টারনেট দরকার।" },
      { code: `font-family: "Hind Siliguri", ...;`, explain: "প্রথমে Hind Siliguri, না পেলে Noto Sans Bengali, তারপর সিস্টেমের ডিফল্ট ফন্ট।" },
      { code: "line-height: 1.75;", explain: "লাইনের দূরত্ব ফন্ট সাইজের ১.৭৫ গুণ। বাংলা লেখার জন্য আরামদায়ক।" },
      { code: "max-width: 60ch;", explain: "একটি লাইনে খুব বেশি অক্ষর না আসে, যাতে পড়তে অসুবিধা না হয়। `ch` একটি অক্ষরের প্রস্থ।" },
      { code: "font-weight: 700;", explain: "শিরোনামের লেখা গাঢ় হয়।" },
      { code: "letter-spacing: 0.01em;", explain: "অক্ষরের মাঝের ফাঁক সামান্য বাড়ায়।" }
    ],
    output: "পেজের লেখা Hind Siliguri ফন্টে (ইন্টারনেট থাকলে) দেখাবে, শিরোনাম গাঢ়, প্রথম অনুচ্ছেদটি একটু বড়। লেখাগুলো মাঝখানে একটি সীমিত প্রস্থে থাকবে।",
    mistakes: [
      {
        wrong: "font-family: Hind Siliguri;",
        right: "font-family: \"Hind Siliguri\", sans-serif;",
        explain: "একাধিক শব্দের ফন্টের নাম উদ্ধৃতি চিহ্নে লিখুন এবং একটি সাধারণ বিকল্প রাখুন।"
      },
      {
        wrong: "line-height: 1;",
        right: "line-height: 1.7;",
        explain: "বাংলা লেখায় ১ খুব কম; মাত্রা ও স্বরচিহ্ন একে অপরের সাথে লেগে যায়।"
      },
      {
        wrong: "font-size: 9px;",
        right: "font-size: 1rem;",
        explain: "অতি ছোট লেখা পড়া কঠিন ও অ্যাক্সেসিবিলিটির জন্য খারাপ। অন্তত ১৬px (১rem) রাখুন।"
      }
    ],
    bestPractices: [
      "বাংলা লেখার জন্য `line-height` ১.৬-১.৮ রাখুন।",
      "একটি লাইনে ৪৫-৭৫ অক্ষর (`max-width: 60ch`) রাখলে পড়া সহজ হয়।",
      "ফন্ট স্ট্যাকে সবসময় একটি সাধারণ বিকল্প (`system-ui`) রাখুন।"
    ],
    useCase: "একটি বাংলা সংবাদ পোর্টালে আর্টিকেলের লেখা Hind Siliguri ও লাইন-দূরত্ব ১.৮ রেখে সাজানো হয়, যাতে দীর্ঘ পড়াও ক্লান্তিকর না হয়।",
    practice: [
      {
        level: "easy",
        task: "`body`-র ফন্ট `system-ui, sans-serif` এবং লাইন-দূরত্ব ১.৬ করার CSS লিখুন।",
        hint: "দুটি প্রপার্টি এক নিয়মে।",
        solution: "body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}",
        solutionLang: "css"
      },
      {
        level: "medium",
        task: "একটি `h2` এর ওজন ৬০০ এবং আকার ১.৫rem করার CSS লিখুন।",
        hint: "`font-weight: 600;` এবং `font-size: 1.5rem;`।",
        solution: "h2 {\n  font-weight: 600;\n  font-size: 1.5rem;\n}",
        solutionLang: "css"
      },
      {
        level: "challenging",
        task: "Hind Siliguri ফন্ট লোড করার `<link>` ট্যাগ এবং `body`-র জন্য ফন্ট স্ট্যাক লিখুন (400 ও 700 ওজন সহ)।",
        hint: "Google Fonts-এর URL-এ `wght@400;700` দিন।",
        solution: "<link href=\"https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;700&display=swap\" rel=\"stylesheet\">\n\nbody {\n  font-family: \"Hind Siliguri\", system-ui, sans-serif;\n}",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "লাইনের মাঝের দূরত্ব কোন প্রপার্টি নিয়ন্ত্রণ করে?",
        options: ["letter-spacing", "line-height", "font-weight", "text-indent"],
        answer: 1,
        explanation: "`line-height` লাইনের দূরত্ব নির্ধারণ করে।"
      },
      {
        question: "ফন্ট স্ট্যাকে কমা দিয়ে একাধিক ফন্ট লেখার উদ্দেশ্য কী?",
        options: ["ফন্ট দ্রুত লোড হয়", "প্রথমটি না পেলে পরেরটি ব্যবহার করা", "ফন্ট বড় হয়", "রং বদলায়"],
        answer: 1,
        explanation: "ব্রাউজার প্রথম ফন্ট না পেলে তালিকার পরের ফন্ট ব্যবহার করে।"
      },
      {
        question: "বাংলা লেখার জন্য সাধারণত কোন line-height ভালো?",
        options: ["০.৮", "১", "১.৬ থেকে ১.৮", "৩"],
        answer: 2,
        explanation: "বাংলা লেখায় মাত্রা ও স্বরচিহ্নের জন্য ১.৬-১.৮ আরামদায়ক।"
      }
    ]
  },
  {
    id: "css-07-borders-margin-padding",
    course: "css",
    module: 1,
    moduleTitle: "মডিউল ১: CSS মৌলিক বিষয়",
    order: 7,
    title: "Border, margin ও padding",
    objectives: [
      "`border`, `margin` ও `padding` এর কাজ আলাদা করে বলতে পারবেন।",
      "Shorthand (একসাথে কয়েকটি মান) লেখার নিয়ম জানবেন।",
      "`border-radius` দিয়ে কোণ গোল করতে পারবেন।"
    ],
    explanation: [
      "**Border** হলো এলিমেন্টের চারপাশের রেখা। `border: 2px solid #334155;` মানে ২ পিক্সেল মোটা, কঠিন (solid), ধূসর রেখা। `border-radius` কোণ গোল করে।",
      "**Padding** হলো এলিমেন্টের ভেতরের ফাঁকা জায়গা, লেখা ও বর্ডারের মাঝে। **Margin** হলো এলিমেন্টের বাইরের ফাঁকা জায়গা, অন্য এলিমেন্ট থেকে দূরত্ব।",
      "চার দিকে একসাথে লিখতে শর্টহ্যান্ড ব্যবহার হয়: `padding: 10px 20px;` মানে উপর-নিচে ১০px, ডান-বামে ২০px। চার মান হলে ক্রম হয় উপর, ডান, নিচ, বাম (ঘড়ির কাঁটার দিকে)।"
    ],
    whyUseful: "সঠিক জায়গা ও বর্ডার থাকলে লেখা পড়তে সহজ হয়, কার্ড ও বাটন আলাদা করে দেখা যায়, এবং লেআউট গোছানো থাকে।",
    syntax: {
      lang: "css",
      code: `border: 2px solid #334155;
border-radius: 12px;
padding: 16px 24px;
margin: 0 auto;`
    },
    example: {
      title: "কার্ড বানানো",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Border, Margin, Padding</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h2>আমার কার্ড</h2>
    <p>এখানে padding লেখাকে বর্ডার থেকে দূরে রাখে।</p>
  </div>
  <div class="card">
    <h2>দ্বিতীয় কার্ড</h2>
    <p>margin কার্ডগুলোর মধ্যে ফাঁক তৈরি করে।</p>
  </div>
</body>
</html>`
        },
        {
          lang: "css",
          code: `body {
  font-family: system-ui, sans-serif;
  padding: 16px;
}

.card {
  border: 2px solid #334155;
  border-radius: 12px;
  padding: 16px 24px;
  margin: 16px auto;
  max-width: 420px;
}

.card h2 {
  margin-top: 0;
}`
        }
      ]
    },
    lineByLine: [
      { code: "border: 2px solid #334155;", explain: "মোটা (2px), কঠিন রেখা (solid), ধূসর রং।" },
      { code: "border-radius: 12px;", explain: "চার কোণ ১২px গোল হয়।" },
      { code: "padding: 16px 24px;", explain: "উপর-নিচে ১৬px, ডান-বামে ২৪px ভেতরের ফাঁক।" },
      { code: "margin: 16px auto;", explain: "উপর-নিচে ১৬px বাইরের ফাঁক এবং `auto` দিয়ে বাম-ডানে মাঝখানে বসে।" },
      { code: ".card h2 { margin-top: 0; }", explain: "শিরোনামের উপরের ডিফল্ট ফাঁক সরিয়ে কার্ডের ভেতরে সাজায়।" }
    ],
    output: "দুটি গোলাকার বর্ডারযুক্ত কার্ড মাঝখানে বসবে, প্রতিটির ভেতরে লেখা বর্ডার থেকে দূরে থাকবে।",
    mistakes: [
      {
        wrong: "border: solid red;",
        right: "border: 1px solid red;",
        explain: "বর্ডারের মোটা নির্ধারণ না করলে ব্রাউজার ডিফল্ট মান (সাধারণত মিডিয়াম) নেয়, যা অনিশ্চিত।"
      },
      {
        wrong: "margin: 10px; padding: 10px; (একটি বক্সে দুটোই বোঝে না)",
        right: "padding: লেখার ভেতরের ফাঁক; margin: বাইরের ফাঁক আলাদাভাবে বুঝুন",
        explain: "padding ভেতরে, margin বাইরে। দুটির কাজ এক নয়।"
      },
      {
        wrong: "margin: 0 auto; (block না হলে)",
        right: "display: block বা width দিয়ে মাঝখানে বসান",
        explain: "`margin: auto` শুধু block এলিমেন্টে এবং নির্দিষ্ট প্রস্থে কাজ করে।"
      }
    ],
    bestPractices: [
      "শর্টহ্যান্ড ব্যবহার করুন, কিন্তু বুঝে; চার দিকের ক্রম মনে রাখুন।",
      "ধারাবাহিক ফাঁক রাখতে স্কেল ব্যবহার করুন, যেমন 8px, 16px, 24px।",
      "কার্ডের জন্য হালকা বর্ডার ও গোল কোণ আধুনিক চেহারা দেয়।"
    ],
    useCase: "একটি পণ্যের তালিকায় প্রতিটি পণ্য একটি বর্ডারযুক্ত কার্ডে থাকে, ভেতরে padding এবং কার্ডের মধ্যে margin থাকে।",
    practice: [
      {
        level: "easy",
        task: "একটি `div`-এ ৩px মোটা লাল কঠিন বর্ডার দিন।",
        hint: "`border: 3px solid red;`",
        solution: "div {\n  border: 3px solid red;\n}",
        solutionLang: "css"
      },
      {
        level: "medium",
        task: "একটি বাটনের উপর-নিচে ৮px এবং ডান-বামে ১৬px padding দিন, এবং কোণ ৬px গোল করুন।",
        hint: "`padding: 8px 16px;` এবং `border-radius: 6px;`।",
        solution: "button {\n  padding: 8px 16px;\n  border-radius: 6px;\n}",
        solutionLang: "css"
      },
      {
        level: "challenging",
        task: "একটি `.box` ক্লাসের চারটি দিকে আলাদা padding দিন: উপর ১০px, ডান ২০px, নিচ ৩০px, বাম ৪০px।",
        hint: "চার মানের শর্টহ্যান্ডে ক্রম: উপর, ডান, নিচ, বাম।",
        solution: ".box {\n  padding: 10px 20px 30px 40px;\n}",
        solutionLang: "css"
      }
    ],
    quiz: [
      {
        question: "এলিমেন্টের ভেতরের ফাঁক কোন প্রপার্টি দেয়?",
        options: ["margin", "padding", "border", "gap"],
        answer: 1,
        explanation: "`padding` এলিমেন্টের ভেতরের ফাঁকা জায়গা; `margin` বাইরের।"
      },
      {
        question: "`border-radius: 12px;` কী করে?",
        options: ["বর্ডারের রং বদলায়", "কোণ গোল করে", "বর্ডার মুছে দেয়", "লেখা বড় করে"],
        answer: 1,
        explanation: "`border-radius` কোণগুলো গোল করে।"
      },
      {
        question: "`padding: 10px 20px;` এ ২০px কোন দিকে?",
        options: ["উপর ও নিচ", "ডান ও বাম", "শুধু উপর", "শুধু বাম"],
        answer: 1,
        explanation: "দুটি মান থাকলে প্রথমটি উপর-নিচে, দ্বিতীয়টি ডান-বামে।"
      }
    ]
  },
  {
    id: "css-08-box-model",
    course: "css",
    module: 1,
    moduleTitle: "মডিউল ১: CSS মৌলিক বিষয়",
    order: 8,
    title: "CSS বক্স মডেল",
    objectives: [
      "বক্স মডেলের চারটি স্তর (content, padding, border, margin) চিনবেন।",
      "`box-sizing: border-box` কেন ব্যবহার করা হয় তা বুঝবেন।",
      "এলিমেন্টের মোট প্রস্থ হিসাব করতে পারবেন।"
    ],
    explanation: [
      "প্রতিটি HTML এলিমেন্ট একটি বাক্সের মতো। বাক্সের চারটি স্তর: ভেতরে **content** (লেখা বা ছবি), তারপর **padding**, তারপর **border**, এবং সবার বাইরে **margin**। একে CSS বক্স মডেল বলে।",
      "ডিফল্টভাবে `width` শুধু content-এর প্রস্থ বোঝায়। অর্থাৎ `width: 300px` আর `padding: 20px` থাকলে মোট প্রস্থ হয় ৩৪০px (২০ + ২০ যোগ)। এতে লেআউট ভাঙে।",
      "তাই প্রায় সব প্রজেক্টে শুরুতে `*, *::before, *::after { box-sizing: border-box; }` লেখা হয়। তখন `width` মানে বর্ডার ও padding সহ মোট প্রস্থ, ফলে হিসাব সহজ হয়।"
    ],
    whyUseful: "বক্স মডেল না বুঝলে এলিমেন্ট কেন বড় দেখায় বা লেআউট কেন ভেঙে যায় তা বোঝা কঠিন। এটি প্রতিটি লেআউটের ভিত্তি।",
    syntax: {
      lang: "css",
      code: `*,
*::before,
*::after {
  box-sizing: border-box;
}`
    },
    example: {
      title: "box-sizing এর প্রভাব",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>বক্স মডেল</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>উপরের বক্স: content-box (ডিফল্ট), নিচেরটি: border-box।</p>
  <div class="content-box">content-box</div>
  <div class="border-box">border-box</div>
</body>
</html>`
        },
        {
          lang: "css",
          code: `.content-box,
.border-box {
  width: 300px;
  padding: 20px;
  border: 4px solid #1d4ed8;
  background: #dbeafe;
  margin-bottom: 16px;
}

.content-box {
  box-sizing: content-box;
}

.border-box {
  box-sizing: border-box;
}`
        }
      ]
    },
    lineByLine: [
      { code: "width: 300px; padding: 20px; border: 4px ...", explain: "content-box-এ মোট প্রস্থ = 300 + 40 (padding) + 8 (border) = 348px।" },
      { code: "box-sizing: content-box;", explain: "ডিফল্ট: `width` শুধু লেখার জায়গা বোঝায়।" },
      { code: "box-sizing: border-box;", explain: "`width` বর্ডার ও padding সহ মোট প্রস্থ, তাই মোট ৩০০px।" }
    ],
    output: "প্রথম বক্সটি দ্বিতীয়টির চেয়ে বড় দেখাবে (প্রায় ৩৪৮px বনাম ৩০০px)। দুটির প্রস্থ মিলিয়ে দেখলে বক্স মডেলের পার্থক্য স্পষ্ট হয়।",
    mistakes: [
      {
        wrong: "width: 100%; padding: 20px; (border-box ছাড়া)",
        right: "box-sizing: border-box; width: 100%; padding: 20px;",
        explain: "ডিফল্টে 100% প্রস্থের সাথে padding যোগ হয়ে এলিমেন্ট প্যারেন্ট থেকে বেরিয়ে যায়।"
      },
      {
        wrong: "margin-এ ফাঁক নেই ভেবে padding ব্যবহার",
        right: "বাইরের ফাঁকে margin, ভেতরের ফাঁকে padding",
        explain: "দুটির জায়গা আলাদা। ভুল জায়গায় লিখলে লেআউট অপ্রত্যাশিত হয়।"
      },
      {
        wrong: "height দিয়ে লেখার সব জায়গা ঠিক করা",
        right: "প্রয়োজনে min-height ব্যবহার করুন",
        explain: "লেখা বাড়লে নির্দিষ্ট height লেখাকে বাইরে ঠেলে দেয়; `min-height` নমনীয়।"
      }
    ],
    bestPractices: [
      "প্রজেক্টের শুরুতে গ্লোবাল `box-sizing: border-box` রাখুন।",
      "ফাঁকের জন্য margin ও padding আলাদা উদ্দেশ্যে ব্যবহার করুন।",
      "প্রস্থ ঠিক রাখতে `max-width` ব্যবহার করুন, তবে `width` নির্দিষ্ট করার আগে ভাবুন।"
    ],
    useCase: "একটি ফর্মে ইনপুট বক্সের প্রস্থ `100%` দিলেও padding ও border যোগ করে ফর্ম যাতে কার্ড থেকে না বেরোয়, সেজন্য border-box ব্যবহার হয়।",
    practice: [
      {
        level: "easy",
        task: "একটি `div`-এর প্রস্থ ২০০px, padding ১০px এবং `box-sizing: border-box` লিখুন। মোট প্রস্থ কত হবে?",
        hint: "border-box-এ `width` মোট প্রস্থ।",
        solution: "div {\n  width: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n/* মোট প্রস্থ: 200px */",
        solutionLang: "css"
      },
      {
        level: "medium",
        task: "`box-sizing: border-box` সব এলিমেন্টে কার্যকর করার গ্লোবাল CSS লিখুন।",
        hint: "`*` সিলেক্টর ও `*::before, *::after` ব্যবহার করুন।",
        solution: "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}",
        solutionLang: "css"
      },
      {
        level: "challenging",
        task: "একটি বক্সে `width: 240px; padding: 20px; border: 5px` থাকলে content-box-এ মোট প্রস্থ কত হবে? হিসাব দেখান।",
        hint: "মোট = width + দুই পাশের padding + দুই পাশের border।",
        solution: "মোট প্রস্থ = 240 + (20 + 20) + (5 + 5) = 290px",
        solutionLang: "text"
      }
    ],
    quiz: [
      {
        question: "ডিফল্ট `content-box`-এ `width` কী নির্দেশ করে?",
        options: ["মোট প্রস্থ", "শুধু লেখার জায়গা", "শুধু বর্ডার", "শুধু margin"],
        answer: 1,
        explanation: "ডিফল্টে `width` কেবল content-এর প্রস্থ নির্দেশ করে; padding ও border আলাদাভাবে যোগ হয়।"
      },
      {
        question: "বক্স মডেলের সবচেয়ে বাইরের স্তর কোনটি?",
        options: ["padding", "border", "margin", "content"],
        answer: 2,
        explanation: "বক্স মডেলের বাইরের স্তর margin।"
      },
      {
        question: "প্রায় সব প্রজেক্টে শুরুতে কোন নিয়মটি লেখা হয়?",
        options: ["box-sizing: border-box", "display: none", "color: black", "position: fixed"],
        answer: 0,
        explanation: "`box-sizing: border-box` প্রস্থের হিসাব সহজ করে, তাই সাধারণত গ্লোবালি দেওয়া হয়।"
      }
    ]
  }
]);
