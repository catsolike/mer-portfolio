<template>
    <div class="product-card_grid"
        @click="getProductId"
    >
        <div class="product-card__image_wrapper">
            <img class="product-card__image"
                 :src="product_data.image" 
                 alt="Img Not Found"
                 >
        </div>
        <p class="product-card__title">{{product_data.title}}</p>
        <p class="product-card__price">{{product_data.price}}</p>
        <my-btn class="product-card__to-cart-btn">To Cart</my-btn>
        <my-btn class="product-card__buy-btn">Buy Now</my-btn>
    </div>
</template>

<script>

export default {
    name: 'product-card',
    props: {
        product_data: Object,
    },
    mounted() {
    },
    methods: {
        getProductId() {
            this.$emit('eventProductId', this.product_data.id)
        }
    }
}
</script>

<style lang="scss" scoped>
.product-card {
    &_grid {
        display: grid;
        grid-template: "image image" 50%
                        "title title" 
                        "price price"
                        "to-cart buy-now";
        gap: 2%;
        padding: 5%;
        


        height: 50vh;
        //aspect-ratio: 2/3;

        background: $product-card__bg;
        border-radius: 20px;
    }

    

    &__image {
        &_wrapper {
            grid-area: image;
            
            display: flex;
            justify-content: center;
            align-items: center;

            background: white;
            padding: 5px;
            border-radius: 10px;
        }
        margin: auto;

        max-width: 100%;
        max-height: 100%;
    }


    &__title {
        grid-area: title;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 2em;
        max-width: 10em;
        @media screen and (max-width: 767px) {
            max-width: 17em;
          }
        word-break: break-word; 
        white-space: normal;
    }

    &__price {
        grid-area: price;

        text-align: center;

        background: white;
        font-size: 1em; 
        @media screen and (max-width: 767px) {
            font-size: 1.2em;
          }
    }

    &__to-cart-btn {
        grid-area: to-cart;
    }
    &__buy-btn {
        grid-area: buy-now;
    }

}

</style>