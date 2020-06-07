<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Sistema Gestión Editoriales</b-navbar-brand>
      <!-- <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" placeholder="buscar"></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
      </b-nav-form> -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" right>Iniciar Sesión</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
    };
  }
};
</script>