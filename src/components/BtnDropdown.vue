<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <button
      type="button"
      class="inline-flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
      @click="toggleDropdown"
    >
      {{label || 'Actions'}}
      <svg
        class="-mr-1 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-show="isOpen"
      class="absolute left-0 z-10 mt-1 origin-top-right rounded-md bg-white shadow-md"
    >
      <div class="py-1" role="menu" aria-orientation="vertical">
        <a href="tel:+5582996177917" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <i class="bi bi-telephone"></i> <span class="whitespace-nowrap">+5582996177917</span>
        </a>
        <a href="mailto:arturcesarmelo@gmail.com" class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <i class="bi bi-envelope"></i>
            <span class="whitespace-nowrap">arturcesarmelo@gmail.com</span>
        </a>
        <a href="sms:+5582996177917" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <i class="bi bi-chat"></i> <span class="whitespace-nowrap">+5582996177917</span>
        </a>
        <a href="https://wa.me/+5582996177917?text=Hello Artur, i'm <name> and i came across your personal website." class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <i class="bi bi-whatsapp"></i> <span class="whitespace-nowrap">+5582996177917 <i class="bi bi-box-arrow-up-right float-right"></i></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps({
    label: {
        type: String,
        default: 'Dropdown'
    }
});

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
        isOpen.value = !isOpen.value;
    };

const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>
