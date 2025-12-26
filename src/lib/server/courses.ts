// src/lib/server/courses.ts

/**
 * ═══════════════════════════════════════════════════════════════
 * SERVER-ONLY: Course Functions
 * ═══════════════════════════════════════════════════════════════
 * 
 * This file can ONLY be imported in:
 * • +page.server.ts
 * • +layout.server.ts
 * • Other $lib/server/*.ts files
 * • hooks.server.ts
 * 
 * NOT in:
 * • +page.svelte
 * • Components
 * • Any client-side code
 */

import type { Course } from '$lib/types';

// ─────────────────────────────────────────────────────────────────
// MOCK DATA (Will be replaced by PocketBase in Slice 5)
// ─────────────────────────────────────────────────────────────────

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'English Foundations',
    slug: 'english-foundations',
    description: 'Build a solid foundation in English grammar and vocabulary.',
    thumbnail: 'foundations',
    level: 'a1',
  },
  {
    id: '2',
    title: 'Everyday Conversations',
    slug: 'everyday-conversations',
    description: 'Learn practical English for real-life situations.',
    thumbnail: 'conversations',
    level: 'a2',
  },
  {
    id: '3',
    title: 'Business English',
    slug: 'business-english',
    description: 'Professional English for the modern workplace.',
    thumbnail: 'business',
    level: 'b1',
  },
];

// ─────────────────────────────────────────────────────────────────
// REMOTE FUNCTIONS
// ─────────────────────────────────────────────────────────────────

/**
 * Get all courses
 */
export function getCourses(): Course[] {
  return mockCourses;
}

/**
 * Get a single course by slug
 */
export function getCourseBySlug(slug: string): Course | undefined {
  return mockCourses.find(course => course.slug === slug);
}