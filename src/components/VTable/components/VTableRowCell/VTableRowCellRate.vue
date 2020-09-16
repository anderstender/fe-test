<template>
  <div class="v-table-row-cell-rate" :style="titleColorCss">
    <div class="v-table-row-cell-rate__mark">
      <div class="v-table-row-cell-rate__mark__color" :style="markCssStyle"></div>
    </div>
    <div class="v-table-row-cell-rate__title">
      {{assesmentText}}
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import Operation, { Assessment } from "@/models/Operation";

  @Component
  export default class VTableRowCellRate extends Vue {
    @Prop() row !: Operation;
    assements = Assessment;

    cssColorsVariables = {
      [Assessment.BADLY] : '--app__color__badly',
      [Assessment.SATISFACTORILY] : '--app__color__satisfactorily',
      [Assessment.EXCELLENT] : '--app__color__excellent'
    };

    get cssColor() {
      return this.row.assessment !== null && this.row.assessment !== undefined
        ? this.cssColorsVariables[this.row.assessment] : '--app__color__grey';
    }

    get markCssStyle() {
      return {
        'background-color' : `var(${this.cssColor})`,
      }
    }

    get titleColorCss() {
      return {
        '--v-table-row-cell-rate__title__opacity' :
          (this.row.assessment !== null && this.row.assessment !== undefined ? '1' : '0.3')
      }
    }

    get assesmentText() {
      return this.t(this.row.assessment !== null && this.row.assessment !== undefined
        ? this.assements[this.row.assessment] : 'NO_RATING');
    }
  }
</script>

<style lang="scss">
  .v-table-row-cell-rate {
    display: flex;
    flex-direction: row;

    & &__mark {
      display: flex;
      align-items: center;
      margin-right: 10px;

      &__color {
        height: 10px;
        width: 20px;
        border-radius: 5px;
      }
    }

    & &__title {
      font-size: 11px;
      letter-spacing: -0.293333px;
      opacity: var(--v-table-row-cell-rate__title__opacity);
    }
  }
</style>