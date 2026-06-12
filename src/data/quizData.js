// ============================================================
// QUIZ DATA — English Vocabulary with Mobile App Dev Theme
// Dikelompokkan per materi: Verbs, Adjectives, Nouns
// ============================================================

export const quizCategories = [
  {
    id: "verbs",
    title: "Verbs",
    subtitle: "Action Words",
    description: "Learn common English verbs used when building mobile apps.",
    totalQuestions: 9,
    progress: 0,
    color: "blue",
    icon: "⚡",
  },
  {
    id: "adjectives",
    title: "Adjectives",
    subtitle: "Describing Words",
    description: "Master adjectives that describe mobile apps and their features.",
    totalQuestions: 9,
    progress: 0,
    color: "violet",
    icon: "🎨",
  },
  {
    id: "nouns",
    title: "Nouns",
    subtitle: "Naming Words",
    description: "Discover nouns commonly found in mobile app development.",
    totalQuestions: 9,
    progress: 0,
    color: "emerald",
    icon: "📦",
  },
];

// ─── VERBS ──────────────────────────────────────────────────
export const verbsQuiz = {
  sentence: [
    {
      id: 1,
      targetWord: "create",
      wordType: "Verb",
      clue: "Arrange the words to form a correct sentence about starting a new app project:",
      correctSentence: "Developers create mobile applications using programming languages",
      explanation: "The verb 'create' (membuat/menciptakan) means to bring something new into existence. In this sentence, it describes how developers build apps from scratch using code.",
    },
    {
      id: 2,
      targetWord: "install",
      wordType: "Verb",
      clue: "Arrange the words to form a correct sentence about getting an app onto your device:",
      correctSentence: "You can install this app from the official store",
      explanation: "The verb 'install' (menginstal/memasang) means to set up a program on a device. Users download and install apps to use them.",
    },
    {
      id: 3,
      targetWord: "update",
      wordType: "Verb",
      clue: "Arrange the words to form a correct sentence about getting the latest app version:",
      correctSentence: "Please update your application to get the newest features",
      explanation: "The verb 'update' (memperbarui) means to replace an older version of software with a newer one, usually to get new capabilities or bug fixes.",
    },
  ],
  scramble: [
    {
      id: 1,
      scrambledWord: "GIDSEN",
      answer: "DESIGN",
      clue: "Before writing code, a developer does this to plan how the app screens will look. It involves choosing colors, layout, and button placement.",
      explanation:
        '"Design" (mendesain/merancang) means to plan the appearance and function of something. In mobile development, you design the user interface before coding it. Good design makes apps easy and enjoyable to use.',
    },
    {
      id: 2,
      scrambledWord: "AHRES",
      answer: "SHARE",
      clue: "This is what users do when they send a photo, link, or message from one app to another person. Social media apps use this feature a lot.",
      explanation:
        '"Share" (membagikan) means to give or send something to others. In mobile apps, the share feature lets users send content like photos, videos, or links to friends through messaging apps or social media.',
    },
    {
      id: 3,
      scrambledWord: "HCSRAE",
      answer: "SEARCH",
      clue: "This is what you do when you type keywords into a bar at the top of an app to find specific content, like searching for a contact or a product.",
      explanation:
        '"Search" (mencari) means to look for something by examining carefully. Almost every mobile app has a search feature — you search for products in shopping apps, contacts in phone apps, or videos on YouTube.',
    },
  ],
  matching: [
    {
      id: 1,
      title: "Verb Matching — Mobile App Actions",
      instruction: "Match each verb with its correct meaning.",
      pairs: [
        {
          id: "p1",
          term: "Download",
          definition: "To transfer a file or app from the internet to your device.",
        },
        {
          id: "p2",
          term: "Build",
          definition: "To construct or put together something step by step, like making an app from code.",
        },
        {
          id: "p3",
          term: "Test",
          definition: "To check if an app works correctly by trying out its features before releasing it.",
        },
        {
          id: "p4",
          term: "Delete",
          definition: "To remove something permanently, like uninstalling an app or erasing data.",
        },
        {
          id: "p5",
          term: "Connect",
          definition: "To link or join two things together, like connecting an app to the internet.",
        },
      ],
    },
  ],
};

