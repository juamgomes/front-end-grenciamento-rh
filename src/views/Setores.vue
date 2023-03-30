<template>

  <TheHeader />
  <FuncionariosLista />

</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import FuncionariosLista from '@/components/FuncionariosLista.vue';
  export default{
    name: 'App',
    components: {
      TheHeader,
      FuncionariosLista
    },
  }
</script>
