<template>
  <form class="flex flex-wrap gap-4 w-full">
    <div class="flex-col">
      <label class="block text-gray-700 font-bold mb-2" for="cep">CEP</label>
      <input class="block w-36 border border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight" type="text" id="cep" v-model="cep" @blur="buscarEndereco">
    </div>

    <div>
      <label class="block text-gray-700 font-bold mb-2" for="endereco">Endereço</label>
      <input class="block w-80 border border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight" type="text" id="endereco" v-model="endereco">
    </div>

    <div>
      <label class="block text-gray-700 font-bold mb-2" for="numero">Número</label>
      <input class="block w-20 border text-center border-gray-400 text-gray-700 py-2 px-2 pr-8 rounded leading-tight" type="text" id="numero" v-model="numero">
    </div>

    <div>
      <label class="block text-gray-700 font-bold mb-2" for="bairro">Bairro</label>
      <input class="block w-96 border border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight" type="text" id="bairro" v-model="bairro">
    </div>

    <div>
      <label class="block text-gray-700 font-bold mb-2" for="bairro">Cidade</label>
      <input class="block w-72 border border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight" type="text" id="bairro" v-model="cidade">
    </div>

    <div>
      <label class="block text-gray-700 font-bold mb-2" for="bairro">Complemento</label>
      <input class="block w-96 border border-gray-400 text-gray-700 py-2 px-4 pr-8 rounded leading-tight" type="text" id="bairro" v-model="complemento">
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FormularioEndereco',
  data() {
    return {
      cep: '',
      endereco: '',
      numero: '',
      bairro: '',
      cidade: '',
      complemento: ''
    };
  },
  methods: {
    buscarEndereco() {
      axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
      .then(response => {
      this.endereco = response.data.logradouro;
      this.numero = '';
      this.bairro = response.data.bairro;
      this.cidade = response.data.localidade;
      this.complemento = '';
    })
    .catch(error => {
      console.log(error);
    });
    },
  },
};
</script>