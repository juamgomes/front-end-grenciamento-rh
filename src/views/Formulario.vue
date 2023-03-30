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
  </form>
</div>
<TheFooter />
</template>

<script>
import TheHeader from'../components/TheHeader'
import TheFooter from'../components/TheFooter.vue'
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
        'estadoCivil': "casado"
      }
    },
    name: 'App',
    components: {
      TheHeader,
      TheFooter
    },
}

</script>