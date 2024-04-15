<template>
  <div class="flex items-center space-x-2 mt-5" v-if="isLoading">
    <div aria-label="Loading..." role="status">
      <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        class="animate-spin w-4 h-4 stroke-slate-500"
      >
        <path
          d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12"
        ></path>
      </svg>
    </div>
    <span class="text-xs font-medium text-slate-500">Loading...</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = computed(() => store.state.isLoading);
</script>
<style>
.loader {
  width: 45px;
  height: 40px;
  background: linear-gradient(
      #0000 calc(1 * 100% / 6),
      #fff 0 calc(3 * 100% / 6),
      #0000 0
    ),
    linear-gradient(
      #0000 calc(2 * 100% / 6),
      #fff 0 calc(4 * 100% / 6),
      #0000 0
    ),
    linear-gradient(
      #0000 calc(3 * 100% / 6),
      #fff 0 calc(5 * 100% / 6),
      #0000 0
    );
  background-size: 10px 400%;
  background-repeat: no-repeat;
  animation: matrix 1s infinite linear;
}

@keyframes matrix {
  0% {
    background-position: 0% 100%, 50% 100%, 100% 100%;
  }

  100% {
    background-position: 0% 0%, 50% 0%, 100% 0%;
  }
}
</style>
