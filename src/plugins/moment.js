import Vue from "vue";
import moment from "moment";
import "moment/locale/pt-br";

const install = (Vue) => {
  moment().locale("pt-br");
  moment.updateLocale('pt-br', { invalidDate: "Não Informado" })
  Vue.prototype.$moment = moment;
};

Vue.use({install})

export default { install };