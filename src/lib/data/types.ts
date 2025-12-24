// src/lib/data/types.ts

/**
 * ═══════════════════════════════════════════════════════════════
 * LMS PLATFORM - TYPE DEFINITIONS
 * ═══════════════════════════════════════════════════════════════
 * 
 * These types are designed to match PocketBase's data structure.
 * When we connect to the real database, these stay the same.
 * 
 * NAMING CONVENTIONS:
 * - PocketBase uses snake_case for fields
 * - We match that for easy mapping
 * - Relations store the ID as a string
 */

// ─────────────────────────────────────────────────────────────────
// BASE RECORD (All PocketBase records have these)
// ─────────────────────────────────────────────────────────────────

export type BaseRecord = {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;  // ISO date string
  updated: string;  // ISO date string
};

// ─────────────────────────────────────────────────────────────────
// ENUMS (Constrained value types)
// ─────────────────────────────────────────────────────────────────

/**
 * English proficiency levels (CEFR standard)
 * Used for course difficulty and student level
 */
export const EnglishLevel = {
  A1: 'a1',
  A2: 'a2',
  B1: 'b1',
  B2: 'b2',
  C1: 'c1',
  C2: 'c2',
} as const;

export type EnglishLevel = (typeof EnglishLevel)[keyof typeof EnglishLevel];

/** Human-readable labels for levels */
export const EnglishLevelLabels: Record<EnglishLevel, string> = {
  a1: 'Beginner',
  a2: 'Elementary',
  b1: 'Intermediate',
  b2: 'Upper-Intermediate',
  c1: 'Advanced',
  c2: 'Mastery',
};

/** User roles */
export const UserRole = {
  STUDENT: 'student',
  ADMIN: 'admin',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

/** User approval status */
export const UserStatus = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
} as const;

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

/** Types of lesson content */
export const LessonType = {
  VIDEO: 'video',
  TEXT: 'text',
  SHADOWING: 'shadowing',
} as const;

export type LessonType = (typeof LessonType)[keyof typeof LessonType];

/** Video hosting providers */
export const VideoProvider = {
  YOUTUBE: 'youtube',
  GDRIVE: 'gdrive',
} as const;

export type VideoProvider = (typeof VideoProvider)[keyof typeof VideoProvider];

/** Enrollment status */
export const EnrollmentStatus = {
  ACTIVE: 'active',
  EXPIRED: 'expired',
} as const;

export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus];

// ─────────────────────────────────────────────────────────────────
// USER
// ─────────────────────────────────────────────────────────────────

export type User = BaseRecord & {
  collectionName: 'users';
  email: string;
  name: string;
  avatar: string;  // Filename only (PocketBase file handling)
  role: UserRole;
  status: UserStatus;
  emailVisibility: boolean;
  verified: boolean;
};

// ─────────────────────────────────────────────────────────────────
// COURSE
// ─────────────────────────────────────────────────────────────────

export type Course = BaseRecord & {
  collectionName: 'courses';
  title: string;
  slug: string;  // URL-friendly identifier
  description: string;  // HTML content
  thumbnail: string;  // Filename only
  level: EnglishLevel;
  published: boolean;
  order: number;  // Display order
};

// ─────────────────────────────────────────────────────────────────
// LESSON
// ─────────────────────────────────────────────────────────────────

/**
 * Shadowing transcript segment
 * Represents one phrase with start/end timing
 */
export type TranscriptSegment = {
  id: string;
  start: number;  // Start time in seconds
  end: number;    // End time in seconds
  text: string;   // The spoken text
  phonetic?: string;  // Optional IPA pronunciation
};

export type Lesson = BaseRecord & {
  collectionName: 'lessons';
  course: string;  // Relation: Course ID
  title: string;
  slug: string;
  description: string;
  type: LessonType;
  order: number;
  duration_minutes: number;
  published: boolean;
  is_free: boolean;  // Can non-enrolled users preview?
  
  // Video lessons
  video_url?: string;
  video_provider?: VideoProvider;
  video_id?: string;  // Extracted YouTube/GDrive ID
  
  // Text lessons
  text_content?: string;  // Markdown or HTML
  
  // Shadowing lessons
  audio_file?: string;  // Audio filename
  transcript?: TranscriptSegment[];  // Time-synced text
};

// ─────────────────────────────────────────────────────────────────
// ENROLLMENT (User ↔ Course relationship)
// ─────────────────────────────────────────────────────────────────

export type Enrollment = BaseRecord & {
  collectionName: 'enrollments';
  user: string;  // Relation: User ID
  course: string;  // Relation: Course ID
  status: EnrollmentStatus;
  enrolled_at: string;  // ISO date
  expires_at: string | null;  // null = never expires
};

// ─────────────────────────────────────────────────────────────────
// INVITE CODE
// ─────────────────────────────────────────────────────────────────

export type InviteCode = BaseRecord & {
  collectionName: 'invite_codes';
  code: string;  // The code users enter
  course: string;  // Relation: Course ID
  max_uses: number;
  current_uses: number;
  expires_at: string | null;
  is_active: boolean;
  auto_approve: boolean;  // Skip pending status?
  created_by: string;  // Relation: User ID
};

// ─────────────────────────────────────────────────────────────────
// PROGRESS
// ─────────────────────────────────────────────────────────────────

export type Progress = BaseRecord & {
  collectionName: 'progress';
  user: string;  // Relation: User ID
  lesson: string;  // Relation: Lesson ID
  completed: boolean;
  watched_seconds: number;
  last_position: number;  // Resume playback position
  completed_at: string | null;
};

// ─────────────────────────────────────────────────────────────────
// SHADOWING PRACTICE (Track segment-level practice)
// ─────────────────────────────────────────────────────────────────

export type ShadowingPractice = BaseRecord & {
  collectionName: 'shadowing_practice';
  user: string;  // Relation: User ID
  lesson: string;  // Relation: Lesson ID
  segment_id: string;  // Which segment
  loop_count: number;  // Times practiced
  last_practiced_at: string;
};

// ─────────────────────────────────────────────────────────────────
// UTILITY TYPES
// ─────────────────────────────────────────────────────────────────

/** For creating new records (omit auto-generated fields) */
export type CreateRecord<T extends BaseRecord> = Omit<
  T,
  'id' | 'collectionId' | 'collectionName' | 'created' | 'updated'
>;

/** For updating records (all fields optional) */
export type UpdateRecord<T extends BaseRecord> = Partial<CreateRecord<T>>;

/** Course with computed progress data */
export type CourseWithProgress = Course & {
  lessons: Lesson[];
  completedLessons: number;
  totalLessons: number;
  progressPercent: number;
  isEnrolled: boolean;
};

/** Lesson with navigation context */
export type LessonWithContext = {
  lesson: Lesson;
  course: Course;
  prevLesson: Lesson | null;
  nextLesson: Lesson | null;
  progress: Progress | null;
  hasAccess: boolean;
};