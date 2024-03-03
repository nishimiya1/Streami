<template>
  <div class="container mx-auto object-cover">
    <div v-if="loading" class="text-center mt-8">Loading...</div>
    <div v-else-if="error" class="text-center mt-8">{{ error }}</div>
    <div v-else class="mt-3 shadow-2xl w-[480px] h-[360px] md:w-[720px] md:h-[360px] lg:w-full lg:h-[720px]">
      <iframe
        class="rounded-lg w-[480px] h-[360px] md:w-[720px] md:h-[360px] lg:w-full lg:h-[720px]"
        allowfullscreen
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        :src="embedUrl"
      ></iframe>

      <div
        v-if="items && items.snippet"
        class="grid grid-cols-1 items-center mb-4 mt-3 p-2"
      >
        <div class="inline-block m-1">
          <h1 class="text-2xl font-semibold" id="videoTitle">{{ items.snippet.title }}</h1>
          <span class="gap-4 text-md -indent-px p-1 whitespace-break-spaces">
            {{ items.snippet.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import { AxiosError } from "axios";

const route = useRoute();
const items = ref({});
const embedUrl = ref("");
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    if (route.params.id !== null && route.params.id !== undefined) {
      const { data } = await axiosClient.get(
        `videos?key=AIzaSyB1fUCYbeLEBYY03c1mejec4NEjwxg6loA&part=snippet&id=${route.params.id}`
      );
      items.value = data.items[0] || {};
      embedUrl.value = `https://www.youtube.com/embed/${route.params.id}`;
    } else {
      error.value = "ID parameter is missing or null/undefined";
    }
  } catch (e) {
    const axiosError = e as AxiosError;
    error.value = axiosError.message || "An error occurred";
  } finally {
    loading.value = false;
  }
});
</script>
