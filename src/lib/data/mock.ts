// src/lib/data/mock.ts

/**
 * ═══════════════════════════════════════════════════════════════
 * LMS PLATFORM - MOCK DATA
 * ═══════════════════════════════════════════════════════════════
 * 
 * This data mimics what PocketBase will provide.
 * 
 * KEY POINTS:
 * - IDs are random 15-char strings (like PocketBase)
 * - Dates are ISO strings
 * - File fields contain only filenames
 * - Relations use the related record's ID
 */

import type {
  User,
  Course,
  Lesson,
  Enrollment,
  InviteCode,
  Progress,
  TranscriptSegment,
} from './types';

// ─────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────

/** Generate a random ID like PocketBase */
export function generateId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 15; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/** 
 * Build a PocketBase file URL
 * In mock mode, returns a placeholder
 * In production, builds the real URL
 */
export function getFileUrl(
  collectionId: string,
  recordId: string,
  filename: string
): string {
  if (!filename) return '';
  
  // Mock mode: use placeholder
  if (collectionId.startsWith('mock_')) {
    return `https://placehold.co/800x450/2a2e35/f97316?text=${encodeURIComponent(filename)}`;
  }
  
  // Production: real PocketBase URL
  const baseUrl = 'http://127.0.0.1:8090';
  return `${baseUrl}/api/files/${collectionId}/${recordId}/${filename}`;
}

// ─────────────────────────────────────────────────────────────────
// TIMESTAMP HELPER
// ─────────────────────────────────────────────────────────────────

const NOW = new Date().toISOString();
const YESTERDAY = new Date(Date.now() - 86400000).toISOString();
const LAST_WEEK = new Date(Date.now() - 7 * 86400000).toISOString();
const LAST_MONTH = new Date(Date.now() - 30 * 86400000).toISOString();

// ─────────────────────────────────────────────────────────────────
// USERS
// ─────────────────────────────────────────────────────────────────

export const MOCK_USERS: User[] = [
  {
    id: 'usr_admin0000001',
    collectionId: 'mock_users',
    collectionName: 'users',
    created: LAST_MONTH,
    updated: NOW,
    email: 'admin@lms.com',
    name: 'Admin User',
    avatar: '',
    role: 'admin',
    status: 'approved',
    emailVisibility: false,
    verified: true,
  },
  {
    id: 'usr_student00001',
    collectionId: 'mock_users',
    collectionName: 'users',
    created: LAST_WEEK,
    updated: NOW,
    email: 'john@example.com',
    name: 'John Learner',
    avatar: 'john_avatar.jpg',
    role: 'student',
    status: 'approved',
    emailVisibility: false,
    verified: true,
  },
  {
    id: 'usr_pending00001',
    collectionId: 'mock_users',
    collectionName: 'users',
    created: YESTERDAY,
    updated: NOW,
    email: 'pending@example.com',
    name: 'Pending Student',
    avatar: '',
    role: 'student',
    status: 'pending',
    emailVisibility: false,
    verified: false,
  },
];

// ─────────────────────────────────────────────────────────────────
// COURSES
// ─────────────────────────────────────────────────────────────────

