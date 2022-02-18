<template>
  <header class="header">
   <div class="cabecalho">  
     <router-view>
     </router-view>
   </div>
 </header>
  <div class="about" data-aos="fade-in">
    <h1>E a comunidade ?</h1>
  </div>

  <section class="image">
    <div class="imagem" data-aos="zoom-in-up">
      <api/>
    </div>
  <div class="side">
  <div class="comunidade" data-aos="fade-left">
    <p> O coração do nosso projeto é a <i>comunidade</i>
        sem ela não poderíamos ter criado nada do que temos hoje,
        ela é composta de pessoas simples mas ao mesmo tempo extraordinárias.
        Estamos por todas as partes, no Twitter, Facebook, Youtube, Linkedin (Ah, estamos contratando também !)
        github e etc...</p>
  </div>
  <div class="comunidade" data-aos="fade-left">
    <p>A comunidade é responsável por grande parte dos projetos que integram a Flyers, como microserviços,
      API's, e outras tecnologias que são utilizadas na empresa.
    </p>
  </div>
  <div class="comunidade" data-aos="fade-left">
    <p>Quer ver uma criação muito legal da comunidade ? Olha pro centro da sua tela,
      se você visitar essa mesma página pelo menos uma vez por dia, vai ver uma nova foto do espaço !
    </p>
  </div>
  </div>
  </section>
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
 </footer>

</template>

<script>

import api from "../components/api.vue"


export default {
  components: {api}, 
  setup() { 
  },
}
</script>

<style>

.about{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  color:white;
  font-family: 'Roboto Serif', sans-serif;
}

.comunidade{
  color:white;
  max-width: 280px;
  font-family: 'Roboto Serif', sans-serif;
}

.image{
  display: grid;
  grid-template-columns: 1.5fr 203px;
  grid-gap: 50px;
  max-width: 1150px;
}
.imagem{
  display:grid;
  place-items: center;
}

.side{
  padding-bottom:24px;
}

</style>
