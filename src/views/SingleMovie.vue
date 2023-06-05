<template>
  <div class="bg-gray-700 h-1/2 m-0 p-4">
    <div v-if="isLoading">
      <LoaderComponent />
    </div>
    <div v-else class="m-4 my-8 w-auto px-4 mx-auto sm:w-1/2 md:w-1/2 lg:w-1/2">
      <div class="rounded-lg bg-white shadow-lg">
        <img
          :src="movie?.Poster"
          alt="movie poster"
          class="rounded-t-lg w-full h-auto"
        />
        <div class="p-4">
          <h2 class="mb-2 text-lg font-semibold">{{ movie?.Title }}</h2>
          <p class="mb-2 text-sm text-gray-700">
            Release Date: {{ movie?.Released }}
          </p>
          <p class="mb-2 text-sm text-gray-700">Genre: {{ movie?.Genre }}</p>
          <p class="mb-2 text-sm text-gray-700">
            BoxOffice: {{ movie?.BoxOffice ? movie?.BoxOffice : "unknown" }}
          </p>
          <p class="mb-4 text-sm text-gray-700">
            Country: {{ movie?.Country }}
          </p>

          <router-link
            to="/"
            class="block rounded-lg bg-blue-500 px-4 py-2 text-center font-semibold text-white hover:bg-blue-600"
          >
            Go Back
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoaderComponent from "../components/LoaderComponent";

export default {
  name: "SingleMovie",
  components: {
    LoaderComponent,
  },
  data() {
    return {
      movie: null,
      isLoading: true,
    };
  },
  mounted() {
    this.fetchMovieDetails();
  },
  methods: {
    async fetchMovieDetails() {
      this.isLoading = true;
      try {
        const movieId = this.$route.params.id;
        const response = await fetch(
          `https://www.omdbapi.com/?i=${movieId}&apikey=YOUR_API_KEY`
        );
        const data = await response.json();

        if (response.ok && data.Response === "True") {
          this.movie = data;
        } else {
          console.error(data.Error);
        }
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
    },
  },
};
</script>
