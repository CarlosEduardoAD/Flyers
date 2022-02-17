<template>
  <div class="titulo_main" >
    <h1 class="vocesabia"> Flyers</h1>
  </div>
  <div>
    <nav class="nav">
         <router-link to="/home" class="router-link-active"> <strong> Home </strong> </router-link>
         <router-link to="/comunidade" class="router-link-active"> <strong>comunidade</strong> </router-link>
         <router-link to="/opensource" class="router-link-active"> <strong>opensource</strong> </router-link>
         <router-link to="/sobre" class="router-link-active"> <strong>sobre</strong> </router-link>
     </nav>
      <router-view> </router-view>
   </div>
</template>

<script>

export default {
  setup() {
    
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

.nav {
  display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
}

.titulo_main{
display:flex;
flex-direction: row;
align-items: center;
justify-content: center; 
font-family: 'Roboto Serif', sans-serif;
color:white;
}

.nav a{
  text-decoration: none;
  margin-left:12px;
  padding: 12px 15px;
  font-family: 'IBM Plex Sans Thai Looped', sans-serif;
  color: white;
}

.nav a :hover{
  background: white;
  color:black;
  border-radius: 7px;
  opacity: 0.3;
}

</style>
