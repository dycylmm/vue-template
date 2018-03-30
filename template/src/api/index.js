import $ajax from './ajax'
import * as config from '@/config/index'

// 使用proxyTable功能
// const apiRoot = process.env.NODE_ENV === 'development' ? '' : config.apiRoot

const apiRoot = config.apiRoot

function requestUrl(path) {
  return `${apiRoot}${path}`
}

export default {
  getCustomers(data) {
    return $ajax.get(requestUrl('customers'), data)
  }
}
