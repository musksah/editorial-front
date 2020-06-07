<template>
  <b-nav vertical class="w-35 ml-4 mt-4">
    <b-nav-item to="/" active>Sucursales</b-nav-item>
    <b-nav-item @click="makeReport">Reporte Empleados</b-nav-item>
    <b-nav-item to="/revistas">Revistas</b-nav-item>
  </b-nav>
</template>
<script>
export default {
  methods: {
    makeReport() {
      window.open("http://localhost:8080/empleados/report");
    }
  }
};
</script>