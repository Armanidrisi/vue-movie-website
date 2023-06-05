<template>
  <NavbarComponent @search-submitted="fetchData" />

  <div class="my-4">
    <h1 class="m-4 text-2xl text-gray-800 font-bold font-sans">
      Showing results for {{ searchQuery }}
    </h1>
    <div v-if="isLoading">
      <LoaderComponent />
    </div>

    <div v-else class="flex flex-wrap items-center justify-center w-screen md:px-8">
      <div
        v-for="movie in movies"
        :key="movie.imdbID"
        class="m-4 mb-6 w-auto px-4 mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <div class="rounded-lg bg-white shadow-lg">
          <img :src="movie.Poster" alt="movie poster" class="rounded-t-lg" />
          <div class="p-4">
            <h2 class="mb-2 text-lg font-semibold">{{ movie.Title }}</h2>
            <router-link
              :to="'/movie/' + movie.imdbID"
              class="block rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600"
            >
              More details..
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import LoaderComponent from "../components/LoaderComponent";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    LoaderComponent,
  },
  data() {
    return {
      movies: [],
      isLoading: true,
      searchQuery: "avengers",
    };
  },
  methods: {
    async fetchData(query) {
      this.searchQuery = query;
      this.isLoading = true;

      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (response.ok && data.Response === "True") {
          this.movies = data.Search;
        } else {
          alert("Result not found");
        }
      } catch (error) {
        console.error(error);
      }

      this.isLoading = false;
    },
  },
  mounted() {
    this.fetchData(this.searchQuery);
  },
};
</script>
