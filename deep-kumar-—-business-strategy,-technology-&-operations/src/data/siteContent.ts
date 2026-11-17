export const RESUME_CONTENT = {
  name: 'DEEP KUMAR',
  headline: 'Business Analyst | IT Business Analyst — SaaS & AI-Driven Products',
  contactLine: {
    location: 'Delhi NCR, India (Open to Remote)',
    phone: '+91 9874754022',
    email: 'dkr7836@gmail.com',
  },
  professionalSummary:
    'Business Analyst with 3+ years turning ambiguous business needs into dev-ready requirements across SaaS and AI-driven Food R&D products - cut delivery time 25% with real-time KPI dashboards at BCDiLabs, drove 40% adoption growth on Innov8.NXT, and partnered with a Fortune 500 client on digital transformation at Blu Cocoon, cutting bug-resolution time 20%. Skilled in requirements elicitation, BRDs/PRDs, user stories, UAT, JIRA, SQL, and Power BI. Growth from Dev to QA to BA at Blu Cocoon gives a unique perspective across SDLC and strong client handling.',
  coreSkills: [
    {
      group: 'Business Analysis',
      items:
        'Requirements Elicitation, BRDs/PRDs, User Stories, Acceptance Criteria, Use Cases, Business Rules, Gap Analysis, As-Is/To-Be Process Flows',
    },
    {
      group: 'Agile & Delivery',
      items:
        'Agile/Scrum, Backlog Refinement & Grooming, Sprint Planning, Stakeholder Workshops, Requirements Traceability, Cross-Functional Delivery (Dev/QA/UX)',
    },
    {
      group: 'Testing & Implementation',
      items:
        'UAT Planning & Execution, Test Scenarios & Cases, Defect Analysis, Requirements Validation, Implementation Support',
    },
    {
      group: 'Data & Reporting',
      items: 'KPI Dashboards, Power BI, Excel, SQL (Basic), BPMN, Data Analysis',
    },
    {
      group: 'Tools',
      items:
        'JIRA, Confluence, Azure DevOps, Figma, Balsamiq, Miro, Microsoft Teams, SharePoint',
    },
  ],
  professionalExperience: [
    {
      role: 'Business Analyst',
      company: 'BCDiLabs Pvt. Ltd. — Innov8.NXT (AI-Driven Food R&D Platform)',
      location: 'Remote',
      period: 'Sep 2023 – Dec 2024',
      highlights: [
        'Reduced project delivery time by 25% by building Excel/Power BI KPI dashboards that gave stakeholders real-time visibility into delivery and surfaced blockers earlier.',
        'Drove a 40% increase in feature adoption on Innov8.NXT by defining requirements and writing user guidance for AI-driven formulation features, aligning platform outputs with client workflows.',
        'Replaced recurring status meetings with structured backlog refinement and clearer upfront acceptance criteria, keeping engineering, QA, and design aligned on scope without added meeting load.',
        'Streamlined business processes to cut external software dependencies by 30%, lowering costs for client accounts.',
        'Led UAT across 50+ users, validating features against acceptance criteria and logging defects ahead of release.',
      ],
    },
    {
      role: 'Associate Business Quality Analyst',
      company: 'Blu Cocoon Digital Pvt. Ltd. — Digital Transformation',
      location: 'Kolkata',
      period: 'Oct 2021 – Aug 2023',
      highlights: [
        'Partnered directly with a Fortune 500 client on a digital transformation initiative, gathering requirements and scoping features for internal R&D tools.',
        'Cut bug-resolution time by 20% by coordinating QA, UAT, and defect analysis across cross-functional teams.',
        'Improved delivery efficiency by 20% using Azure DevOps and Excel trackers for backlog prioritization and sprint tracking.',
        'Created wireframes and workflow diagrams (Balsamiq, Miro) to align client and internal stakeholders on specifications ahead of development.',
      ],
    },
  ],
  additionalExperience: [
    {
      role: 'Supervisor - Call Center',
      company: 'Apollo Hospitals Enterprises Limited (AHEL)',
      location: 'Kolkata',
      period: 'Mar 2026 – Aug 2026',
      highlights: [
        'Tracked KPIs (service levels, AHT, adherence, CSAT) and resolved escalations across telehealth contact-center operations.',
      ],
    },
    {
      role: 'Procurement Manager',
      company: 'R.K. Motors (Apollo Tyres)',
      location: 'Chakdaha',
      period: 'Dec 2024 – Dec 2025',
      highlights: [
        'Analyzed procurement and inventory processes to identify gaps, improving operational reporting accuracy.',
      ],
    },
    {
      role: 'Co-founder and Product Strategist',
      company: 'Raag — E-commerce Startup',
      location: 'Bangalore & Kolkata',
      period: 'Nov 2019 – Oct 2021',
      highlights: [
        'Led product development and marketing for a D2C e-commerce platform, achieving 400% sales growth within 6 months.',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Business Administration (PGDM ExP) — On-going',
      institution: 'Institute of Management Technology (IMT), Ghaziabad',
      year: 'Batch of 2028',
      grade: 'On-going',
    },
    {
      degree: 'Bachelor of Technology, Computer Science & Engineering',
      institution:
        'Government College of Engineering and Textile Technology, Berhampore (MAKAUT, West Bengal)',
      year: '2019',
      grade: 'CGPA: 7.33/10',
    },
  ],
  certifications: [
    {
      title: 'ChatGPT for Project Management — Leveraging AI for Success',
      issuer: 'Vanderbilt University',
      subItems: [
        'ChatGPT for Project Management: Execution, Tracking, Success',
        'Prompt Engineering for ChatGPT',
        'ChatGPT for Project Management: Insight, Planning & Success',
      ],
    },
    { title: 'Product Management Launchpad', issuer: 'Upraised', subItems: [] },
    { title: 'Agile with Jira', issuer: 'Coursera', subItems: [] },
    { title: 'Lean Six Sigma (White Belt)', issuer: 'Six Sigma Society', subItems: [] },
    { title: 'Digital Marketing & Content Strategy', issuer: 'IIM Skills', subItems: [] },
  ],
  leadership: [
    {
      title: 'Cultural Secretary',
      detail: 'Led planning and execution of 15+ campus events.',
    },
    {
      title: 'Quiz Host',
      detail: 'Organized inter/intra-college competitions for 3+ years.',
    },
  ],
} as const;

export const HOME_CONTENT = {
  headline: "Business is complicated. Let's make sense of it.",
  subline:
    'Exploring business problems, challenging assumptions and finding better ways to create value.',
  primaryCta: "Let's Talk",
  thinkingCta: 'Explore My Thinking',
  aboutCta: 'Get to Know Me',
  descriptor: 'Based in Delhi NCR, India · On-going MBA (PGDM ExP, Batch of 2028), IMT Ghaziabad',
  strategyDeck: {
    label: 'StrategyDeck',
    status: 'Coming Soon',
    heading: 'Turn ideas into editable, watermark-free slides.',
    description:
      "I'm creating a free tool that takes in ideas and converts them into editable slides that can be downloaded without any watermark.",
  },
} as const;

export const ABOUT_CONTENT = {
  eyebrow: 'A DIFFERENT VIEW OF BUSINESS',
  heading: "I've seen business from more than one side. That's what keeps me curious.",
  summary:
    'My unconventional path spans entrepreneurship (customer discovery with limited resources), business analysis & product management (bridging business, tech, and people), and procurement operations (costs, processes, and trade-offs).',
  coreQuestions: [
    'Why do some businesses outperform others?',
    'What makes a strategy executable, not just attractive on paper?',
    'How can technology and better decisions improve business performance?',
  ],
  mbaNote:
    'Now building on that in the on-going PGDM ExP (Batch of 2028) at IMT Ghaziabad alongside independent research and case analysis.',
  closingLine:
    "I'm not here to pretend I have every answer — I enjoy asking better questions and trading perspectives.",
  ctaHeading: 'So, what are you working on?',
  ctaBody:
    "A business you're building, a problem to solve, or an idea to challenge — I'd enjoy hearing about it.",
  linkedinCta: 'Connect on',
  writeCta: 'Write to me',
} as const;

export const D_TALKS_CONTENT = {
  eyebrow: 'D-Talks · Perspectives & Research',
  heading: 'D-Talks',
  intro:
    'Independent writing on strategy, technology, business cases, and operations.',
  sections: [
    {
      title: 'Business Research',
      status: 'Coming Soon',
      description: 'Markets, industry economics, and technology strategy.',
    },
    {
      title: 'Case Studies',
      status: 'Coming Soon',
      description: 'Business problems, alternatives, execution, and trade-offs.',
    },
    {
      title: 'Articles',
      status: 'Coming Soon',
      description: 'Concise notes on strategy, products, and operations.',
    },
  ],
} as const;
