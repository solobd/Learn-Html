window.LESSONS = window.LESSONS || [];
window.LESSONS.push(...[
  {
    id: "tailwind-01-what-is-tailwind",
    course: "tailwind",
    module: 1,
    moduleTitle: "মডিউল ১: Tailwind CSS পরিচিতি",
    order: 1,
    title: "Tailwind CSS কী ও Utility-first ধারণা",
    objectives: [
      "Tailwind CSS কী তা বলতে পারবেন।",
      "Utility-first (ইউটিলিটি-ফার্স্ট) ধারণা ব্যাখ্যা করতে পারবেন।",
      "ক্লাস দিয়ে সরাসরি HTML-এ স্টাইল লেখার একটি উদাহরণ দেখাতে পারবেন।"
    ],
    explanation: [
      "Tailwind CSS হলো একটি **utility-first** CSS ফ্রেমওয়ার্ক। এখানে প্রতিটি ছোট কাজের জন্য একটি ক্লাস থাকে: `p-4` (প্যাডিং ১৬px), `text-center` (মাঝখানে লেখা), `bg-blue-600` (নীল ব্যাকগ্রাউন্ড)। এই ক্লাসগুলো HTML-এ সরাসরি বসিয়ে স্টাইল তৈরি হয়।",
      "সাধারণ CSS-এ আপনি আলাদা ক্লাস নাম বানিয়ে আলাদা ফাইলে নিয়ম লেখেন। Tailwind-এ সেই নাম বানানোর দরকার হয় না; ছোট ক্লাসগুলো মিলিয়ে কাজ হয়। ফলে নতুন ফাইল খোলার প্রয়োজন কম হয়।",
      "Tailwind আসল প্রয়োজনের ক্লাসগুলো শুধু তৈরি করে, তাই ফাইলের আকার ছোট থাকে। তবে ক্লাসের তালিকা লম্বা দেখাতে পারে, এজন্য কম্পোনেন্ট ভাগ করে ব্যবহার করা হয়।"
    ],
    whyUseful: "দ্রুত ও ধারাবাহিক ডিজাইন তৈরি হয়। আলাদা CSS ফাইল না খুলে একই পেজে স্টাইল দেখা যায়, এবং ডিজাইন সিস্টেম মানা সহজ হয়।",
    syntax: {
      lang: "html",
      code: `<p class="text-lg font-bold text-blue-600">ইউটিলিটি ক্লাস</p>`
    },
    example: {
      title: "প্রথম Tailwind কার্ড",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind প্রথম কার্ড</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-slate-100 p-6">
  <div class="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-md">
    <h1 class="text-xl font-bold text-slate-800">আমার কার্ড</h1>
    <p class="mt-2 text-slate-600">এই কার্ডটি শুধু ইউটিলিটি ক্লাস দিয়ে সাজানো।</p>
  </div>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`, explain: "Tailwind v4 browser script। ইন্টারনেট দরকার, শুধু শেখা ও পরীক্ষার জন্য।" },
      { code: `<body class="bg-slate-100 p-6">`, explain: "হালকা ধূসর ব্যাকগ্রাউন্ড ও ২৪px প্যাডিং।" },
      { code: `<div class="mx-auto max-w-sm rounded-xl bg-white p-6 shadow-md">`, explain: "মাঝখানে বসে, সর্বোচ্চ প্রস্থ সীমিত, গোল কোণ, সাদা ব্যাকগ্রাউন্ড, ছায়া।" },
      { code: `<h1 class="text-xl font-bold text-slate-800">`, explain: "বড় গাঢ় শিরোনাম।" }
    ],
    output: "একটি সাদা, গোল কোণের কার্ড মাঝখানে দেখাবে। ভেতরে গাঢ় শিরোনাম ও ধূসর লেখা থাকবে।",
    mistakes: [
      {
        wrong: `<div class="padding-4">`,
        right: `<div class="p-4">`,
        explain: "Tailwind-এর নির্দিষ্ট ক্লাস নাম আছে। `padding-4` নামের কোনো ক্লাস নেই; `p-4` লিখুন।"
      },
      {
        wrong: `<p class="text-bold">`,
        right: `<p class="font-bold">`,
        explain: "ওজনের ক্লাস `font-*` দিয়ে শুরু হয়। `text-*` সাধারণত আকার ও রঙের জন্য।"
      }
    ],
    bestPractices: [
      "প্রথমে ক্লাস দিয়ে ডিজাইন করুন, পরে প্রয়োজনে কম্পোনেন্ট বানান।",
      "ডিজাইনের মান (রং, আকার) নিজের প্রজেক্টে ধারাবাহিক রাখুন।",
      "ক্লাসের তালিকা খুব লম্বা হলে একটি টেমপ্লেট বা কম্পোনেন্টে ভাগ করুন।"
    ],
    useCase: "একটি স্টার্টআপের ল্যান্ডিং পেজ দ্রুত বানাতে Tailwind-এর ক্লাস দিয়ে বোতাম, কার্ড ও গ্রিড সাজানো হয়।",
    practice: [
      {
        level: "easy",
        task: "একটি বোতাম লিখুন যার ব্যাকগ্রাউন্ড নীল (`bg-blue-600`), লেখা সাদা (`text-white`) এবং গোল কোণ (`rounded-lg`)।",
        hint: "সব ক্লাস একটি `class` অ্যাট্রিবিউটে।",
        solution: "<button class=\"rounded-lg bg-blue-600 px-4 py-2 text-white\">বোতাম</button>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি অনুচ্ছেদ লিখুন যা মাঝখানে বসে (`text-center`), উপর-নিচে `my-4` ফাঁক থাকবে।",
        hint: "`text-center` ও `my-4`।",
        solution: "<p class=\"my-4 text-center\">মাঝখানের লেখা</p>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি বক্স লিখুন যা প্রস্থে সর্বোচ্চ `max-w-md`, মাঝখানে (`mx-auto`), হালকা সবুজ (`bg-green-50`) ব্যাকগ্রাউন্ড ও `shadow` সহ।",
        hint: "চারটি ধারণার ক্লাস একসাথে।",
        solution: "<div class=\"mx-auto max-w-md rounded-lg bg-green-50 p-4 shadow\">বক্স</div>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "Utility-first CSS-এ স্টাইল সাধারণত কোথায় লেখা হয়?",
        options: ["আলাদা JS ফাইলে", "HTML-এর class অ্যাট্রিবিউটে ছোট ক্লাস দিয়ে", "সার্ভারে", "ডাটাবেসে"],
        answer: 1,
        explanation: "Utility-first-এ ছোট ইউটিলিটি ক্লাসগুলো HTML-এর `class`-এ বসিয়ে স্টাইল তৈরি হয়।"
      },
      {
        question: "`p-4` ক্লাসের কাজ কী?",
        options: ["বর্ডার যোগ", "প্যাডিং যোগ", "লেখার রং", "ছবি যোগ"],
        answer: 1,
        explanation: "`p-*` ক্লাস প্যাডিং (ভেতরের ফাঁক) নির্ধারণ করে।"
      },
      {
        question: "Tailwind v4 browser script-এর সঠিক ধরন কোনটি?",
        options: ["@tailwind base;", "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4", "tailwind.config.js", "npm install tailwind-v1"],
        answer: 1,
        explanation: "Tailwind v4-এর Play CDN স্ক্রিপ্ট `@tailwindcss/browser@4` দিয়ে যুক্ত হয়।"
      }
    ]
  },
  {
    id: "tailwind-02-setup-cdn-production",
    course: "tailwind",
    module: 1,
    moduleTitle: "মডিউল ১: Tailwind CSS পরিচিতি",
    order: 2,
    title: "সেটআপ: CDN, সীমাবদ্ধতা ও প্রোডাকশন",
    objectives: [
      "শেখার জন্য Play CDN কীভাবে যুক্ত করতে হয় জানবেন।",
      "`type=\"text/tailwindcss\"` দিয়ে কাস্টম থিম কীভাবে লেখা হয় বুঝবেন।",
      "CDN কেন প্রোডাকশনে ব্যবহার করা উচিত নয় তা ব্যাখ্যা করতে পারবেন।"
    ],
    explanation: [
      "Tailwind-এর **Play CDN** হলো শেখা ও দ্রুত পরীক্ষার জন্য একটি স্ক্রিপ্ট। `<head>`-এ `<script src=\"https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4\"></script>` লিখলেই ক্লাস কাজ করে। কোনো ইনস্টল বা বিল্ড লাগে না।",
      "কাস্টম রং বা ফন্ট লাগলে `<style type=\"text/tailwindcss\">` ব্লকে `@theme { --color-brand: #2563eb; }` লেখা হয়। এরপর `text-brand` বা `bg-brand` ক্লাস কাজ করে।",
      "CDN-এর সীমাবদ্ধতা: ইন্টারনেট ছাড়া কাজ করে না, ব্রাউজারে ক্লাস তৈরি হয় বলে ধীর, এবং ব্যবহৃত না হওয়া ক্লাসও লোড হয়। প্রোডাকশনে Tailwind CLI, Vite বা PostCSS-এর মাধ্যমে বিল্ড করা হয়, যেখানে শুধু ব্যবহৃত ক্লাসগুলো CSS ফাইলে যায়।"
    ],
    whyUseful: "শেখার সময় সেটআপের ঝামেলা ছাড়াই ফল দেখা যায়। প্রোডাকশনের সীমাবদ্ধতা জানা থাকলে ভুল পদ্ধতিতে সাইট চালু হয় না।",
    syntax: {
      lang: "html",
      code: `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<style type="text/tailwindcss">
  @theme {
    --color-brand: #2563eb;
  }
</style>`
    },
    example: {
      title: "কাস্টম রং সহ CDN পেজ",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CDN ও কাস্টম থিম</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <style type="text/tailwindcss">
    @theme {
      --color-brand: #2563eb;
    }
  </style>
</head>
<body class="p-6 font-sans">
  <h1 class="text-3xl font-bold text-brand">আমাদের ব্র্যান্ড</h1>
  <p class="mt-2 text-slate-700">এই রংটি @theme থেকে এসেছে।</p>
  <button type="button" class="mt-4 rounded-lg bg-brand px-4 py-2 text-white">যোগাযোগ</button>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`, explain: "Play CDN। এটি `head`-এ থাকলে ক্লাস কাজ করে।" },
      { code: `<style type="text/tailwindcss">`, explain: "এই ব্লকের ভেতরে Tailwind-এর বিশেষ CSS (যেমন `@theme`) লেখা যায়।" },
      { code: `--color-brand: #2563eb;`, explain: "একটি কাস্টম রঙের নাম। `--color-` দিয়ে শুরু হলে `brand` নামে ক্লাস তৈরি হয়।" },
      { code: `class="text-3xl font-bold text-brand"`, explain: "কাস্টম রঙ `text-brand` ক্লাসে ব্যবহৃত।" }
    ],
    output: "শিরোনাম ব্র্যান্ড নীল রঙে দেখাবে, বোতামের ব্যাকগ্রাউন্ডও একই নীল হবে।",
    mistakes: [
      {
        wrong: `<style>@theme { --color-brand: red; }</style>`,
        right: `<style type="text/tailwindcss">@theme { --color-brand: red; }</style>`,
        explain: "`type=\"text/tailwindcss\"` না দিলে Tailwind এই ব্লক প্রক্রিয়া করে না।"
      },
      {
        wrong: `<script src="..."></script> (body-র শেষে)`,
        right: `<script src="..."></script> (head-এর ভেতরে)`,
        explain: "স্ক্রিপ্ট `head`-এ থাকলে পেজ লোডের শুরুতেই স্টাইল তৈরি হয়; এতে ফ্ল্যাশ কম হয়।"
      },
      {
        wrong: `CDN-এ প্রোডাকশন সাইট চালানো`,
        right: `CLI/Vite/PostCSS দিয়ে বিল্ড করা CSS ফাইল`,
        explain: "Play CDN শুধু উন্নয়ন ও শেখার জন্য; প্রোডাকশনে ছোট, বিল্ড করা CSS ব্যবহার করুন।"
      }
    ],
    bestPractices: [
      "শেখার সময় CDN ব্যবহার করুন, কিন্তু প্রকল্প বড় হলে বিল্ড সেটআপে যান।",
      "কাস্টম রং ও ফন্ট `@theme` এ একবার রাখুন, যাতে সব জায়গায় একই মান থাকে।",
      "ইন্টারনেট ছাড়া কাজ করতে হলে বিল্ড করা CSS ফাইল ব্যবহার করুন।"
    ],
    useCase: "একটি কোম্পানি তাদের ব্র্যান্ডের নীল রং `@theme`-এ একবার লিখে রাখে, এবং পুরো সাইটে সেটি `text-brand`/`bg-brand` দিয়ে ব্যবহার করে।",
    practice: [
      {
        level: "easy",
        task: "`@theme` ব্লকে `--color-accent: #f59e0b;` লিখুন এবং একটি শিরোনাম `text-accent` দিয়ে রঙিন করুন।",
        hint: "`<style type=\"text/tailwindcss\">` ব্যবহার করুন।",
        solution: "<style type=\"text/tailwindcss\">\n  @theme {\n    --color-accent: #f59e0b;\n  }\n</style>\n<h1 class=\"text-accent\">শিরোনাম</h1>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "CDN স্ক্রিপ্ট ও একটি সাধারণ `h2` সহ head লিখুন।",
        hint: "`<script src=...@tailwindcss/browser@4>`।",
        solution: "<head>\n  <meta charset=\"UTF-8\">\n  <script src=\"https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4\"></script>\n</head>\n<body>\n  <h2 class=\"font-semibold\">শিরোনাম</h2>\n</body>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "প্রোডাকশনে CDN কেন উপযুক্ত নয়, দুটি কারণ লিখুন।",
        hint: "ইন্টারনেট ও পারফরম্যান্স ভাবুন।",
        solution: "১. CDN-এ ব্রাউজারে ক্লাস তৈরি হয়, তাই ধীর। ২. ব্যবহৃত না হওয়া ক্লাসও লোড হয়, ফাইল বড় হয়।",
        solutionLang: "text"
      }
    ],
    quiz: [
      {
        question: "Tailwind v4 এর কাস্টম রং কোন ব্লকে লেখা হয়?",
        options: ["@theme", "@media", "@keyframes", "@import url"],
        answer: 0,
        explanation: "`@theme` ব্লকে `--color-*` ভেরিয়েবল লিখে কাস্টম রং যোগ করা হয়।"
      },
      {
        question: "Play CDN প্রোডাকশনে কেন উপযুক্ত নয়?",
        options: ["এটি রঙিন নয়", "ব্রাউজারে ক্লাস তৈরি হয় এবং ফাইল অপ্রয়োজনীয় বড়", "এটি কাজ করে না", "এতে ক্লাস নেই"],
        answer: 1,
        explanation: "CDN-এ রানটাইমে ক্লাস তৈরি হয় এবং ব্যবহৃত না হওয়া ক্লাসও থাকে; তাই বিল্ড করা CSS ভালো।"
      },
      {
        question: "কাস্টম থিমের ব্লকে কোন `type` দিতে হয়?",
        options: ["text/css", "text/tailwindcss", "module", "json"],
        answer: 1,
        explanation: "`type=\"text/tailwindcss\"` দিলে Tailwind ব্লকটি প্রক্রিয়া করে।"
      }
    ]
  },
  {
    id: "tailwind-03-colors-spacing-typography",
    course: "tailwind",
    module: 2,
    moduleTitle: "মডিউল ২: ইউটিলিটি ক্লাস দিয়ে স্টাইলিং",
    order: 1,
    title: "রং, স্পেসিং, টাইপোগ্রাফি ও সাইজিং",
    objectives: [
      "রঙের ক্লাস (`bg-*`, `text-*`) এবং শেড (৫০-৯৫০) বুঝবেন।",
      "স্পেসিং ক্লাস (`p-*`, `m-*`, `gap-*`) এর স্কেল বুঝবেন।",
      "সাইজিং ও টাইপোগ্রাফির ক্লাস ব্যবহার করতে পারবেন।"
    ],
    explanation: [
      "রঙের ক্লাস প্রিফিক্স দিয়ে শুরু হয়: `bg-` ব্যাকগ্রাউন্ড, `text-` লেখা, `border-` বর্ডার। রঙের নামের পর শেড আসে: `blue-50` খুব হালকা, `blue-500` মাঝারি, `blue-900` খুব গাঢ়।",
      "স্পেসিং স্কেলে `1` = ৪px। তাই `p-4` = ১৬px, `m-2` = ৮px, `gap-6` = ২৪px। `px-` ডান-বাম, `py-` উপর-নিচ, `mt-`/`mb-` উপর/নিচের margin।",
      "সাইজিং: `w-full` (১০০% প্রস্থ), `max-w-md` (সর্বোচ্চ প্রস্থ), `h-screen` (পুরো স্ক্রিনের উচ্চতা)। টাইপোগ্রাফি: `text-sm`, `text-lg`, `text-2xl` আকার; `font-medium`, `font-bold` ওজন; `leading-relaxed` লাইনের দূরত্ব।"
    ],
    whyUseful: "একটি স্কেল ও রঙের প্যালেট মেনে কাজ করলে ডিজাইন গোছানো থাকে, এবং প্রতিটি মান আলাদা করে ভাবতে হয় না।",
    syntax: {
      lang: "html",
      code: `<div class="bg-blue-50 p-4 text-blue-900 text-lg font-medium">...</div>`
    },
    example: {
      title: "একটি ছোট প্রোফাইল কার্ড",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>রং ও স্পেসিং</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-slate-100 p-6 font-sans">
  <article class="mx-auto w-full max-w-sm rounded-xl bg-white p-6 shadow">
    <p class="text-sm font-medium uppercase tracking-wide text-blue-600">ডেভেলপার</p>
    <h2 class="mt-1 text-2xl font-bold text-slate-900">রহিম উদ্দিন</h2>
    <p class="mt-3 leading-relaxed text-slate-600">HTML, CSS ও JavaScript দিয়ে ওয়েব বানান।</p>
    <div class="mt-5 flex gap-3">
      <span class="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-800">HTML</span>
      <span class="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-800">CSS</span>
    </div>
  </article>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: `text-sm font-medium uppercase tracking-wide text-blue-600`, explain: "ছোট আকার, মাঝারি ওজন, বড় হাতের অক্ষর, অক্ষরের ফাঁক এবং নীল রং।" },
      { code: `mt-1 text-2xl font-bold text-slate-900`, explain: "উপরে ৪px ফাঁক, বড় গাঢ় শিরোনাম।" },
      { code: `leading-relaxed`, explain: "লাইনের দূরত্ব বেশি, বড় লেখা পড়তে আরামদায়ক।" },
      { code: `mt-5 flex gap-3`, explain: "উপরে ২০px ফাঁক, ভেতরের আইটেমগুলো পাশাপাশি এবং ১২px দূরত্বে।" }
    ],
    output: "সাদা কার্ডের ভেতরে ছোট নীল শিরোনাম, গাঢ় নাম, ধূসর বর্ণনা এবং নিচে দুটি হালকা নীল ব্যাজ।",
    mistakes: [
      {
        wrong: `class="p-16"`,
        right: `class="p-4"`,
        explain: "স্পেসিং স্কেলে ১৬ মানে ৬৪px, খুব বড়। স্কেলের ছোট সংখ্যা ব্যবহার করুন।"
      },
      {
        wrong: `class="bg-blue"`,
        right: `class="bg-blue-600"`,
        explain: "রঙের নামের সাথে শেড যোগ করতে হয়; শুধু `blue` দিলে কাজ করে না।"
      },
      {
        wrong: `class="text-bold"`,
        right: `class="font-bold"`,
        explain: "ওজনের জন্য `font-*` ব্যবহার করুন।"
      }
    ],
    bestPractices: [
      "একই ধরনের ফাঁক এক স্কেল থেকে নিন, যেমন ৪, ৬, ৮।",
      "লেখার রং ও ব্যাকগ্রাউন্ডের কনট্রাস্ট ভালো রাখুন (গাঢ় লেখা হালকা ব্যাকগ্রাউন্ডে)।",
      "ধারাবাহিকতার জন্য কয়েকটি মূল রং বেছে নিন এবং শুধু সেগুলো ব্যবহার করুন।"
    ],
    useCase: "একটি পণ্যের কার্ডে দাম, নাম ও বিবরণ আলাদা আকার ও ওজনে দেখাতে এই ক্লাসগুলো ব্যবহার হয়।",
    practice: [
      {
        level: "easy",
        task: "একটি `div` লিখুন যার ব্যাকগ্রাউন্ড `bg-amber-100`, প্যাডিং `p-4`, লেখার রং `text-amber-900`।",
        hint: "তিনটি ক্লাস।",
        solution: "<div class=\"bg-amber-100 p-4 text-amber-900\">হলুদ বক্স</div>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "তিনটি বাটন লিখুন একই সারিতে, ফাঁক `gap-3`, প্রতিটির `px-4 py-2 rounded-md bg-slate-900 text-white`।",
        hint: "একটি `div` এ `flex gap-3`।",
        solution: "<div class=\"flex gap-3\">\n  <button class=\"rounded-md bg-slate-900 px-4 py-2 text-white\">এক</button>\n  <button class=\"rounded-md bg-slate-900 px-4 py-2 text-white\">দুই</button>\n  <button class=\"rounded-md bg-slate-900 px-4 py-2 text-white\">তিন</button>\n</div>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি শিরোনাম লিখুন যা `text-3xl font-bold tracking-tight text-slate-900` এবং তার নিচে একটি অনুচ্ছেদ `mt-2 text-base leading-7 text-slate-600`।",
        hint: "দুটি আলাদা উপাদান।",
        solution: "<h1 class=\"text-3xl font-bold tracking-tight text-slate-900\">শিরোনাম</h1>\n<p class=\"mt-2 text-base leading-7 text-slate-600\">বিবরণ লেখা।</p>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "`p-4` ক্লাসে প্যাডিং কত পিক্সেল?",
        options: ["৪px", "১৬px", "৬৪px", "২০px"],
        answer: 1,
        explanation: "Tailwind স্পেসিং স্কেলে ১ = ৪px, তাই `4` = ১৬px।"
      },
      {
        question: "ব্যাকগ্রাউন্ড হালকা নীল দিতে কোনটি সঠিক?",
        options: ["bg-blue", "bg-blue-50", "background-blue-50", "blue-bg"],
        answer: 1,
        explanation: "রঙের নামের সাথে শেড যোগ করে `bg-blue-50` লিখতে হয়; ছোট শেড হালকা রং দেয়।"
      },
      {
        question: "ফাঁকের জন্য উপর-নিচে সমান ফাঁক কোন ক্লাস?",
        options: ["py-4", "px-4", "pt-4 only", "m-x"],
        answer: 0,
        explanation: "`py-` উপর ও নিচে প্যাডিং দেয়।"
      }
    ]
  },
  {
    id: "tailwind-04-responsive-hover-dark",
    course: "tailwind",
    module: 2,
    moduleTitle: "মডিউল ২: ইউটিলিটি ক্লাস দিয়ে স্টাইলিং",
    order: 2,
    title: "Responsive prefix, hover/focus ও Dark mode",
    objectives: [
      "`sm:`, `md:`, `lg:` দিয়ে মোবাইল-ফার্স্ট রেসপন্সিভ ডিজাইন লিখতে পারবেন।",
      "`hover:` ও `focus-visible:` দিয়ে ইন্টারঅ্যাকশন স্টেট যোগ করতে পারবেন।",
      "`dark:` প্রিফিক্স দিয়ে ডার্ক মোডের রং ঠিক করতে পারবেন।"
    ],
    explanation: [
      "Tailwind মোবাইল-ফার্স্ট। বেস ক্লাস (যেমন `grid-cols-1`) সব স্ক্রিনে কাজ করে, আর `md:grid-cols-2` মাঝারি ও বড় স্ক্রিনে (সাধারণত ৭৬৮px থেকে) প্রযোজ্য। ব্রেকপয়েন্ট: `sm` (৬৪০px), `md` (৭৬৮px), `lg` (১০২৪px)।",
      "`hover:bg-blue-700` মাউস উপরে আনলে রং বদলায়। কীবোর্ড ফোকাসের জন্য `focus-visible:ring-2` ব্যবহার করুন, যাতে স্পষ্ট ফোকাস রিং দেখা যায়। `active:` ক্লিকের সময়ের স্টেট।",
      "`dark:` প্রিফিক্স ডার্ক মোডে ক্লাস প্রয়োগ করে। Tailwind v4-এ ডিফল্টে এটি ডিভাইসের প্রিফার্ড থিম (prefers-color-scheme) অনুসরণ করে। ম্যানুয়াল টগলের জন্য কাস্টম ভ্যারিয়েন্ট লিখতে হয়।"
    ],
    whyUseful: "একটি কোড বেসে সব স্ক্রিন, সব স্টেট ও ডার্ক মোড সামলানো যায়, আলাদা CSS ফাইল ছাড়াই।",
    syntax: {
      lang: "html",
      code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <button class="bg-blue-600 hover:bg-blue-700 focus-visible:ring-2">বোতাম</button>
</div>`
    },
    example: {
      title: "রেসপন্সিভ গ্রিড ও ইন্টারঅ্যাকশন",
      files: [
        {
          lang: "html",
          code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>রেসপন্সিভ ও হোভার</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-slate-100 p-4 dark:bg-slate-900">
  <main class="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div class="rounded-lg bg-white p-5 shadow dark:bg-slate-800 dark:text-slate-100">কার্ড ১</div>
    <div class="rounded-lg bg-white p-5 shadow dark:bg-slate-800 dark:text-slate-100">কার্ড ২</div>
    <div class="rounded-lg bg-white p-5 shadow dark:bg-slate-800 dark:text-slate-100">কার্ড ৩</div>
  </main>
  <div class="mt-6 text-center">
    <button type="button" class="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none">কিনুন</button>
  </div>
</body>
</html>`
        }
      ]
    },
    lineByLine: [
      { code: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, explain: "ছোট স্ক্রিনে এক কলাম, মাঝারিতে দুই, বড়তে তিন।" },
      { code: `hover:bg-blue-700`, explain: "মাউস উপরে এলে ব্যাকগ্রাউন্ড গাঢ় নীল হয়।" },
      { code: `focus-visible:ring-2 focus-visible:ring-amber-400`, explain: "কীবোর্ডে ফোকাস করলে হলুদ রিং দেখায়, যা অ্যাক্সেসিবিলিটির জন্য জরুরি।" },
      { code: `dark:bg-slate-900`, explain: "ডার্ক মোডে ব্যাকগ্রাউন্ড গাঢ় হয়।" }
    ],
    output: "ডেস্কটপে তিনটি কার্ড পাশাপাশি, মোবাইলে একটির নিচে একটি। বোতামে মাউস নিলে রং বদলায়, কীবোর্ডে ফোকাস করলে হলুদ রিং আসে।",
    mistakes: [
      {
        wrong: `class="grid-cols-3 md:grid-cols-1"`,
        right: `class="grid-cols-1 md:grid-cols-3"`,
        explain: "`md:` বড় স্ক্রিনের জন্য। মোবাইলের জন্য বেস ক্লাস লিখুন, নাহলে মোবাইলে উল্টো লেআউট হয়।"
      },
      {
        wrong: `class="hover:bg-blue-700 focus:outline-none"`,
        right: `class="hover:bg-blue-700 focus-visible:ring-2"`,
        explain: "ফোকাস সরিয়ে দিলে কীবোর্ড ব্যবহারকারী কোথায় আছেন বোঝেন না। `focus-visible` দিয়ে স্পষ্ট ফোকাস দিন।"
      },
      {
        wrong: `class="sm:grid-cols-3" (বেস ক্লাস ছাড়া)`,
        right: `class="grid-cols-1 sm:grid-cols-3"`,
        explain: "ছোট স্ক্রিনের জন্য বেস ক্লাস না দিলে মোবাইলে লেআউট ঠিক থাকে না।"
      }
    ],
    bestPractices: [
      "বেস (মোবাইল) স্টাইল লিখুন, তারপর `md:` ও `lg:` যোগ করুন।",
      "সবসময় ফোকাস স্টাইল রাখুন; `focus-visible` ব্যবহার করুন।",
      "ডার্ক মোডের রং আলাদা করে পরীক্ষা করুন, শুধু ব্যাকগ্রাউন্ড বদলালেই হবে না।"
    ],
    useCase: "একটি ব্লগ সাইটে মোবাইলে এক কলামের লেখা, ট্যাবলেটে দুই কলাম এবং ডেস্কটপে তিন কলাম দেখাতে এই প্রিফিক্সগুলো ব্যবহার হয়।",
    practice: [
      {
        level: "easy",
        task: "একটি `div` লিখুন যা মোবাইলে সম্পূর্ণ প্রস্থ (`w-full`) এবং `md:` থেকে প্রস্থ অর্ধেক (`md:w-1/2`) হবে।",
        hint: "বেস ক্লাস ও `md:` প্রিফিক্স।",
        solution: "<div class=\"w-full md:w-1/2\">বক্স</div>",
        solutionLang: "html"
      },
      {
        level: "medium",
        task: "একটি বাটন লিখুন যার হোভারে ব্যাকগ্রাউন্ড বদলায় এবং কীবোর্ড ফোকাসে স্পষ্ট রিং দেখায়।",
        hint: "`hover:` ও `focus-visible:` ক্লাস।",
        solution: "<button class=\"bg-slate-900 px-4 py-2 text-white hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-blue-500\">বোতাম</button>",
        solutionLang: "html"
      },
      {
        level: "challenging",
        task: "একটি কার্ড লিখুন যা হালকা ব্যাকগ্রাউন্ডে থাকে এবং ডার্ক মোডে (`dark:`) গাঢ় ব্যাকগ্রাউন্ড ও হালকা লেখা পায়।",
        hint: "`bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100`।",
        solution: "<div class=\"rounded-lg bg-white p-4 text-slate-900 dark:bg-slate-800 dark:text-slate-100\">কার্ড</div>",
        solutionLang: "html"
      }
    ],
    quiz: [
      {
        question: "Tailwind-এ মোবাইল-ফার্স্ট বলতে কী বোঝায়?",
        options: ["শুধু মোবাইলের জন্য লেখা", "বেস ক্লাস ছোট স্ক্রিনের জন্য, প্রিফিক্স বড় স্ক্রিনের জন্য", "মোবাইলে কাজ করে না", "শুধু ডেস্কটপ লেখা"],
        answer: 1,
        explanation: "বেস ক্লাস সব স্ক্রিনে, আর `md:`/`lg:` প্রিফিক্স বড় স্ক্রিনের জন্য নতুন নিয়ম যোগ করে।"
      },
      {
        question: "কীবোর্ড ফোকাস দেখাতে কোন ক্লাস ভালো?",
        options: ["focus:outline-none", "focus-visible:ring-2", "hover:ring", "dark:ring"],
        answer: 1,
        explanation: "`focus-visible:ring-2` কীবোর্ড ফোকাসে স্পষ্ট রিং দেয়; ফোকাস লুকানো উচিত নয়।"
      },
      {
        question: "ডার্ক মোডের ক্লাস কোন প্রিফিক্স দিয়ে লেখা হয়?",
        options: ["night:", "dark:", "black:", "theme:"],
        answer: 1,
        explanation: "`dark:` প্রিফিক্স ডার্ক মোডে ক্লাস প্রয়োগ করে।"
      }
    ]
  }
]);
