// src/lib/types.ts

/**
 * ═══════════════════════════════════════════════════════════════
 * SHARED TYPES
 * ═══════════════════════════════════════════════════════════════
 * 
 * This file can be imported ANYWHERE (client or server).
 * Contains only types and constants - no runtime code that
 * accesses databases or secrets.
 */

// ─────────────────────────────────────────────────────────────────
// COURSE TYPES
// ─────────────────────────────────────────────────────────────────

export type EnglishLevel = 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'c2';

export type Course = {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  level: EnglishLevel;
};

// Constants are fine here (no secrets, no DB calls)
export const levelLabels: Record<EnglishLevel, string> = {
  a1: 'Beginner',
  a2: 'Elementary',
  b1: 'Intermediate',
  b2: 'Upper-Int',
  c1: 'Advanced',
  c2: 'Mastery',
};