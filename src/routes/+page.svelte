<!-- src/routes/+page.svelte -->
<script lang="ts">
  // Svelte 5 reactivity test
  let count = $state(0);
</script>

<div class="min-h-screen p-8">
  <div class="max-w-4xl mx-auto space-y-8">
    
    <!-- Header -->
    <header class="space-y-2">
      <h1 class="text-4xl font-bold text-gradient-primary">
        LMS Platform
      </h1>
      <p class="text-text-secondary">
        Design system working with Tailwind v4 ✓
      </p>
    </header>

    <!-- Color Palette -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Background Colors</h2>
      
      <div class="grid grid-cols-4 gap-4">
        <div class="p-4 bg-bg rounded border border-border">
          <span class="text-muted text-sm">bg</span>
        </div>
        <div class="p-4 bg-bg-2 rounded border border-border">
          <span class="text-muted text-sm">bg-2</span>
        </div>
        <div class="p-4 bg-bg-3 rounded border border-border">
          <span class="text-muted text-sm">bg-3</span>
        </div>
        <div class="p-4 bg-bg-hover rounded border border-border">
          <span class="text-muted text-sm">bg-hover</span>
        </div>
      </div>
    </section>

    <!-- Brand Colors -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Brand Colors</h2>
      
      <div class="flex gap-4">
        <div class="p-4 bg-primary rounded">
          <span class="text-bg text-sm font-medium">primary</span>
        </div>
        <div class="p-4 bg-secondary rounded">
          <span class="text-bg text-sm font-medium">secondary</span>
        </div>
        <div class="p-4 bg-accent rounded">
          <span class="text-bg text-sm font-medium">accent</span>
        </div>
        <div class="p-4 bg-success rounded">
          <span class="text-bg text-sm font-medium">success</span>
        </div>
        <div class="p-4 bg-error rounded">
          <span class="text-bg text-sm font-medium">error</span>
        </div>
      </div>
    </section>

    <!-- English Levels -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">English Levels (EFL)</h2>
      
      <div class="flex gap-2">
        <span class="px-3 py-1 bg-level-a1/20 text-level-a1 rounded-full text-sm font-medium">A1</span>
        <span class="px-3 py-1 bg-level-a2/20 text-level-a2 rounded-full text-sm font-medium">A2</span>
        <span class="px-3 py-1 bg-level-b1/20 text-level-b1 rounded-full text-sm font-medium">B1</span>
        <span class="px-3 py-1 bg-level-b2/20 text-level-b2 rounded-full text-sm font-medium">B2</span>
        <span class="px-3 py-1 bg-level-c1/20 text-level-c1 rounded-full text-sm font-medium">C1</span>
        <span class="px-3 py-1 bg-level-c2/20 text-level-c2 rounded-full text-sm font-medium">C2</span>
      </div>
    </section>

    <!-- User Status -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">User Status</h2>
      
      <div class="flex gap-3">
        <span class="px-3 py-1 bg-status-pending/20 text-status-pending rounded-full text-sm">
          ● Pending
        </span>
        <span class="px-3 py-1 bg-status-approved/20 text-status-approved rounded-full text-sm">
          ● Approved
        </span>
        <span class="px-3 py-1 bg-status-rejected/20 text-status-rejected rounded-full text-sm">
          ● Rejected
        </span>
      </div>
    </section>

    <!-- Svelte 5 Reactivity -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Svelte 5 Runes</h2>
      
      <div class="flex items-center gap-4">
        <button
          onclick={() => count++}
          class="px-4 py-2 bg-primary text-bg font-medium rounded-lg
                 hover:bg-primary/90 active:scale-95
                 transition-all duration-150 focus-ring"
        >
          Clicked: {count}
        </button>
        <button
          onclick={() => count = 0}
          class="px-4 py-2 bg-bg-3 text-text-secondary font-medium rounded-lg
                 hover:bg-bg-hover transition-colors focus-ring"
        >
          Reset
        </button>
      </div>
    </section>

    <!-- Card Preview -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Course Card Preview</h2>
      
      <div class="max-w-sm bg-bg-2 rounded-lg border border-border overflow-hidden
                  hover:border-primary/50 hover:shadow-glow 
                  transition-all duration-300 cursor-pointer group">
        <!-- Thumbnail -->
        <div class="aspect-video bg-bg-3 relative overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center text-muted">
            Thumbnail
          </div>
          <!-- Level Badge -->
          <span class="absolute top-2 right-2 px-2 py-0.5 
                       bg-level-a1/90 text-white text-xs font-medium rounded">
            A1
          </span>
        </div>
        
        <!-- Content -->
        <div class="p-4 space-y-2">
          <h3 class="font-semibold text-text group-hover:text-primary transition-colors">
            English Foundations
          </h3>
          <p class="text-text-secondary text-sm line-clamp-2">
            Master the basics of English grammar and vocabulary for everyday communication.
          </p>
          <div class="flex items-center gap-3 text-muted text-xs pt-2">
            <span>12 lessons</span>
            <span>•</span>
            <span>2.5 hours</span>
            <span>•</span>
            <span class="text-success">3 free previews</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Shadows & Effects -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Shadows & Effects</h2>
      
      <div class="flex gap-6">
        <div class="p-6 bg-bg-2 rounded-lg shadow-sm">
          <span class="text-sm text-muted">shadow-sm</span>
        </div>
        <div class="p-6 bg-bg-2 rounded-lg shadow-md">
          <span class="text-sm text-muted">shadow-md</span>
        </div>
        <div class="p-6 bg-bg-2 rounded-lg shadow-glow border border-primary/30">
          <span class="text-sm text-primary">shadow-glow</span>
        </div>
      </div>
    </section>

    <!-- Animation Preview -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Animations</h2>
      
      <div class="flex gap-6">
        <div class="p-4 bg-bg-2 rounded-lg animate-pulse-soft">
          <span class="text-sm">pulse-soft</span>
        </div>
        <div class="p-4 bg-bg-2 rounded-lg animate-float">
          <span class="text-sm">float</span>
        </div>
      </div>
    </section>

  </div>
</div>