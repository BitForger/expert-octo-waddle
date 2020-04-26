<template>
    <cv-content id="footer">
        <div class="bx--grid bx--grid--full-width">
            <div class="bx--row bx--spacing-margin-bottom-06">
                <div class="bx--col-sm-16 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8 bx--col-max-8">
                    <h5 class="bx--type-productive-heading-03 bx--spacing-margin-bottom-06 footer__section-header">Noah Kovacs</h5>
                    <cv-list class="footer__links-list">
                        <cv-list-item class="footer__links-list-item">
                            <cv-link to="/" class="footer__links-list-item-link">Home</cv-link>
                        </cv-list-item>
                        <cv-list-item class="footer__links-list-item">
                            <cv-link to="/projects" class="footer__links-list-item-link">Projects</cv-link>
                        </cv-list-item>
                    </cv-list>
                </div>
                <div class="bx--col-sm-8"></div>
            </div>
            <div class="bx--row">
                <div class="bx--col-sm-16">
                    <span>&copy; Noah Kovacs, {{(new Date().getFullYear())}} - All Rights Reserved.</span>
                </div>
            </div>
        </div>
    </cv-content>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
    #footer {
        margin: 0;
        background: black;
    }

    .bx--row:nth-of-type(2) {
        .bx--col-sm-16 {
            color: white;
            display: flex;
            align-items: center;

            span {
                margin-left: auto;
                margin-right: auto;
            }
        }
    }

    .footer__section-header {
        color: white;
    }

    .footer__links-list {
        .footer__links-list-item {
            .footer__links-list-item-link {
                color: white;

                &:hover {
                }
            }
        }
    }
</style>
