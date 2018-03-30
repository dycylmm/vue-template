import $ajax from './ajax'
import * as config from '@/config/index'

let apiRoot = process.env.NODE_ENV === 'development' ? '' : config.apiRoot

// mock接口api
apiRoot = 'http://127.0.0.1:9090/'

function requestUrl(path) {
  return `${apiRoot}${path}`
}

export default {
  getCustomers(data) {
    return $ajax.get(requestUrl('customers'), data)
  }
}