export const MOCK_COURSES: Course[] = [
  {
    id: 'crs_foundations01',
    collectionId: 'mock_courses',
    collectionName: 'courses',
    created: LAST_MONTH,
    updated: NOW,
    title: 'English Foundations',
    slug: 'english-foundations',
    description: `
      <p>Build a rock-solid foundation in English with this comprehensive beginner course.</p>
      <ul>
        <li>Master the alphabet and basic pronunciation</li>
        <li>Learn essential everyday vocabulary</li>
        <li>Understand fundamental grammar structures</li>
        <li>Practice with shadowing exercises</li>
      </ul>
    `,
    thumbnail: 'foundations.jpg',
    level: 'a1',
    published: true,
    order: 1,
  },
  {
    id: 'crs_conversatn01',
    collectionId: 'mock_courses',
    collectionName: 'courses',
    created: LAST_MONTH,
    updated: NOW,
    title: 'Everyday Conversations',
    slug: 'everyday-conversations',
    description: `
      <p>Learn practical English for real-life situations.</p>
      <p>Perfect for travelers, expats, or anyone who wants to communicate confidently in English.</p>
      <ul>
        <li>Ordering at restaurants and cafes</li>
        <li>Shopping and asking for help</li>
        <li>Making small talk</li>
        <li>Travel situations</li>
      </ul>
    `,
    thumbnail: 'conversations.jpg',
    level: 'a2',
    published: true,
    order: 2,
  },
  {
    id: 'crs_business0001',
    collectionId: 'mock_courses',
    collectionName: 'courses',
    created: LAST_WEEK,
    updated: NOW,
    title: 'Business English Pro',
    slug: 'business-english-pro',
    description: `
      <p>Professional English for the modern workplace.</p>
      <p>Master the language of business with practical lessons on:</p>
      <ul>
        <li>Email writing and etiquette</li>
        <li>Presentations and public speaking</li>
        <li>Meeting vocabulary and phrases</li>
        <li>Negotiation language</li>
      </ul>
    `,
    thumbnail: 'business.jpg',
    level: 'b1',
    published: true,
    order: 3,
  },
  {
    id: 'crs_advanced0001',
    collectionId: 'mock_courses',
    collectionName: 'courses',
    created: YESTERDAY,
    updated: NOW,
    title: 'Advanced English Mastery',
    slug: 'advanced-english-mastery',
    description: `
      <p>Take your English to the next level with advanced vocabulary, idioms, and nuanced expression.</p>
    `,
    thumbnail: 'advanced.jpg',
    level: 'c1',
    published: false,  // Coming soon!
    order: 4,
  },
];

// ─────────────────────────────────────────────────────────────────
// LESSONS
// ─────────────────────────────────────────────────────────────────

