<script>
    import {
        Mail,
        Phone,
        MessageCircle,
        Github,
        Linkedin,
        Briefcase,
    } from "lucide-svelte";
    // Lucide doesn't always have Behance, using Briefcase as a portfolio fallback if it fails,
    // but let's try to import a specific icon if we can.
    // Actually, checking standard Lucide list, it DOES NOT often include brand icons like Behance.
    // I will use `Palette` or `Briefcase` for Behance if `Behance` isn't there.
    // Let's rely on standard ones for now. usage of `Behance` is risky without checking.
    // I'll use `Palette` for Behance (Creative work).
    import { Palette } from "lucide-svelte";
</script>

<section id="contact" class="py-12 bg-brand-black border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-white mb-2">Ready to scale?</h2>
        <p class="text-gray-500 mb-8">
            Let's build something extraordinary together.
        </p>

        <div class="flex flex-wrap justify-center gap-8 mb-8">
            <!-- Contact -->
            <a
                href="mailto:Innocentmanda70@gmail.com"
                class="text-gray-400 hover:text-brand-cyan transition-colors transform hover:scale-110 duration-300"
                aria-label="Email"
            >
                <Mail size={24} />
            </a>
            <a
                href="tel:+260979082676"
                class="text-gray-400 hover:text-brand-cyan transition-colors transform hover:scale-110 duration-300"
                aria-label="Phone"
            >
                <Phone size={24} />
            </a>
            <a
                href="https://wa.me/message/MCABBED5RWOMA1"
                class="text-gray-400 hover:text-brand-cyan transition-colors transform hover:scale-110 duration-300"
                aria-label="WhatsApp"
            >
                <MessageCircle size={24} />
            </a>

            <!-- Divider for visual grouping (optional, or just gap) -->
            <div class="w-px h-6 bg-gray-800 hidden sm:block"></div>

            <!-- Socials -->
            <a
                href="https://github.com/Chipatenii"
                target="_blank"
                class="text-gray-400 hover:text-brand-cyan transition-colors transform hover:scale-110 duration-300"
                aria-label="GitHub"
            >
                <Github size={24} />
            </a>
            <a
                href="https://www.linkedin.com/in/innocent-manda-80b48b187/"
                target="_blank"
                class="text-gray-400 hover:text-brand-cyan transition-colors transform hover:scale-110 duration-300"
                aria-label="LinkedIn"
            >
                <Linkedin size={24} />
            </a>
            <a
                href="https://www.behance.net/mapalomanda"
                target="_blank"
                class="text-gray-400 hover:text-brand-cyan transition-colors transform hover:scale-110 duration-300"
                aria-label="Behance"
            >
                <Palette size={24} />
            </a>
        </div>

        <p class="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Innocent Manda. All rights reserved.
            <br />
            Lusaka, Zambia.
        </p>
    </div>
</section>
