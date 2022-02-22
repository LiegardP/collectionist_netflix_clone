<template>
    <footer>
        <router-link to="/">
            <h4>Github repository</h4>
        </router-link>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
    footer {
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        background-color: #141518;
        bottom: 0;
    }

    h4 {
        color: white;
        font-size: 1rem;
        font-weight: 300;
    }


@media screen and (min-width: 768px) {

}

@media screen and (min-width: 1280px) {
  header {
    height: 80px;
  }
}
</style>