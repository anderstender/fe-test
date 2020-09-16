<template>
  <div class="v-table-row-cell-date">
    {{date}}
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import Operation from "@/models/Operation";
  import VTableColumn from "@/components/VTable/models/VTableColumn";
  import moment from "moment";

  @Component
  export default class VTableRowCellDate extends Vue {
    @Prop() row !: Operation;

    get moment() {
      return this.row.date.moment();
    }

    get month() {
      return this.moment.format('MMM').slice(0, 3);
    }

    get date() {
      return this.row.date.moment().format(`D ${this.month} YYYY`);
    }
  }
</script>

<style lang="scss">
  .v-table-row-cell-date {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    letter-spacing: -0.4px;
    text-transform: uppercase;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
</style>