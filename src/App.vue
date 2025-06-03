<script setup lang="ts">
import ResumeContent from './components/ResumeContent.vue'
import ProfileCard from './components/ProfileCard.vue'
import PostsCard from './components/PostsCard.vue'
</script>

<template>
  <div class="bg-gray-100">
    <div class="container mx-auto py-8">
        <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
                <ProfileCard />
                <PostsCard />
            </div>
            <div class="col-span-4 sm:col-span-9">
                <ResumeContent />
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
</style>
