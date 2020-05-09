<template>
    <cv-content>
        <div class="bx--grid bx--grid--full-width">
            <div class="bx--row">
                <div class="bx--col-sm-8 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8 bx--offset-sm-7 bx--offset-md-7 bx--offset-lg-7 bx--offset-xlg-7" v-if="!this.$apollo.loading">
                </div>
            </div>
        </div>
    </cv-content>
</template>

<script lang="js">
    import gql from "graphql-tag";
    import {setLoading} from "@/services/loading.service";

    export default {
        name: "Repos",
        apollo: {
            viewer: gql`query {
                viewer {
                    name
                    login
                }
            }`,
            user: {
                query: gql`query GetProjects {
  user(login: "Bitforger") {
    id
    pinnedItems(types: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          isPrivate
          isArchived
          isFork
          owner {
            login
            id
          }
          url
          languages(orderBy: {field: SIZE, direction: ASC}, first: 10) {
            nodes {
              name
              color
            }
          }
        }
      }
    }
    repositories(first: 12, isFork: false, orderBy: {field: UPDATED_AT, direction: DESC}, privacy: PUBLIC, affiliations: OWNER) {
      nodes {
        id
        isLocked
        isArchived
        isFork
        isTemplate
        name
        owner {
          login
          id
        }
        url
        languages(orderBy: {field: SIZE, direction: ASC}, first: 10) {
          nodes {
            name
            color
          }
        }
      }
    }
  }
}`
            }
        },
        data() {
            return {
                test: 'test',
                user: '',
            }
        },
        mounted() {
            setLoading(this.$apollo.loading);
            console.log(this.user);
        }
    }
</script>

<style scoped>

</style>
