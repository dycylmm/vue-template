import apis from '@/api/index'
import * as filters from '@/global/filters'

const globalHelper = {
  $apis: apis
}

const initGlobalHelper = Vue => {
  Object.keys(globalHelper).forEach(key => {
    Object.defineProperty(Vue.prototype, key, {
      value: globalHelper[key]
    })
  })
}

const initFilters = Vue => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}

const initGlobal = Vue => {
  initGlobalHelper(Vue)
  initFilters(Vue)
}

export default initGlobal
