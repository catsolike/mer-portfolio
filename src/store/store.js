import axios from 'axios';
import {createStore} from 'vuex'

export default createStore({
    state: {
            defaultLink: "https://fakestoreapi.com",
            products: [],
    },
    getters: {
        gettedProducts(state) {
            return state.products;
        }
    },
    mutations: {
        setProductsToState: (state, products) => {
            state.products = products;
        }
    },
    actions: {
        async fetchAllProducts({ commit, state }) {
            try {
                const products = await axios(`${state.defaultLink}/products`,
                    {
                        method: "GET",
                        params: {
                        }
                    }
                );
                commit('setProductsToState', products.data);
            } catch (e) {
                console.log('Problems with server: ', e);
            }
        }
    },

})