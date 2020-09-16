<template>
  <div class="v-field-operation-add-button">
    <v-button>
        <template slot="icon">
          <v-icon icon="PLUS_GREEN" />
        </template>
        {{t("ADD_OPERATION")}}
    </v-button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import VButton from "@/components/VButton.vue";
  import VIcon from "@/components/VIcon.vue";

  @Component({
    components :{
      VIcon,
      VButton
    }
  })
  export default class VFieldOperationAddButton extends Vue {}
</script>