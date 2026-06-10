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
    word: 'Deployment',
    category: 'Software Development',
    meaning: 'The process of releasing software into a production environment.',
    translation: 'Proses merilis aplikasi ke lingkungan produksi.',
    example: 'The deployment was completed successfully last night.',
    difficulty: 'Intermediate'
  },
  {
    id: 2,
    word: 'Repository',
    category: 'Software Development',
    meaning: 'A central location in which data is stored and managed.',
    translation: 'Lokasi pusat di mana data disimpan dan dikelola.',
    example: 'Please push your code changes to the remote repository.',
    difficulty: 'Beginner'
  },
  {
    id: 3,
    word: 'API (Application Programming Interface)',
    category: 'Web Development',
    meaning: 'A set of rules that allows different software applications to communicate with each other.',
    translation: 'Seperangkat aturan yang memungkinkan aplikasi perangkat lunak yang berbeda untuk saling berkomunikasi.',
    example: 'We are integrating a third-party payment API.',
    difficulty: 'Intermediate'
  },
  {
    id: 4,
    word: 'Scalability',
    category: 'Cloud Computing',
    meaning: 'The capability of a system, network, or process to handle a growing amount of work.',
    translation: 'Kemampuan sistem atau jaringan untuk menangani beban kerja yang terus bertambah.',
    example: 'Cloud services offer infinite scalability for our web applications.',
    difficulty: 'Advanced'
  },
  {
    id: 5,
    word: 'Vulnerability',
    category: 'Cybersecurity',
    meaning: 'A weakness in an IT system that can be exploited by an attacker.',
    translation: 'Kelemahan dalam sistem TI yang dapat dieksploitasi oleh penyerang.',
    example: 'The security team discovered a severe vulnerability in the login page.',
    difficulty: 'Intermediate'
  },
  {
    id: 6,
    word: 'Bandwidth',
    category: 'Networking',
    meaning: 'The maximum rate of data transfer across a given path.',
    translation: 'Tingkat maksimum transfer data melintasi jalur tertentu.',
    example: 'Downloading large files requires a high bandwidth connection.',
    difficulty: 'Beginner'
  }
];

export const featuredWord = {
  word: 'Authentication',
  pronunciation: '/ɔːˌθentɪˈkeɪʃn/',
  definition: "The process of verifying a user's identity before granting access to a system.",
  translation: "Proses memverifikasi identitas pengguna sebelum memberikan akses ke sistem.",
  example: "Two-factor authentication adds an extra layer of security to your account.",
  synonyms: ["Verification", "Validation", "Identification"]
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
