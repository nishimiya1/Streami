<template>
  <div class="grow" style="opacity: 1; transform: none">
    <main>
      <div
        class="drag mt-16 lg:mt-[104px] flex overflow-x-scroll container-class transition-transform duration-300 scroll-snap-type-x-mandatory scroll-smooth"
      >
        <div
          class="relative grid px-0 items-stretch w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-none lg:grid-flow-col gap-4 lg:gap-10 overscroll-x-contain container-class transition-transform duration-300 scroll-snap-type-x-mandatory scroll-smooth"
        >
          <a
            class="hidden lg:grid relative bg-[#D9D9D9] w-[calc(100vw-72.22vw)] h-[calc(100vw-68.7vw)] rounded"
            v-for="item of items"
          >
            <RouterLink
              :to="{ name: 'videoInfo', params: { id: item.id.videoId } }"
            >
              <img
                :src="item.snippet.thumbnails.high.url"
                class="rounded object-cover"
                style="
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  inset: 0px;
                  color: transparent;
                "
                loading="lazy"
              />
            </RouterLink>
          </a>

          <a
            class="lg:hidden bg-[#D9D9D9] w-full rounded"
            v-for="item of items"
          >
            <RouterLink
              :to="{ name: 'videoInfo', params: { id: item.id.videoId } }"
            >
              <img
                :src="item.snippet.thumbnails.high.url"
                :width="768"
                :height="768"
                class="rounded object-cover"
                style="color: transparent"
                loading="lazy"
              />
            </RouterLink>
          </a>

          <div
            class="hidden lg:flex items-center justify-center gap-1 whitespace-nowrap group m-auto"
          >
            <RouterLink :to="{ name: 'archive' }">
              <a class="text-[#131212] text-sm font-bold uppercase">See more</a>
              <i
                class="bi bi-arrow-right transition-all duration-300 group-hover:translate-x-1"
              ></i>
            </RouterLink>
          </div>
        </div>
      </div>
      <RouterLink :to="{ name: 'archive' }">
        <div
          class="my-6 lg:hidden flex items-center justify-center gap-1 whitespace-nowrap group m-auto"
        >
          <a class="text-[#131212] text-sm font-bold uppercase">See more</a>
          <i
            class="bi bi-arrow-right transition-all duration-300 group-hover:translate-x-1"
          ></i>
        </div>
      </RouterLink>
      <p
        class="hidden lg:inline-block mt-4 xl:mt-6 text-xs text-[#616161] font-medium"
      >
        All videos, music, and images featured on this platform are the property
        of their respective artists and content creators. We do not claim
        ownership of any content created by the original creators.
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import store from "../store";
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
const slicedItems = computed(() => store.state.searchedResults.slice(0, 5));
items.value = slicedItems.value;
</script>

<style scoped></style>
