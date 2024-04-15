<template>
  <label class="flex items-center gap-1">
    <i class="bi bi-search"></i>
    <input
      class="h-6 sm:h-4 placeholder:text-grey uppercase font-bold placeholder:text-sm outline-none w-[calc(100vw-32px)] sm:w-60"
      placeholder="Search..."
      aria-label="Search"
      autocomplete="off"
      type="search"
      value
      name="search"
      v-model="keyword"
      @change="searchResults"
    />
  </label>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const keyword = ref({});

async function searchResults() {
  try {
    await store.dispatch("searchResults", keyword.value);
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
}

onMounted(() => {
  keyword.value = route.params.keyword || "";
  if (keyword.value) {
    searchResults();
  }
});
</script>