export const MOCK_LESSONS: Lesson[] = [
  // ═══════════════════════════════════════════════════════════════
  // COURSE: English Foundations
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'les_ef_welcome01',
    collectionId: 'mock_lessons',
    collectionName: 'lessons',
    created: LAST_MONTH,
    updated: NOW,
    course: 'crs_foundations01',
    title: 'Welcome to the Course',
    slug: 'welcome-to-the-course',
    description: 'Introduction to the course structure and what you will learn.',
    type: 'video',
    order: 1,
    duration_minutes: 5,
    published: true,
    is_free: true,  // Free preview!
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    video_provider: 'youtube',
    video_id: 'dQw4w9WgXcQ',
  },
  {
    id: 'les_ef_alphabet01',
    collectionId: 'mock_lessons',
    collectionName: 'lessons',
    created: LAST_MONTH,
    updated: NOW,
    course: 'crs_foundations01',
    title: 'The English Alphabet',
    slug: 'the-english-alphabet',
    description: 'Learn to recognize and pronounce all 26 letters of the English alphabet.',
    type: 'video',
    order: 2,
    duration_minutes: 15,
    published: true,
    is_free: false,
    video_url: 'https://www.youtube.com/watch?v=alphabet123',
    video_provider: 'youtube',
    video_id: 'alphabet123',
  },
  {
    id: 'les_ef_greetings1',
    collectionId: 'mock_lessons',
    collectionName: 'lessons',
    created: LAST_MONTH,
    updated: NOW,
    course: 'crs_foundations01',
    title: 'Basic Greetings',
    slug: 'basic-greetings',
    description: 'Learn essential greetings for everyday situations.',
    type: 'video',
    order: 3,
    duration_minutes: 12,
    published: true,
    is_free: false,
    video_url: 'https://www.youtube.com/watch?v=greetings123',
    video_provider: 'youtube',
    video_id: 'greetings123',
  },
  {
    id: 'les_ef_greet_shd',
    collectionId: 'mock_lessons',
    collectionName: 'lessons',
    created: LAST_MONTH,
    updated: NOW,
    course: 'crs_foundations01',
    title: 'Greetings Shadowing Practice',
    slug: 'greetings-shadowing-practice',
    description: 'Practice pronunciation with native speaker audio.',
    type: 'shadowing',
    order: 4,
    duration_minutes: 8,
    published: true,
    is_free: false,
    audio_file: 'greetings_audio.mp3',
    transcript: [
      { id: 'seg_01', start: 0.0, end: 2.0, text: 'Hello! How are you?', phonetic: 'həˈloʊ haʊ ɑr juː' },
      { id: 'seg_02', start: 2.5, end: 4.5, text: "I'm fine, thank you.", phonetic: 'aɪm faɪn θæŋk juː' },
      { id: 'seg_03', start: 5.0, end: 6.5, text: 'Nice to meet you!', phonetic: 'naɪs tuː miːt juː' },
      { id: 'seg_04', start: 7.0, end: 9.0, text: 'Nice to meet you too!', phonetic: 'naɪs tuː miːt juː tuː' },
      { id: 'seg_05', start: 9.5, end: 11.0, text: 'What is your name?', phonetic: 'wʌt ɪz jɔːr neɪm' },
      { id: 'seg_06', start: 11.5, end: 13.5, text: 'My name is John.', phonetic: 'maɪ neɪm ɪz dʒɒn' },
      { id: 'seg_07', start: 14.0, end: 15.5, text: 'See you later!', phonetic: 'siː juː ˈleɪtər' },
      { id: 'seg_08', start: 16.0, end: 17.0, text: 'Goodbye!', phonetic: 'ɡʊdˈbaɪ' },
    ],
  },
  {
    id: 'les_ef_numbers01',
    collectionId: 'mock_lessons',
    collectionName: 'lessons',
    created: LAST_MONTH,
    updated: NOW,
    course: 'crs_foundations01',
    title: 'Numbers 1-20',
    slug: 'numbers-1-20',
    description: 'Learn to count from 1 to 20 in English.',
    type: 'video',
    order: 5,
    duration_minutes: 10,
    published: true,
    is_free: false,
    video_url: 'https://www.youtube.com/watch?v=numbers123',
    video_provider: 'youtube',
    video_id: 'numbers123',
  },

  // ═══════════════════════════════════════════════════════════════
  // COURSE: Everyday Conversations
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'les_ec_coffee001',
    collectionId: 'mock_lessons',
    collectionName: 'lessons',
    created: LAST_MONTH,
    updated: NOW,
    course: 'crs_conversatn01',
    title: 'At the Coffee Shop',
    slug: 'at-the-coffee-shop',
    description: 'Learn to order drinks and food at a café.',
    type: 'video',
    order: 1,
    duration_minutes: 18,
    published: true,
    is_free: true,  // Free preview!
    video_url: 'https://www.youtube.com/watch?v=coffee123',
    video_provider: 'youtube',
    video_id: 'coffee123',
  },
  {
    id: 'les_ec_coffee_sh',
    collectionId: 'mock_lessons',
    collectionName: 'lessons',
    created: LAST_MONTH,
    updated: NOW,
    course: 'crs_conversatn01',
    title: 'Coffee Shop Shadowing',
    slug: 'coffee-shop-shadowing',
    description: 'Practice ordering with native speaker dialogue.',
    type: 'shadowing',
    order: 2,
    duration_minutes: 6,
    published: true,
    is_free: false,
    audio_file: 'coffee_shop.mp3',
    transcript: [
      { id: 'cs_01', start: 0.0, end: 1.5, text: 'Hi, can I help you?' },
      { id: 'cs_02', start: 2.0, end: 4.5, text: "Yes, I'd like a latte, please." },
      { id: 'cs_03', start: 5.0, end: 7.0, text: 'What size would you like?' },
      { id: 'cs_04', start: 7.5, end: 9.0, text: 'Medium, please.' },
      { id: 'cs_05', start: 9.5, end: 11.5, text: 'Would you like anything else?' },
      { id: 'cs_06', start: 12.0, end: 14.0, text: 'A chocolate muffin, please.' },
      { id: 'cs_07', start: 14.5, end: 16.5, text: "That'll be six dollars." },
      { id: 'cs_08', start: 17.0, end: 18.0, text: 'Here you go.' },
      { id: 'cs_09', start: 18.5, end: 20.0, text: 'Thank you! Have a nice day!' },
    ],
  },
  {
    id: 'les_ec_shopping1',
    collectionId: 'mock_lessons',
    collectionName: 'lessons',
    created: LAST_MONTH,
    updated: NOW,
    course: 'crs_conversatn01',
    title: 'Shopping for Clothes',
    slug: 'shopping-for-clothes',
    description: 'Essential vocabulary and phrases for shopping.',
    type: 'video',
    order: 3,
    duration_minutes: 20,
    published: true,
    is_free: false,
    video_url: 'https://www.youtube.com/watch?v=shopping123',
    video_provider: 'youtube',
    video_id: 'shopping123',
  },

  // ═══════════════════════════════════════════════════════════════
  // COURSE: Business English Pro
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'les_be_emails001',
    collectionId: 'mock_lessons',
    collectionName: 'lessons',
    created: LAST_WEEK,
    updated: NOW,
    course: 'crs_business0001',
    title: 'Professional Email Writing',
    slug: 'professional-email-writing',
    description: 'Learn to write clear, professional emails in English.',
    type: 'video',
    order: 1,
    duration_minutes: 25,
    published: true,
    is_free: true,  // Free preview!
    video_url: 'https://www.youtube.com/watch?v=emails123',
    video_provider: 'youtube',
    video_id: 'emails123',
  },
  {
    id: 'les_be_meetings1',
    collectionId: 'mock_lessons',
    collectionName: 'lessons',
    created: LAST_WEEK,
    updated: NOW,
    course: 'crs_business0001',
    title: 'Meeting Vocabulary',
    slug: 'meeting-vocabulary',
    description: 'Essential phrases for participating in meetings.',
    type: 'video',
    order: 2,
    duration_minutes: 22,
    published: true,
    is_free: false,
    video_url: 'https://www.youtube.com/watch?v=meetings123',
    video_provider: 'youtube',
    video_id: 'meetings123',
  },
];

