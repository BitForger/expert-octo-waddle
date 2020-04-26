<template>
    <cv-content id="main-content">
        <div class="bx--grid bx--grid--full-width home">
            <div class="bx--row home--row">
                <div class="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8 bx--col-max-8 home--col-content">
                    <h2 class="bx--type-productive-heading-06">Hello</h2>
                    <p>I work on a bunch of different projects ranging from electron based desktop applications to ruby
                        web applications. I have also had some Minecraft modding projects in the past.</p>
                </div>
                <div class="bx--col-sm-8"></div>
            </div>
            <div class="bx--row home--row">
                <div class="bx--col-sm-16 bx--col-md-8 bx--col-md-8 bx--col-lg-8 bx--offset-lg-8 bx--col-xlg-8 bx--offset-xlg-8 bx--col-max-8 bx--offset-max-8 home--about-col">
                    <h2 class="bx--type-productive-heading-06">About Me</h2>
                    <p>My name is Noah Kovacs and I'm a developer based out of the USA. I have been building websites
                        for the past 5 years for various hobbies and services. I currently work professionally as a full
                        stack engineer and this is the home of my personal projects. You can find info on some of
                        my (old) Minecraft mods as well as my other web development projects.</p>
                </div>
            </div>
        </div>
    </cv-content>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="scss">
    @import "../styles/variables";
    #main-content {
        padding: 0;

        .bx--grid {
            padding-left: 0;
            padding-right: 0;
        }
    }

    .home--row {
        padding: 6rem 4.5rem;
        margin-left: 0;
        margin-right: 0;

        &:first-of-type {
            background-color: $red;
            color: $white;
        }

        &:nth-of-type(2) {
            background-color: $navy-blue;
            color: $white;
        }

        .home--col-content {
            h2, p {
                text-align: left;
            }
        }

        .home--about-col {
            h2, p {
                text-align: right;
            }
        }

        .home--col-content h2,
        .home--about-col h2 {
            margin-bottom: 1em;
        }
    }
</style>
