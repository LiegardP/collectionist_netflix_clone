<template>
    <router-link :to="'/movie/' + movie.id">
        <li class="trendMovie" v-if="isDisplay() === true">
            <img class="movie-thumbnail" :src='`https://image.tmdb.org/t/p/w300/${movie.poster_path}`'>
        </li>
    </router-link>
</template>

<script>
export default {
    setup() {
        
    },
    name: 'BaseCard',
    props: {
        movie: Object,
        toDisplay: Number,
    },
    method: {
        isDisplay() {
        }
    }
}

</script>

<style scoped>
    .trendMovie {
        display: flex;
        width: 100%;
        height: 250px;
        margin-bottom: 20px;
        overflow: hidden;
        list-style-type: none;
        box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 50%);
    }

    .trendMovie:first-child {
        margin-top: 20px;
    }

    .movie:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    .movie-thumbnail {
        width: 100%;
        box-shadow: inset 0 0 10px 10px rgba(0,0,0,0.5);
        object-fit: cover;
        object-position: top;
    }

    @media screen and (min-width: 768px) {
        .trendMovie {
            display: flex;
            width: 100%;
            height: auto;
        }

        .trendMovie:first-child {
            margin-top: 0;
        }

    }

    @media screen and (min-width: 1280px) {
        .movie {
            width: 260px;
            height: 260px;
        }
    }
</style>