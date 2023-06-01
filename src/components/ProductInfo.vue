<template>
    <div class="product-info_grid">
        <div class="product-info__image_wrapper">
            <img class="product-info__image"
                 :src="this.$store.state.products[this.product_id-1].image" 
                 alt="Img Not Found"
                 >
        </div>

        <p class="product-info__title">{{this.$store.state.products[this.product_id-1].title}}</p>
        <p class="product-info__price">{{this.$store.state.products[this.product_id-1].price}}</p>
        <my-btn class="product-info__to-cart-btn">To Cart</my-btn>
        <my-btn class="product-info__buy-btn">Buy Now</my-btn>
        <p class="product-info__description">{{this.$store.state.products[this.product_id-1].description}}</p>
    </div>
</template>

<script>

export default {
    name: 'product-info',
    props: {
        product_id: Number,
    },
}
</script>

<style lang="scss" scoped>
.product-info {
    &_grid {
        display: grid;
        grid-template: "image title title" 15vh
                       "image . price" 5vh
                       "image to-cart buy-now" 5vh
                       "description description description" 50vh;
        gap: 1vmax;
        
        border-radius: 4px;
        padding: $base-padding;
        
        background: $product-card__bg;
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
    }

    &__price {
        grid-area: price;
    }

    &__to-cart-btn {
        grid-area: to-cart;
    }

    &__buy-btn {
        grid-area: buy-now;
    }

    &__description {
        grid-area: description;
        overflow: auto;
    }
}

</style>