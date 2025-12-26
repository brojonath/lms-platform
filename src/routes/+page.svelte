<!-- src/routes/+page.svelte -->
<script lang="ts">
  import CourseCard from '$lib/components/CourseCard.svelte';

  // This type is auto-generated from +page.server.ts
  let { data } = $props();
</script>

<div class="min-h-screen">
  
  <!-- Header -->
  <header class="glass sticky top-0 z-50 border-b border-gray6">
    <div class="container h-16 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 
                    flex items-center justify-center text-xl shadow-lg">
          🔥
        </div>
        <span class="text-xl font-bold text-gray1 hidden sm:block">
          LMS<span class="text-orange-500">Platform</span>
        </span>
      </a>
      
      <nav class="flex items-center gap-1">
        <a href="/courses" class="px-4 py-2 text-gray3 hover:text-gray1 hover:bg-gray6 rounded transition-colors">
          Courses
        </a>
        <button class="btn btn-orange btn-sm glow ml-2">
          Get Started
        </button>
      </nav>
    </div>
  </header>

  <main>
    <!-- Hero -->
    <section class="container py-20 text-center">
      <h1 class="text-5xl md:text-6xl mb-6">
        Learn English
        <span class="gradient-text">The Smart Way</span>
      </h1>
      
      <p class="text-xl text-gray3 max-w-2xl mx-auto mb-10">
        Master English with interactive courses and shadowing exercises.
      </p>
      
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/courses" class="btn btn-orange btn-lg glow">
          Browse Courses
        </a>
      </div>
    </section>

    <!-- Featured Courses -->
    <section class="container py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl">Featured Courses</h2>
        <a href="/courses" class="text-orange-400 hover:text-orange-300 transition-colors">
          View all →
        </a>
      </div>
      
      <div class="grid-list">
        {#each data.courses as course (course.id)}
          <CourseCard {course} />
        {/each}
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="border-t border-gray6 py-8 mt-20">
    <div class="container text-center text-gray4 text-sm">
      © 2024 LMS Platform. Built with 🔥 and Svelte.
    </div>
  </footer>
  
</div>