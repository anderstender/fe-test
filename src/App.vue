<template>
  <div class="fe-test-app">
    <v-header/>
    <v-router-view-wrapper/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import VHeader from "@/components/VHeader.vue";
  import VRouterViewWrapper from "@/components/VRouterViewWrapper.vue";
  import {i18nModule} from "@/store/i18n.module";

  @Component({
    components: {
      VHeader,
      VRouterViewWrapper
    }
  })
  export default class App extends Vue {

    @i18nModule.Action loadTranslates;

    async created() {
      this.loadTranslates();
    }
  }
</script>

<style lang="scss">
  @import "scss/css-variables.scss";
  @import "scss/main.scss";

  .fe-test-app {
    height: 100%;
    box-sizing: border-box;
  }
</style>