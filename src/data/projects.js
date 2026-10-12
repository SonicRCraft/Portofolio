// ===================================================
// DATA: Selected Architecture & Systems (Projects)
// ===================================================

export const projects = [
  {
    id: '01',
    systemTag: 'SYSTEM 01 // LOGISTICS & FINANCE MANAGEMENT',
    title: 'Logistics, Delivery Order & Cash Flow Management System',
    category: 'Full-Stack (Decoupled)',
    year: 'Full-Stack Project',
    desc: 'Full-stack application designed to streamline freight logistics and operational financial tracking. Handles delivery orders (surat jalan), cargo loading and unloading (bongkar muat), and records company cash flow associated with transport and shipping activities.',
    tags: ['React.js', 'FastAPI', 'PostgreSQL', 'RESTful APIs', 'Surat Jalan', 'Cash Flow Log', 'Full-Stack'],
    metrics: [
      { label: 'FRONTEND', value: 'React.js' },
      { label: 'BACKEND', value: 'FastAPI (Python)' },
      { label: 'DATABASE', value: 'PostgreSQL' },
      { label: 'ARCHITECTURE', value: 'Decoupled REST API' },
    ],
    githubFE: 'https://github.com/DevelopAppRoland/FE_Nelay',
    githubBE: 'https://github.com/DevelopAppRoland/BE_Nelay',
    statusNote: 'Non-Production / Staging Build',
    featured: true,
  },
  {
    id: '02',
    systemTag: 'SYSTEM 02 // INVENTORY & SUPPLY CHAIN ANALYSIS',
    title: 'Inventory Management & EOQ / ROP Analytical System',
    category: 'Full-Stack (Next.js)',
    year: 'Skripsi / Final Project',
    desc: 'Full-stack inventory management web platform built with Next.js and Firebase using the Scrum framework for academic research. Tracks incoming and outgoing goods, manages Purchase Orders (PO) and Stock Opname, and automates optimal reordering calculations via Economic Order Quantity (EOQ) and Reorder Point (ROP) formulas.',
    tags: ['Next.js', 'Firebase', 'Full-Stack', 'EOQ & ROP Formula', 'Stock Opname', 'Purchase Orders', 'Scrum Method'],
    metrics: [
      { label: 'FRAMEWORK', value: 'Next.js (Full-Stack)' },
      { label: 'DATABASE', value: 'Firebase Database' },
      { label: 'METHODOLOGY', value: 'Scrum Agile Framework' },
      { label: 'ALGORITHM', value: 'EOQ & ROP Calculation' },
    ],
    statusNote: 'Academic Research (Skripsi) / Non-Production',
    featured: false,
  },
  {
    id: '03',
    systemTag: 'SYSTEM 03 // MOBILE APPLICATION',
    title: 'Personal Monthly Expense Tracker Mobile App',
    category: 'Mobile Development',
    year: 'Mobile Application',
    desc: 'Cross-platform mobile application developed with Flutter for personal financial tracking and budgeting. Features monthly expense categorization, transaction logs, and an offline-first architecture powered by SQLite local database.',
    tags: ['Flutter', 'Dart', 'SQLite', 'Mobile App', 'Offline-First', 'Expense Tracking'],
    metrics: [
      { label: 'FRAMEWORK', value: 'Flutter & Dart' },
      { label: 'LOCAL DB', value: 'SQLite (Offline-First)' },
      { label: 'CORE MODULE', value: 'Monthly Budgeting Log' },
    ],
    statusNote: 'Mobile Project / Offline Architecture',
    featured: false,
  },
]
