<!-- src/lib/components/CourseCard.svelte -->
<script lang="ts">
  import type { Course } from '$lib/types';
  import { levelLabels } from '$lib/types';

  interface Props {
    course: Course;
  }

  let { course }: Props = $props();

  // ✅ Use $derived - will update if course changes
  const thumbnailUrl = $derived(
    `https://placehold.co/800x450/e5e7eb/3b82f6?text=${encodeURIComponent(course.title)}`
  );
</script>

<a 
  href="/courses/{course.slug}"
  class="card card-interactive group block overflow-hidden p-0"
>
  <!-- Thumbnail -->
  <div class="aspect-video bg-muted relative overflow-hidden">
    <img 
      src={thumbnailUrl} 
      alt={course.title}
      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    
    <!-- Play button overlay -->
    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 
                flex items-center justify-center transition-all duration-300">
      <div class="w-14 h-14 rounded-full bg-primary flex items-center justify-center
                  opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 
                  transition-all duration-300 shadow-lg">
        <svg class="w-6 h-6 text-foreground-inverted ml-1" fill="currentColor" viewBox="0 0 24 24">
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
    <h3 class="text-lg font-semibold text-foreground mb-2 
               group-hover:text-primary transition-colors">
      {course.title}
    </h3>
    <p class="text-foreground-secondary text-sm line-clamp-2">
      {course.description}
    </p>
  </div>
</a>