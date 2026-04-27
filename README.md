
<h1 align="center">NU Launch Labs</h1>

<p align="center">
  <strong>Northeastern's student-led organization where teams build end-to-end products.</strong><br/>
  Partnering with startups and developing original projects across disciplines.
</p>

<p align="center">
  <a href="https://www.nulaunchlabs.com">Website</a> · 
  <a href="https://www.linkedin.com/company/northeastern-launch-labs">LinkedIn</a> · 
  <a href="https://www.instagram.com/nulaunchlabs">Instagram</a>
</p>

---

## About

NU Launch Labs brings together students from every major to work on real-world, end-to-end projects that bridge classroom learning with practical impact. We operate through two tracks:

- **Launch Teams** — partner with startups to build and ship real products.
- **Innovation Teams** — develop original projects from concept to completion.

Members gain practical experience tackling real-world problems, produce portfolio-ready work, and explore pathways to entrepreneurship and innovation.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Tailwind CSS 4, Wouter |
| **Backend** | Express 4, tRPC 11, Superjson |
| **Database** | MySQL (TiDB) via Drizzle ORM |
| **Auth** | Manus OAuth with session cookies |
| **Storage** | AWS S3 for file assets |
| **UI** | shadcn/ui (Radix primitives), Lucide icons, Framer Motion |
| **Testing** | Vitest |

---

## Project Structure

The codebase follows an **MVC-inspired architecture** with clear separation of concerns:

```
northeastern-launch-labs/
│
├── client/src/
│   ├── layouts/                # Layout components (Navigation, Footer, PageLayout)
│   ├── pages/                  # Page-level views (Home, About, Leadership, Events, etc.)
│   ├── components/
│   │   ├── common/             # Reusable shared components (FloatingContact, ErrorBoundary)
│   │   ├── projects/           # Project-specific components (ProjectCard, ProjectCarousel)
│   │   └── ui/                 # shadcn/ui primitives (Button, Card, Dialog, etc.)
│   ├── config/                 # Constants, external URLs, team data
│   ├── contexts/               # React contexts (Theme)
│   ├── hooks/                  # Custom hooks
│   └── lib/                    # Utilities (tRPC client, helpers)
│
├── server/
│   ├── routers.ts              # Controller — tRPC procedures (API endpoints)
│   ├── db.ts                   # Model — database query helpers
│   ├── storage.ts              # S3 file storage helpers
│   └── *.test.ts               # Vitest test suites
│
├── drizzle/
│   ├── schema.ts               # Model — database table definitions
│   └── relations.ts            # Table relationships
│
└── shared/
    ├── const.ts                # Shared constants
    └── types.ts                # Shared TypeScript types
```

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, two-track overview, featured projects, announcements |
| `/about` | About | Mission, principles, how we operate |
| `/portfolio` | Projects | Full project database with search and domain filtering |
| `/projects/:id` | Project Detail | Individual project overview, MVP scope, tech stack |
| `/leadership` | Leadership | Fall 2026 open positions, Spring 2026 E-Board |
| `/events` | Events | Photo gallery from past events |

---

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm

### Installation

```bash
git clone https://github.com/your-org/northeastern-launch-labs.git
cd northeastern-launch-labs
pnpm install
```

### Development

```bash
pnpm dev
```

The dev server starts at `http://localhost:3000`.

### Database

After modifying `drizzle/schema.ts`:

```bash
pnpm db:push
```

### Testing

```bash
pnpm test
```

---

## Environment Variables

The following environment variables are required for the application to run. In production, these are injected automatically by the hosting platform.

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | MySQL/TiDB connection string |
| `JWT_SECRET` | Session cookie signing secret |
| `VITE_APP_ID` | OAuth application ID |
| `OAUTH_SERVER_URL` | OAuth backend base URL |
| `VITE_OAUTH_PORTAL_URL` | Login portal URL (frontend) |

---

## Design System

The site uses a **warm, light-background palette** with crimson red accents — intentionally scrappy and student-org in feel.

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F5F0EB` | Page backgrounds |
| Text | `#1A1A1A` | Primary body text |
| Accent | `#8B1A13` | Buttons, highlights, section backgrounds |
| Muted | `#E8E0D8` | Borders, subtle backgrounds |
| Card | `#FFFFFF` | Card surfaces |

Typography is set in `Space Grotesk` (headings) and `Inter` (body) via Google Fonts.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## Team

**Spring 2026 E-Board**

| Name | Role |
|------|------|
| Drew Hill | Co-Founder / President |
| Prisha Srivastava | Co-Founder / President |
| Alara Hakki | Communication & Outreach Chair |
| Grace Ou | Events Coordinator |
| Neha Bhende | Cybersecurity |
| Vansh Samaiya | Secretary |
| Sanay Kumar | Treasurer |
| Shaunak Soni | Operations |
| Ihika Reddy | Operations |

---

## License

This project is maintained by NU Launch Labs at Northeastern University.

---

<p align="center">
  <sub>Built with care by the NU Launch Labs team.</sub>
</p>
