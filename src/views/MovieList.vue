<template>
        <h1 class="movie-list-title"> All movies </h1>
        <section class="filter-list">
            <BaseTabs v-for="tab in tabs" :key="tab.id" :tab="tab" @click="applyGenre(tab.active)"/>
        </section>

        <section class="movie-list">
            <ul class="movies">
                <BaseCard v-for="movie in movies" :key="movie.id" :movie="movie" :toDisplay="isDisplay()"/>
            </ul>
        </section>
</template>

<script>
import BaseCard from '../components/BaseCard.vue';
import BaseTabs from '../components/BaseTabs.vue';
import { ref, onBeforeMount } from 'vue';
import env from '@/env.js'

export default {
    setup() {
        const movies = ref([]);
        const tabs = ref([]);

        onBeforeMount(() => {
            // get popular movies
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${env.apiKey}`)
                .then(response => response.json())
                .then(data => {
                    movies.value = data.results;
                })
                .catch(error => {
                    console.error(error);
                })

            // get all genres
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${env.apiKey}`)
                .then(response => response.json())
                .then(data => {
                    console.log('test', data.genres)
                    tabs.value = data.genres
                })
                .catch(error => {
                    console.error(error);
                })
        });

        return {
            movies,
            tabs,
        }
    },
    components: {
        BaseCard,
        BaseTabs
    },

    methods: {
        applyGenre(tab) {
            tab.active != tab.active;
        },

        isDisplay() {

        }
    }
}
</script>

<style lang="scss">
    .movies {
        display: flex;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 20px;
        padding: 0 20px 50px;
        justify-content: center;
        margin: 0;
    }

    .filter-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        column-gap: 10px;
        margin-bottom: 40px;
        padding: 0 20px;
    }

    .filter-list,
    .movie-list {
        padding: 20px;
    }

    .movie-list-title {
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
        margin: 20px 0 30px;
    }

    // From tablet breakpoint
    @media screen and (min-width: 768px) {

    }

</style>