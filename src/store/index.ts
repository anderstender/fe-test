import Vuex from "vuex";
import {vOperationsNamespace} from "@/store/vOperations.module";
import vOperations from "@/store/vOperations.module";

import {i18nNamespace} from "@/store/i18n.module";
import i18n from "@/store/i18n.module";

export default new Vuex.Store({
  modules: {
    [vOperationsNamespace]: vOperations,
    [i18nNamespace]: i18n
  }
});