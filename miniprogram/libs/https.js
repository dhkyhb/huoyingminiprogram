const MainUrl = 'http://v.juhe.cn/'
const Promise = require('bluebird.js')
// 笑话Key值  
const FunKey = '4bccc3f1ee021fd12621dfffb8ddcfcf'
const header = {
  'Content-type': 'json'
}

function TestApi(type, params) {
  // resole - 成功回调
  // reject - 失败回调
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${MainUrl}/${type}`,
      data: Object.assign({}, params),
      header: header,
      success: resolve,
      fail: reject
    })
  })
}

module.exports = {
  MainUrl: MainUrl,
  FunKey: FunKey,
  TestApi(params) {
    return TestApi('joke/content/list.php', params)
    .then(res => res.data,
      error => console.log(error))
  }
}