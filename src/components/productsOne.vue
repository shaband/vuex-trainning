<template>
    <div id="product-one">
        <ul>
            <li v-for="product in productsSale" :key="product.name">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>

        <button @click="reducePrice"> reduce price</button>
    </div>
</template>
<script>
    export default {
        computed: {
            products() {
                return this.$store.state.products
            },
            productsSale() {
                return this.$store.getters.productsSale;
            }
        },
        methods: {
            reducePrice() {
                this.$store.commit('reducePrice');

            }
        }
    }
</script>
<style scoped>
    #product-one {
        background: #FFF8B1;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }

    #product-one ul {
        padding: 0;
    }

    #product-one li {
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
    }

    .price {
        font-weight: bold;
        color: #E8800C;
    }
</style>