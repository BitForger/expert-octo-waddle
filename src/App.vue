<template>
    <div id="app">
        <cv-loading :active="this.$store.state.dataLoading" :overlay="true"></cv-loading>
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<style lang="scss">
    .bx--content:not(#footer) {
        min-height: calc(100vh - 196px);
    }
</style>
<script>
    import Header from "@/components/Header";
    import Footer from "@/components/Footer";

    export default {
        components: {Footer, Header},
    }
</script>
