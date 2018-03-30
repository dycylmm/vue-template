import axios from 'axios'
import qs from 'qs'
import { $util } from '@/helper/index'

function requestHandle(params) {
  if (params.method === 'post') {
    params.data = qs.stringify(params.data)
  }
  return new Promise(function(resolve, reject) {
    axios(params)
      .then(res => {
        if (res.data.code === '10000') {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  post: function(url, params, op) {
    return requestHandle({
      method: 'post',
      url: url,
      data: params,
      headers: {
        'Content-Type': 'x-www-form-urlencoded'
      },
      ...op
    })
  },
  get: function(url, params, op) {
    return requestHandle({
      method: 'get',
      url: $util.queryString(url, params),
      ...op
    })
  }
}
