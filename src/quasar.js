import Vue from 'vue'

import './styles/quasar.scss'
import lang from 'quasar/lang/pt-br.js'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import { Quasar, Loading, Notify, Dialog } from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {
    Loading, Notify, Dialog
  },
  lang: lang
})