// ─────────────────────────────────────────────────────────────────
// ENROLLMENTS
// ─────────────────────────────────────────────────────────────────

export const MOCK_ENROLLMENTS: Enrollment[] = [
  {
    id: 'enr_john_found01',
    collectionId: 'mock_enrollments',
    collectionName: 'enrollments',
    created: LAST_WEEK,
    updated: NOW,
    user: 'usr_student00001',  // John
    course: 'crs_foundations01',  // English Foundations
    status: 'active',
    enrolled_at: LAST_WEEK,
    expires_at: null,  // Never expires
  },
  {
    id: 'enr_john_conv001',
    collectionId: 'mock_enrollments',
    collectionName: 'enrollments',
    created: LAST_WEEK,
    updated: NOW,
    user: 'usr_student00001',
    course: 'crs_conversatn01',  // Everyday Conversations
    status: 'active',
    enrolled_at: LAST_WEEK,
    expires_at: null,
  },
];

// ─────────────────────────────────────────────────────────────────
// PROGRESS
// ─────────────────────────────────────────────────────────────────

export const MOCK_PROGRESS: Progress[] = [
  {
    id: 'prg_john_welc001',
    collectionId: 'mock_progress',
    collectionName: 'progress',
    created: LAST_WEEK,
    updated: NOW,
    user: 'usr_student00001',
    lesson: 'les_ef_welcome01',  // Welcome lesson
    completed: true,
    watched_seconds: 300,  // 5 minutes
    last_position: 300,
    completed_at: LAST_WEEK,
  },
  {
    id: 'prg_john_alph001',
    collectionId: 'mock_progress',
    collectionName: 'progress',
    created: LAST_WEEK,
    updated: NOW,
    user: 'usr_student00001',
    lesson: 'les_ef_alphabet01',  // Alphabet lesson
    completed: true,
    watched_seconds: 900,  // 15 minutes
    last_position: 900,
    completed_at: YESTERDAY,
  },
  {
    id: 'prg_john_greet01',
    collectionId: 'mock_progress',
    collectionName: 'progress',
    created: YESTERDAY,
    updated: NOW,
    user: 'usr_student00001',
    lesson: 'les_ef_greetings1',  // Greetings lesson (in progress)
    completed: false,
    watched_seconds: 420,  // 7 minutes of 12
    last_position: 420,
    completed_at: null,
  },
];

// ─────────────────────────────────────────────────────────────────
// INVITE CODES
// ─────────────────────────────────────────────────────────────────

export const MOCK_INVITE_CODES: InviteCode[] = [
  {
    id: 'inv_welcome2024a',
    collectionId: 'mock_invite_codes',
    collectionName: 'invite_codes',
    created: LAST_MONTH,
    updated: NOW,
    code: 'WELCOME2024',
    course: 'crs_foundations01',
    max_uses: 100,
    current_uses: 23,
    expires_at: '2024-12-31T23:59:59Z',
    is_active: true,
    auto_approve: true,  // Instant access!
    created_by: 'usr_admin0000001',
  },
  {
    id: 'inv_vip2024abcd1',
    collectionId: 'mock_invite_codes',
    collectionName: 'invite_codes',
    created: LAST_WEEK,
    updated: NOW,
    code: 'VIP2024',
    course: 'crs_conversatn01',
    max_uses: 10,
    current_uses: 2,
    expires_at: null,  // Never expires
    is_active: true,
    auto_approve: false,  // Requires manual approval
    created_by: 'usr_admin0000001',
  },
];