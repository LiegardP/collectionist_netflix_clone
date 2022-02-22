<template>
    <li class="tabs" :class="{ 'active': tab.active }">
        <span class=tab-name>{{ tab.name }}</span>
    </li>
</template>

<script>
    export default {
    setup() {

    },
    name: 'BaseTabs',
    props: {
        tab: Object,
    },
    }
</script>

<style scoped>
    .tabs {
        margin-bottom: 10px;
        padding: 5px 10px;
        border: 1px solid white;
        color: white;
        border-radius: 10px;
        list-style-type: none;
    }
    .tabs:hover,
    .active {
        background-color: white;
        color: black;
    }
</style>