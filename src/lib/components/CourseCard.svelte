<!-- src/lib/components/CourseCard.svelte -->
<script lang="ts">
  // Import from shared types, NOT from server
  import type { Course } from '$lib/types';
  import { levelLabels } from '$lib/types';

  interface Props {
    course: Course;
  }

  let { course }: Props = $props();

  const thumbnailUrl = `https://placehold.co/800x450/2a2e35/f97316?text=${encodeURIComponent(course.title)}`;
</script>

<a 
  href="/courses/{course.slug}"
  class="card card-interactive hover-lift group block overflow-hidden p-0"
>
  <!-- Thumbnail -->
  <div class="aspect-video bg-gray7 relative overflow-hidden">
    <img 
      src={thumbnailUrl} 
      alt={course.title}
      class="w-full h-full object-cover"
    />
    
    <!-- Play button overlay -->
    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 
                flex items-center justify-center transition-all duration-300">
      <div class="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center
                  opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 
                  transition-all duration-300 shadow-lg">
        <svg class="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </div>
    
    <!-- Level badge -->
    <span class="absolute top-3 right-3 tag tag-{course.level}">
      {levelLabels[course.level]}
    </span>
  </div>
  
  <!-- Content -->
  <div class="p-5">
    <h3 class="text-lg text-gray1 mb-2 group-hover:text-orange-400 transition-colors">
      {course.title}
    </h3>
    <p class="text-gray4 text-sm line-clamp-2">
      {course.description}
    </p>
  </div>
</a>