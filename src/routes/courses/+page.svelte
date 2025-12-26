<!-- src/routes/courses/+page.svelte -->
<script lang="ts">
  import CourseCard from '$lib/components/CourseCard.svelte';
  import Header from '$lib/components/Header.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Courses | LMS Platform</title>
</svelte:head>

<div class="min-h-screen">
  <Header />

  <main class="container">
    <!-- Centered Header (Fireship style) -->
    <header class="text-center mb-8 mt-20">
      <h1 class="text-5xl font-bold mb-2">
        <span class="gradient-text">Courses</span>
      </h1>
      <p class="text-foreground-secondary text-lg">
        Master English from beginner to advanced
      </p>
    </header>

    <!-- Gradient Divider -->
    <div class="divider-gradient"></div>

    <!-- Course Grid -->
    <div class="grid-list">
      {#each data.courses as course (course.id)}
        <CourseCard {course} />
      {/each}
    </div>
  </main>
  
  <footer class="border-t border-border py-8 mt-20">
    <div class="container text-center text-foreground-muted text-sm">
      © 2024 LMS Platform. Built with ❤️ and Svelte.
    </div>
  </footer>
</div>