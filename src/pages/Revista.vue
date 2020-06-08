<template>
  <div>
    <div class="wrapper-se">
      <div class="main-content mb-5">
        <CartBHeader></CartBHeader>
        <b-container fluid style="width:100%;">
          <b-row>
            <b-col style="border-right:solid 1px #B9B9B9">
              <NavSide></NavSide>
            </b-col>
            <b-col cols="9">
              <h1 class="ml-5 mb-4 mt-4">{{ nameC }}</h1>
              <div class="ml-5 mr-4">
                <b-table :items="items" :fields="fields" striped responsive>
                  <template v-slot:cell(actions)="row">
                    <b-button
                      v-if="showEdit"
                      size="sm"
                      @click="info(row.item, row.index, $event.target)"
                      class="mr-1"
                      variant="info"
                    >Editar</b-button>
                    <b-button size="sm" variant="danger" @click="deleteRow(row.item)">eliminar</b-button>
                  </template>
                  <!-- <template v-slot:head(titulo)="scope">
                    <div class="text-nowrap">Row ID</div>
                  </template>-->
                  <template v-slot:head()="scope">
                    <div class="text-nowrap">{{ scope.label }}</div>
                  </template>
                </b-table>
              </div>
              <b-button v-b-modal.modal-1 class="mt-4 ml-5">Registar {{ name }}</b-button>
              <b-button v-b-modal.modal-article class="mt-4 ml-3">Crear Artículo</b-button>
              <b-modal id="modal-article" title="Registrar Artículo" ok-only>
                <b-form @submit.prevent="registerArticulo">
                  <b-form-group id="input-group-1" label="Fecha:" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="form_article.fecha"
                      type="date"
                      required
                      placeholder="Ingresar fecha"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-2" label="Título:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form_article.titulo"
                      type="text"
                      required
                      placeholder="Ingresar título"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-ar4" label="Contenido:" label-for="input-ar4">
                    <b-form-textarea
                      id="textarea"
                      v-model="form_article.contenido"
                      placeholder="Ingresar contenido"
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </b-form-group>
                  <b-form-group id="input-group-ar7" label="Revista:" label-for="input-ar7">
                    <b-form-select
                      id="input-ar7"
                      v-model="form_article.id_numero_revista"
                      :options="options_numero_revista"
                      required
                    ></b-form-select>
                  </b-form-group>
                  <b-form-group id="input-group-3" label="Periodista:" label-for="input-3">
                    <b-form-select
                      id="input-3"
                      v-model="form_article.id_periodista"
                      :options="options_periodista"
                      required
                    ></b-form-select>
                  </b-form-group>
                  <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                    <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
                  </b-form-group>-->
                  <b-button type="submit" variant="primary">Registar</b-button>
                  <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
                </b-form>
              </b-modal>
              <b-modal id="modal-1" :title="'Registro de '+nameC" ok-only>
                <b-form @submit.prevent="register">
                  <b-form-group id="input-group-1" label="Título:" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="form.titulo"
                      type="text"
                      required
                      placeholder="Ingresar título"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label="Número de Registro:" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.numero_registro"
                      type="number"
                      required
                      placeholder="Ingresar registro"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-3" label="Tipo:" label-for="input-3">
                    <b-form-input
                      id="input-2"
                      v-model="form.tipo"
                      type="text"
                      required
                      placeholder="Ingresar tipo"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-4a" label="Periodicidad:" label-for="input-4a">
                    <b-form-input
                      id="input-4a"
                      v-model="form.periodicidad"
                      type="text"
                      required
                      placeholder="Ingresar periodicidad"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-3" label="Sucursal:" label-for="input-3">
                    <b-form-select
                      id="input-3"
                      v-model="form.id_sucursal"
                      :options="options"
                      required
                    ></b-form-select>
                  </b-form-group>
                  <b-button type="submit" variant="primary">Registar</b-button>
                  <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
                </b-form>
              </b-modal>
            </b-col>
          </b-row>
          <b-modal :id="infoModal.id" :title="'Editar '+nameS" ok-only @hide="resetInfoModal">
            <b-form @submit.prevent="register">
              <b-form-group id="input-group-m1" label="Teléfono:" label-for="input-m1">
                <b-form-input
                  id="input-m1"
                  v-model="form.titulo"
                  type="number"
                  required
                  placeholder="Ingresar título"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Dirección:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.numero_registro"
                  type="text"
                  required
                  placeholder="Ingresar dirección"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-3" label="Código de Sucursal:" label-for="input-3">
                <b-form-input
                  id="input-2"
                  v-model="form.tipo"
                  type="text"
                  required
                  placeholder="Ingresar código"
                ></b-form-input>
              </b-form-group>
              <b-form-group id="input-group-3" label="Código de Sucursal:" label-for="input-3">
                <b-form-input
                  id="input-2"
                  v-model="form.periodicidad"
                  type="text"
                  required
                  placeholder="Ingresar código"
                ></b-form-input>
              </b-form-group>
              <b-form-select
                v-model="form.id_sucursal"
                :options="options"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-select>
              <b-button type="submit" variant="primary">Registar</b-button>
              <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
            </b-form>
            <pre>{{ infoModal.content }}</pre>
          </b-modal>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
