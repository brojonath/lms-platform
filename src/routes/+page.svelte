<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { getPublishedCourses, getCourseLessons, getCourseStats, getCourseThumbnail } from '$lib/data/courses';
  
  // Test data layer
  const courses = getPublishedCourses();
  console.log('Published courses:', courses);
  
  // Test lessons
  const firstCourse = courses[0];
  if (firstCourse) {
    const lessons = getCourseLessons(firstCourse.id);
    const stats = getCourseStats(firstCourse.id);
    console.log(`${firstCourse.title}:`, { lessons, stats });
  }
  
  let count = $state(0);
</script>

<div class="min-h-screen">
  
  <!-- ═══════════════════════════════════════════════════════════
       HEADER (Glass style)
       ═══════════════════════════════════════════════════════════ -->
  <header class="glass sticky top-0 z-50 border-b border-gray6">
    <div class="container h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 
                    flex items-center justify-center text-xl
                    shadow-lg group-hover:shadow-orange-500/25 transition-shadow">
          🔥
        </div>
        <span class="text-xl font-bold text-gray1 hidden sm:block">
          LMS<span class="text-orange-500">Platform</span>
        </span>
      </a>
      
      <!-- Nav -->
      <nav class="hidden md:flex items-center gap-1">
        <a href="/courses" class="px-4 py-2 text-gray3 hover:text-gray1 hover:bg-gray6 rounded transition-colors">
          Courses
        </a>
        <a href="/dashboard" class="px-4 py-2 text-gray3 hover:text-gray1 hover:bg-gray6 rounded transition-colors">
          Dashboard
        </a>
      </nav>
      
      <!-- Actions -->
      <div class="flex items-center gap-3">
        <button class="btn btn-ghost btn-sm">Sign In</button>
        <button class="btn btn-orange btn-sm glow">Get Started</button>
      </div>
    </div>
  </header>

  <main>

    <div class="circles-container" aria-hidden="true">
    <div class="gradient-circle circle-1"></div>
    <div class="gradient-circle circle-2"></div>
    <div class="gradient-circle circle-3"></div>
    </div>

    
    <!-- ═══════════════════════════════════════════════════════════
         HERO SECTION
         ═══════════════════════════════════════════════════════════ -->
    <section class="container py-20 text-center">
      <span class="tag tag-blue tag-lg mb-6">New Courses Available</span>
      
      <h1 class="text-5xl md:text-6xl mb-6">
        Learn English
        <span class="gradient-text">The Smart Way</span>
      </h1>
      
      <p class="text-xl text-gray3 max-w-2xl mx-auto mb-10">
        Master English with interactive courses, shadowing exercises, 
        and real-world conversation practice.
      </p>
      
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button class="btn btn-orange btn-lg glow">
          Start Learning Free
        </button>
        <button class="btn btn-gray btn-lg">
          View Courses
        </button>
      </div>
      
      <!-- Stats -->
      <div class="flex flex-wrap justify-center gap-12 text-center">
        <div>
          <div class="text-3xl font-bold text-orange-500">1,000+</div>
          <div class="text-gray4 text-sm">Students</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-orange-500">50+</div>
          <div class="text-gray4 text-sm">Lessons</div>
        </div>
        <div>
          <div class="text-3xl font-bold text-orange-500">A1-C2</div>
          <div class="text-gray4 text-sm">All Levels</div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         GRAY SCALE TEST
         ═══════════════════════════════════════════════════════════ -->
    <section class="container py-12">
      <h2 class="text-2xl mb-6">Fireship Gray Scale</h2>
      
      <div class="grid grid-cols-7 gap-3">
        <div class="aspect-square rounded-lg bg-gray7 flex items-end justify-center pb-2">
          <span class="text-xs text-gray4">gray7</span>
        </div>
        <div class="aspect-square rounded-lg bg-gray6 flex items-end justify-center pb-2">
          <span class="text-xs text-gray4">gray6</span>
        </div>
        <div class="aspect-square rounded-lg bg-gray5 flex items-end justify-center pb-2">
          <span class="text-xs text-gray3">gray5</span>
        </div>
        <div class="aspect-square rounded-lg bg-gray4 flex items-end justify-center pb-2">
          <span class="text-xs text-gray7">gray4</span>
        </div>
        <div class="aspect-square rounded-lg bg-gray3 flex items-end justify-center pb-2">
          <span class="text-xs text-gray7">gray3</span>
        </div>
        <div class="aspect-square rounded-lg bg-gray2 flex items-end justify-center pb-2">
          <span class="text-xs text-gray7">gray2</span>
        </div>
        <div class="aspect-square rounded-lg bg-gray1 flex items-end justify-center pb-2">
          <span class="text-xs text-gray7">gray1</span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         BUTTONS
         ═══════════════════════════════════════════════════════════ -->
    <section class="container py-12">
      <h2 class="text-2xl mb-6">Buttons</h2>
      
      <div class="space-y-6">
        <!-- Standard -->
        <div class="flex flex-wrap gap-3">
          <button class="btn btn-orange">Orange</button>
          <button class="btn btn-green">Green</button>
          <button class="btn btn-blue">Blue</button>
          <button class="btn btn-purple">Purple</button>
          <button class="btn btn-pink">Pink</button>
          <button class="btn btn-red">Red</button>
          <button class="btn btn-gray">Gray</button>
          <button class="btn btn-ghost">Ghost</button>
        </div>
        
        <!-- With Glow -->
        <div class="flex flex-wrap gap-3">
          <button class="btn btn-orange glow">Orange Glow</button>
          <button class="btn btn-green glow">Green Glow</button>
          <button class="btn btn-blue glow">Blue Glow</button>
          <button class="btn btn-purple glow">Purple Glow</button>
        </div>
        
        <!-- Sizes -->
        <div class="flex flex-wrap items-center gap-3">
          <button class="btn btn-orange btn-sm">Small</button>
          <button class="btn btn-orange">Default</button>
          <button class="btn btn-orange btn-lg">Large</button>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         TAGS
         ═══════════════════════════════════════════════════════════ -->
    <section class="container py-12">
      <h2 class="text-2xl mb-6">Tags & Badges</h2>
      
      <div class="space-y-4">
        <!-- Standard Tags -->
        <div class="flex flex-wrap gap-2">
          <span class="tag">Default</span>
          <span class="tag tag-pro">PRO</span>
          <span class="tag tag-orange">New</span>
          <span class="tag tag-blue">Featured</span>
          <span class="tag tag-purple">Premium</span>
        </div>
        
        <!-- Tech Tags -->
        <div class="flex flex-wrap gap-2">
          <span class="tag tag-javascript">JavaScript</span>
          <span class="tag tag-typescript">TypeScript</span>
          <span class="tag tag-svelte">Svelte</span>
          <span class="tag tag-react">React</span>
        </div>
        
        <!-- Level Tags (EFL) -->
        <div class="flex flex-wrap gap-2">
          <span class="tag tag-a1">A1 Beginner</span>
          <span class="tag tag-a2">A2 Elementary</span>
          <span class="tag tag-b1">B1 Intermediate</span>
          <span class="tag tag-b2">B2 Upper-Int</span>
          <span class="tag tag-c1">C1 Advanced</span>
          <span class="tag tag-c2">C2 Mastery</span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         CARDS
         ═══════════════════════════════════════════════════════════ -->
    <section class="container py-12">
      <h2 class="text-2xl mb-6">Cards</h2>
      
      <div class="grid-list">
        {#each [1, 2, 3, 4] as i}
          <div class="card card-interactive hover-lift group cursor-pointer overflow-hidden p-0">
            <!-- Thumbnail -->
            <div class="aspect-video bg-gray7 relative">
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-16 h-16 text-gray5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              
              <!-- Play overlay on hover -->
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
              <span class="absolute top-3 right-3 tag tag-a1">A1</span>
            </div>
            
            <!-- Content -->
            <div class="p-5">
              <h3 class="text-lg text-gray1 mb-2 group-hover:text-orange-400 transition-colors">
                English Foundations {i}
              </h3>
              <p class="text-gray4 text-sm mb-4 line-clamp-2">
                Master the basics of English grammar and vocabulary for everyday communication.
              </p>
              <div class="flex items-center gap-3 text-xs text-gray4">
                <span>12 lessons</span>
                <span>•</span>
                <span>2.5 hours</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         BOX COMPONENTS
         ═══════════════════════════════════════════════════════════ -->
    <section class="container py-12">
      <h2 class="text-2xl mb-6">Box Components (Alerts)</h2>
      
      <div class="space-y-4 max-w-2xl">
        <div class="box box-green">
          <strong class="text-green-400">Success!</strong>
          <span class="text-gray3 ml-2">Your progress has been saved.</span>
        </div>
        
        <div class="box box-blue">
          <strong class="text-blue-400">Info:</strong>
          <span class="text-gray3 ml-2">New lessons will be available next week.</span>
        </div>
        
        <div class="box box-yellow">
          <strong class="text-yellow-400">Warning:</strong>
          <span class="text-gray3 ml-2">Your subscription expires in 3 days.</span>
        </div>
        
        <div class="box box-red">
          <strong class="text-red-400">Error:</strong>
          <span class="text-gray3 ml-2">Failed to save progress. Please try again.</span>
        </div>
        
        <div class="box box-orange">
          <strong class="text-orange-400">Tip:</strong>
          <span class="text-gray3 ml-2">Practice shadowing for 15 minutes daily for best results.</span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         GRADIENT TEXT
         ═══════════════════════════════════════════════════════════ -->
    <section class="container py-12">
      <h2 class="text-2xl mb-6">Gradient Text</h2>
      
      <div class="space-y-4">
        <h3 class="text-4xl gradient-text">Orange to Yellow Gradient</h3>
        <h3 class="text-4xl gradient-text-green">Green Gradient</h3>
        <h3 class="text-4xl gradient-text-pink">Orange to Pink Gradient</h3>
        <h3 class="text-4xl gradient-text-blue">Blue to Purple Gradient</h3>
        <h3 class="text-4xl gradient-slide">Animated Gradient (hover me)</h3>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         INPUT
         ═══════════════════════════════════════════════════════════ -->
    <section class="container py-12">
      <h2 class="text-2xl mb-6">Input</h2>
      
      <div class="max-w-md space-y-4">
        <input type="email" class="input" placeholder="Enter your email..." />
        <input type="text" class="input input-error" placeholder="Error state..." />
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         CODE BLOCK
         ═══════════════════════════════════════════════════════════ -->
    <section class="container py-12">
      <h2 class="text-2xl mb-6">Code Block</h2>
      
      <div class="max-w-2xl">
        <div class="file-name">
          <span>📄 example.ts</span>
        </div>
        <pre class="code-block"><code><span class="text-purple-400">const</span> <span class="text-orange-300">greeting</span> = <span class="text-green-400">"Hello World"</span>;
<span class="text-blue-400">console</span>.<span class="text-orange-300">log</span>(greeting);</code></pre>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SVELTE 5 TEST
         ═══════════════════════════════════════════════════════════ -->
    <section class="container py-12">
      <h2 class="text-2xl mb-6">Svelte 5 Runes</h2>
      
      <div class="flex items-center gap-4">
        <button 
          onclick={() => count++}
          class="btn btn-orange glow"
        >
          Count: {count}
        </button>
        <button 
          onclick={() => count = 0}
          class="btn btn-gray"
        >
          Reset
        </button>
      </div>
    </section>

  </main>

  <!-- ═══════════════════════════════════════════════════════════
       FOOTER
       ═══════════════════════════════════════════════════════════ -->
  <footer class="border-t border-gray6 py-8 mt-20">
    <div class="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-gray4 text-sm">
        © 2024 LMS Platform. Built with 🔥 and Svelte.
      </p>
      <div class="flex items-center gap-6 text-sm text-gray4">
        <a href="/privacy" class="hover:text-gray2 transition-colors">Privacy</a>
        <a href="/terms" class="hover:text-gray2 transition-colors">Terms</a>
      </div>
    </div>
  </footer>
  
</div>

<style>
       .circles-container {
            pointer-events: none;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

    .gradient-circle {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 9999px;
        width: 20rem;
        height: 20rem;
        filter: blur(160px);
        opacity: 0.5;
        
        /* Use Tailwind vars for colors */
        background-image: linear-gradient(to top right, #3b82f6, #111827);
    }

    /* Position extraction from your HTML */
    .circle-1 {
        top: -8rem;
        margin-left: 580px;
    }

    .circle-2 {
        top: 20vh;
        margin-left: 380px;
    }

    .circle-3 {
        top: 40vh;
        margin-left: -300px;
    }
</style>