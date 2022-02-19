<template>
    <main class="main-open">
        <section class="secao-open">
            <div class="paragrafo-open" data-aos="fade-left" data-aos-duration="700"> <p>Entendemos que não são todo os que podem pagar para ter software ou para aprender a programar, <br>
            por isso deixamos nossos projetos de desenvolvimento como de código aberto, <br> ou seja, qualquer pessoa pode ir lá, pegar os códigos e mexer neles, 
            fazemos isso porque queremos além de ter <br>mais pessoas interagindo com nosso projeto, tendo a oportunidade de experimentar  <br>como é apoiar um projeto open-source. <br>
            </p> </div>
            <div class="paragrafo-open" data-aos="fade-left" data-aos-duration="750"> <p>Se você quiser contribuir, pode contribuir doando para o projeto no github, e se quiser <br>
            pode dar uma olhadinha lá nos nossos programas ! Temos Bots, API'S e até o código fonte do nosso <strong>site</strong>, <br>
            para mexer mais a fundo neles, basta fazer um fork ou pegar e colar no seu editor de código. <br> Se quiser apoiar o projeto trabalhando conosco,
            estamos abertos para estágios, basta 2 requisitos, <br> ter experiência básica com Python (API'S, BOTS, Site e outros softwares) e Rust (Software dos foguetes) <br>
            e nos contatar pelo nosso número, assim poderemos ficar sabendo do seu interesse na vaga de emprego</p> </div>

            <div class="paragrafo-open" data-aos="fade-left" data-aos-duration="800">
                <p>Observação: Você será redirecionado para a Landing page do github, já que nossa startup é fake</p>
            </div>

            <div class="link-do-github" data-aos="fade-left" data-aos-duration="2000">
                <a href="https://github.com/"><img src="../assets/github.svg" style="filter: invert(99%) sepia(92%) saturate(2%) hue-rotate(199deg) brightness(108%) contrast(100%);" alt="Entrar no nosso github" width="108" height="108"></a>
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

.maim-open{
    display:flex;
    align-items: center;
    justify-content: center;
}


.paragrafo-open{
    text-align: center;
    color:white;
    font-family: 'Roboto Serif', sans-serif;
}

.link-do-github{
    display:flex;
    align-items: center;
    justify-content: center;
}
</style>