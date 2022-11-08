<template>

  <section class="src-componentes-respuestas">
    <h1>Respuestas</h1>
      <table class="table table-dark">
        <thead class="thead-light">
          <tr>
            <th>Numero de pregunta</th>
            <th>Respuesta</th>
          </tr>
        </thead>
        <tr v-for="(respuestaX,index) in this.respuestas" :key="index">
            <td>{{respuestaX.preguntaNro}}</td>
            <td>{{respuestaX.respuestas}}</td>
        </tr>
      </table>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas :
        [
          {
            preguntaNro: "1",
            respuestas: ['B','D']
          },
          {
            preguntaNro: "2",
            respuestas: ['C']
          },
          {
            preguntaNro: "3",
            respuestas: ['B','E']
          }
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
</style>
