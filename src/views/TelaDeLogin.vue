<template>
    <div id="main" class="h-screen w-screen flex items-center justify-center bg-no-repeat bg-cover bg-left bg-fixed font-Poppins">
      <div class="p-5 flex flex-col items-center w-96 rounded-2xl shadow-2xl bg-branco">
          <div class="inline m-5">
            <img class="w-32 m-3 inline" src="../assets/logo-governo.png" alt="logo-da-imprensa">
            <img class="w-32 m-3 inline" src="../assets/logo-imprensa.png" alt="logo-do-governo">
          </div>
          <form class="p-7">
            <h1 class="text-center text-xl font-Poppins font-semibold uppercase">NOME DO SISTEMA</h1>
            <label class="block w-72 mx-8 text-left">
              <span class="text-sm font-semibold uppercase text-branco-semop">Email</span>
              <input class="p-2 pb-2 rounded-lg b-none bg-cinza block w-full mt-1 text-base pb-1" type="email" name="Email">
            </label>
            <label class="block w-72 mx-8 text-left">
              <span class="text-sm font-semibold uppercase text-branco-semop">Senha</span>
              <input class="p-2 pb-2 rounded-lg b-none bg-cinza block w-full mt-1 text-base pb-1" type="password" name="Senha">
            </label>

            <input class="ml-8" type="checkbox" id="lembrar" name="lembrar" checked>
            <label class="mb-2 ml-2 text-sm" for="scales">Lembre-me</label>

            <div class="mt-8">
              <p class="text-right m-2 me-8 text-sm text-branco-semop"><a href="#">Esqueceu a senha?</a></p>
              <button class="hover:bg-green-400 w-72 mx-8 p-2 rounded-lg text-center block text-base cursor-pointer font-semibold uppercase bg-green-600 text-slate-50" type="button">Entrar</button>
            </div>
          </form>
    </div>

    </div>

</template>

<script>
  
</script>

<style scoped>
#main {
  background-image: url('../assets/background-rh.png');
}
</style>