<template>
  <div class="grow" style="opacity: 1; transform: none">
    <!-- Loader -->
    <div v-if="isLoading" class="flex items-center justify-center mt-6">
      <loader />
    </div>
    <main
      class="relative mt-16 sm:mt-24 basis-full flex items-start justify-between lg:pr-[3.4%]"
    >
      <div class="flex basis-full">
        <!-- Table -->
        <table
          class="w-full basis-full sm:basis-[54.7%] border-separate -mt-6 border-spacing-y-6"
        >
          <thead>
            <tr>
              <th class="uppercase font-bold text-sm text-[#0a0a0a]">
                Channel
              </th>
              <th class="uppercase font-bold text-sm text-[#0a0a0a]">Title</th>
            </tr>
          </thead>
          <tbody>
            <!-- Channel -->
            <tr class="group" v-for="item in items" :key="item.id">
              <td>
                <a
                  class="flex items-center justify-center text-[#808080] font-medium text-sm text-center group-hover:text-[#000000] group-hover:font-bold transition-all ease-out duration-[350ms]"
                  ><RouterLink
                    :to="{ name: 'videoInfo', params: { id: item.id.videoId } }"
                  >
                    <p>{{ item.snippet.channelTitle }}</p>
                  </RouterLink>
                </a>
              </td>
              <!-- End of Channel -->
              <!-- Title -->
              <td>
                <a
                  class="flex items-center justify-center text-[#808080] font-medium text-sm text-center group-hover:text-[#000000] group-hover:font-bold transition-all ease-out duration-[350ms]"
                  ><RouterLink
                    :to="{ name: 'videoInfo', params: { id: item.id.videoId } }"
                  >
                    <p class="">{{ item.snippet.title }}</p>
                  </RouterLink>
                </a>
              </td>
              <!-- End of title -->
              <!-- Thumbnails -->
              <td class="hidden sm:block pointer-events-none">
                <div
                  class="fixed bottom-[5.5%] right-[4.5%] w-[calc(100vw-72.22vw)] h-[calc(100vw-68.75vw)] opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-[350ms]"
                >
                  <img
                    :src="item.snippet.thumbnails.high.url"
                    :alt="item.snippet.title"
                    class="rounded object-cover"
                    style="
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      inset: 0;
                      color: transparent;
                    "
                    loading="lazy"
                  />
                </div>
              </td>
              <!-- End of Thumbnails -->
            </tr>
          </tbody>
        </table>
      </div>
    </main>
    <div v-if="error" class="text-red-500 text-center mt-4">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import loader from "../components/loader.vue";

const store = useStore();

const items = computed(() => store.state.searchedResults);

const isLoading = computed(() => store.state.isLoading);

const error = computed(() => store.state.error);
</script>

<style scoped></style>
