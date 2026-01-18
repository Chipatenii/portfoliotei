<script>
    import ProjectCard from "./ProjectCard.svelte";

    const projects = [
        {
            title: "FinTech Dashboard for PayZambia",
            problem:
                "The client needed a way to visualize transaction data for their merchants, but existing tools were too complex and slow.",
            solution:
                "Designed and built a high-performance React dashboard with real-time data visualization using D3.js, optimized for mobile merchants.",
            result: "Merchant onboarding increased by 40% due to the intuitive UI, and load times dropped from 5s to 0.8s.",
            tags: ["React", "Tailwind", "D3.js"],
        },
        {
            title: "AgriTech Supply Chain Platform",
            problem:
                "Local farmers struggled to connect directly with buyers, losing profit to middlemen.",
            solution:
                "Developed a PWA (Progressive Web App) using SvelteKit that allows offline usage for farmers in remote areas to list produce.",
            result: "Connected over 500 farmers to direct buyers in the first 3 months, increasing their profit margins by 25%.",
            tags: ["SvelteKit", "PWA", "Firebase"],
        },
        {
            title: "Corporate Identity for LegalFirm",
            problem:
                "An established law firm had an outdated digital presence that didn't reflect their prestige.",
            solution:
                "Executed a complete rebrand (Logo, Color Palette, Typography) and built a minimalist, authoritative website.",
            result: "The firm saw a 200% increase in online inquiries from corporate clients within the first month.",
            tags: ["Branding", "UI/UX", "Next.js"],
        },
    ];
</script>

<section id="work" class="py-24 bg-brand-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                Selected Works
            </h2>
            <p class="text-gray-400 max-w-2xl text-lg">
                A selection of projects where engineering meets design to solve
                tangible problems.
            </p>
        </div>

        <div class="space-y-12">
            {#each projects as project}
                <ProjectCard {...project} />
            {/each}
        </div>

        <div class="mt-16 text-center">
            <a
                href="https://wa.me/message/MCABBED5RWOMA1"
                target="_blank"
                class="inline-block border border-gray-700 hover:border-brand-cyan text-gray-300 hover:text-brand-cyan px-8 py-3 rounded-full transition-colors duration-300"
            >
                Discuss Your Project
            </a>
        </div>
    </div>
</section>
