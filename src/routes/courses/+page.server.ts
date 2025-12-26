// src/routes/courses/+page.server.ts

import { getCourses } from '$lib/server/courses';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const courses = getCourses();
  
  return {
    courses,
  };
};