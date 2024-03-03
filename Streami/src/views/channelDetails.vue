<template>
  <div id="channel">
    <div v-if="items && items.snippet">
      <!-- Channel Logo -->
      <div
        class="relative max-w-lg mx-auto md:max-w-2xl min-w-0 break-words bg-gray-300 w-full mb-5 shadow-lg rounded-xl mt-16"
      >
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <!-- Logo Container -->
            <div class="w-full lg:w-1/4 flex justify-center mx-1 mt-3">
              <div class="relative">
                <img
                  :src="items.snippet.thumbnails.high.url"
                  alt="logo"
                  class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] "
                />
              </div>
            </div>

            <!-- Channel Information -->
            <div class="w-full lg:w-3/4 flex flex-col">
              <!-- Channel Name -->
              <div class="text-center mt-24 my-5 ml-5">
                <h3
                  class="text-2xl font-bold leading-normal subpixel-antialiased mb-3"
                >
                  {{ items.snippet.title }}
                </h3>
              </div>

              <!-- Channel Description -->
              <div class="mt-6 py-7 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full px-4">
                    <p
                      class="font-light leading-relaxed text-slate-800 mb-4 text-indent-1 text-justify subpixel-antialiased"
                    >
                      {{ items.snippet.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <pre> {{ items }} </pre>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import axiosClient from "../axiosClient";
import { useRoute } from "vue-router";
import { AxiosError } from "axios";

const route = useRoute();
const items = ref({});

onMounted(async () => {
  try {
    const channelId = route.params.snippet;
    if (channelId) {
      const { data } = await axiosClient.get(
        `channels?key=AIzaSyB1fUCYbeLEBYY03c1mejec4NEjwxg6loA&part=snippet&id=${route.params.snippet}`
      );
      items.value = data.items[0] || {};
    } else {
      console.error("ID parameter is missing or null/undefined");
    }
  } catch (e) {
    const error = e as AxiosError;
    console.error("Error fetching data:", error);
  }
});
</script>
