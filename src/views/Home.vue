<template>
 <header class="header">
   <div class="cabecalho">  
     <router-view>
     </router-view>
   </div>
 </header>
 <main class="meio">
   <section class="meiodapagina">
     <div class="texto" data-aos="fade-up" data-aos-duration="1000">
       <h2>O céu é o limite, e queremos levar você além dele</h2>
     </div>
     <div class="imagem">
       <img src="../assets/foguete.svg" style="filter: invert(99%) sepia(92%) saturate(2%) hue-rotate(199deg) brightness(108%) contrast(100%);" width=305 height= 400 alt="">
     </div>
     <div data-aos="fade-up" class="paragrafo">
       <p>Já se perguntou que segredos o espaço nos reserva ? Nós também <br>
       por isso somos uma startup determinada a lhe oferecer uma experiência <br>
       inesquecível, descobrir os segredos do espaço, e apreciar a beleza que <br>
       ele pode nos ofereer.</p>
     </div>
     <div class="subtitulo">
       <h3> Será que realmente tem aliens em Marte ? Podemos te trazer a resposta</h3>
     </div>
     <div data-aos="fade-up" class="paragrafo2">
       <p>Com uma parceria com o Instituto de Astrnomia e Geofísica, conseguimos ser uma <br> 
         vanguarda no turismo espacial, com o nosso modelo BILU-6002, podemos levar em média <br>
         200 pessoas a bordo. </p>
     </div>
     <div class="subtitulo2">
       <h3>Quantos rins vou ter que levar para essa experiência ?</h3>
     </div>
      <div data-aos="fade-up" class="paragrafo3">
       <p>Queremos dar a oportunidade para todos, não vai ser barato <br>
       mas vamos dar o melhor para dar um preço justo e acessível e <br>
       remover taxas e impostos desnecessários</p>
     </div>
   </section>
 </main>

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

export default {
  name : "App",
  
  setup(){
   
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@300&family=Roboto+Serif:wght@100;300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-image: url("../assets/fundo.png");
  position: sticky;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
  


.header{
  position: relative;
  display:flex;
  flex-direction: row;
  justify-content: space-between;

}

.vocesabia{
  display:flex;
  align-items: flex-start;
  
}

.mano{
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}


.meiodapagina{
  display: grid;
  place-items: center;
}

.texto{
  color: white;
  font-size: 1.5rem;
  font-family: 'Roboto Serif', sans-serif;
  padding:35px;
}

.paragrafo{
  font-size: 1.5rem;
  font-family: 'Roboto Serif', sans-serif;
  padding-top: 40px;
  padding: 35px;
  color: white;
}

.paragrafo2{
  font-size: 1.5rem;
  font-family: 'Roboto Serif', sans-serif;
  padding: 35px;
  color: white;
}

.paragrafo3{
  font-size: 1.5rem;
  font-family: 'Roboto Serif', sans-serif;
  padding: 35px;
  color: white;
}

.subtitulo{
  color: white;
  font-size: 1.8rem;
  font-family: 'Roboto Serif', sans-serif;
  padding:35px;
}

.subtitulo2{
  color: white;
  font-size: 1.8rem;
  font-family: 'Roboto Serif', sans-serif;
}

.rodape{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
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
