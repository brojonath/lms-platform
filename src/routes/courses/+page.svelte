<!-- src/routes/courses/+page.svelte -->
<script lang="ts">
  import CourseCard from '$lib/components/CourseCard.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Courses | LMS Platform</title>
</svelte:head>

<div class="container py-12">
  <!-- Header -->
  <div class="mb-10">
    <h1 class="text-4xl mb-3">
      <span class="gradient-text">Courses</span>
    </h1>
    <p class="text-gray3 text-lg">
      Start your English learning journey today.
    </p>
  </div>

  <!-- Course Grid -->
  <div class="grid-list">
    {#each data.courses as course (course.id)}
      <CourseCard {course} />
    {/each}
  </div>
</div>