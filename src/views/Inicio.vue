<template>
<TheHeader />
<div>
  
  <conteiner class="h-80 mx-36 items-center rounded-xl flex flex-row justify-center bg-fundo-branco shadow-[0px_0px_14px_3px_rgba(0,0,0,0.12)] ">

    <div class="p-5 flex flex-col items-center justify-center rounded-2xl text-center w-2/5 h-52 mx-5 bg-verde-vivido">
      <h1 class="font-Poppins mb-4 text-gray-800 font-semibold">Número de funcionários</h1>
      <h1 class="text-8xl font-Poppins font-semibold text-white">{{ NumFuncionario }}</h1>
    </div>
  
    <div class="p-5 flex flex-col items-center justify-center rounded-2xl text-center w-2/5 h-52 mx-5 bg-vermelho">
      <h1 class="font-Poppins mb-4 text-gray-800 font-semibold">Número de Ramiro</h1>
      <h1 class="text-8xl font-Poppins font-semibold text-white">{{ NumSetores }}</h1>
    </div>

  </conteiner>
  
  <container class="flex mx-36">
    <div class="text-center h-96 w-3/5 my-5 mr-2 bg-fundo-branco rounded-xl p-10 shadow-[0px_0px_14px_3px_rgba(0,0,0,0.12)]">
      <h1 class="text-xl font-Poppins font-semibold">Aniversariantes do mês</h1>
      <table class="my-6 border-collapse w-full">
    <thead>
      <tr>
        <th class="py-3 px-6 bg-gray-700 text-center text-xs font-medium text-white uppercase tracking-wider border-b border-gray-800">Nome</th>
        <th class="py-3 px-6 bg-gray-700 text-center text-xs font-medium text-white uppercase tracking-wider border-b border-gray-800">Data</th>
      </tr>
    </thead>
        <tbody class="bg-gray-100 divide-y divide-gray-200">
          <tr class="hover:bg-gray-200">
            <td class="py-4 px-6 border-b border-gray-200">Fulado de tal</td>
            <td class="py-4 px-6 border-b border-gray-200">data/do/aniversairo</td>
          </tr>
          <tr class="hover:bg-gray-200">
            <td class="py-4 px-6 border-b border-gray-200">Fulado de tal</td>
            <td class="py-4 px-6 border-b border-gray-200">data/do/aniversairo</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center h-96 w-3/5 my-5 ml-2 bg-fundo-branco rounded-xl p-10 shadow-[0px_0px_14px_3px_rgba(0,0,0,0.12)]">
    
    </div>
  </container>


</div>

</template>

<script>
import TheHeader from'../components/TheHeader'
  export default{
    name: 'App',
    components: {
      TheHeader
    },
    data() {
      return{
        'NumFuncionario': "156",
        'NumSetores': "34",
      }
    }
  }


</script>