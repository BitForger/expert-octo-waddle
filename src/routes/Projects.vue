<template>
    <cv-content>
        <div class="bx--grid bx--grid--full-width">
            <div class="bx--row">
                <div class="bx--col-sm-8 bx--col-md-8 bx--col-lg-8 bx--col-xlg-8 bx--offset-sm-4 bx--offset-md-4 bx--offset-lg-4 bx--offset-xlg-4 bx--spacing-margin-top-06">
                    <cv-inline-notification
                            :low-contrast="true"
                            :kind="'warning'"
                            :title="'Hey there!'"
                            :sub-title="'I got sick of writing in Vue because it\'s quirky and kinda annoying at the moment. I\'m leaving this site as my playground for now'"
                        ></cv-inline-notification>
                </div>
            </div>
        </div>
    </cv-content>
</template>

<script lang="js">
    import gql from "graphql-tag";

    export default {
        name: "Repos",
        apollo: {
            user: {
                query: gql`query GetProjects {
  user(login: "Bitforger") {
    id
    pinnedItems(types: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          description
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
        description
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
}`,
                loadingKey: 'loading'
            }
        },
        data() {
            return {
                test: 'test',
                user: '',
                loading: 0
            }
        },
        methods: {
        },
        watch: {
            loading(val) {
                const isLoading = !!val;
                console.log(isLoading);
                this.$store.commit(isLoading ? 'dataIsLoading' : 'dataStoppedLoading');
                return isLoading;
            }
        }
    }
</script>

<style scoped>

</style>
