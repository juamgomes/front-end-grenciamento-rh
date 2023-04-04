<template>
  <TheHeader />
  <div class="h-screen">
    <div class="bg-white shadow-md rounded-xl my-6 mx-5">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase font-Poppins text-sm leading-normal">
            <th class="py-3 px-6 text-left">Nome</th>
            <th class="py-3 px-6 text-left">Função</th>
            <th class="py-3 px-6 text-left">E-mail</th>
            <th class="py-3 px-6 text-center">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Novo funcionário</button>
            </th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-normal">
          <tr v-for="(funcionario, index) in funcionarios" :key="index" class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left">{{ funcionario.nome }}</td>
            <td class="py-3 px-6 text-left">{{ funcionario.funcao }}</td>
            <td class="py-3 px-6 text-left">{{ funcionario.email }}</td>
            <td class="py-3 px-6 text-center">
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ver mais
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default{
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
  App: 'TabelaFuncionarios',
  data() {
    return {

      funcionarios: [
        {
          nome: 'João Silva',
          funcao: 'Gerente de Vendas',
          email: 'joao.silva@example.com',
        },
        {
          nome: 'Maria Souza',
          funcao: 'Analista de Marketing',
          email: 'maria.souza@example.com',
        },
        {
          nome: 'Pedro Santos',
          funcao: 'Desenvolvedor Front-end',
          email: 'pedro.santos@example.com',
        },
        // Adicione mais funcionários aqui...
      ],
    };
  },
}
</script>
