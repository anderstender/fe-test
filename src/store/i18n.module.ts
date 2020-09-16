import Vue from "vue";
import {Action, Mutation, Module, VuexModule} from 'vuex-module-decorators';
import {namespace} from 'vuex-class';

export const i18nNamespace = "i18n";
export const i18nModule = namespace(i18nNamespace);

@Module({namespaced: true, stateFactory: true})
export default class i18n extends VuexModule<any> {

  locale: string = "ru-RU";

  translatesImports: any = {
    ['ru-RU'] : () => import("../../locales/intterra-ru-RU.json").then(m => m.default)
  };

  translates: any = {};

  @Mutation setTranslates(translates: any = {}){
    this.translates = translates;
  }

  @Mutation setLocale(locale: "ru-RU") {
    this.locale = locale;
  }

  @Action
  async loadTranslates() {
    const {  commit, getters} = this.context;
    const translates = await getters['translateModule']();
    commit('setTranslates', translates);
  }

  get translateModule() {
    return this.translatesImports[this.locale];
  }
}