<template>
    <router-view></router-view>
    <main class="sobre">
    <section class="textos-sobre">
        <div class="verysus" data-aos="fade-down" data-aos-duration="1200">
        <h2 class="a">Levamos o espaço para você, <br> que tal levar você para o espaço ?</h2>
    </div>
        <div class="">
        </div>
    <div class="final" data-aos="fade-down" data-aos-duration="1200">
        <h1 class="thesus">Projeto criado em  <strong> 05/01/2022 </strong></h1>
    </div>
    </section>
    </main>

</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>

.sobre{
    display: grid;
    grid-template-columns: 2fr 24px;
}

.verysus{
    display:flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-family: 'Roboto Serif', sans-serif;
    font-size: 30px;
    text-align: center;
}
.thesus{
    text-align: center;
    color: white;
    font-size: 36px;
    font-family: 'Roboto Serif', sans-serif;
}

.final{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto Serif', sans-serif;
    color:white;
    font-size: 16px;
    padding-top: 58px;
}


</style>