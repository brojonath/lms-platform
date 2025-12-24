# LMS Platform - Development State

## Project Info
- **Framework:** SvelteKit + Svelte 5
- **Backend:** PocketBase (Phase 1+)
- **Styling:** Tailwind CSS (Fireship-inspired)
- **Started:** [Today's Date]

---

## Completed Versions
- [ ] v0.1 - Data types and mock data
- [ ] v0.2 - Data access layer
- [ ] v0.3 - First Svelte 5 component (CourseCard)
- [ ] v0.4 - Layout and routing
- [ ] v0.5 - Course listing page
- [ ] v1.0 - PocketBase integration
- [ ] v1.1 - Remote functions
- [ ] v1.2 - Authentication
- [ ] v2.0 - Video player
- [ ] v3.0 - Shadowing feature

---

## Current File Structure

src/
├── lib/
│ └── (empty - starting v0.1)
├── routes/
│ └── +page.svelte
├── app.css
├── app.html
└── app.d.ts


---

## Key Decisions
1. PocketBase-style IDs (15-char random strings)
2. Shadowing transcript as JSON array with timing
3. Images stored as filename only, URL via helper function
4. Remote functions in `$lib/server/` (Phase 1+)

---

## Design System
- Dark theme (Fireship-inspired)
- Primary: Orange (#ffa657)
- Secondary: Pink (#ff7edb)
- Font: Inter + JetBrains Mono

---

## Next Session Prompt
Copy this to start a new chat:
I'm building an EFL LMS platform with SvelteKit + Svelte 5 + PocketBase.

Current state: [copy relevant section]
Current version: [e.g., "Starting v0.2"]
Files to discuss: [list any specific files]

Question/Goal: [what you want to accomplish]
