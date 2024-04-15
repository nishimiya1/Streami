<!-- Testing comments, this will work too.
<template>
  <div class style="opacity: 1; transform: none">
    <main
      class="grow mt-16 sm:mt-24 flex flex-col lg:flex-row items-stretch lg:items-center justify-between basis-full xl:px-6 gap-4 xl:gap-[5.42%]"
    >
      <div class="basis-full lg:basis-1/3">
        <div class="flex items-center justify-between"></div>
        <div class="mt-6 space-y-4 xl:space-y-10">
          <div
            class="border border-1 border-gray-500 px-2 lg:px-6 2xl:px-4 py-4 relative flex items-center justify-between"
          >
            <div class="flex flex-col items-center justify-between">
              <p class="uppercase font-bold text-sm text-grey pt-4 pb-4 text-center">
                Channel
              </p>
            </div>
            <div class="flex flex-col items-center justify-between">
              <p
                class="line-clamp-1 text-[#616161] font-semibold text-sm pt-4 text-center pb-4"
                v-for="items of items"
              >
                {{items.snippet.channelTitle}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:hidden basis-full">
        <img
          class="object-cover"
          width="500"
          height="500"
          loading="lazy"
          style="color: transparent"
          src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"
        />
      </div>
      <div
        class="hidden lg:block relative w-[calc(100vw-72.22vw)] h-[calc(100vw-72.22vw)] basis-1/3 group"
      >
        <img
          class="object-cover group-hover:brightness-75 transition-all ease-in-out duration-300"
          style="
            position: absolute;
            height: 100%;
            width: 100%;
            inset: 0;
            color: transparent;
          "
          src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"
        />
      </div>
      <div class="basis-full lg:basis-1/3 relative">
        <div
          class="border border-1 border-gray-500 px-2 lg:px-10 pt-4 relative flex items-start justify-center"
        >
          <div class="flex flex-col items-center justify-between">
            <p
              class="uppercase font-bold text-sm text-black pb-4 items-center justify-center"
            >
              Channel Description
            </p>
            <div class="py-4 cursor-pointer font-semibold">
              <p>Blabla</p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <div
              class="h-[0.5px] w-full bg-gray-500 absolute top-[40%] right-[1.6%] -mx-2 sm:right-2 lg:-mx-10 lg:right-10 2xl:right-10"
            ></div>
          </div>
        </div>
      </div>
    </main>
    <div class="grow mt-16 sm:mt-24">
    <div
      class="flex flex-wrap items-center gap-4 sm:gap-9 justify-end text-[#808080] text-xs font-bold"
    >
      <button class="uppercase">Previous</button>
      <button class="uppercase">Next</button>
    </div>
    <div class style="opacity: 1; transform: none">
      <div
        class="mt-6 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-9 md:h-[calc(100vw-75.694vw)]"
      >
        <RouterLink
          class="w-full h-24 md:h-full rounded relative cursor-pointer group bg-center bg-cover block"
          v-for="items of items"
          :key="items.id"
          :to="{ name: 'videoInfo', params: { id: items.id.videoId } }"
          tabindex="0"
          :style="{
            backgroundImage: `url(${items.snippet.thumbnails.high.url})`,
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
              <p>{{ items.snippet.channelTitle }}</p>
              <p>{{ items.snippet.title }}</p>
            </div>
            <div
              class="flex flex-wrap items-center justify-between uppercase text-xs sm:text-sm font-semibold text-white"
            ></div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
const items = computed(() => store.state.searchedResults.slice(0, 5));
const route = useRoute();


</script>

<style scoped></style>
 -->
