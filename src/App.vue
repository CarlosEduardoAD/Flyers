<template>
  <header>
  <div class="titulo_main" >
    <h1 class="vocesabia"> Flyers</h1>
  </div>
  <div>
    <nav class="nav">
         <router-link to="/" class="router-link-active"> <strong> Home </strong> </router-link>
         <router-link to="/comunidade" class="router-link-active"> <strong>comunidade</strong> </router-link>
         <router-link to="/opensource" class="router-link-active"> <strong>opensource</strong> </router-link>
         <router-link to="/sobre" class="router-link-active"> <strong>sobre</strong> </router-link>
     </nav>
      <router-view> </router-view>
   </div>
   </header>
   <footer class="rodape">
   <div class="direitos">
     <h4 class="minitexto1">Direitos autorais e outros</h4>
     <ul>
       <li>Copyright</li>
       <li>Direitos autorais e liçenca</li>
       <li>Termos de usuário</li>
     </ul>
   </div>
   <div class="parceiros">
     <h4 class="minitexto2">Nossos parceiros no projeto</h4>
     <ul>
       <li>IAG (São Paulo)</li>
       <li>USP (Universidade de São Paulo)</li>
       <li>UNB (Universidade de Brasília)</li>
     </ul>
   </div>
   <div class="contato">
     <h4 class="minitexto3">Fale conosco !</h4>
     <ul>
       <li>Whatsapp: 00 91234-1234</li>
       <li>Telefone: 4321-4321</li>
       <li>Instagram: @Flyers</li>
     </ul>
   </div>
   <div class="contato">
     <h4 class="minitexto4">Patrocinadores</h4>
     <ul>
       <li>Canonical Project</li>
       <li>Red Hat enterprise</li>
       <li>Space X</li>
     </ul>
   </div>
 </footer>
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
min-width: 800px;
}

.nav a{
  text-decoration: none;
  margin-left:12px;
  padding: 1px;
  font-family: 'IBM Plex Sans Thai Looped', sans-serif;
  color: white;
}

.nav a :hover{
  border-bottom: 1px solid;
}
.rodape{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin-top: 100px;
}

.minitexto1{
  color: white;
  font-family: 'IBM Plex Sans Thai Looped', sans-serif;

}

.minitexto2{
  color: white;
  font-family: 'IBM Plex Sans Thai Looped', sans-serif;
}

.minitexto3{
font-family: 'IBM Plex Sans Thai Looped', sans-serif;
  color: white;
}

.minitexto4{
font-family: 'IBM Plex Sans Thai Looped', sans-serif;
  color: white;
}


.direitos ul li{
  font-family: 'IBM Plex Sans Thai Looped', sans-serif;
  color: white;
}

.parceiros ul li{
  font-family: 'IBM Plex Sans Thai Looped', sans-serif;
  color: white;
}

.contato ul li{
  font-family: 'IBM Plex Sans Thai Looped', sans-serif;
  color: white;
}
  


</style>
