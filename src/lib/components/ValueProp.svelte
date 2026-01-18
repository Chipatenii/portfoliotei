<script>
    import { Code, PenTool, Layout } from "lucide-svelte";
</script>

<section id="services" class="py-24 bg-brand-gunmetal relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                The Hybrid Advantage
            </h2>
            <p class="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Most agencies hire a designer AND a developer. I bridge the gap.
                <span class="text-brand-cyan"
                    >I don't just design; I build. I don't just code; I create
                    identities.</span
                >
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div
                class="p-8 rounded-2xl bg-brand-black border border-gray-800 hover:border-brand-cyan/50 transition-all duration-300 group hover:-translate-y-2"
            >
                <div
                    class="w-14 h-14 bg-brand-cyan/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan/20 transition-colors"
                >
                    <Code class="text-brand-cyan" size={28} />
                </div>
                <h3 class="text-xl font-bold text-white mb-3">
                    Full-Stack Engineering
                </h3>
                <p class="text-gray-400">
                    Robust, scalable code using modern frameworks like Svelte
                    and React. Built for performance and SEO from day one.
                </p>
            </div>

            <!-- Card 2 -->
            <div
                class="p-8 rounded-2xl bg-brand-black border border-gray-800 hover:border-brand-teal/50 transition-all duration-300 group hover:-translate-y-2"
            >
                <div
                    class="w-14 h-14 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-teal/20 transition-colors"
                >
                    <PenTool class="text-brand-teal" size={28} />
                </div>
                <h3 class="text-xl font-bold text-white mb-3">
                    Creative Design
                </h3>
                <p class="text-gray-400">
                    User-centric UI/UX design that looks premium and functions
                    seamlessly. No templates, just custom digital tailoring.
                </p>
            </div>

            <!-- Card 3 -->
            <div
                class="p-8 rounded-2xl bg-brand-black border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-2"
            >
                <div
                    class="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors"
                >
                    <Layout class="text-purple-400" size={28} />
                </div>
                <h3 class="text-xl font-bold text-white mb-3">
                    Brand Identity
                </h3>
                <p class="text-gray-400">
                    Digital asset creation that aligns with your business goals.
                    Consistent branding across your entire digital footprint.
                </p>
            </div>
        </div>
    </div>
</section>
