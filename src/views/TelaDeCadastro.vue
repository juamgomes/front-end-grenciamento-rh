<template>
  <div id="main" class="h-screen w-screen flex items-center justify-center bg-no-repeat bg-cover bg-left bg-fixed font-Poppins">
    <div class="p-5 flex flex-col items-center w-96 rounded-2xl shadow-2xl bg-branco">
        <div class="inline m-5">
          <img class="w-32 m-3 inline" src="../assets/logo-governo.png" alt="logo-da-imprensa">
          <img class="w-32 m-3 inline" src="../assets/logo-imprensa.png" alt="logo-do-governo">
        </div>
        <form class="p-7">
          <h1 class="mb-5 text-center text-xl font-Poppins font-semibold uppercase">NOME DO SISTEMA</h1>

          <label class="block w-72 mx-8 text-left">
            <span class="text-sm font-semibold uppercase text-branco-semop">Nome completo</span>
            <input class="p-2 pb-2 mb-2 rounded-lg b-none bg-cinza block w-full text-base pb-1" type="text" v-model="Nome">
          </label>

          <label class="block w-72 mx-8 text-left">
            <span class="text-sm font-semibold uppercase text-branco-semop">Email</span>
            <input class="p-2 pb-2 mb-2 rounded-lg b-none bg-cinza block w-full text-base pb-1" type="email" v-model="Email">
          </label>

          <label class="block w-72 mx-8 text-left">
            <span class="text-sm font-semibold uppercase text-branco-semop">Crie uma senha</span>
            <input class="p-2 pb-2 mb-2 rounded-lg b-none bg-cinza block w-full text-base pb-1" type="password" v-model="Senha">
          </label>

          <input class="ml-8" type="checkbox" id="lembrar" v-model="lembrar" checked>
          <label class="mb-2 ml-2 text-sm" for="scales">Lembre-me</label>

          <div class="mt-8">
            <button class="hover:bg-green-400 w-72 mx-8 p-2 rounded-lg text-center block text-base cursor-pointer font-semibold uppercase bg-green-600 text-slate-50" type="button">CADASTRAR</button>
          </div>
        </form>
  </div>

  </div>

</template>

<script>
  export default {
  data(){
    return {
      'Nome': "",
      'Email': "",
      'Senha': "",
      'lembrar': false
    }
  }
}
</script>

<style scoped>
#main {
background-image: url('../assets/background-rh.png');
}
</style>