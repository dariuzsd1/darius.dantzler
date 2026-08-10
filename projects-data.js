/* ============================================================
   PROJECTS — single source of truth.
   Both the timeline (Projects.html) and the project sub-page
   (Project.html) read from this one array.

   Adding a new project later is PURELY a data change:
   append an object here. No markup or logic changes needed.

   Shape:
   {
     id:        unique slug, used in the sub-page URL (?id=...)
     title:     project name
     subtitle:  one-line description
     role:      your role
     dates:     free text (e.g. "Since June 2026")
     year:      numeric sort key — timeline orders by this, then by
                the array's own order for same-year items
     status:    "in-progress" | "shipped" | "concept"
     hero:      true on the ONE flagship project (rendered larger)
     image:     "placeholder.jpg" -> a generated placeholder is used
     problem:   short paragraph — the gap it addressed
     approach:  paragraph (or \n-split lines) — what was actually done
     tools:     array of tag strings (tools + skills)
     highlights:array of 2–4 evidence bullets (numbers/impact first)
     links:     array of { label, url } — section hidden when empty
     placeholder:true  -> kept in the array to stress-test layout,
                          NOT rendered on the live site
   }
   ============================================================ */
window.PROJECTS = [
  {
    id: "t1d-supply-hub",
    title: "T1D Supply Hub",
    subtitle: "Supply logistics and inventory management for people with Type 1 Diabetes — tracking refill eligibility and site rotation, not glucose or dosing.",
    role: "Solo developer — product, design, and engineering",
    dates: "Since June 2026",
    year: 2026.6,
    status: "in-progress",
    hero: true,
    image: "placeholder.jpg",
    problem: "Existing diabetes apps focus on glucose and dosing and ignore supply logistics — the gap between days of supply left and the date insurance actually allows a refill.",
    approach: "Designed and built the app end to end, solo. That included a 103-item medical supply catalog cross-referenced against the FDA Device UDI API and EUDAMED, and a strict rule that no computed value is ever shown without real backing data.",
    tools: ["React", "FDA UDI API", "EUDAMED", "Product design", "Solo build"],
    highlights: [
      "103-item supply catalog matched against two regulatory device databases (FDA UDI, EUDAMED)",
      "Five structured audits produced a tracked list of 7 critical and 9 medium issues",
      "Defined the \u201Ccoverage gap\u201D concept — the space between supply on hand and insurance refill eligibility"
    ],
    links: [
      { label: "Live app", url: "https://t1-d-52t5-d9xu1vuyn-t1-d.vercel.app/" }
    ]
  },
  {
    id: "air-quality-app",
    title: "Air Quality App",
    subtitle: "An interactive, map-based emissions intelligence platform visualizing industrial methane and CO\u2082 sources across Baden-W\u00FCrttemberg, Germany.",
    role: "Developer",
    dates: "Since May 2026",
    year: 2026.5,
    status: "in-progress",
    hero: false,
    image: "placeholder.jpg",
    problem: "Industrial emissions data existed, but no single interactive interface combined facility-level data, pipeline routes, and confidence scores.",
    approach: "Built a React and Leaflet frontend backed by a FastAPI service, with three-layer geographic validation and a fallback embedded dataset for offline resilience.",
    tools: ["React", "Leaflet", "FastAPI", "PostGIS", "REST"],
    highlights: [
      "Deployed static build: 304 KB JS (94 KB gzipped)",
      "5 documented REST endpoints with auto-generated API docs",
      "30 seeded facilities using PostGIS for spatial queries"
    ],
    links: [
      { label: "Live demo", url: "https://dariuzsd1.github.io/AirmoTest/" }
    ]
  },
  {
    id: "intern-reimbursement-tracker",
    title: "Intern Reimbursement Tracker",
    subtitle: "An internal reimbursement and stipend management app for a research organization\u2019s ~30 interns, with role-based access for interns, a treasurer, and a boss.",
    role: "Treasurer and product owner",
    dates: "Since July 2026",
    year: 2026.7,
    status: "in-progress",
    hero: false,
    image: "placeholder.jpg",
    problem: "An informal reimbursement process lacked role separation, audit trails, and safeguards against duplicate payments.",
    approach: "Specified and directed the build of role-based access, a four-eyes stipend approval flow, and immutable paid records — choosing standard Postgres over OrioleDB for stability, given the financial data involved.",
    tools: ["Postgres", "Role-based access", "Product ownership", "Financial workflows"],
    highlights: [
      "Role-based access across three permission levels",
      "Four-eyes approval checkpoint on all stipend payments",
      "Full visual redesign brief specifying WCAG AA contrast"
    ],
    links: [
      { label: "Live app", url: "https://eurospacehub-reimbursement.vercel.app/" }
    ]
  },

  /* ---- PLACEHOLDERS removed 2026-08-09: three real projects now fill the timeline.
         To stress-test a longer list again, append objects with placeholder:true. ---- */
];

/* status -> display label */
window.PROJECT_STATUS = {
  "in-progress": "In progress",
  "shipped": "Shipped",
  "concept": "Concept"
};
