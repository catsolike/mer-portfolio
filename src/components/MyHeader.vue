<template>
    <div class="header_grid">
        <div class="header__logo"></div>
        <div v-if="space_enough" 
            class="header__navbar"
        >
            <div class="header__about" @click="openAboutUs">About Us</div>
            <my-btn class="header__login-btn" @click="openLoginPage">Log In</my-btn>
            <div class="header__products" @click="openProductsPage">Products</div>
        </div>
        <div v-else 
            class="header__compact-menu">X</div>
    </div>
</template>

<script>
import router from '../router/router';
export default {
    name: 'my-header',
    data() {
        return {
            space_enough: true,
            myheight: 0,
        }
    },
    mounted() {
        console.log(this.$el.offsetHeight);
    },
    methods: {
        openLoginPage() {
            router.push('/login'); 
        },
        openAboutUs(){
            router.push('/');
        },
        openProductsPage(){
            router.push('/products');
        },
    }    

}
</script>

<style lang="scss" scoped>
.header {
    &_grid {
        display: grid;
        grid-template-columns: repeat();
        width: 100%;
        height: 40px;
        background: $header__bg;
    }

    &__logo {

    }


    &__navbar *:hover {
        background: $header__el_hover;

    }
    &__navbar * {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__navbar {
        grid-column: 2;
        display: flex;
        flex-direction: row;
    }

    &__about {
        padding: 0 10px;
    }

    &__login-btn {
        height: 35px;
        margin: auto 5px;
    }

    &__products {
        padding: 0 10px;
    }

    &__compact-menu {
    }

}
</style>