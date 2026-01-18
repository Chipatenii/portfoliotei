<script>
  import Navbar from "./lib/components/Navbar.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import Bio from "./lib/components/Bio.svelte";
  import ValueProp from "./lib/components/ValueProp.svelte";
  import ProjectList from "./lib/components/ProjectList.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import FloatingCTA from "./lib/components/FloatingCTA.svelte";
</script>

<main
  class="bg-brand-black min-h-screen text-gray-100 font-sans selection:bg-brand-cyan selection:text-black"
>
  <Navbar />
  <Hero />
  <Bio />
  <ValueProp />
  <ProjectList />
  <Footer />
  <FloatingCTA />
</main>
