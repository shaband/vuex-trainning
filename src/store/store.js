import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);
export const store = new vuex.Store({
    state: {
        products: [{
                name: 'Banana Skin',
                price: 20
            },
            {
                name: 'Shiny Star',
                price: 40
            },
            {
                name: 'Green Shells',
                price: 60
            },
            {
                name: 'Red Shells',
                price: 80
            }
        ]
    },
    getters: {
        productsSale: state => {
            let productsSale = state.products.map(product => {
                return {
                    name: `**${product.name}**`,
                    price: product.price / 2
                }
            })
            return productsSale;
        }
    }

})