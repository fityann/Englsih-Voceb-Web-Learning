export const categories = [
  { id: 'software', name: 'Software Development', icon: 'Code', wordsCount: 150 },
  { id: 'web', name: 'Web Development', icon: 'Layout', wordsCount: 120 },
  { id: 'network', name: 'Networking', icon: 'Network', wordsCount: 85 },
  { id: 'cyber', name: 'Cybersecurity', icon: 'Shield', wordsCount: 95 },
  { id: 'cloud', name: 'Cloud Computing', icon: 'Cloud', wordsCount: 110 },
];

export const popularVocabulary = [
  {
    id: 1,
    word: 'go',
    category: 'Irregular Verbs',
    meaning: 'Verb 1: go | Verb 2: went | Verb 3: gone (To move or travel to a place).',
    translation: 'Pergi',
    example: 'I went to IT lab 1 to troubleshoot the router configuration.',
    difficulty: 'Beginner'
  },
  {
    id: 2,
    word: 'write',
    category: 'Irregular Verbs',
    meaning: 'Verb 1: write | Verb 2: wrote | Verb 3: written (To create text or code).',
    translation: 'Menulis',
    example: 'The engineer wrote a bash script to automate server updates.',
    difficulty: 'Beginner'
  },
  {
    id: 3,
    word: 'run',
    category: 'Irregular Verbs',
    meaning: 'Verb 1: run | Verb 2: ran | Verb 3: run (To execute a process or program).',
    translation: 'Menjalankan / Berjalan',
    example: 'We ran the build command and it completed without errors.',
    difficulty: 'Beginner'
  },
  {
    id: 4,
    word: 'connect',
    category: 'Regular Verbs',
    meaning: 'Verb 1: connect | Verb 2: connected | Verb 3: connected (To link systems or devices).',
    translation: 'Menghubungkan',
    example: 'The database connected successfully to the cloud server.',
    difficulty: 'Beginner'
  },
  {
    id: 5,
    word: 'send',
    category: 'Irregular Verbs',
    meaning: 'Verb 1: send | Verb 2: sent | Verb 3: sent (To transmit data or messages).',
    translation: 'Mengirim',
    example: 'The API client sent a GET request to retrieve user profile data.',
    difficulty: 'Beginner'
  },
  {
    id: 6,
    word: 'find',
    category: 'Irregular Verbs',
    meaning: 'Verb 1: find | Verb 2: found | Verb 3: found (To discover or locate something).',
    translation: 'Menemukan',
    example: 'The security scanner found two vulnerabilities in the code dependency.',
    difficulty: 'Beginner'
  }
];

export const featuredWord = {
  word: 'update',
  pronunciation: '/ʌpˈdeɪt/',
  definition: "Verb 1: update | Verb 2: updated | Verb 3: updated (To make something more modern or bring it up to date with new information).",
  translation: "Memperbarui",
  example: "We updated the legacy codebase to use the latest version of React.",
  synonyms: ["Upgrade", "Modify", "Refresh"]
};

export const learningPathSteps = [
  { id: 1, title: 'Basic IT Vocabulary', description: 'Hardware, software, and everyday technical terms.' },
  { id: 2, title: 'Programming Vocabulary', description: 'Syntax, logic, and common coding terminology.' },
  { id: 3, title: 'Software Development Terms', description: 'Agile, Git, repositories, and SDLC concepts.' },
  { id: 4, title: 'Cloud and DevOps', description: 'CI/CD, deployment, servers, and infrastructure.' },
  { id: 5, title: 'Professional Communication', description: 'Emails, stand-up meetings, and technical writing.' },
];

export const benefits = [
  { title: 'Improve Technical Communication', description: 'Speak confidently in stand-ups and code reviews.', icon: 'MessageSquare' },
  { title: 'Understand Documentation Faster', description: 'Read official docs and Stack Overflow with ease.', icon: 'FileText' },
  { title: 'Prepare for Global Careers', description: 'Open doors to international job opportunities.', icon: 'Globe' },
  { title: 'Increase Interview Confidence', description: 'Pass technical interviews in English flawlessly.', icon: 'Briefcase' },
];

export const testimonials = [
  { name: 'Sarah J.', role: 'Computer Science Student', content: 'This platform helped me understand the jargon my professors use every day.' },
  { name: 'Ahmad R.', role: 'Junior Frontend Developer', content: 'Reading React documentation is so much easier now. I highly recommend it!' },
  { name: 'Diana P.', role: 'DevOps Engineer', content: 'I used this to prepare for my interview at an international tech company, and I got the job!' },
];

export const faqs = [
  { question: 'What is IT Vocabulary?', answer: 'IT Vocabulary refers to the specific English terminology used in the technology industry, including software engineering, networking, and cloud computing.' },
  { question: 'Who is this platform for?', answer: 'It is designed for students, developers, and IT professionals who want to improve their English skills for career advancement.' },
  { question: 'Do I need programming experience?', answer: 'No, you don\'t need to be a programmer to learn. However, having a basic understanding of computers helps.' },
  { question: 'How many vocabulary words are available?', answer: 'We currently have over 500 carefully curated IT vocabulary words, and we add new ones every week.' },
];
