<template>
  <header>
    <nav class="text-[#4a5568]">
      <RouterLink
        :to="{ name: 'home' }"
        class="relative block w-[calc(100vw-24px)] lg:w-[calc(100vw-48px)] max-w-full mt-3 lg:mt-6"
      >
        <div class="relative w-full h-0" style="padding-bottom: 11%">
          <img
            class="object-contain"
            src="../assets/logoStreami (1).svg"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              inset: 0;
              color: transparent;
            "
          />
        </div>
      </RouterLink>
      <div
        class="mt-6 sm:mt-8 flex items-center justify-between gap-6 flex-wrap"
      >
        <ul
          class="uppercase font-bold text-sm flex items-center gap-4 sm:gap-9"
        >
          <li>
            <RouterLink
              :to="{ name: 'generator' }"
              class="sm:px-1 transition-all duration-500 nav-link"
              aria-label="Home"
              >Generator</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'archive' }"
              class="sm:px-1 transition-all duration-500 nav-link"
              aria-label="Archive"
              >Archive</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'about' }"
              class="sm:px-1 transition-all duration-500 nav-link"
              aria-label="About"
              >About</RouterLink
            >
          </li>
        </ul>

        <search />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import search from "./search.vue";
</script>

<style scoped>
.nav-link {
  color: #808080; /*  Initial color for all links */
}

.nav-link.active {
  color: #131212; /* Changes active link text to black */
}
</style>
