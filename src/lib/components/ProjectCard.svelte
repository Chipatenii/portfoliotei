<script>
    let { title, problem, solution, result, tags } = $props();
</script>

<div
    class="bg-brand-gunmetal rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-colors flex flex-col md:flex-row"
>
    <!-- Content Side -->
    <div class="p-8 md:w-3/5 order-2 md:order-1 flex flex-col justify-center">
        <div class="flex flex-wrap gap-2 mb-4">
            {#each tags as tag}
                <span
                    class="text-xs font-mono px-2 py-1 bg-brand-black text-brand-cyan rounded border border-brand-cyan/20"
                >
                    {tag}
                </span>
            {/each}
        </div>

        <h3 class="text-2xl font-bold text-white mb-5">{title}</h3>

        <div class="space-y-4">
            <div>
                <h4
                    class="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1"
                >
                    The Problem
                </h4>
                <p class="text-gray-300">{problem}</p>
            </div>

            <div class="pl-4 border-l-2 border-brand-teal/30">
                <h4
                    class="text-sm font-bold text-brand-teal uppercase tracking-wide mb-1"
                >
                    My Solution
                </h4>
                <p class="text-gray-300">{solution}</p>
            </div>

            <div>
                <h4
                    class="text-sm font-bold text-brand-cyan uppercase tracking-wide mb-1"
                >
                    The Result
                </h4>
                <p class="text-gray-300">{result}</p>
            </div>
        </div>
    </div>

    <!-- Visual/Placeholder Side -->
    <div
        class="md:w-2/5 bg-brand-black/50 order-1 md:order-2 flex items-center justify-center min-h-[250px] border-b md:border-b-0 md:border-l border-gray-800"
    >
        <div class="text-center p-6">
            <!-- Placeholder Art -->
            <div
                class="w-16 h-16 rounded-full border-2 border-dashed border-gray-700 mx-auto mb-3 flex items-center justify-center"
            >
                <span class="text-gray-600 font-bold text-xl">{title[0]}</span>
            </div>
            <p class="text-sm text-gray-500">Project Snapshot</p>
        </div>
    </div>
</div>
