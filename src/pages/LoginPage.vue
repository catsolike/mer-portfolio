<template>
  <div class="login-page">
      <h1>Programs name</h1>
      <form>
        <label for="username">User name:</label>
        <input type="text" id="username" v-model="username" required>        
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <my-btn type="submit" @click="btnLogin">Login</my-btn>
        <my-btn type="submit" @click="butCancel">Cancel</my-btn>
      </form>        
  </div>
</template>

<script>
import router from '../router/router';
export default {
  name: 'login-page',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    btnLogin() {
      console.log('Login:', this.username, this.password);
    },
    butCancel(){
      router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>  
.login-page {
  display: flex;
  background-color: $page__bg;
  height: 100vh; 
  justify-content: center; 
  align-items: center;
  flex-direction: column; 
  h1 {
    display: grid;
    font-size: 70px;
    text-align: center;
  }
  form{ 
    display: flex; 
    margin-top: 20px;
    flex-direction: column; 
    label {
      display: flex;
      margin-bottom: 10px;
    }  
    input {
      display: flex;
      padding: 5px;
      margin-bottom: 20px;
      width: 200px;
    }  
    button {
      display: flex;
      padding: 10px 20px;
      margin-bottom: 20px; 
    }
  }
}
</style>