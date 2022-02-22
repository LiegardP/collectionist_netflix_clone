<template>
    <div class="movie-detail">
        <img :src='`https://image.tmdb.org/t/p/original/${movie.poster_path }`' alt="Movie poster" class="hero-image"/>
        <h2>{{ movie.title }} <span>{{ movie.release_date }}</span></h2>
        <p>{{ movie.popularity }}</p>
        <p>{{ movie.overview }}</p>
    </div>
</template>

<script>
    import { ref, onBeforeMount } from 'vue';
    import { useRoute } from 'vue-router';
    import env from '@/env.js';

    export default {
        setup() {
            const movie = ref({});
            const route = useRoute();

            onBeforeMount(() => {
                fetch(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${env.apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        movie.value = data;
                    })
            });

            return {
                movie
            }
        }

    }
</script>

<style>
    .hero-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
</style>