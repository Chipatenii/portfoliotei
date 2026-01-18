<script>
    import { CheckCircle, Github, Linkedin, Palette } from "lucide-svelte";

    const skills = [
        "Full-Stack Development",
        "UI/UX Design",
        "System Architecture",
        "Brand Identity",
    ];
</script>

<section id="about" class="py-24 bg-brand-black relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">
            <!-- Image Side -->
            <div class="lg:w-1/2 relative">
                <div
                    class="relative z-10 rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_40px_rgba(0,240,255,0.1)] group"
                >
                    <div
                        class="absolute inset-0 bg-brand-cyan/10 group-hover:bg-transparent transition-colors duration-500"
                    ></div>
                    <img
                        src="/assets/images/profile.jpg"
                        alt="Innocent Manda"
                        class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <!-- Decorative Elements -->
                <div
                    class="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-cyan/50 rounded-tl-3xl"
                ></div>
                <div
                    class="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-teal/50 rounded-br-3xl"
                ></div>
            </div>

            <!-- Content Side -->
            <div class="lg:w-1/2">
                <h2
                    class="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-4"
                >
                    // About Me
                </h2>
                <h3
                    class="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
                >
                    Solving Business Problems with <br />
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal"
                        >Code & Design</span
                    >
                </h3>

                <p class="text-gray-400 text-lg leading-relaxed mb-6">
                    I'm Innocent Manda, a Software Engineer and Creative
                    Designer based in Lusaka, Zambia. My journey sits at the
                    intersection of logical engineering and creative expression.
                </p>

                <p class="text-gray-400 text-lg leading-relaxed mb-8">
                    I don't just build websites; I build digital assets that
                    work for your business. Whether it's a complex web
                    application or a brand identity overhaul, I bring a
                    meticulous eye for detail and a passion for performance.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {#each skills as skill}
                        <div class="flex items-center space-x-3">
                            <CheckCircle size={20} class="text-brand-teal" />
                            <span class="text-gray-300 font-medium"
                                >{skill}</span
                            >
                        </div>
                    {/each}
                </div>

                <div class="flex flex-wrap items-center gap-6">
                    <a
                        href="#contact"
                        class="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-brand-black bg-white rounded-full hover:bg-brand-cyan transition-all duration-300"
                    >
                        Let's Talk
                    </a>

                    <!-- Social Icons -->
                    <div
                        class="flex items-center gap-4 border-l border-gray-700 pl-6"
                    >
                        <a
                            href="https://github.com/Chipatenii"
                            target="_blank"
                            class="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/innocent-manda-80b48b187/"
                            target="_blank"
                            class="text-gray-400 hover:text-[#0077b5] transition-colors transform hover:scale-110 duration-300"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://www.behance.net/mapalomanda"
                            target="_blank"
                            class="text-gray-400 hover:text-[#1769ff] transition-colors transform hover:scale-110 duration-300"
                            aria-label="Behance"
                        >
                            <Palette size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
