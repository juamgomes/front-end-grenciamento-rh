<template>
<TheHeader />

<div class="p-8">
    <form>
      <div class="mb-4">
        <label for="vinculo" class="block text-gray-700 font-bold mb-2">Vínculo</label>
        <input type="text" id="vinculo" v-model="vinculo" class="border border-gray-400 p-2 w-full">
      </div>
      <div class="mb-4">
        <label for="status" class="block text-gray-700 font-bold mb-2">Status</label>
        <input type="text" id="status" v-model="status" class="border border-gray-400 p-2 w-full">
      </div>
      <div class="mb-4">
        <label for="matricula" class="block text-gray-700 font-bold mb-2">Matrícula</label>
        <input type="text" id="matricula" v-model="matricula" class="border border-gray-400 p-2 w-full">
      </div>
      <div class="mb-4">
        <label for="nome" class="block text-gray-700 font-bold mb-2">Nome Completo</label>
        <input type="text" id="nome" v-model="nome" class="border border-gray-400 p-2 w-full">
      </div>
      <div class="mb-4">
        <label for="nome-social" class="block text-gray-700 font-bold mb-2">Nome Social</label>
        <input type="text" id="nome-social" v-model="nomeSocial" class="border border-gray-400 p-2 w-full">
      </div>
      <div class="mb-4">
        <label for="identificacao" class="block text-gray-700 font-bold mb-2">Identificação Funcional</label>
        <input type="text" id="identificacao" v-model="identificacao" class="border border-gray-400 p-2 w-full">
      </div>
      <div class="mb-4">
        <label for="data-nascimento" class="block text-gray-700 font-bold mb-2">Data de Nascimento</label>
        <input type="date" id="data-nascimento" v-model="dataNascimento" class="border border-gray-400 p-2 w-full">
      </div>
      <div class="mb-4">
        <label for="estado-civil" class="block text-gray-700 font-bold mb-2">Estado Civil</label>
        <select id="estado-civil" v-model="estadoCivil" class="border border-gray-400 p-2 w-full">
          <option value="">Selecione uma opção</option>
          <option value="solteiro">Solteiro(a)</option>
          <option value="casado">Casado(a)</option>
          <option value="divorciado">Divorciado(a)</option>
          <option value="viuvo">Viúvo(a)</option>
        </select>
      </div>

      <div class="mb-4">
        <label for="sexo" class="block text-gray-700 font-bold mb-2">Sexo</label>
        <select id="sexo" v-model="sexo" class="border border-gray-400 p-2 w-full" >
          <option value="">Selecione uma opção</option>
          <option  value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="nao-binario">Não-binário</option>
          <option value="outra">Outra</option>
        </select>
      </div>

      <FormPaisEstadoECidade />


      <div class="mb-4">
        <label for="nome-pai" class="block text-gray-700 font-bold mb-2">Nome do pai</label>
        <input type="text" id="nome-pai" v-model="nomePai" class="border border-gray-400 p-2 w-full">
      </div>
      <div class="mb-4">
        <label for="nome-mae" class="block text-gray-700 font-bold mb-2">Nome da mãe</label>
        <input type="text" id="nome-mae" v-model="nomeMae" class="border border-gray-400 p-2 w-full">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" v-model="email" class="border border-gray-400 p-2 w-full">
      </div>

      <CepEEdereco />

  </form>
</div>
<TheFooter />
</template>

<script>
import TheHeader from'../components/TheHeader'
import TheFooter from'../components/TheFooter.vue'
import FormPaisEstadoECidade from'../components/FormPaisEstadoECidade.vue'
import CepEEdereco from'../components/CepEEdereco.vue'

  export default{
    data(){
      return{
        'vinculo': "",
        'status': "",
        'matricula': "",
        'nome': "",
        'nomeSocial': "",
        'identificacao': "",
        'dataNascimento': "",
        'estadoCivil': "",
        'nomePai': "",
        'nomeMae': "",
        'email': "",
      }
    },

    name: 'App',
    components: {
      TheHeader,
      TheFooter,
      FormPaisEstadoECidade,
      CepEEdereco
    },
}

</script>