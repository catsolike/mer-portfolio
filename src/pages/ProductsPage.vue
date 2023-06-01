<template>
    <div :class="[ 'main-page__grid' ]">
        <my-header class="main-page__header"></my-header>

        <div class="main-page__catalogue">
            <product-card 
                @eventProductId="selectingProductId"
                @click="openProductInfo"
                v-for="item in gettedProducts"
                :key="item.id"
                :product_data="item"
            ></product-card>
        </div>
        

        <transition name="fade">
            <product-info v-if="isSelected"
                            class="main-page__product-info"
                            :product_id="selectedProductId"
            ></product-info>
        </transition>

        <my-btn v-if="isSelected"
                class="main-page__product-info_close-btn"
                @click="isSelected=false"
        >Close Description</my-btn>

    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import ProductCard from '@/components/ProductCard.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'products-page',
    components: {
        MyHeader,
        ProductCard,
        ProductInfo,
    },
    data() {
        return {
            isSelected: false,
            selectedProductId: 0,
        }
    },
    mounted() {
        this.fetchAllProducts();
    },
    computed: {
        ...mapGetters([
            'gettedProducts'
        ]),
    },
    methods: {
        ...mapActions([
            'fetchAllProducts'
        ]),
        openProductInfo() {
            this.isSelected = true
            this.isAnimated = true
        },
        selectingProductId(id) {
            console.log(id)
            this.selectedProductId = id;
            console.log("WTF", this.selectedProductId)
        }
    },
}
</script>

<style lang="scss" scoped>
// #region Variables

$close-btn__height: 40px;

// #endregion Variables

// #region Main classes
.main-page {
    &__grid {
        display: grid;
        grid-template-columns: minmax(150px, 1fr) max-content;
        grid-template-rows: $header__height 
                            calc(100vh - $header__height - 3*$base-padding - $close-btn__height) 
                            $close-btn__height;
        row-gap: $base-padding;
        padding: 0 $base-padding;
        min-height: 100vh;
        background: $page__bg;
    }

    
    &__header {
        grid-row: 1;
        position: fixed;
        top: 0px;
        left: 0px;
    }

    &__catalogue {
        grid-row: 2 / 4;

        display: grid;
        grid-template-rows: repeat(auto-fit, minmax(50vh, 0.4fr));
        grid-template-columns: repeat(auto-fit, minmax(30vh, 1fr));


        padding: 0 10px 0 0;
        gap: $base-padding;
        
        overflow: auto;

        border-radius: 5px;
    }
    
    &__product-info {
        grid-row: 2;
        max-width: 60vw;
        margin-left: $base-padding;

        &_close-btn {
            grid-row: 3;
            grid-column: 2;
            max-width: 60vw;
            margin-left: $base-padding;

        }
    }
}
// #endregion Main classes

// #region Animation

.fade-enter-from {
    width: 0;
    opacity: 0;
}
.fade-enter-to {
    opacity: 1;
    width: 60vw;
}
.fade-enter-active {
    transition: all 2s ease;
}

.fade-leave-from {
    opacity: 1;
    width: 60vw;
}
.fade-leave-to {
    width: 0;
    opacity: 0;
}
.fade-leave-active {
    transition: all 2s ease-in;
}

// #endregion Animation

</style>