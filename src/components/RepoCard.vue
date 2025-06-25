<script setup lang="ts" async>
import { Service } from '@/service'

const service = new Service()
const repos = await service.getRepos()

</script>
<template>
    <div class="bg-white shadow rounded-lg p-6 my-5 max-h-120 overflow-y-scroll">
        <span class="text-gray-700 uppercase font-bold tracking-wider">Repos</span>
        <ul class="space-y-4 pt-4">
            <li
                v-for="repo in repos"
                :key="repo.id"
                class="bg-white border border-gray-200 rounded-lg p-5 shadow hover:shadow-md transition-shadow"
            >
                <div class="flex items-center justify-between">
                    <a
                        :href="repo.html_url"
                        target="_blank"
                        rel="noopener"
                        class="text-lg font-semibold text-blue-600 hover:underline"
                    >
                        {{ repo.name }}
                    </a>
                    <span
                        v-if="repo.private"
                        class="ml-2 px-2 py-0.5 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                        Private
                    </span>
                </div>
                <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                    {{ repo.description || 'No description' }}
                </p>
                <div class="mt-3 flex flex-wrap items-center text-xs text-gray-500 dark:text-gray-400 gap-4">
                    <span v-if="repo.language" class="flex items-center gap-1">
                        <span class="w-2 h-2 rounded-full bg-gray-400 inline-block"></span>
                        {{ repo.language }}
                    </span>
                    <span>
                        ★ {{ repo.stargazers_count }}
                    </span>
                    <span>
                        Updated {{ new Date(repo.updated_at).toLocaleDateString() }}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>