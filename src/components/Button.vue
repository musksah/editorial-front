<template>
  <span>
    <button
      style="height: 20px; line-height: 0.5"
      v-on:click="invokeParentMethod"
      class="btn btn-info"
    >Invoke Parent</button>
  </span>
</template>
<script>
export default {
  methods: {
    invokeParentMethod() {
      this.params.context.componentParent.methodFromParent(
        `Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`
      );
    }
  }
};
</script>