// import { AgGridVue } from "ag-grid-vue";
import CartBHeader from "@/components/Header";
import NavSide from "@/components/NavSide";
// import HeaderS from "@/components/HeaderSideBar";
export default {
  data() {
    return {
      showEdit: false,
      form: {
        titulo: "",
        numero_registro: "",
        tipo: "",
        periodicidad: "",
        id_sucursal: null
      },
      form_article: {
        fecha: "",
        titulo: "",
        contenido: "",
        id_numero_revista: null,
        id_periodista: null
      },
      options: [],
      options_periodista: [],
      options_numero_revista: [],
      name: "revistas",
      nameS: "revista",
      nameC: "Revistas",
      columnDefs: [],
      rowData: [],
      fields: [
        "actions",
        "titulo",
        "numero_registro",
        "tipo",
        "periodicidad",
        "id_sucursal",
        "created_at",
        "updated_at"
      ],
      items: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: {}
      },
      id_revista: null
    };
  },
  components: {
    CartBHeader,
    NavSide
  },
  beforeMount() {
    this.getRevistas();
    this.getSucursalesSelect();
    this.getNumeroRevistasSelect();
    this.getPeriodistasSelect();
  },
  methods: {
    getRevistas() {
      this.axios.get("http://127.0.0.1:8080/revista/list").then(response => {
        console.log(response.data);
        this.items = response.data.data;
      });
    },
    getNumeroRevistasSelect() {
      this.axios
        .get("http://127.0.0.1:8080/revista/select-list-nr")
        .then(response => {
          console.log(response.data);
          this.options_numero_revista = response.data;
        });
    },
    getSucursalesSelect() {
      this.axios
        .get("http://127.0.0.1:8080/sucursal/select-list")
        .then(response => {
          console.log(response.data);
          this.options = response.data;
        });
    },
    getPeriodistasSelect() {
      this.axios
        .get("http://127.0.0.1:8080/periodista/select-list")
        .then(response => {
          console.log(response.data);
          this.options_periodista = response.data;
        });
    },
    getSelect() {
      this.axios
        .get("http://127.0.0.1:8080/sucursal/select-list")
        .then(response => {
          console.log(response.data);
          this.options = response.data;
        });
    },
    register() {
      this.axios
        .post("http://127.0.0.1:8080/revista/store", this.axiosParams)
        .then(response => {
          console.log(response.data);
          this.$bvModal.hide("modal-1");
          this.$swal("Información registrada!!");
          this.getRevistas();
        });
    },
    registerArticulo() {
      this.axios
        .post("http://127.0.0.1:8080/articulo/store", this.axiosParamsAr)
        .then(response => {
          console.log(response.data);
          this.$bvModal.hide("modal-article");
          this.$swal("Información registrada!!");
        });
    },
    info(item) {
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.axios
        .post("http://127.0.0.1:8080/articulo/store", this.axiosParamsAr)
        .then(response => {
          console.log(response.data);
          this.$bvModal.hide("modal-article");
          this.$swal("Información registrada!!");
        });
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    deleteRow(item) {
      console.log(item.id_revista);
      this.id_revista = item.id_revista;
      this.axios
        .post(
          "http://127.0.0.1:8080/revista/delete",
          this.axiomsParamDel
        )
        .then(response => {
          console.log(response);
          this.$swal("Información eliminada!!");
          this.getRevistas();
        });
    }
  },
  computed: {
    axiosParams() {
      const params = new URLSearchParams();
      params.append("titulo", this.form.titulo);
      params.append("numero_registro", this.form.numero_registro);
      params.append("tipo", this.form.tipo);
      params.append("periodicidad", this.form.periodicidad);
      params.append("id_sucursal", this.form.id_sucursal);
      return params;
    },
    axiosParamsAr() {
      const params = new URLSearchParams();
      params.append("fecha", this.form_article.fecha);
      params.append("titulo", this.form_article.titulo);
      params.append("contenido", this.form_article.contenido);
      params.append("id_numero_revista", this.form_article.id_numero_revista);
      params.append("id_periodista", this.form_article.id_periodista);
      return params;
    },
    axiomsParamDel() {
      const params = new URLSearchParams();
      params.append("id_revista", this.id_revista);
      return params;
    }
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