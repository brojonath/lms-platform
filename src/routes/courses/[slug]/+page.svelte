<!-- src/routes/courses/[slug]/+page.svelte -->
<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import { levelLabels, lessonTypeIcons } from '$lib/types';
  
  let { data } = $props();
  
  // Format duration as hours and minutes
  const formattedDuration = $derived(() => {
    const hours = Math.floor(data.stats.totalDuration / 60);
    const minutes = data.stats.totalDuration % 60;
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes} min`;
  });
  
  // Track which modules are expanded
  let expandedModules = $state<Set<string>>(new Set(data.modules.map(m => m.id)));
  
  function toggleModule(moduleId: string) {
    if (expandedModules.has(moduleId)) {
      expandedModules.delete(moduleId);
    } else {
      expandedModules.add(moduleId);
    }
    expandedModules = new Set(expandedModules);
  }
</script>

<svelte:head>
  <title>{data.course.title} | LMS Platform</title>
  <meta name="description" content={data.course.description} />
</svelte:head>

<div class="min-h-screen">
  <Header />

  <main class="container">
    <!-- Centered Header (Fireship style) -->
    <header class="text-center mb-8 mt-16">
      <!-- Level Badge -->
      <div class="mb-4">
        <span class="tag tag-{data.course.level}">
          {levelLabels[data.course.level]}
        </span>
      </div>
      
      <!-- Title -->
      <h1 class="text-4xl sm:text-5xl font-bold mb-4">
        <span class="gradient-text">{data.course.title}</span>
      </h1>
      
      <!-- Description -->
      <p class="text-foreground-secondary text-lg max-w-2xl mx-auto">
        {data.course.description}
      </p>
    </header>

    <!-- Stats Bar -->
    <div class="flex flex-wrap items-center justify-center gap-6 text-sm mb-8">
      <div class="flex items-center gap-2 text-foreground-secondary">
        <span>📚</span>
        <span>{data.stats.totalLessons} lessons</span>
      </div>
      <div class="flex items-center gap-2 text-foreground-secondary">
        <span>📁</span>
        <span>{data.stats.totalModules} modules</span>
      </div>
      <div class="flex items-center gap-2 text-foreground-secondary">
        <span>⏱️</span>
        <span>{formattedDuration()}</span>
      </div>
      <div class="flex items-center gap-2 text-foreground-secondary">
        <span>🎯</span>
        <span>{data.stats.freeLessons} free previews</span>
      </div>
    </div>

    <!-- CTA Button -->
    <div class="text-center mb-8">
      <button class="btn btn-primary btn-lg">
        Start Learning
      </button>
    </div>

    <!-- Gradient Divider -->
    <div class="divider-gradient"></div>

    <!-- Course Content -->
    <section class="max-w-3xl mx-auto">
      <h2 class="text-2xl font-bold text-foreground mb-6 text-center">
        Course Content
      </h2>
      
      <!-- Modules -->
      <div class="space-y-4">
        {#each data.modules as module, moduleIndex (module.id)}
          <div class="card overflow-hidden">
            <!-- Module Header (Collapsible) -->
            <button 
              class="w-full p-4 flex items-center justify-between text-left
                     hover:bg-hover transition-colors"
              onclick={() => toggleModule(module.id)}
            >
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-lg bg-primary-soft text-primary 
                            flex items-center justify-center font-semibold text-sm">
                  {moduleIndex + 1}
                </span>
                <div>
                  <h3 class="font-semibold text-foreground">
                    {module.title}
                  </h3>
                  <p class="text-sm text-foreground-muted">
                    {module.lessons.length} lessons • 
                    {module.lessons.reduce((sum, l) => sum + l.duration, 0)} min
                  </p>
                </div>
              </div>
              
              <!-- Chevron -->
              <svg 
                class="w-5 h-5 text-foreground-muted transition-transform duration-200"
                class:rotate-180={expandedModules.has(module.id)}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <!-- Lessons (Collapsible) -->
            {#if expandedModules.has(module.id)}
              <div class="border-t border-border">
                {#each module.lessons as lesson, lessonIndex (lesson.id)}
                  <a 
                    href="/courses/{data.course.slug}/{lesson.slug}"
                    class="flex items-center gap-4 p-4 hover:bg-hover transition-colors
                           {lessonIndex < module.lessons.length - 1 ? 'border-b border-border' : ''}"
                  >
                    <!-- Lesson Number -->
                    <div class="w-8 h-8 rounded-full bg-muted flex items-center justify-center 
                                text-foreground-muted text-sm shrink-0">
                      {lessonIndex + 1}
                    </div>
                    
                    <!-- Lesson Info -->
                    <div class="flex-1 min-w-0">
                      <h4 class="font-medium text-foreground truncate">
                        {lesson.title}
                      </h4>
                      <div class="flex items-center gap-2 text-xs text-foreground-muted mt-0.5">
                        <span>{lessonTypeIcons[lesson.type]}</span>
                        <span>{lesson.duration} min</span>
                      </div>
                    </div>
                    
                    <!-- Free Badge or Lock -->
                    <div class="shrink-0">
                      {#if lesson.isFree}
                        <span class="tag tag-success text-xs">Free</span>
                      {:else}
                        <svg class="w-4 h-4 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      {/if}
                    </div>
                    
                    <!-- Arrow -->
                    <svg class="w-4 h-4 text-foreground-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="mt-16 mb-12 p-8 rounded-2xl bg-primary-soft border border-primary/20 text-center max-w-2xl mx-auto">
      <h2 class="text-2xl font-bold text-foreground mb-3">
        Ready to start learning?
      </h2>
      <p class="text-foreground-secondary mb-6">
        Get full access to all {data.stats.totalLessons} lessons and track your progress.
      </p>
      <button class="btn btn-primary btn-lg">
        Enroll Now
      </button>
    </section>
  </main>
  
  <!-- Footer -->
  <footer class="border-t border-border py-8 mt-12">
    <div class="container text-center text-foreground-muted text-sm">
      © 2024 LMS Platform. Built with ❤️ and Svelte.
    </div>
  </footer>
</div>

<style>
  .rotate-180 {
    transform: rotate(180deg);
  }
</style>