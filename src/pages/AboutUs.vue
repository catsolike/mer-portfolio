<template>
  <div class="about-page">
    <my-header class="main-page__header"></my-header>
    <h1>О нас</h1>
    <div class="product-cards">
      <div class="arrow left-arrow" @click="previousProducts">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="product-cards__container">
        <product-card
          v-for="product in displayedProducts"
          :key="product.id"
          :product_data="product"
        ></product-card>
      </div>
      <div class="arrow right-arrow" @click="nextProducts">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <p>Наши товары самые лучшие. Выбирайте нас. Пожалуйста, возьмите на работу :></p>
  </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue';
import MyHeader from '@/components/MyHeader.vue';

import { mapActions, mapGetters } from 'vuex'
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
export default {
  name: 'about-page',
  components: {
    ProductCard,
    MyHeader
  },
  data() {
    return {
      favouriteProductsQuality: 5,
      currentIndex: 0,
      productsPerPage: 3,
      shuffledProducts: [],
    };
  },
  mounted() {
    this.fetchAllProducts().then(() => {
      this.shuffleProducts();
    });
  },
  computed: {
    ...mapGetters([
            'gettedProducts'
    ]),
    displayedProducts() {
      const startIndex = this.currentIndex;
      const endIndex = startIndex + this.productsPerPage;
      return this.shuffledProducts.slice(startIndex, endIndex <= this.favouriteProductsQuality ? endIndex : this.favouriteProductsQuality);
    },
  },
  methods: {
    ...mapActions(['fetchAllProducts']),
    shuffleProducts() {
      const allProducts = shuffleArray(this.gettedProducts).slice(0, this.favouriteProductsQuality);
      this.shuffledProducts = shuffleArray(allProducts);
    },
    previousProducts() {
      if (this.currentIndex > 0) {
        this.currentIndex -= this.productsPerPage;
      }
    },
    nextProducts() {
      if (this.currentIndex < this.favouriteProductsQuality - this.productsPerPage) {
        this.currentIndex += this.productsPerPage;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.main-page__header {
  grid-row: 1;
  position: fixed;
  top: 0px;
  left: 0px;
}
.about-page {
  background-color: $page__bg; 
  padding: 20px;
  min-height: 100vh;
}

.about-page h1 {
  text-align: center;
  font-size: 46px;
  margin-top: 35px;
  margin-bottom: 35px;
}

.about-page p {
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
}

.product-cards {
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: $btn__bg;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 0.3s ease; 
}

.arrow:hover {
  box-shadow: 0 0 5px $btn__bg; 
}


.left-arrow {
  margin-right: 10px;
}

.right-arrow {
  margin-left: 10px;
}

.arrow:hover {
  background-color: $page__bg;
}

.product-cards__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-flow: column; 
  gap: 20px; 
  margin-bottom: 50px;
}

</style>