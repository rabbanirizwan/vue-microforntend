<template>
  <div
    class="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer"
  >
    <input
      type="text"
      class="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
      placeholder="🔎 Search in products listed below…"
    />
    <i class="fa fa-search h-12 p-4"></i>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>
