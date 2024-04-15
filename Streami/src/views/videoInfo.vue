<template>
  <div v-if="isLoading"><Loader /></div>
  <main
    class="grow mt-16 sm:mt-24 flex flex-col lg:flex-row items-stretch lg:items-center justify-between basis-full xl:px-6 gap-4 xl:gap-[5.42%]"
  >
    <div class="basis-1/3 lg:basis-full">
      <div class="flex items-center justify-between">
        <a
          v-if="showPrevious"
          class="uppercase font-bold text-xs text-[#808080]"
          >previous</a
        >
        <a v-if="showNext" class="uppercase font-bold text-xs text-[#808080]"
          >next</a
        >
      </div>
      <div class="mt-6 space-y-4 xl:space-y-10" v-if="items && items.snippet">
        <div
          class="border border-1 border-gray-500 px-2 lg:px-6 2xl:px-4 py-4 relative flex items-center justify-between"
        >
          <div
            class="h-[0.5px] w-full bg-gray-500 absolute -mx-2 lg:-mx-6 2xl:-mx-4"
          ></div>
          <!-- Channel title -->
          <div
            v-if="items.snippet.channelTitle"
            class="flex flex-col items-center justify-between"
          >
            <p
              class="uppercase font-bold text-sm text-[#131212] pb-4 text-center"
            >
              Channel
            </p>
            <p class="text-[#616161] font-semibold text-sm pt-4 text-center">
              {{ items.snippet.channelTitle }}
            </p>
          </div>
          <!-- End of Channel Title -->
          <!-- Video Title -->
          <div
            v-if="items.snippet.title"
            class="flex flex-col items-center justify-between"
          >
            <p
              class="uppercase font-bold text-sm text-[#131212] pb-4 text-center"
            >
              Title
            </p>
            <p
              class="line-clamp-1 text-[#616161] font-semibold text-sm pt-4 text-center px-4"
            >
              {{ items.snippet.title }}
            </p>
          </div>
          <!-- End of Video Title -->
        </div>
        <!-- Video -->
        <div class="basis-full">
          <iframe
            v-if="embedUrl"
            class="object-cover w-full h-full aspect-video"
            allowfullscreen
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            :src="embedUrl"
          ></iframe>
        </div>
        <!-- End of Video -->
        <div
          class="hidden lg:block relative w-[calc(100vw - 72.22vw)] h-[calc(100vw - 72.22vw)] basis-1/3 group"
        ></div>
        <!-- Description -->
        <div
          v-if="items.snippet.description"
          class="border border-1 border-gray-500 px-2 lg:px-6 2xl:px-4 py-4 relative flex items-center justify-between"
        >
          <div class="flex flex-col items-center justify-between">
            <p
              class="uppercase font-bold text-sm text-[#131212] pb-4 text-center"
            >
              description
            </p>
            <p
              class="text-[#616161] font-semibold text-sm pt-4 text-center whitespace-pre-line columns-1 sm:columns-2 2xl:columns-4 items-center justify-between"
            >
              {{ items.snippet.description }}
            </p>
          </div>
          <div
            class="hidden lg:block relative w-[calc(100vw - 72.22vw)] h-[calc(100vw - 72.22vw)] basis-1/3 group"
          ></div>
        </div>
        <!-- End of Description -->
      </div>
      <!-- Disclaimer -->
      <p
        class="hidden lg:inline-block mt-4 xl:mt-6 text-xs text-[#616161] font-medium"
      >
        All videos, music, and images featured on this platform are the property
        of their respective artists and content creators. We do not claim
        ownership of any content created by the original creators.
      </p>
      <!-- End of Disclaimer -->
    </div>
  </main>
  <div v-if="error" class="text-red-500 text-center mt-4">{{ error }}</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import { AxiosError } from "axios";
import Loader from "../components/loader.vue";
import store from "../store";

interface VideoItem {
  snippet: {
    channelTitle: string;
    title: string;
    description: string;
    // Add other properties if needed
  };
  // Add other properties if needed
}
const route = useRoute();
const items = ref<null | VideoItem>(null);
const embedUrl = ref<null | string>(null);
const isLoading = computed(() => store.state.isLoading);
const error = ref("");

const showPrevious = false; // Set to true if needed
const showNext = false; // Set to true if needed

onMounted(async () => {
  const apiKey = "AIzaSyB1fUCYbeLEBYY03c1mejec4NEjwxg6loA"; // Replace with your API key
  const id = route.params.id;

  if (!id) {
    error.value = "ID parameter is missing or null/undefined";
    return;
  }

  try {
    const { data } = await axiosClient.get(
      `videos?part=snippet&id=${id}&key=${apiKey}`
    );
    if (data.items && data.items.length > 0) {
      items.value = data.items[0];
      embedUrl.value = `https://www.youtube.com/embed/${id}`;
    } else {
      error.value = "No video found with the given ID";
    }
  } catch (e) {
    const axiosError = e as AxiosError;
    error.value = axiosError.message || "An error occurred";
  }
});
</script>
