<template>
<Header/>
    <router-view />
<Footer/>
</template>

<script>
import Header from '../src/components/Header.vue';
import Footer from '../src/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    body {
        background-color: #000000;
        color: white;
    }

    a {
        text-decoration: none;
    }
</style>
