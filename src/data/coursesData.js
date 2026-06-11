export const courses = [
  {
    id: 1,
    title: 'Basic Irregular Verbs in IT',
    category: 'Irregular Verbs',
    progress: 50,
    totalModules: 1,
    description: 'Learn the primary English irregular verbs (V1, V2, V3) and their formulas, using examples set in IT and computer lab environments.',
    modules: [
      {
        id: 1,
        title: 'Module 1: Everyday IT Verbs',
        lessons: [
          { id: 1, title: 'Verb: Go (went, gone)', type: 'reading', status: 'completed' },
          { id: 2, title: 'Verb: Write (wrote, written)', type: 'reading', status: 'completed' },
          { id: 3, title: 'Verb: Run (ran, run)', type: 'reading', status: 'in-progress' },
          { id: 4, title: 'Verb: Send (sent, sent)', type: 'reading', status: 'locked' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Basic Regular Verbs in IT',
    category: 'Regular Verbs',
    progress: 0,
    totalModules: 1,
    description: 'Learn how to form and use common regular verbs (-ed endings) with formulas in IT and networking contexts.',
    modules: [
      {
        id: 1,
        title: 'Module 1: Server & Network Actions',
        lessons: [
          { id: 5, title: 'Verb: Connect (connected, connected)', type: 'reading', status: 'in-progress' },
          { id: 6, title: 'Verb: Update (updated, updated)', type: 'reading', status: 'locked' }
        ]
      }
    ]
  }
];

export const lessonsContent = {
  1: {
    title: 'Verb: Go (went, gone) - Pergi',
    courseId: 1,
    description: 'The verb "go" is irregular and changes forms completely to describe going to physical places or executing movements.',
    formula: 'V1: Subject + go/goes + Place | V2: Subject + went + Place | V3: Subject + has/have + gone + Place',
    examples: [
      { type: 'V1 (Present) - S + go/goes + Place', text: 'I go to IT lab 1 every Monday.' },
      { type: 'V2 (Past) - S + went + Place', text: 'I went to IT lab 1 yesterday to check the network rack.' },
      { type: 'V3 (Perfect) - S + has/have + gone + Place', text: 'The network administrator has gone to IT lab 1.' }
    ]
  },
  2: {
    title: 'Verb: Write (wrote, written) - Menulis',
    courseId: 1,
    description: 'The verb "write" is irregular and is used to describe drafting code, comments, or configurations.',
    formula: 'V1: Subject + write/writes + Code | V2: Subject + wrote + Code | V3: Subject + has/have + written + Code',
    examples: [
      { type: 'V1 (Present) - S + write/writes + Code', text: 'Developers write clean code.' },
      { type: 'V2 (Past) - S + wrote + Code', text: 'She wrote a python script to monitor server cpu usage.' },
      { type: 'V3 (Perfect) - S + has/have + written + Code', text: 'We have written the technical documentation for the project.' }
    ]
  },
  3: {
    title: 'Verb: Run (ran, run) - Menjalankan',
    courseId: 1,
    description: 'The verb "run" is irregular and is commonly used in IT to mean executing commands, software, or starting servers.',
    formula: 'V1: Subject + run/runs + Command | V2: Subject + ran + Command | V3: Subject + has/have + run + Command',
    examples: [
      { type: 'V1 (Present) - S + run/runs + Command', text: 'The program runs automatically at startup.' },
      { type: 'V2 (Past) - S + ran + Command', text: 'We ran the build command inside the terminal.' },
      { type: 'V3 (Perfect) - S + has/have + run + Command', text: 'The script has run successfully for three hours.' }
    ]
  },
  4: {
    title: 'Verb: Send (sent, sent) - Mengirim',
    courseId: 1,
    description: 'The verb "send" is irregular and describes transmitting data packets, request payloads, or notification emails.',
    formula: 'V1: Subject + send/sends + Data | V2: Subject + sent + Data | V3: Subject + has/have + sent + Data',
    examples: [
      { type: 'V1 (Present) - S + send/sends + Data', text: 'Web browers send HTTP requests to servers.' },
      { type: 'V2 (Past) - S + sent + Data', text: 'The monitoring system sent an alert to the team.' },
      { type: 'V3 (Perfect) - S + has/have + sent + Data', text: 'They have sent the log files to the cloud storage.' }
    ]
  },
  5: {
    title: 'Verb: Connect (connected, connected) - Menghubungkan',
    courseId: 2,
    description: 'The verb "connect" is regular, so it uses the "-ed" suffix for V2 and V3 forms. It describes establishing a link between systems.',
    formula: 'V1: Subject + connect/connects + Device | V2: Subject + connected + Device | V3: Subject + has/have + connected + Device',
    examples: [
      { type: 'V1 (Present) - S + connect/connects + Device', text: 'We connect the Ethernet cable to port 3.' },
      { type: 'V2 (Past) - S + connected + Device', text: 'I connected the main console cable to the Cisco switch.' },
      { type: 'V3 (Perfect) - S + has/have + connected + Device', text: 'The host machine has connected to the private database.' }
    ]
  },
  6: {
    title: 'Verb: Update (updated, updated) - Memperbarui',
    courseId: 2,
    description: 'The verb "update" is regular. In IT, it means installing patches, refreshing dependencies, or revising datasets.',
    formula: 'V1: Subject + update/updates + System | V2: Subject + updated + System | V3: Subject + has/have + updated + System',
    examples: [
      { type: 'V1 (Present) - S + update/updates + System', text: 'Adminstrators update the firewall rules weekly.' },
      { type: 'V2 (Past) - S + updated + System', text: 'The package manager updated all dependencies to version 2.' },
      { type: 'V3 (Perfect) - S + has/have + updated + System', text: 'The operating system has updated its files.' }
    ]
  }
};
