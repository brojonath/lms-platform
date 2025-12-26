# LMS Platform - Development State
# File Structure
src/lib/
├── types.ts                    ← Shared types (import anywhere)
├── server/
│   └── courses.ts              ← Server functions (server only)
└── components/
    └── CourseCard.svelte       ← Imports from types.ts ✓

src/routes/
├── +page.svelte                ← Uses data from load
├── +page.server.ts             ← Imports from server/courses.ts ✓
└── courses/
    ├── +page.svelte
    └── +page.server.ts         ← Imports from server/courses.ts ✓

## Vertical Slices Roadmap

### Phase A: Mock Data (UI Focus)
- [x] Slice 1: Course listing ✓
- [ ] Slice 2: Course detail + lessons
- [ ] Slice 3: Video player
- [ ] Slice 4: Shadowing player

### Phase B: PocketBase Integration  
- [ ] Slice 5: PocketBase setup + migrate data ← REAL DATA STARTS HERE
- [ ] Slice 6: Auth (signup, login, magic link)
- [ ] Slice 7: Invite codes
- [ ] Slice 8: Progress tracking
- [ ] Slice 9: Access control

### Phase C: Admin & Polish
- [ ] Slice 10: Admin - user management
- [ ] Slice 11: Admin - course management  
- [ ] Slice 12: Light/dark theme
- [ ] Slice 13: Mobile responsive polish
- [ ] Slice 14: Deployment

## Current Slice
Slice 2: Course detail page

## Key Decisions
- Mock data first → PocketBase in Slice 5
- Components receive data via props (data-source agnostic)
- Remote functions for all data fetching (Slice 5+)