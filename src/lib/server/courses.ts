// src/lib/server/courses.ts

/**
 * ═══════════════════════════════════════════════════════════════
 * SERVER-ONLY: Course, Module & Lesson Functions
 * ═══════════════════════════════════════════════════════════════
 */

import type { Course, Module, Lesson, ModuleWithLessons } from '$lib/types';

// ─────────────────────────────────────────────────────────────────
// MOCK DATA: COURSES
// ─────────────────────────────────────────────────────────────────

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'English Foundations',
    slug: 'english-foundations',
    description: 'Build a solid foundation in English grammar and vocabulary. Perfect for absolute beginners who want to start their English learning journey.',
    thumbnail: 'foundations',
    level: 'a1',
  },
  {
    id: '2',
    title: 'Everyday Conversations',
    slug: 'everyday-conversations',
    description: 'Learn practical English for real-life situations. Master common phrases for shopping, dining, travel, and social interactions.',
    thumbnail: 'conversations',
    level: 'a2',
  },
  {
    id: '3',
    title: 'Business English',
    slug: 'business-english',
    description: 'Professional English for the modern workplace. Learn to write emails, give presentations, and communicate effectively in business settings.',
    thumbnail: 'business',
    level: 'b1',
  },
];

// ─────────────────────────────────────────────────────────────────
// MOCK DATA: MODULES
// ─────────────────────────────────────────────────────────────────

const mockModules: Module[] = [
  // English Foundations (course 1)
  { id: 'm1', courseId: '1', title: 'Getting Started', order: 1 },
  { id: 'm2', courseId: '1', title: 'The Basics', order: 2 },
  { id: 'm3', courseId: '1', title: 'Numbers & Counting', order: 3 },
  
  // Everyday Conversations (course 2)
  { id: 'm4', courseId: '2', title: 'Food & Dining', order: 1 },
  { id: 'm5', courseId: '2', title: 'Shopping', order: 2 },
  
  // Business English (course 3)
  { id: 'm6', courseId: '3', title: 'Written Communication', order: 1 },
  { id: 'm7', courseId: '3', title: 'Meetings & Presentations', order: 2 },
];

// ─────────────────────────────────────────────────────────────────
// MOCK DATA: LESSONS
// ─────────────────────────────────────────────────────────────────

