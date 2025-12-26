<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  // Will add auth/user props in Slice 6
</script>

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