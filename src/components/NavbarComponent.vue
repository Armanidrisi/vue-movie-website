<template>
  <nav
    class="relative px-5 flex justify-center items-center h-14 bg-gray-700 drop-shadow-md"
  >
    <form @submit.prevent="handleSubmit">
      <input
        class="w-72 py-1 pl-3 pr-10 rounded-full focus:outline-0"
        type="text"
        placeholder="Search.."
        name="search"
        v-model="searchQuery"
      />
      <button class="-ml-8 border-6 bg-transparent" type="submit">
        <i class="fa fa-search text-gray-400"></i>
      </button>
    </form>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSubmit() {
      alert(this.searchQuery);
       this.$emit("search-submitted", this.searchQuery);
    },
  },
};
</script>
