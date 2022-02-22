<template>
    <div class="home">
        <div class="feature-card">
            <img src="https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/000/962/dernier-train-pour-busan-photo-962445.png" alt="feature image" class="feature-img">
            <div class="detail">
                <h1>Last train for Busan</h1>
                <p class="summary">
                    Un virus inconnu se répand en Corée du Sud, l'état d'urgence est décrété. 
                    Les passagers du train KTX se livrent à une lutte sans merci afin de survivre jusqu'à Busan, 
                    l'unique ville où ils seront en sécurité...
                </p>
            </div>
        </div>

        <section class="trend-movie-list">
            <h2>Trending now</h2>
            <hr class="separator"/>
            <ul class="trend-movies">
                <BaseCard v-for="trendMovie in trendMovies.slice(0,4)" :key="trendMovie.id" :movie="trendMovie" />
            </ul>
        </section>

        <section class="search-form">
            <h2>Search Movie</h2>
            <hr class="separator"/>
            <form @submit.prevent="SearchMovies()" class="search-box">
                <input type="text" placeholder="search in netflix" v-model="search" />
                <input type="submit" value="search" />
            </form>
            <p class="error-message" v-if="searchError !== ''"> {{ searchError }}</p>
        </section>

        <section class="search-movie-list">
            <div class="search-movie" v-for="searchMovie in searchMovies" :key="searchMovie.id">
                <router-link :to="'/movie/' + searchMovie.id">
                    <img :src='`https://image.tmdb.org/t/p/w300/${searchMovie.poster_path }`' alt="Movie poster" class="product-image"/>
                    <div class="details">
                        <p class="title"><span>Title: </span>{{ searchMovie.title }}</p>
                        <p class="release-date"><span>Release date: </span>{{ searchMovie.release_date }}</p>
                        <p class="popularity"><span>Popularity: </span>{{ searchMovie.popularity }}</p>
                    </div>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script>
import BaseCard from '../components/BaseCard.vue';
import { ref, onBeforeMount } from 'vue';
import env from '@/env.js'

export default {
    setup() {
        const search = ref("");
        const searchMovies = ref([]);
        const trendMovies = ref([]);
        let searchError = '';

        const SearchMovies = () => {
            if (search.value !== undefined) {
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=${env.apiKey}&query=${search.value}`)
                    .then(response => response.json())
                    .then(data => {
                        searchMovies.value = data.results;
                        search.value = '';
                    })
                    .catch(error => {
                        searchError = "Something went wrong with the search. Please try again!"
                        console.error(error);
                    })
            }
        }

        onBeforeMount(() => {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${env.apiKey}`)
                .then(response => response.json())
                .then(data => {
                    trendMovies.value = data.results;
                })
                .catch(error => {
                    searchError = "Something went wrong with the search. Please try again!"
                    console.error(error);
                })
        })

        return {
            search,
            searchMovies,
            trendMovies,
            searchError,
            SearchMovies
        }
    },
    components: {
        BaseCard,
    }
}
</script>

<style lang="scss">
    .feature-card {
        position: relative;
    }

    .feature-img {
        width: 100%;
        height: calc(100vh - 50px);
        object-fit: cover;
        position: relative;
        z-index: 0;
    }

    .detail {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.6);
        background: linear-gradient(0deg, rgba(0,0,0,1) 30%, rgba(255,255,255,0) 100%);
        padding: 20px 20px 40px;
        z-index: 1;

        h1 {
            font-size: 3rem;
            color: #fff;
            margin-bottom: 15px;
        }
    }

    .search-form,
    .trend-movie-list {
        padding: 20px;
    }

    .trend-movie-list h2,
    .search-form h2 {
        font-size: 1.5rem;
        font-weight: 500;
    }

    .search-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    input {
        display: block;
        appearance: none;
        border: none;
        outline: none;
        background: none;

        &[type="text"] {
            width: 100%;
            color: #fff;
            background-color: #343e49;
            font-size: 1rem;
            padding: 10px 20px;
            border-radius: 8px;
            margin-bottom: 15px;
            transition: 0.4s;

            &::placeholder {
                color: #f3f3f3;
            }

            &:focus {
                box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
            }
        }

        &[type="submit"] {
            width: 100%;
            background-color: red;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 1rem;
            text-transform: uppercase;
            color: #fff;
        }
    }

    .search-movie-list {
        display: flex;
        flex-flow: column nowrap;
        margin: 0px auto;

        .search-movie {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            width: 100%;
            padding: 20px 10px;
        }

        .movie-link {
            display: flex;
            flex-direction: column;
            height: 100%;

        }

        .title,
        .popularity,
        .release-date {
            color: #fff;
            margin-top: 2px;
        }
    }

    .summary {
        color: white;
        font-size: 1rem;
        font-weight: 300;
    }

    .separator {
        height: 1px;
        width: 100%;
        color:white;
        margin: 5px 0;
    }

    // From tablet breakpoint
    @media screen and (min-width: 768px) {
        .feature-img {
            width: 100%;
            height: calc(100vh - 80px);
            object-fit: cover;
            position: relative;
            z-index: 0;
        }

        .trend-movies {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            margin-top: 20px;
        }
    }

</style>