<template>
  <div>
    <div class="wrapper-se">
      <!-- <div class="sidebar">
        <HeaderS></HeaderS>
        <b-container>
          <b-row>
            <b-nav vertical class="w-25 ml-4 mt-4">
              <b-nav-item active>Active</b-nav-item>
              <b-nav-item>Link</b-nav-item>
              <b-nav-item>Another Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
          </b-row>
        </b-container>
      </div>-->
      <div class="main-content">
        <CartBHeader></CartBHeader>
        <b-container fluid style="width:100%;">
          <b-row>
            <b-col style="border-right:solid 1px #B9B9B9">
              <b-nav vertical class="w-35 ml-4 mt-4">
                <b-nav-item active>Sucursales</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
              </b-nav>
            </b-col>
            <b-col cols="9">
              <h1 class="ml-5 mb-4 mt-4">{{ nameC }}</h1>
              <div class="ml-5">
                <ag-grid-vue
                  style="width: 90%; height: 300px;"
                  class="ag-theme-alpine"
                  :columnDefs="columnDefs"
                  :rowData="rowData"
                ></ag-grid-vue>
              </div>
              <b-button v-b-modal.modal-1 class="mt-4 ml-5">Registar {{ name }}</b-button>

              <b-modal id="modal-1" :title="'Registro de '+name">
                <b-form @submit.prevent="register">
                  <b-form-group
                    id="input-group-1"
                    label="Teléfono:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.telefono"
                      type="email"
                      required
                      placeholder="Ingresar teléfono"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Dirección:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.direccion"
                      required
                      placeholder="Ingresar dirección"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-3" label="Código de Sucursal:" label-for="input-3">
                    <b-form-input
                      id="input-2"
                      v-model="form.codigo_sucursal"
                      required
                      placeholder="Ingresar código"
                    ></b-form-input>
                  </b-form-group>

                  <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                    <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
                  </b-form-group> -->

                  <b-button type="submit" variant="primary">Registar</b-button>
                  <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
                </b-form>
              </b-modal>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
import CartBHeader from "@/components/Header";
// import HeaderS from "@/components/HeaderSideBar";
export default {
  data() {
    return {
      form: {
        telefono: "",
        direccion: "",
        codigo_sucursal: "",
      },
      name: "sucursales",
      nameC: "Sucursales",
      columnDefs: [],
      rowData: []
    };
  },
  components: {
    CartBHeader,
    AgGridVue
  },
  beforeMount() {
    this.getSucursales();
  },
  methods: {
    getSucursales() {
      this.axios.get("http://localhost:8080/sucursal-list").then(response => {
        console.log(response.data);
        this.rowData = response.data.data;
        this.columnDefs = response.data.headers;
      });
    },
    register() {}
  }
};
</script>
<style lang="css">
.wrapper-se {
  width: 100%;
  height: auto;
}

.sidebar {
  width: 300px;
  float: left;
  border-right: black solid 1px;
}
</style>