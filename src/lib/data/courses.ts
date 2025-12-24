// src/lib/data/courses.ts

/**
 * ═══════════════════════════════════════════════════════════════
 * DATA ACCESS LAYER
 * ═══════════════════════════════════════════════════════════════
 * 
 * These functions abstract how we get data.
 * 
 * NOW: Read from mock arrays
 * LATER: Call PocketBase API (same function signatures!)
 * 
 * Benefits:
 * - UI code never changes when we switch to real backend
 * - Easy to test with mock data
 * - All data logic in one place
 */

import {
  MOCK_COURSES,
  MOCK_LESSONS,
  MOCK_ENROLLMENTS,
  MOCK_PROGRESS,
  MOCK_INVITE_CODES,
  getFileUrl,
} from './mock';

import type {
  Course,
  Lesson,
  Progress,
  Enrollment,
  InviteCode,
  CourseWithProgress,
  LessonWithContext,
} from './types';

// ─────────────────────────────────────────────────────────────────
// COURSE QUERIES
// ─────────────────────────────────────────────────────────────────

/**
 * Get all published courses
 */
export function getPublishedCourses(): Course[] {
  return MOCK_COURSES
    .filter((course) => course.published)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get all courses (including unpublished) - for admin
 */
export function getAllCourses(): Course[] {
  return MOCK_COURSES.sort((a, b) => a.order - b.order);
}

/**
 * Get a course by its slug
 */
export function getCourseBySlug(slug: string): Course | undefined {
  return MOCK_COURSES.find((course) => course.slug === slug);
}

/**
 * Get a course by ID
 */
export function getCourseById(id: string): Course | undefined {
  return MOCK_COURSES.find((course) => course.id === id);
}

/**
 * Get thumbnail URL for a course
 */
export function getCourseThumbnail(course: Course): string {
  return getFileUrl(course.collectionId, course.id, course.thumbnail);
}

// ─────────────────────────────────────────────────────────────────
// LESSON QUERIES
// ─────────────────────────────────────────────────────────────────

/**
 * Get all published lessons for a course
 */
export function getCourseLessons(courseId: string): Lesson[] {
  return MOCK_LESSONS
    .filter((lesson) => lesson.course === courseId && lesson.published)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get a lesson by course slug and lesson slug
 */
export function getLesson(
  courseSlug: string,
  lessonSlug: string
): { course: Course; lesson: Lesson } | undefined {
  const course = getCourseBySlug(courseSlug);
  if (!course) return undefined;

  const lesson = MOCK_LESSONS.find(
    (l) => l.course === course.id && l.slug === lessonSlug
  );
  if (!lesson) return undefined;

  return { course, lesson };
}

/**
 * Get a lesson by ID
 */
export function getLessonById(id: string): Lesson | undefined {
  return MOCK_LESSONS.find((lesson) => lesson.id === id);
}

/**
 * Get lesson with full context (navigation, progress, access)
 */
export function getLessonWithContext(
  courseSlug: string,
  lessonSlug: string,
  userId: string | null
): LessonWithContext | undefined {
  const result = getLesson(courseSlug, lessonSlug);
  if (!result) return undefined;

  const { course, lesson } = result;
  const lessons = getCourseLessons(course.id);
  const currentIndex = lessons.findIndex((l) => l.id === lesson.id);

  const progress = userId ? getLessonProgress(userId, lesson.id) : null;
  const hasAccess = canAccessLesson(userId, lesson);

  return {
    course,
    lesson,
    prevLesson: currentIndex > 0 ? lessons[currentIndex - 1] : null,
    nextLesson: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null,
    progress,
    hasAccess,
  };
}

/**
 * Get course statistics
 */
export function getCourseStats(courseId: string): {
  lessonCount: number;
  totalMinutes: number;
  freePreviewCount: number;
} {
  const lessons = getCourseLessons(courseId);

  return {
    lessonCount: lessons.length,
    totalMinutes: lessons.reduce((sum, l) => sum + l.duration_minutes, 0),
    freePreviewCount: lessons.filter((l) => l.is_free).length,
  };
}

// ─────────────────────────────────────────────────────────────────
// ENROLLMENT QUERIES
// ─────────────────────────────────────────────────────────────────

/**
 * Check if a user is enrolled in a course
 */
export function isUserEnrolled(userId: string, courseId: string): boolean {
  return MOCK_ENROLLMENTS.some(
    (e) => e.user === userId && e.course === courseId && e.status === 'active'
  );
}

/**
 * Get all courses a user is enrolled in
 */
export function getUserEnrolledCourseIds(userId: string): string[] {
  return MOCK_ENROLLMENTS
    .filter((e) => e.user === userId && e.status === 'active')
    .map((e) => e.course);
}

/**
 * Get enrolled courses with details
 */
export function getUserEnrolledCourses(userId: string): Course[] {
  const enrolledIds = getUserEnrolledCourseIds(userId);
  return MOCK_COURSES.filter((c) => enrolledIds.includes(c.id));
}

/**
 * Check if user can access a lesson
 * Access granted if: lesson is free OR user is enrolled in course
 */
export function canAccessLesson(userId: string | null, lesson: Lesson): boolean {
  // Free lessons are always accessible
  if (lesson.is_free) return true;

  // Must be logged in for paid lessons
  if (!userId) return false;

  // Must be enrolled in the course
  return isUserEnrolled(userId, lesson.course);
}

// ─────────────────────────────────────────────────────────────────
// PROGRESS QUERIES
// ─────────────────────────────────────────────────────────────────

/**
 * Get progress for a specific lesson
 */
export function getLessonProgress(
  userId: string,
  lessonId: string
): Progress | undefined {
  return MOCK_PROGRESS.find(
    (p) => p.user === userId && p.lesson === lessonId
  );
}

/**
 * Get all progress for lessons in a course
 */
export function getCourseProgressMap(
  userId: string,
  courseId: string
): Map<string, Progress> {
  const lessons = getCourseLessons(courseId);
  const lessonIds = new Set(lessons.map((l) => l.id));

  const progressMap = new Map<string, Progress>();

  MOCK_PROGRESS
    .filter((p) => p.user === userId && lessonIds.has(p.lesson))
    .forEach((p) => progressMap.set(p.lesson, p));

  return progressMap;
}

/**
 * Calculate overall course progress
 */
export function getCourseProgress(userId: string, courseId: string): {
  completedCount: number;
  totalCount: number;
  percentComplete: number;
} {
  const lessons = getCourseLessons(courseId);
  const progressMap = getCourseProgressMap(userId, courseId);

  const completedCount = Array.from(progressMap.values()).filter(
    (p) => p.completed
  ).length;

  return {
    completedCount,
    totalCount: lessons.length,
    percentComplete:
      lessons.length > 0
        ? Math.round((completedCount / lessons.length) * 100)
        : 0,
  };
}

/**
 * Get courses with progress data for user dashboard
 */
export function getUserCoursesWithProgress(userId: string): CourseWithProgress[] {
  const enrolledCourses = getUserEnrolledCourses(userId);

  return enrolledCourses.map((course) => {
    const lessons = getCourseLessons(course.id);
    const progress = getCourseProgress(userId, course.id);

    return {
      ...course,
      lessons,
      completedLessons: progress.completedCount,
      totalLessons: progress.totalCount,
      progressPercent: progress.percentComplete,
      isEnrolled: true,
    };
  });
}

// ─────────────────────────────────────────────────────────────────
// INVITE CODE QUERIES
// ─────────────────────────────────────────────────────────────────

/**
 * Validate an invite code
 */
export function validateInviteCode(code: string): {
  valid: boolean;
  inviteCode?: InviteCode;
  course?: Course;
  error?: string;
} {
  const inviteCode = MOCK_INVITE_CODES.find(
    (ic) => ic.code.toUpperCase() === code.toUpperCase() && ic.is_active
  );

  if (!inviteCode) {
    return { valid: false, error: 'Invalid invite code.' };
  }

  // Check if maxed out
  if (inviteCode.current_uses >= inviteCode.max_uses) {
    return { valid: false, error: 'This invite code has reached its maximum uses.' };
  }

  // Check expiration
  if (inviteCode.expires_at) {
    if (new Date(inviteCode.expires_at) < new Date()) {
      return { valid: false, error: 'This invite code has expired.' };
    }
  }

  const course = getCourseById(inviteCode.course);

  return {
    valid: true,
    inviteCode,
    course,
  };
}