const mockLessons: Lesson[] = [
  // ══════════════════════════════════════════════════════════════
  // English Foundations (course 1)
  // ══════════════════════════════════════════════════════════════
  
  // Module 1: Getting Started
  {
    id: 'l1',
    courseId: '1',
    moduleId: 'm1',
    title: 'Welcome to the Course',
    slug: 'welcome',
    type: 'video',
    duration: 5,
    isFree: true,
    order: 1,
  },
  {
    id: 'l2',
    courseId: '1',
    moduleId: 'm1',
    title: 'How to Use This Platform',
    slug: 'how-to-use',
    type: 'video',
    duration: 8,
    isFree: true,
    order: 2,
  },
  
  // Module 2: The Basics
  {
    id: 'l3',
    courseId: '1',
    moduleId: 'm2',
    title: 'The English Alphabet',
    slug: 'alphabet',
    type: 'video',
    duration: 15,
    isFree: false,
    order: 1,
  },
  {
    id: 'l4',
    courseId: '1',
    moduleId: 'm2',
    title: 'Basic Greetings',
    slug: 'greetings',
    type: 'video',
    duration: 12,
    isFree: false,
    order: 2,
  },
  {
    id: 'l5',
    courseId: '1',
    moduleId: 'm2',
    title: 'Greetings Shadowing Practice',
    slug: 'greetings-shadowing',
    type: 'shadowing',
    duration: 8,
    isFree: false,
    order: 3,
  },
  
  // Module 3: Numbers & Counting
  {
    id: 'l6',
    courseId: '1',
    moduleId: 'm3',
    title: 'Numbers 1-20',
    slug: 'numbers-1-20',
    type: 'video',
    duration: 10,
    isFree: false,
    order: 1,
  },
  {
    id: 'l7',
    courseId: '1',
    moduleId: 'm3',
    title: 'Numbers 21-100',
    slug: 'numbers-21-100',
    type: 'video',
    duration: 12,
    isFree: false,
    order: 2,
  },
  
  // ══════════════════════════════════════════════════════════════
  // Everyday Conversations (course 2)
  // ══════════════════════════════════════════════════════════════
  
  // Module 4: Food & Dining
  {
    id: 'l8',
    courseId: '2',
    moduleId: 'm4',
    title: 'At the Coffee Shop',
    slug: 'coffee-shop',
    type: 'video',
    duration: 18,
    isFree: true,
    order: 1,
  },
  {
    id: 'l9',
    courseId: '2',
    moduleId: 'm4',
    title: 'Coffee Shop Shadowing',
    slug: 'coffee-shop-shadowing',
    type: 'shadowing',
    duration: 6,
    isFree: false,
    order: 2,
  },
  {
    id: 'l10',
    courseId: '2',
    moduleId: 'm4',
    title: 'Ordering at a Restaurant',
    slug: 'restaurant',
    type: 'video',
    duration: 20,
    isFree: false,
    order: 3,
  },
  
  // Module 5: Shopping
  {
    id: 'l11',
    courseId: '2',
    moduleId: 'm5',
    title: 'Shopping for Clothes',
    slug: 'shopping-clothes',
    type: 'video',
    duration: 15,
    isFree: false,
    order: 1,
  },
  {
    id: 'l12',
    courseId: '2',
    moduleId: 'm5',
    title: 'At the Supermarket',
    slug: 'supermarket',
    type: 'video',
    duration: 14,
    isFree: false,
    order: 2,
  },
  
  // ══════════════════════════════════════════════════════════════
  // Business English (course 3)
  // ══════════════════════════════════════════════════════════════
  
  // Module 6: Written Communication
  {
    id: 'l13',
    courseId: '3',
    moduleId: 'm6',
    title: 'Professional Email Writing',
    slug: 'email-writing',
    type: 'video',
    duration: 25,
    isFree: true,
    order: 1,
  },
  {
    id: 'l14',
    courseId: '3',
    moduleId: 'm6',
    title: 'Email Templates & Examples',
    slug: 'email-templates',
    type: 'text',
    duration: 15,
    isFree: false,
    order: 2,
  },
  
  // Module 7: Meetings & Presentations
  {
    id: 'l15',
    courseId: '3',
    moduleId: 'm7',
    title: 'Meeting Vocabulary',
    slug: 'meeting-vocab',
    type: 'video',
    duration: 22,
    isFree: false,
    order: 1,
  },
  {
    id: 'l16',
    courseId: '3',
    moduleId: 'm7',
    title: 'Giving Presentations',
    slug: 'presentations',
    type: 'video',
    duration: 28,
    isFree: false,
    order: 2,
  },
];

// ─────────────────────────────────────────────────────────────────
// COURSE FUNCTIONS
// ─────────────────────────────────────────────────────────────────

export function getCourses(): Course[] {
  return mockCourses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return mockCourses.find(course => course.slug === slug);
}

// ─────────────────────────────────────────────────────────────────
// MODULE FUNCTIONS
// ─────────────────────────────────────────────────────────────────

export function getModulesByCourse(courseId: string): Module[] {
  return mockModules
    .filter(module => module.courseId === courseId)
    .sort((a, b) => a.order - b.order);
}

// ─────────────────────────────────────────────────────────────────
// LESSON FUNCTIONS
// ─────────────────────────────────────────────────────────────────

export function getLessonsByCourse(courseId: string): Lesson[] {
  return mockLessons
    .filter(lesson => lesson.courseId === courseId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonsByModule(moduleId: string): Lesson[] {
  return mockLessons
    .filter(lesson => lesson.moduleId === moduleId)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get modules with their lessons (for course detail page)
 */
export function getModulesWithLessons(courseId: string): ModuleWithLessons[] {
  const modules = getModulesByCourse(courseId);
  
  return modules.map(module => ({
    ...module,
    lessons: getLessonsByModule(module.id),
  }));
}

/**
 * Get course statistics
 */
export function getCourseStats(courseId: string): {
  totalLessons: number;
  totalDuration: number;
  totalModules: number;
  freeLessons: number;
} {
  const lessons = getLessonsByCourse(courseId);
  const modules = getModulesByCourse(courseId);
  
  return {
    totalLessons: lessons.length,
    totalDuration: lessons.reduce((sum, l) => sum + l.duration, 0),
    totalModules: modules.length,
    freeLessons: lessons.filter(l => l.isFree).length,
  };
}

export function getLesson(courseSlug: string, lessonSlug: string): {
  course: Course;
  lesson: Lesson;
} | undefined {
  const course = getCourseBySlug(courseSlug);
  if (!course) return undefined;
  
  const lesson = mockLessons.find(
    l => l.courseId === course.id && l.slug === lessonSlug
  );
  if (!lesson) return undefined;
  
  return { course, lesson };
}