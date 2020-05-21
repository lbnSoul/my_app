<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  @Component
  export default class ReportIndex extends Vue {

  }
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    color: rgb(102, 111, 131);;
    -webkit-font-smoothing: subpixel-antialiased;
    box-sizing: border-box;
  }
  #app, body, html {
    height: 100%;
    width: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
    background: #f3f4f5;
  }
</style>
