var ftp = require('../config/config').ftp
var client = require('scp2')
var path = require('path')
var codePath = process.cwd()
var distPath = path.resolve(codePath, './dist/')
var tid = ''
var time = 0

function waitingDeploy() {
  console.log(
    '=====start deploy=====\n' + ftp.host + ftp.path + '\n==============='
  )
  tid = setInterval(function() {
    console.log('deploying cost time: ' + time + ' ms')
    time += 100
  }, 100)
}

function deploy() {
  waitingDeploy()
  client.scp(
    distPath,
    {
      host: ftp.host,
      username: ftp.username,
      password: ftp.password,
      path: ftp.path
    },
    err => {
      clearInterval(tid)
      if (!err) {
        console.log('===== deploy success =====\n')
      } else {
        console.log('===== deploy error ===== \n')
        console.log('===== ' + err + ' =====')
      }
    }
  )
}

deploy()
