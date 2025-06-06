<script setup lang="ts">
import { ref } from 'vue'
import BtnDropdown from './BtnDropdown.vue';

const socials = ref([
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/artur-cesar-de-melo-jacinto',
        icon: 'linkedin'
    },
    {
        name: 'Github',
        url: 'https://github.com/artur-cesar',
        icon: 'github'
    }
])
</script>
<template>
    <div class="bg-white shadow rounded-lg p-6">
        <div class="flex flex-col items-center">
            <img src="https://avatars.githubusercontent.com/u/107410080?v=4" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

            </img>
            <h1 class="text-xl font-bold">Artur Jacinto</h1>
            <p class="text-gray-700">Software Developer</p>
            <div class="flex justify-center items-center gap-3 mt-4 mb-6">
                <a v-for="social in socials" :key="social.name" class="text-gray-700 hover:text-orange-600" :aria-label="'Visit ' + social.name" :href="social.url"
                    target="_blank">
                    <i :class="`bs bi-${social.icon} text-xl`"></i>
                </a>
            </div>
            <div class="mt-6 flex flex-wrap gap-4 justify-center">
                <BtnDropdown :label="'Contact'"/>
                <a href="/Currículo_EN_2024.docx" target="_blank" rel="noopener noreferrer" class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
            </div>
        </div>
        <hr class="my-6 border-t border-gray-300">
        <div class="flex flex-col">
            <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">Stack</span>
            <ul class="inline-flex text-gray-700 flex-wrap gap-2 items-center">
                <li class="mb-2">Python</li>
                <li class="mb-2">| Node.js</li>
                <li class="mb-2">| AWS</li>
                <li class="mb-2">| Vue</li>
                <li class="mb-2">| React</li>
            </ul>
        </div>
    </div>
</template>