// src/routes/courses/[slug]/+page.server.ts

import { getCourseBySlug, getModulesWithLessons, getCourseStats } from '$lib/server/courses';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const course = getCourseBySlug(params.slug);
  
  if (!course) {
    throw error(404, {
      message: 'Course not found'
    });
  }
  
  const modules = getModulesWithLessons(course.id);
  const stats = getCourseStats(course.id);
  
  return {
    course,
    modules,
    stats,
  };
};