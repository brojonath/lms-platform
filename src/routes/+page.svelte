<!-- src/routes/+page.svelte -->
<script lang="ts">
  import CourseCard from '$lib/components/CourseCard.svelte';
  import Header from '$lib/components/Header.svelte';

  let { data } = $props();
</script>

<div class="min-h-screen">
  <Header />

  <main>
    <!-- Hero -->
    <section class="container py-20 text-center">
      <h1 class="text-4xl sm:text-5xl font-bold mb-6">
        Learn English
        <span class="gradient-text">The Smart Way</span>
      </h1>
      
      <p class="text-xl text-foreground-secondary max-w-2xl mx-auto mb-10">
        Master English with interactive courses and shadowing exercises.
      </p>
      
      <div class="flex flex-wrap justify-center gap-4">
        <a href="/courses" class="btn btn-primary btn-lg">
          Browse Courses
        </a>
        <a href="#features" class="btn btn-secondary btn-lg">
          Learn More
        </a>
      </div>
    </section>

    <!-- Featured Courses -->
    <section class="container py-16">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold">Featured Courses</h2>
        <a href="/courses" class="text-primary hover:underline">
          View all →
        </a>
      </div>
      
      <div class="grid-list">
        {#each data.courses as course (course.id)}
          <CourseCard {course} />
        {/each}
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="container py-16">
      <div class="grid-list">
        <div class="card p-6">
          <div class="w-12 h-12 rounded-lg bg-primary-soft flex items-center justify-center mb-4">
            <span class="text-2xl">🎯</span>
          </div>
          <h3 class="font-semibold text-foreground mb-2">Structured Learning</h3>
          <p class="text-foreground-secondary text-sm">
            Progress from A1 to C2 with our carefully designed curriculum.
          </p>
        </div>
        
        <div class="card p-6">
          <div class="w-12 h-12 rounded-lg bg-success-soft flex items-center justify-center mb-4">
            <span class="text-2xl">🎧</span>
          </div>
          <h3 class="font-semibold text-foreground mb-2">Shadowing Practice</h3>
          <p class="text-foreground-secondary text-sm">
            Improve pronunciation with our interactive shadowing tool.
          </p>
        </div>
        
        <div class="card p-6">
          <div class="w-12 h-12 rounded-lg bg-warning-soft flex items-center justify-center mb-4">
            <span class="text-2xl">📊</span>
          </div>
          <h3 class="font-semibold text-foreground mb-2">Track Progress</h3>
          <p class="text-foreground-secondary text-sm">
            Monitor your improvement with detailed progress tracking.
          </p>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="border-t border-border py-8 mt-20">
    <div class="container text-center text-foreground-muted text-sm">
      © 2024 LMS Platform. Built with ❤️ and Svelte.
    </div>
  </footer>
</div>