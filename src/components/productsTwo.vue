<template>
    <div id="product-two">
        <ul>
            <li v-for="product in productsSale" :key="product.name">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
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

        }
    }
</script>

<style scoped>
    #product-two {
        background: #D1E4FF;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }

    #product-two ul {
        padding: 0;
        list-style-type: none;
    }

    #product-two li {
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
    }

    .price {
        font-weight: bold;
        color: #860CE8;
        display: block;
    }
</style>