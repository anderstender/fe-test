<template>
  <div class="v-table-row-cell-culture">
    <div class="v-table-row-cell-culture__icon">
      <v-icon :icon="culture[field.culture]" />
    </div>
    <div class="v-table-row-cell-culture__title">
      {{t(culture[field.culture])}}
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import Operation from "@/models/Operation";
  import {vOperationsModule} from "@/store/vOperations.module";
  import Field, {Culture} from "@/models/Field";
  import VIcon from "@/components/VIcon.vue";
  @Component({
    components: {VIcon}
  })
  export default class VTableRowCellCulture extends Vue {
    @Prop() row !: Operation;

    @vOperationsModule.State field !: Field;
    culture = Culture;
  }
</script>

<style lang="scss">
  .v-table-row-cell-culture {
    display: flex;
    flex-direction: row;

    & &__icon {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }

    & &__title {
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      letter-spacing: -0.338461px;
    }
  }
</style>