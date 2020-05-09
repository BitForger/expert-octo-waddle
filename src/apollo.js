import VueApollo from 'vue-apollo';
import {createHttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import Vue from "vue";

require("dotenv").config();

Vue.use(VueApollo);

console.log(process.env);
const githubLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
        "Authorization": `Bearer 7c329b2616529fb4675cad35f8c1ae49cb8f9f67`
    }
})
const githubCache = new InMemoryCache();

const githubClient = new ApolloClient({
    link: githubLink,
    cache: githubCache,
});

export default new VueApollo({
    defaultClient: githubClient
})
