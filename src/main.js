import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueResource from 'vue-resource';
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:3000/graphql',
});

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

// Install the vue plugin
Vue.use(VueApollo);
Vue.use(VueResource);
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
    provide: apolloProvider.provide(),
    render: h => h(App)
}).$mount('#app');
