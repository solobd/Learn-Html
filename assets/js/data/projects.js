window.PROJECTS = window.PROJECTS || [];
window.PROJECTS.push(...[
  {
    id: "project-profile",
    title: "Personal Profile Webpage (ব্যক্তিগত প্রোফাইল পেজ)",
    level: "বিগিনার",
    summary: "একটি সহজ প্রোফাইল পেজ যেখানে নাম, পরিচিতি, দক্ষতার তালিকা ও যোগাযোগের তথ্য থাকবে।",
    requirements: [
      "পেজে একটি h1 শিরোনাম (আপনার নাম) থাকবে।",
      "একটি ছোট পরিচিতি অনুচ্ছেদ থাকবে।",
      "দক্ষতার একটি তালিকা (ul/li) থাকবে।",
      "যোগাযোগের জন্য একটি mailto লিংক থাকবে।"
    ],
    steps: [
      "একটি ফোল্ডার বানিয়ে `index.html` তৈরি করুন।",
      "HTML কাঠামো (doctype, html, head, body) লিখুন এবং lang=\"bn\" দিন।",
      "header-এ নাম ও পরিচিতি লিখুন।",
      "main-এ দক্ষতার তালিকা যোগ করুন।",
      "footer-এ mailto লিংক দিন।",
      "style ট্যাগে সাধারণ রং, ফন্ট ও কার্ডের স্টাইল লিখুন।"
    ],
    htmlStructure: "header (নাম ও পরিচিতি), main (দক্ষতা), footer (যোগাযোগ)। সেমান্টিক ট্যাগ ব্যবহার করা হয়েছে।",
    cssStyling: "body-তে ফন্ট ও ব্যাকগ্রাউন্ড, .card ক্লাসে সাদা বক্স ও গোল কোণ, এবং লিংকের রং।",
    responsive: "max-width দিয়ে কার্ড সীমিত রাখা হয়, ফলে বড় স্ক্রিনে লেখা ছড়িয়ে যায় না। মোবাইলে padding যথেষ্ট।",
    accessibility: "lang=\"bn\", স্পষ্ট শিরোনাম ক্রম (h1, h2), mailto লিংকে অর্থবহ লেখা।",
    tailwindAlt: "Tailwind-এ একই কার্ড লেখা যায়: `mx-auto max-w-md rounded-xl bg-white p-6 shadow`। লেখার রং `text-slate-700` ইত্যাদি ইউটিলিটি ক্লাস দিয়ে।",
    starter: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>আমার প্রোফাইল</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #f1f5f9; margin: 0; padding: 16px; }
    .card { max-width: 480px; margin: 24px auto; background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 4px 14px rgba(0,0,0,0.08); }
    h1 { margin-top: 0; }
    a { color: #1d4ed8; }
  </style>
</head>
<body>
  <div class="card">
    <header>
      <h1>আপনার নাম</h1>
      <p>ওয়েব ডেভেলপার শিক্ষার্থী।</p>
    </header>
    <main>
      <h2>দক্ষতা</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </main>
    <footer>
      <p><a href="mailto:you@example.com">যোগাযোগ করুন</a></p>
    </footer>
  </div>
</body>
</html>`,
      css: ""
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>রহিম উদ্দিন - প্রোফাইল</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #f1f5f9; color: #0f172a; margin: 0; padding: 16px; line-height: 1.7; }
    .card { max-width: 480px; margin: 24px auto; background: #fff; border-radius: 12px; padding: 24px; box-shadow: 0 4px 14px rgba(0,0,0,0.08); }
    h1 { margin: 0 0 4px; font-size: 1.6rem; }
    .role { color: #475569; margin-top: 0; }
    .skills { padding-left: 1.2em; }
    a { color: #1d4ed8; }
  </style>
</head>
<body>
  <article class="card">
    <header>
      <h1>রহিম উদ্দিন</h1>
      <p class="role">ওয়েব ডেভেলপার শিক্ষার্থী, ঢাকা।</p>
      <p>আমি HTML, CSS ও JavaScript শিখছি এবং সহজ ওয়েবসাইট বানাই।</p>
    </header>
    <main>
      <h2>দক্ষতা</h2>
      <ul class="skills">
        <li>HTML5 ও সেমান্টিক লেআউট</li>
        <li>CSS ও রেসপন্সিভ ডিজাইন</li>
        <li>JavaScript-এর মৌলিক বিষয়</li>
      </ul>
    </main>
    <footer>
      <p><a href="mailto:rahim@example.com">rahim@example.com</a> এ ইমেইল করুন।</p>
    </footer>
  </article>
</body>
</html>`,
      css: ""
    },
    expected: "মাঝখানে একটি সাদা কার্ডে নাম, পরিচিতি, দক্ষতার তালিকা এবং ইমেইল লিংক দেখাবে।",
    representative: true
  },
  {
    id: "project-portfolio",
    title: "Responsive Portfolio Website (রেসপন্সিভ পোর্টফোলিও ওয়েবসাইট)",
    level: "ইন্টারমিডিয়েট",
    summary: "নিজের কাজের নমুনা দেখানোর জন্য একটি রেসপন্সিভ পোর্টফোলিও পেজ: হিরো, প্রজেক্ট তালিকা ও যোগাযোগ।",
    requirements: [
      "হিরো সেকশনে নাম ও একটি কল-টু-অ্যাকশন বাটন থাকবে।",
      "প্রজেক্টের তালিকা থাকবে, মোবাইলে এক কলাম ও ডেস্কটপে তিন কলাম।",
      "যোগাযোগ ফর্ম বা ইমেইল লিংক থাকবে।"
    ],
    steps: [
      "সেকশনের কাঠামো (header, main, section, footer) লিখুন।",
      "হিরো সেকশন তৈরি করুন।",
      "প্রজেক্ট কার্ড তৈরি করুন।",
      "Grid দিয়ে কার্ড সাজান এবং media query দিন।",
      "যোগাযোগ সেকশন যোগ করুন।"
    ],
    htmlStructure: "header-এ নেভিগেশন, main-এ hero ও projects section, footer-এ যোগাযোগ।",
    cssStyling: "CSS Grid দিয়ে প্রজেক্ট কার্ড, CSS variables দিয়ে রং।",
    responsive: "grid-template-columns: 1fr এবং min-width: 768px এ repeat(3, 1fr)।",
    accessibility: "প্রতিটি প্রজেক্টের ছবিতে alt, বাটন ও লিংকে স্পষ্ট লেখা।",
    tailwindAlt: "Tailwind: `grid grid-cols-1 gap-6 md:grid-cols-3` দিয়ে একই লেআউট।",
    starter: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>পোর্টফোলিও</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; color: #0f172a; }
    .hero { padding: 48px 16px; background: #1e3a8a; color: #fff; text-align: center; }
    .projects { display: grid; grid-template-columns: 1fr; gap: 16px; padding: 24px 16px; }
    .project { background: #f8fafc; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0; }
    @media (min-width: 768px) { .projects { grid-template-columns: repeat(3, 1fr); } }
  </style>
</head>
<body>
  <header class="hero">
    <h1>আমার পোর্টফোলিও</h1>
    <p>আমি একজন ওয়েব ডেভেলপার।</p>
  </header>
  <main>
    <section class="projects" aria-label="প্রজেক্টসমূহ">
      <article class="project"><h2>প্রজেক্ট ১</h2><p>একটি সহজ ব্লগ পেজ।</p></article>
      <article class="project"><h2>প্রজেক্ট ২</h2><p>একটি ক্যালকুলেটর।</p></article>
      <article class="project"><h2>প্রজেক্ট ৩</h2><p>একটি রেসিপি সাইট।</p></article>
    </section>
  </main>
  <footer>
    <p><a href="mailto:you@example.com">যোগাযোগ</a></p>
  </footer>
</body>
</html>`,
      css: ""
    },
    solution: null,
    expected: "মোবাইলে প্রজেক্টগুলো একের নিচে এক, ৭৬৮px-এর বেশি প্রস্থে তিন কলামে।",
    representative: false
  },
  {
    id: "project-login-form",
    title: "Login ও Registration Form UI (লগইন ও রেজিস্ট্রেশন ফর্ম)",
    level: "ইন্টারমিডিয়েট",
    summary: "লগইন ও রেজিস্ট্রেশন ফর্মের UI। এটি শুধু ইনপুট যাচাই (client-side) দেখায়; প্রকৃত লগইন সার্ভার ছাড়া সম্ভব নয়।",
    requirements: [
      "প্রতিটি ইনপুটের সাথে label থাকবে।",
      "ইমেইল ও পাসওয়ার্ড required থাকবে।",
      "পাসওয়ার্ড কমপক্ষে ৮ অক্ষর (minlength)।",
      "ভুল হলে স্পষ্ট বার্তা দেখাবে।"
    ],
    steps: [
      "form তৈরি করুন এবং method/action ঠিক করুন।",
      "প্রতিটি ফিল্ডের জন্য label ও input যোগ করুন।",
      "required ও minlength যোগ করুন।",
      "CSS দিয়ে ফর্মের চেহারা দিন।",
      "একটি বাটন দিন এবং অনুমোদনের আগে কোনো ডেটা পাঠাবেন না (প্রোটোটাইপ)।"
    ],
    htmlStructure: "form > fieldset (প্রতিটি ফিল্ড একটি div-এ), label + input, submit বাটন।",
    cssStyling: "input-এর সীমানা, focus স্টাইল, এবং বাটনের রং।",
    responsive: "ফর্মের প্রস্থ max-width দিয়ে সীমিত, মোবাইলে পূর্ণ প্রস্থ।",
    accessibility: "label ইনপুটের সাথে সংযুক্ত (for/id), autocomplete দেওয়া, focus স্পষ্ট।",
    tailwindAlt: "Tailwind: input-এ `w-full rounded-md border px-3 py-2 focus:ring-2` ইত্যাদি।",
    starter: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>লগইন</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #f1f5f9; padding: 16px; }
    form { max-width: 360px; margin: 24px auto; background: #fff; padding: 24px; border-radius: 12px; }
    .field { margin-bottom: 14px; }
    label { display: block; font-weight: 600; margin-bottom: 4px; }
    input { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; }
    button { width: 100%; padding: 10px; border: 0; border-radius: 8px; background: #1d4ed8; color: #fff; font-weight: 600; }
  </style>
</head>
<body>
  <form>
    <h1>লগইন</h1>
    <div class="field">
      <label for="email">ইমেইল</label>
      <input id="email" name="email" type="email" required autocomplete="email">
    </div>
    <div class="field">
      <label for="password">পাসওয়ার্ড</label>
      <input id="password" name="password" type="password" required minlength="8" autocomplete="current-password">
    </div>
    <button type="submit">প্রবেশ করুন</button>
  </form>
</body>
</html>`,
      css: ""
    },
    solution: null,
    expected: "একটি ফর্ম দেখাবে; খালি বা ভুল ইমেইলে ব্রাউজারের বার্তা আসবে। বাস্তব লগইন সার্ভার ছাড়া সম্ভব নয়।",
    representative: false
  },
  {
    id: "project-navbar",
    title: "Responsive Navigation Bar (রেসপন্সিভ নেভিগেশন বার)",
    level: "ইন্টারমিডিয়েট",
    summary: "একটি নেভিগেশন বার যা ডেস্কটপে লিংক পাশাপাশি দেখায় এবং মোবাইলে সহজে wrap হয়।",
    requirements: [
      "লোগো ও লিংকের তালিকা থাকবে।",
      "লিংকগুলো ডেস্কটপে এক সারিতে থাকবে।",
      "মোবাইলে লিংকগুলো সুন্দরভাবে wrap করবে।",
      "লিংকে ফোকাস ও হোভার স্টাইল থাকবে।"
    ],
    steps: [
      "nav তৈরি করুন এবং ul-এ লিংক দিন।",
      "flex দিয়ে ডেস্কটপ লেআউট করুন।",
      "flex-wrap ও gap যোগ করুন।",
      "hover ও focus-visible স্টাইল দিন।",
      "মোবাইলে padding ও font-size ঠিক করুন।"
    ],
    htmlStructure: "header > nav > ul > li > a। সেমান্টিক nav ব্যবহার করা হয়েছে।",
    cssStyling: "nav-এ flex, ব্যাকগ্রাউন্ড, লিংকের রং, হোভার এফেক্ট।",
    responsive: "flex-wrap: wrap ফলে ছোট স্ক্রিনে লিংক নিচে নেমে যায়, কোনো overflow হয় না।",
    accessibility: "nav-এর aria-label, :focus-visible স্টাইল, পর্যাপ্ত কনট্রাস্ট।",
    tailwindAlt: "Tailwind: `flex flex-wrap items-center gap-4 bg-slate-900 px-4 py-3` ইত্যাদি।",
    starter: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>নেভিগেশন বার (স্টার্টার)</title>
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; }
    .site-nav { background: #0f172a; color: #fff; padding: 12px 16px; }
    .site-nav ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 12px; }
    .site-nav a { color: #e2e8f0; text-decoration: none; }
  </style>
</head>
<body>
  <header class="site-nav">
    <nav aria-label="প্রধান নেভিগেশন">
      <ul>
        <li><a href="#">হোম</a></li>
        <li><a href="#">সেবা</a></li>
        <li><a href="#">যোগাযোগ</a></li>
      </ul>
    </nav>
  </header>
  <main><p>এখানে flex-wrap যোগ করুন।</p></main>
</body>
</html>`,
      css: ""
    },
    solution: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>নেভিগেশন বার</title>
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; }
    .site-nav { background: #0f172a; color: #fff; padding: 12px 16px; }
    .site-nav ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px 16px; align-items: center; }
    .logo { font-weight: 700; margin-right: auto; }
    .site-nav a { color: #e2e8f0; text-decoration: none; padding: 6px 10px; border-radius: 6px; }
    .site-nav a:hover { background: #1e293b; color: #fff; }
    .site-nav a:focus-visible { outline: 3px solid #f59e0b; outline-offset: 2px; }
    main { padding: 24px 16px; }
  </style>
</head>
<body>
  <header class="site-nav">
    <nav aria-label="প্রধান নেভিগেশন">
      <ul>
        <li class="logo">ওয়েব শিখি</li>
        <li><a href="#">হোম</a></li>
        <li><a href="#">সেবা</a></li>
        <li><a href="#">কোর্স</a></li>
        <li><a href="#">যোগাযোগ</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h1>স্বাগতম</h1>
    <p>ছোট স্ক্রিনে নেভিগেশন লিংক নিচে wrap হবে।</p>
  </main>
</body>
</html>`,
      css: ""
    },
    expected: "কালো নেভিগেশন বারে লোগো ও লিংকগুলো থাকবে; ছোট স্ক্রিনে লিংকগুলো নতুন লাইনে যাবে। হোভারে ব্যাকগ্রাউন্ড বদলাবে।",
    representative: true
  },
  {
    id: "project-product-card",
    title: "Product Card Layout (প্রোডাক্ট কার্ড লেআউট)",
    level: "বিগিনার",
    summary: "একটি পণ্যের কার্ড: ছবি (SVG), নাম, দাম, বিবরণ ও একটি বাটন।",
    requirements: [
      "কার্ডে ছবি, নাম, দাম, বিবরণ ও বাটন থাকবে।",
      "ছবিতে alt থাকবে।",
      "কার্ডের উচ্চতা সমান থাকবে।"
    ],
    steps: [
      "article ব্যবহার করে কার্ডের কাঠামো লিখুন।",
      "ছবি হিসেবে inline SVG ব্যবহার করুন।",
      "CSS দিয়ে কার্ড, ছায়া ও গোল কোণ দিন।",
      "বাটনে হোভার স্টাইল দিন।"
    ],
    htmlStructure: "article > img/svg, h2, p.price, p.desc, button।",
    cssStyling: "কার্ডে padding, border-radius, ছায়া; ছবির আকার width: 100%।",
    responsive: "max-width: 280px কার্ড, একাধিক কার্ড flex-wrap দিয়ে সাজানো।",
    accessibility: "ছবির জন্য role=\"img\" ও aria-label, বাটনে স্পষ্ট লেখা।",
    tailwindAlt: "Tailwind: `w-64 rounded-xl bg-white p-4 shadow-md` ইত্যাদি।",
    starter: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>প্রোডাক্ট কার্ড</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #f8fafc; padding: 16px; }
    .products { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; }
    .card { width: 260px; background: #fff; border-radius: 14px; padding: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    .card svg { width: 100%; height: auto; border-radius: 10px; }
    .price { font-weight: 700; color: #15803d; }
    .card button { width: 100%; padding: 10px; border: 0; border-radius: 8px; background: #1d4ed8; color: #fff; font-weight: 600; }
    .card button:hover { background: #1e40af; }
  </style>
</head>
<body>
  <main class="products">
    <article class="card">
      <svg viewBox="0 0 200 120" role="img" aria-label="একটি নীল বই"><rect width="200" height="120" fill="#dbeafe"/><rect x="60" y="20" width="80" height="80" fill="#1d4ed8"/></svg>
      <h2>বাংলা ব্যাকরণ বই</h2>
      <p class="price">১২০ টাকা</p>
      <p>সহজ ভাষায় বাংলা ব্যাকরণ শেখার বই।</p>
      <button type="button">কার্টে যোগ করুন</button>
    </article>
    <article class="card">
      <svg viewBox="0 0 200 120" role="img" aria-label="একটি সবুজ খাতা"><rect width="200" height="120" fill="#dcfce7"/><rect x="50" y="25" width="100" height="70" fill="#15803d"/></svg>
      <h2>অনুশীলন খাতা</h2>
      <p class="price">৮০ টাকা</p>
      <p>প্রতিদিনের অনুশীলনের জন্য লাইনযুক্ত খাতা।</p>
      <button type="button">কার্টে যোগ করুন</button>
    </article>
  </main>
</body>
</html>`,
      css: ""
    },
    solution: null,
    expected: "পাশাপাশি দুটি সমান উচ্চতার কার্ড; ছোট স্ক্রিনে নিচে নেমে যাবে। বাটনে হোভারে রং বদলাবে।",
    representative: false
  },
  {
    id: "project-gallery",
    title: "Responsive Image Gallery (রেসপন্সিভ ইমেজ গ্যালারি)",
    level: "ইন্টারমিডিয়েট",
    summary: "গ্রিডে সাজানো ছবির গ্যালারি। ছবিগুলো inline SVG দিয়ে তৈরি, বাইরের ছবির প্রয়োজন নেই।",
    requirements: [
      "গ্রিডে কমপক্ষে ছয়টি আইটেম থাকবে।",
      "প্রতিটি আইটেমে alt বা aria-label থাকবে।",
      "মোবাইলে দুই কলাম, ডেস্কটপে তিন কলাম।"
    ],
    steps: [
      "ul দিয়ে গ্যালারির কাঠামো লিখুন।",
      "প্রতিটি ছবি হিসেবে SVG ব্যবহার করুন।",
      "CSS Grid দিয়ে কলাম সাজান।",
      "object-fit: cover দিয়ে ছবি সমান করুন।"
    ],
    htmlStructure: "section > ul > li > figure > svg + figcaption।",
    cssStyling: "grid, gap, aspect-ratio ও object-fit।",
    responsive: "grid-template-columns: repeat(2, 1fr) এবং ৭৬৮px-এ repeat(3, 1fr)।",
    accessibility: "figure/figcaption ব্যবহার, SVG-এ role=\"img\" ও aria-label।",
    tailwindAlt: "Tailwind: `grid grid-cols-2 gap-3 md:grid-cols-3` ইত্যাদি।",
    starter: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ইমেজ গ্যালারি</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 16px; margin: 0; }
    .gallery { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .gallery figure { margin: 0; }
    .gallery svg { width: 100%; aspect-ratio: 4 / 3; border-radius: 10px; display: block; }
    figcaption { font-size: 0.9rem; color: #475569; margin-top: 4px; }
    @media (min-width: 768px) { .gallery { grid-template-columns: repeat(3, 1fr); } }
  </style>
</head>
<body>
  <h1>আমার গ্যালারি</h1>
  <ul class="gallery">
    <li><figure><svg viewBox="0 0 4 3" role="img" aria-label="নীল আকাশ"><rect width="4" height="3" fill="#60a5fa"/></svg><figcaption>নীল আকাশ</figcaption></figure></li>
    <li><figure><svg viewBox="0 0 4 3" role="img" aria-label="সবুজ মাঠ"><rect width="4" height="3" fill="#4ade80"/></svg><figcaption>সবুজ মাঠ</figcaption></figure></li>
    <li><figure><svg viewBox="0 0 4 3" role="img" aria-label="হলুদ সূর্য"><rect width="4" height="3" fill="#fde047"/></svg><figcaption>হলুদ সূর্য</figcaption></figure></li>
    <li><figure><svg viewBox="0 0 4 3" role="img" aria-label="লাল ফুল"><rect width="4" height="3" fill="#f87171"/></svg><figcaption>লাল ফুল</figcaption></figure></li>
    <li><figure><svg viewBox="0 0 4 3" role="img" aria-label="বেগুনি সন্ধ্যা"><rect width="4" height="3" fill="#a78bfa"/></svg><figcaption>বেগুনি সন্ধ্যা</figcaption></figure></li>
    <li><figure><svg viewBox="0 0 4 3" role="img" aria-label="ধূসর শহর"><rect width="4" height="3" fill="#94a3b8"/></svg><figcaption>ধূসর শহর</figcaption></figure></li>
  </ul>
</body>
</html>`,
      css: ""
    },
    solution: null,
    expected: "মোবাইলে দুই কলামে, বড় স্ক্রিনে তিন কলামে ছয়টি ছবির ক্যাপশনসহ গ্রিড দেখাবে।",
    representative: false
  },
  {
    id: "project-landing",
    title: "Landing Page (ল্যান্ডিং পেজ)",
    level: "ইন্টারমিডিয়েট",
    summary: "একটি পণ্য বা সেবার ল্যান্ডিং পেজ: হিরো, সুবিধা, এবং কল-টু-অ্যাকশন।",
    requirements: [
      "উপরে হিরো সেকশন ও একটি মূল বাটন।",
      "তিনটি সুবিধার কার্ড।",
      "নিচে আরেকটি কল-টু-অ্যাকশন।"
    ],
    steps: [
      "হিরো সেকশনের কাঠামো লিখুন।",
      "সুবিধার কার্ড তৈরি করুন।",
      "CTA বাটন যোগ করুন।",
      "মোবাইল ও ডেস্কটপে লেআউট পরীক্ষা করুন।"
    ],
    htmlStructure: "header/hero, section (features), section (cta), footer।",
    cssStyling: "হিরোতে ব্যাকগ্রাউন্ড রং, বাটনের স্টাইল, কার্ড গ্রিড।",
    responsive: "মোবাইলে সব কার্ড একের নিচে, ডেস্কটপে তিন কলাম।",
    accessibility: "শিরোনাম ক্রম, বাটনে স্পষ্ট লেখা, কনট্রাস্ট।",
    tailwindAlt: "Tailwind: হিরোতে `py-16 text-center bg-blue-700 text-white`।",
    starter: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ল্যান্ডিং পেজ</title>
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; color: #0f172a; }
    .hero { background: #1e40af; color: #fff; text-align: center; padding: 56px 16px; }
    .hero a { display: inline-block; margin-top: 12px; background: #f59e0b; color: #0f172a; padding: 10px 18px; border-radius: 8px; text-decoration: none; font-weight: 700; }
    .features { display: grid; gap: 16px; padding: 32px 16px; grid-template-columns: 1fr; }
    .feature { background: #f8fafc; border-radius: 12px; padding: 18px; }
    @media (min-width: 768px) { .features { grid-template-columns: repeat(3, 1fr); } }
  </style>
</head>
<body>
  <header class="hero">
    <h1>সহজে ওয়েব শিখুন</h1>
    <p>ধাপে ধাপে HTML, CSS ও JavaScript।</p>
    <a href="#">এখনই শুরু করুন</a>
  </header>
  <main>
    <section class="features" aria-label="সুবিধা">
      <article class="feature"><h2>সহজ ভাষা</h2><p>বাংলায় ব্যাখ্যা।</p></article>
      <article class="feature"><h2>অনুশীলন</h2><p>প্রতি লেসনে কাজ।</p></article>
      <article class="feature"><h2>প্রজেক্ট</h2><p>বাস্তব উদাহরণ।</p></article>
    </section>
  </main>
  <footer style="text-align:center;padding:16px;">© ২০২৬ ওয়েব শিখি</footer>
</body>
</html>`,
      css: ""
    },
    solution: null,
    expected: "নীল হিরো সেকশনে শিরোনাম ও হলুদ বাটন; নিচে তিনটি সুবিধার কার্ড।",
    representative: false
  },
  {
    id: "project-admin-dashboard",
    title: "Admin Dashboard UI (অ্যাডমিন ড্যাশবোর্ড UI)",
    level: "অ্যাডভান্সড",
    summary: "সাইডবার, উপরের বার ও কয়েকটি পরিসংখ্যান কার্ডসহ একটি স্ট্যাটিক ড্যাশবোর্ড। ডেটা নমুনা (sample) হিসেবে লেখা।",
    requirements: [
      "সাইডবার ও মূল কনটেন্ট আলাদা লেআউটে থাকবে।",
      "চারটি পরিসংখ্যান কার্ড থাকবে (নমুনা ডেটা)।",
      "মোবাইলে সাইডবার লুকানো থাকবে।"
    ],
    steps: [
      "নমুনা ডেটার কাঠামো HTML-এ লিখুন।",
      "Grid দিয়ে মূল লেআউট করুন।",
      "সাইডবারের জন্য মোবাইল-ফার্স্ট CSS লিখুন।",
      "কার্ডগুলো grid দিয়ে সাজান।"
    ],
    htmlStructure: "div.layout > aside (নেভিগেশন) + main (cards, table)।",
    cssStyling: "grid layout, কার্ডের বক্স, টেবিলের সীমানা।",
    responsive: "মোবাইলে aside নিচে বা লুকানো; ডেস্কটপে বাম পাশে।",
    accessibility: "aside ও nav-এর aria-label, টেবিলে th scope।",
    tailwindAlt: "Tailwind: `grid md:grid-cols-[240px_1fr]` ইত্যাদি।",
    starter: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ড্যাশবোর্ড</title>
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; background: #f1f5f9; }
    .layout { display: grid; grid-template-columns: 1fr; min-height: 100vh; }
    aside { background: #0f172a; color: #e2e8f0; padding: 16px; }
    aside ul { list-style: none; padding: 0; margin: 0; }
    aside li { padding: 8px 0; }
    main { padding: 16px; }
    .stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .stat { background: #fff; border-radius: 10px; padding: 16px; }
    @media (min-width: 900px) {
      .layout { grid-template-columns: 220px 1fr; }
      .stats { grid-template-columns: repeat(4, 1fr); }
    }
  </style>
</head>
<body>
  <div class="layout">
    <aside aria-label="সাইড নেভিগেশন">
      <h2>ড্যাশবোর্ড</h2>
      <ul><li>হোম</li><li>ব্যবহারকারী</li><li>সেটিংস</li></ul>
    </aside>
    <main>
      <h1>সারসংক্ষেপ</h1>
      <p>নিচের সংখ্যাগুলো নমুনা ডেটা।</p>
      <section class="stats">
        <div class="stat"><p>ব্যবহারকারী</p><strong>১২০</strong></div>
        <div class="stat"><p>অর্ডার</p><strong>৪৫</strong></div>
        <div class="stat"><p>আয়</p><strong>৳ ৫০০০</strong></div>
        <div class="stat"><p>বার্তা</p><strong>৮</strong></div>
      </section>
    </main>
  </div>
</body>
</html>`,
      css: ""
    },
    solution: null,
    expected: "ডেস্কটপে বাম পাশে গাঢ় সাইডবার ও ডানে চারটি কার্ড; মোবাইলে কার্ড দুই কলামে।",
    representative: false
  },
  {
    id: "project-blog",
    title: "Responsive Blog Layout (রেসপন্সিভ ব্লগ লেআউট)",
    level: "ইন্টারমিডিয়েট",
    summary: "একটি ব্লগ পেজ: মূল লেখা ও পাশের সাইডবার। মোবাইলে সাইডবার নিচে চলে যায়।",
    requirements: [
      "article ও aside থাকবে।",
      "লেখার প্রস্থ পড়ার উপযোগী (max-width) থাকবে।",
      "মোবাইলে সাইডবার মূল লেখার নিচে যাবে।"
    ],
    steps: [
      "article ও aside কাঠামো লিখুন।",
      "লেখায় ভালো line-height ও font-size দিন।",
      "ডেস্কটপে দুই কলাম লেআউট দিন।"
    ],
    htmlStructure: "main > article (h1, meta, p) + aside (জনপ্রিয় লেখা)।",
    cssStyling: "line-height 1.8, max-width 65ch, সাইডবারের বর্ডার।",
    responsive: "মোবাইলে এক কলাম, ডেস্কটপে grid-template-columns: 2fr 1fr।",
    accessibility: "time ট্যাগে তারিখ, লিংকে স্পষ্ট লেখা।",
    tailwindAlt: "Tailwind: `grid gap-8 lg:grid-cols-[2fr_1fr]` ইত্যাদি।",
    starter: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ব্লগ</title>
  <style>
    body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; line-height: 1.8; color: #1e293b; }
    .wrap { max-width: 960px; margin: 0 auto; display: grid; gap: 24px; grid-template-columns: 1fr; }
    article { max-width: 65ch; }
    aside { border-top: 1px solid #cbd5e1; padding-top: 12px; }
    @media (min-width: 900px) { .wrap { grid-template-columns: 2fr 1fr; } aside { border-top: 0; border-left: 1px solid #cbd5e1; padding: 0 0 0 16px; } }
  </style>
</head>
<body>
  <div class="wrap">
    <article>
      <h1>আমার প্রথম ব্লগ পোস্ট</h1>
      <p><time datetime="2026-01-10">১০ জানুয়ারি ২০২৬</time></p>
      <p>এই পোস্টে আমি HTML শেখার অভিজ্ঞতা লিখছি।</p>
    </article>
    <aside>
      <h2>জনপ্রিয় লেখা</h2>
      <ul><li>CSS Grid-এর সহজ পাঠ</li><li>JavaScript-এর প্রথম পদক্ষেপ</li></ul>
    </aside>
  </div>
</body>
</html>`,
      css: ""
    },
    solution: null,
    expected: "ডেস্কটপে লেখা বাম পাশে ও সাইডবার ডানে; মোবাইলে সাইডবার লেখার নিচে।",
    representative: false
  },
  {
    id: "project-business",
    title: "Complete Multi-Section Business Website (সম্পূর্ণ ব্যবসায়িক ওয়েবসাইট)",
    level: "অ্যাডভান্সড",
    summary: "নেভিগেশন, হিরো, সেবা, সম্পর্কে, যোগাযোগ ও ফুটার সহ একটি বহু-সেকশনের ব্যবসায়িক ওয়েবসাইট।",
    requirements: [
      "নেভিগেশনে সেকশনে যাওয়ার অভ্যন্তরীণ লিংক (#id)।",
      "হিরো, সেবা, সম্পর্কে, যোগাযোগ সেকশন।",
      "যোগাযোগ ফর্মের UI।",
      "মোবাইল-ফার্স্ট ও অ্যাক্সেসিবল।"
    ],
    steps: [
      "সেকশনগুলোর কাঠামো লিখুন ও প্রতিটির id দিন।",
      "নেভিগেশন লিংক সেকশনের id-এর সাথে মেলান।",
      "প্রতিটি সেকশনে স্টাইল যোগ করুন।",
      "যোগাযোগ ফর্ম যোগ করুন।",
      "মোবাইল ও ডেস্কটপে পরীক্ষা করুন।"
    ],
    htmlStructure: "header (nav), main (hero, services, about, contact), footer।",
    cssStyling: "সেকশনভিত্তিক padding, grid কার্ড, ফর্মের স্টাইল।",
    responsive: "সব সেকশন মোবাইলে এক কলাম, ডেস্কটপে গ্রিড।",
    accessibility: "সেকশনে aria-labelledby, ফর্মে label, পর্যাপ্ত কনট্রাস্ট।",
    tailwindAlt: "Tailwind: প্রতিটি সেকশনে `py-16 px-4 max-w-6xl mx-auto` ইত্যাদি।",
    starter: {
      html: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>আমাদের ব্যবসা</title>
  <style>
    body { margin: 0; font-family: system-ui, sans-serif; color: #0f172a; line-height: 1.7; }
    nav { background: #0f172a; padding: 12px 16px; }
    nav ul { list-style: none; display: flex; flex-wrap: wrap; gap: 12px; margin: 0; padding: 0; }
    nav a { color: #e2e8f0; text-decoration: none; }
    section { padding: 40px 16px; }
    .hero { background: #1e3a8a; color: #fff; text-align: center; }
    .services { display: grid; gap: 14px; grid-template-columns: 1fr; }
    .services article { background: #f1f5f9; padding: 16px; border-radius: 10px; }
    @media (min-width: 768px) { .services { grid-template-columns: repeat(3, 1fr); } }
  </style>
</head>
<body>
  <nav aria-label="প্রধান নেভিগেশন">
    <ul>
      <li><a href="#services">সেবা</a></li>
      <li><a href="#about">আমাদের সম্পর্কে</a></li>
      <li><a href="#contact">যোগাযোগ</a></li>
    </ul>
  </nav>
  <header class="hero" id="home">
    <h1>আপনার ব্যবসার অনলাইন সঙ্গী</h1>
    <p>সহজ, দ্রুত ও নির্ভরযোগ্য সমাধান।</p>
  </header>
  <main>
    <section id="services" aria-labelledby="services-title">
      <h2 id="services-title">আমাদের সেবা</h2>
      <div class="services">
        <article><h3>ওয়েবসাইট</h3><p>সুন্দর ও রেসপন্সিভ সাইট।</p></article>
        <article><h3>ডিজাইন</h3><p>ব্র্যান্ড অনুযায়ী ডিজাইন।</p></article>
        <article><h3>সহায়তা</h3><p>নিয়মিত রক্ষণাবেক্ষণ।</p></article>
      </div>
    </section>
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">আমাদের সম্পর্কে</h2>
      <p>আমরা ছোট ব্যবসার জন্য অনলাইন উপস্থিতি তৈরি করি।</p>
    </section>
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">যোগাযোগ</h2>
      <form>
        <label for="name">নাম</label>
        <input id="name" name="name" type="text" required>
        <label for="msg">বার্তা</label>
        <textarea id="msg" name="msg" rows="4"></textarea>
        <button type="submit">পাঠান</button>
      </form>
    </section>
  </main>
  <footer style="text-align:center;padding:16px;background:#e2e8f0;">© ২০২৬ আমাদের ব্যবসা</footer>
</body>
</html>`,
      css: ""
    },
    solution: null,
    expected: "উপরে নেভিগেশন, তারপর হিরো ও সেকশনগুলো; নেভিগেশন লিংকে ক্লিক করলে সংশ্লিষ্ট সেকশনে যাবে।",
    representative: false
  }
]);
