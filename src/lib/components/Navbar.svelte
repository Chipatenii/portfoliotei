<script>
  import { Menu, X } from 'lucide-svelte';
  
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="fixed top-0 w-full z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-gunmetal">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="#hero" class="text-brand-white font-mono text-xl font-bold tracking-tighter">
          &lt;Innocent /&gt;
        </a>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          <a href="#work" class="text-gray-300 hover:text-brand-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Work</a>
          <a href="#services" class="text-gray-300 hover:text-brand-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
          <a href="#contact" class="text-gray-300 hover:text-brand-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
          <a 
            href="https://wa.me/message/MCABBED5RWOMA1" 
            target="_blank" 
            class="bg-brand-cyan/10 border border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-brand-black px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            Hire Me
          </a>
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button 
          onclick={toggleMenu} 
          class="text-gray-300 hover:text-white focus:outline-none"
        >
          {#if isMenuOpen}
            <X size={24} />
          {:else}
            <Menu size={24} />
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="md:hidden bg-brand-gunmetal border-t border-gray-800">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#work" onclick={toggleMenu} class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Work</a>
        <a href="#services" onclick={toggleMenu} class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
        <a href="#contact" onclick={toggleMenu} class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        <a 
          href="https://wa.me/message/MCABBED5RWOMA1"
          target="_blank"
          class="text-brand-cyan block px-3 py-2 rounded-md text-base font-medium"
        >
          Hire Me
        </a>
      </div>
    </div>
  {/if}
</nav>
