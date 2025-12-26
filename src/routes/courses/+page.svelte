<!-- src/routes/courses/+page.svelte -->
<script lang="ts">
  import CourseCard from '$lib/components/CourseCard.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Courses | LMS Platform</title>
</svelte:head>

<div class="min-h-screen">
  <!-- Header -->
  <header class="glass sticky top-0 z-50">
    <div class="container h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-primary 
                    flex items-center justify-center text-xl shadow-md">
          <span class="text-foreground-inverted">📚</span>
        </div>
        <span class="text-xl font-bold text-foreground hidden sm:block">
          LMS<span class="text-primary">Platform</span>
        </span>
      </a>
      
      <nav class="flex items-center gap-1">
        <a href="/courses" class="btn btn-ghost">
          Courses
        </a>
        <button class="btn btn-primary btn-sm ml-2">
          Get Started
        </button>
      </nav>
    </div>
  </header>

  <main class="container py-12">
    <!-- Header -->
    <div class="mb-10">
      <h1 class="text-4xl font-bold mb-3">
        <span class="gradient-text">Courses</span>
      </h1>
      <p class="text-foreground-secondary text-lg">
        Start your English learning journey today.
      </p>
    </div>

    <!-- Course Grid -->
    <div class="grid-list">
      {#each data.courses as course (course.id)}
        <CourseCard {course} />
      {/each}
    </div>
  </main>
</div>