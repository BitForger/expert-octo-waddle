<template>
    <cv-header aria-label="Carbon tutorial">
        <cv-skip-to-content href="#main-content">Skip to content</cv-skip-to-content>
        <cv-header-name to="/" prefix="Noah Kovacs">Home</cv-header-name>
        <cv-header-nav>
            <cv-header-menu-item to="/projects">Projects</cv-header-menu-item>
        </cv-header-nav>
        <template slot="header-global" />
    </cv-header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
