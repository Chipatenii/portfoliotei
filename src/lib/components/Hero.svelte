<script>
  import { ArrowRight } from "lucide-svelte";
</script>

<section
  id="hero"
  class="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
>
  <!-- Background Elements -->
  <div
    class="absolute top-1/4 -left-20 w-72 h-72 bg-brand-cyan/20 rounded-full blur-[100px] pointer-events-none"
  ></div>
  <div
    class="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none"
  ></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <div class="animate-fade-in-up">
      <h2
        class="text-brand-cyan font-mono text-sm md:text-base mb-4 tracking-widest uppercase"
      >
        Based in Lusaka, Zambia
      </h2>

      <h1
        class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
      >
        Engineering Logic. <br class="hidden md:block" />
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500"
          >Creative Soul.</span
        >
      </h1>

      <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
        I build custom systems and brand identities that solve real business
        problems. Transforming ideas into resilient digital assets.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://wa.me/message/MCABBED5RWOMA1"
          target="_blank"
          class="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-brand-black bg-brand-cyan rounded-full hover:bg-brand-cyan/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
        >
          <span>Start a Project</span>
          <ArrowRight
            class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
          />
        </a>

        <a
          href="#work"
          class="text-gray-300 hover:text-white font-medium px-8 py-3 transition-colors underline decoration-brand-gunmetal underline-offset-4 hover:decoration-brand-cyan"
        >
          View My Work
        </a>
      </div>
    </div>
  </div>
</section>
