<template>
    <header>
        <router-link to="/">
            <h1>Netflix<span>Clone</span></h1>
        </router-link>
        <router-link to="/movies" class="link">
            Show all
        </router-link>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
    header {
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #141518;
    }

    h1 {
        color: red;
        font-size: 1.5rem;
    }

    h1 span,
    .link {
        color: white;
        font-weight: 300;
    }

    .link {
        padding: 6px 12px;
        border: 1px solid white;
        border-radius: 4px;
    }

@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1280px) {
  header {
    height: 80px;
  }
}
</style>