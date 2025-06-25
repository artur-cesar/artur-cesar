<script setup lang="ts">
import { Service } from '@/service'

const service = new Service()
const posts = service.getBlogs()

</script>
<template>
    <div class="bg-white shadow rounded-lg p-6 my-5">
        <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">Blog</span>
        <div v-for="(post, index) in posts" class="my-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform" :key="index">
            <a :href="post.url" target="_blank">
                <img class="w-full h-48 object-cover" :src="post.image" :alt="post.title">
                <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ post.title }}</h3>
                <p class="text-sm text-gray-600">{{ post.description }}</p>
                </div>
            </a>
        </div>
    </div>
</template>