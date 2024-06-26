<template>
  <div v-if="isLoading" class="flex items-center justify-center mt-6">
    <Loader />
  </div>
  <main class="grow mt-16 sm:mt-24">
    <div
      class="flex flex-wrap items-center gap-4 sm:gap-9 justify-end text-[#808080] text-xs font-bold"
    >
      <button class="uppercase">Previous</button>
      <button class="uppercase">Next</button>
    </div>
    <div style="opacity: 1; transform: none">
      <div
        class="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-9 md:h-[calc(100vw-75.694vw)]"
      >
        <RouterLink
          v-for="item in items"
          :to="{ name: 'videoInfo', params: { id: item.id.videoId } }"
          tabindex="0"
          class="w-full h-24 md:h-full rounded relative cursor-pointer group bg-center bg-cover block"
          :style="{
            backgroundImage: `url(${item.snippet.thumbnails.high.url})`,
          }"
        >
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase opacity-0 transition-opacity duration-300 opacity-0"
          >
            <p class="text-xs sm:text-sm font-semibold">Watch</p>
          </div>
          <div
            class="absolute bottom-2 lg:bottom-5 left-2 lg:left-5 right-2 lg:right-5 space-y-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          >
            <div
              class="flex flex-wrap items-center justify-between uppercase text-xs sm:text-sm font-semibold text-white"
            >
              <p>{{ item.snippet.channelTitle }}</p>
              <p>{{ item.snippet.title }}</p>
            </div>
            <div
              class="flex flex-wrap items-center justify-between uppercase text-xs sm:text-sm font-semibold text-white"
            ></div>
          </div>
        </RouterLink>
      </div>
    </div>
  </main>
  <div v-if="error" class="text-red-500 text-center mt-4">
    {{ error }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import store from "../store";
import Loader from "../components/loader.vue";
import { RouterLink } from "vue-router";

interface VideoItem {
  id: {
    videoId: string; // Define the type of videoId
  };
  snippet: {
    channelTitle: string;
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    // Add other properties if needed
  };
  // Add other properties if needed
}
const items = ref<VideoItem[]>([]);
const isLoading = computed(() => store.state.isLoading);
const slicedItems = computed(() => store.state.searchedResults.slice(0, 5));
const error = computed(() => store.state.error);
items.value = slicedItems.value;
</script>

<style scoped></style>
