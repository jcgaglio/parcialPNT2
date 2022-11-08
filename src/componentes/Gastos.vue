<template>

  <section class="src-componentes-gastos">
    <h1>Gastos</h1>

    <vue-form :state="formState" @submit.prevent="enviar()">
 
      <validate tag="label">
        <label for="nombre">Nombre</label><br>
        <input id="nombre" class="form-control" type="text" v-model.trim="formData.nombre" required name="nombre" :minlength="nombreMinLongitud" :maxlength="nombreMaxLongitud" no-espacios autocomplete="off"/>

        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Es obligatorio ingresar el nombre</div>
          <div slot="minlength" class="alert alert-danger mt-1">El nombre debe tener mas de 3 caracteres</div>
          <div slot="maxlength" class="alert alert-danger mt-1">El nombre debe tener menos de 15 caracteres</div>
          <div slot="no-espacios" class="alert alert-danger mt-1">El nombre no debe contener espacios</div>
        </field-messages>
      </validate>
      
      <br><br>

      <validate tag="label">
        <label for="descripcion">Descripción</label><br>
        <input id="descripcion" class="form-control" type="text" v-model="formData.descripcion" required name="descripcion" autocomplete="off"/>

        <field-messages name="descripcion" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Es obligatorio ingresar la descripción</div>
        </field-messages>
      </validate>

      <br><br>

      <validate tag="label">
        <label for="importe">Importe</label><br>
        <input id="importe" class="form-control" type="number" v-model.number="formData.importe" required name="importe" min="1" autocomplete="off"/>

        <field-messages name="importe" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Es obligatorio ingresar el importe</div>
          <div slot="min" class="alert alert-danger mt-1">Es obligatorio que el numero sea mayor a 0</div>
        </field-messages>
      </validate>


      <br><br><br>
      <button class="btn btn-primary my-3" :disabled="formState.$invalid">Enviar</button>

      <br><br><br>
      <hr>
  
      <validate tag="label">
        <label for="presupuesto" :style="{fontSize: 84 + 'px' }">Presupuesto</label><br>
        <input id="presupuesto" class="form-control" type="number" v-model.number="presupuesto" placeholder="Ingrese un presupuesto" name="presupuesto" min="1" autocomplete="off">
        <field-messages name="presupuesto" show="$dirty">
            <div slot="min" class="alert alert-danger mt-1">Es obligatorio que el presupuesto sea mayor a 0</div>
        </field-messages>
      </validate>

      <br><br>
      <div v-if="gastos.length" class="table-responsive">
        <table class="table table-dark">
          <thead class="thead-light">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Importe</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tr v-for="(gasto,index) in gastos" :key="index">
            <td>{{ gasto.nombre }}</td>
            <td>{{ gasto.descripcion }}</td>
            <td>${{ gasto.importe }}</td>
            <td>{{ gasto.fecha }}</td>
          </tr>
          <tr :style="{color: decidirColor(calcularGastoTotal())}">
            <td>Gasto total:</td>
            <td></td>
            <td>${{calcularGastoTotal()}}</td>
          </tr>
        </table>
      </div>
      <h3 v-else class="alert alert-dark">No hay gastos ingresados</h3>
    </vue-form>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-gastos',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData: this.getInitialData(),
        nombreMinLongitud: 3,
        nombreMaxLongitud: 15,
        gastoChico: 1000,
        gastoGrande: 5000,
        presupuesto: "",
        gastos : []
      }
    },
    methods: {
      getInitialData()
      {
        return{
          nombre : null,
          descripcion : null,
          importe : null
        }
      },
      enviar()
      {
        console.log({...this.formData})
        let gasto = {...this.formData}
        gasto.fecha = new Date().toLocaleString()

        this.gastos.push(gasto)

        this.formData = this.getInitialData(),
        this.formState._reset()
      },
      calcularGastoTotal()
      {
        let gastoTotal = 0
        this.gastos.forEach(element => {
          gastoTotal += element.importe
        });

        return gastoTotal
      },
      decidirColor(gastoX)
      {
        let colorX = '#00ff44'
  
        if(gastoX >= this.gastoChico && gastoX <= this.gastoGrande)
        {
          colorX = '#d400ff'
        }
        else if(gastoX > this.gastoGrande)
        {
          colorX = '#ffa600'
        }

        if(this.presupuesto > 0)
        {
          if(gastoX > this.presupuesto)
          {
            colorX = '#ff2424'
          }
        }
  
        return colorX
      },
      actualizarPresupuesto()
      {
        console.log("Presupuesto: " + this.presupuesto)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
</style>