// ─── ADJECTIVES ─────────────────────────────────────────────
export const adjectivesQuiz = {
  sentence: [
    {
      id: 1,
      targetWord: "simple",
      wordType: "Adjective",
      clue: "Arrange the words to form a correct sentence about a user-friendly app design:",
      correctSentence: "A simple interface makes the app easy to navigate",
      explanation: "The adjective 'simple' (sederhana) describes something that is easy to understand or use. A simple layout prevents users from getting confused.",
    },
    {
      id: 2,
      targetWord: "fast",
      wordType: "Adjective",
      clue: "Arrange the words to form a correct sentence about app performance speed:",
      correctSentence: "Users prefer fast applications that load screens instantly",
      explanation: "The adjective 'fast' (cepat) describes high performance. Apps must load quickly to keep users engaged and prevent them from leaving.",
    },
    {
      id: 3,
      targetWord: "clean",
      wordType: "Adjective",
      clue: "Arrange the words to form a correct sentence about app interface neatness:",
      correctSentence: "This application has a clean design with spacious layouts",
      explanation: "The adjective 'clean' (bersih/rapi) in UI design means organized and tidy, using proper spacing and avoiding visual clutter.",
    },
  ],
  scramble: [
    {
      id: 1,
      scrambledWord: "OMSOTH",
      answer: "SMOOTH",
      clue: "This adjective describes an app that works without interruptions or lag — animations flow nicely and transitions feel natural.",
      explanation:
        '"Smooth" (halus/mulus) describes an experience without bumps or problems. A smooth app has fluid animations, no freezing, and pages transition naturally. Users love apps that feel smooth to use.',
    },
    {
      id: 2,
      scrambledWord: "LUFSUE",
      answer: "USEFUL",
      clue: "This adjective describes an app that helps people accomplish tasks or solve problems. It is the opposite of useless.",
      explanation:
        '"Useful" (berguna/bermanfaat) means able to be used for a practical purpose or helpful. A useful app solves a real problem for users — like a calculator, map, or to-do list. If an app is not useful, people will not keep it.',
    },
    {
      id: 3,
      scrambledWord: "UFRLCOOL",
      answer: "COLORFUL",
      clue: "This adjective describes an app design that has many bright and attractive colors, making the interface visually appealing and fun to look at.",
      explanation:
        '"Colorful" (berwarna-warni/penuh warna) means having many bright colors. In mobile app design, a colorful interface can make the app more attractive and engaging. However, designers must use colors wisely to avoid making the app look messy.',
    },
  ],
  matching: [
    {
      id: 1,
      title: "Adjective Matching — Describing Apps",
      instruction: "Match each adjective with its correct meaning.",
      pairs: [
        {
          id: "p1",
          term: "Popular",
          definition: "Liked, enjoyed, or used by many people — an app with millions of downloads.",
        },
        {
          id: "p2",
          term: "Secure",
          definition: "Protected from danger or risk — an app that keeps user data safe from hackers.",
        },
        {
          id: "p3",
          term: "Free",
          definition: "Available without cost — an app you can download and use without paying any money.",
        },
        {
          id: "p4",
          term: "Offline",
          definition: "Able to work without an internet connection — you can use the app anywhere.",
        },
        {
          id: "p5",
          term: "Friendly",
          definition: "Easy and pleasant to use — an app designed so that beginners can understand it quickly.",
        },
      ],
    },
  ],
};

// ─── NOUNS ──────────────────────────────────────────────────
export const nounsQuiz = {
  sentence: [
    {
      id: 1,
      targetWord: "screen",
      wordType: "Noun",
      clue: "Arrange the words to form a correct sentence about visual app screens:",
      correctSentence: "The home screen displays the main menu of the app",
      explanation: "The noun 'screen' (layar) refers to the phone's physical display, or a single page view within an application.",
    },
    {
      id: 2,
      targetWord: "button",
      wordType: "Noun",
      clue: "Arrange the words to form a correct sentence about interactive buttons:",
      correctSentence: "Tap the green button to submit your registration form",
      explanation: "The noun 'button' (tombol) is an interactive element on the screen that users tap to execute functions or navigate pages.",
    },
    {
      id: 3,
      targetWord: "notification",
      wordType: "Noun",
      clue: "Arrange the words to form a correct sentence about incoming alerts:",
      correctSentence: "A new notification appeared at the top of my phone",
      explanation: "The noun 'notification' (notifikasi/pemberitahuan) is an alert pop-up message that keeps the user updated on app events.",
    },
  ],
  scramble: [
    {
      id: 1,
      scrambledWord: "YASOUTL",
      answer: "LAYOUT",
      clue: "This noun refers to the arrangement of elements (text, images, buttons) on an app screen. Developers plan this before coding to organize the interface.",
      explanation:
        '"Layout" (tata letak) means how things are positioned and arranged on a screen. When building an app, you decide the layout — where the title goes, where buttons are placed, and how content is organized. A good layout helps users find what they need quickly.',
    },
    {
      id: 2,
      scrambledWord: "RORRE",
      answer: "ERROR",
      clue: "This noun describes a mistake or problem in the app that causes it to not work correctly. Developers spend a lot of time finding and fixing these.",
      explanation:
        '"Error" (kesalahan/error) is a mistake or fault that prevents something from working correctly. In app development, errors can crash the app, show wrong data, or make features stop working. Developers must find and fix errors before releasing the app.',
    },
    {
      id: 3,
      scrambledWord: "SDAORWPS",
      answer: "PASSWORD",
      clue: "This noun is a secret word or phrase that you type to access your account in an app. It protects your personal data and keeps your account safe.",
      explanation:
        '"Password" (kata sandi) is a secret combination of letters, numbers, and symbols used to verify your identity. Mobile apps ask for passwords to protect user accounts. Strong passwords keep your data safe from unauthorized access.',
    },
  ],
  matching: [
    {
      id: 1,
      title: "Noun Matching — App Components",
      instruction: "Match each noun with its correct meaning.",
      pairs: [
        {
          id: "p1",
          term: "Menu",
          definition: "A list of options or choices in an app that helps users navigate to different sections.",
        },
        {
          id: "p2",
          term: "Icon",
          definition: "A small picture or symbol that represents an app, feature, or action on the screen.",
        },
        {
          id: "p3",
          term: "User",
          definition: "A person who uses a mobile application or any software product.",
        },
        {
          id: "p4",
          term: "Feature",
          definition: "A specific function or capability of an app, like a camera, search bar, or dark mode.",
        },
        {
          id: "p5",
          term: "Storage",
          definition: "The space on a device where data, files, photos, and apps are saved and kept.",
        },
      ],
    },
  ],
};

// Helper to get quiz data by category id
export function getQuizByCategory(categoryId) {
  switch (categoryId) {
    case "verbs":
      return verbsQuiz;
    case "adjectives":
      return adjectivesQuiz;
    case "nouns":
      return nounsQuiz;
    default:
      return null;
  }
}
