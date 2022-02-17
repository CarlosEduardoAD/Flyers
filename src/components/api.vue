<template>

<img :src="result" alt=""> 
<div>{{result}}</div>
  
</template>

<script>
import {ref} from "vue";

export default {
  setup() {
    const result = ref(null)
    const axios = require('axios')
    const tipoDeDado = ref(null)
  
    axios.get("https://api.nasa.gov/planetary/apod?api_key=mO3sM5dyz2TA9YLbYNLk6iiysaFPHIgR2rQhFkLN")
      .then(function pegarApi(data) {result.value = data.data.url})
      .then(function pegarTipoDeDado(data){tipoDeDado.value = data.data.media_type})
      .catch(function (e){console.log(e)})

      return{result, axios, tipoDeDado}
  },
}
</script>

<style>

.imagem{
  color: white;
}

</style>