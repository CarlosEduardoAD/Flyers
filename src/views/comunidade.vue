<template>
  <header class="header">
   <div class="cabecalho">  
     <router-view>
     </router-view>
   </div>
 </header>
  <div class="about">
    <h1>E a nossa comunidade ?</h1>
  </div>

  <section class="textos">
  <div class="comunidade">
    <p> O coração do nosso projeto é a <i>comunidade</i>
        sem ela não poderíamos ter criado nada do que temos hoje,
        ela é composta de pessoas simples mas ao mesmo tempo extraordinárias.
        Estamos por todas as partes, no Twitter, Facebook, Youtube, Linkedin (Ah, estamos contratando também !)
        github e etc...</p>
  </div>
  <div class="comunidade">
    <p>A comunidade é responsável por grande parte dos projetos que integram a Flyers, como microserviços,
      API's, e outras tecnologias que são utilizadas na empresa.
    </p>
  </div>
  <div class="comunidade">
    <p>Quer ver uma criação muito legal da comunidade ? Olha pro lado direito da sua tela,
      toda vez que você atualizar, você vai ver uma nova foto do espaço !
    </p>
  </div>
  </section>

<section>
<api class="image"/>
</section>
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
}

.textos{
  display:grid;
  place-items: left;
  padding-left: 172px;
  gap: 60px;
}

.comunidade{
  color:white;
  max-width: 250px;
  border-bottom: 5px solid white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.image{
  display: grid;
  place-items: center;
}

</style>
