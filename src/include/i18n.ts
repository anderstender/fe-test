import Vue  from 'vue';

import {computed, ref} from '@vue/composition-api';
import store from '@/store';

const state = ref(store.state.i18n);
const translates = computed(() => state.value.translates);

function translate(translations: any, key: string = ''): string {
  return translations[key] || key;
}

export function t(key: string) {
  return computed(() => translate(translates.value, key));
}

const vueTranslatePlugin = (vue: typeof Vue) => {
  vue.prototype.t = function( key: string ): string {
    const translates = this.$store.state.i18n.translates;
    return translate(translates, key);
  };
};

Vue.use(vueTranslatePlugin);


