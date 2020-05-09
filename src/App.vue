<template>
    <div id="app">
        <cv-loading :active="isLoading()" :overlay="true"></cv-loading>
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
    import {loading} from "@/services/loading.service";

    export default {
        components: {Footer, Header},
        data() {
            return {
                overlayLoading: this.isLoading(),
            }
        },
        methods: {
            isLoading() {
                return loading;
            }
        }
    }
</script>
