const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
* postPromise.request改写成Promise方式
* 请求方式：post
* @param：{string} myUrl 接口地址
* @return: Promise实例对象
*/
function postPromise(myUrl, params) {
  // 返回一个Promise实例对象
  return new Promise((resolve, reject) => {
    wx.request({
      url: myUrl,
      data: params,
      method: 'POST',
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: res => resolve(res),
      fail: (err) => reject(err)
    })
  })
}

/**
* requestPromise.request改写成Promise方式
* 请求方式：post
* @param：{string} myUrl 接口地址
* @return: Promise实例对象
*/
function requestPromise(myUrl) {
  // 返回一个Promise实例对象
  return new Promise((resolve, reject) => {
    wx.request({
      url: myUrl,
      method: 'GET',
      success: res => resolve(res),
      fail: (err) => reject(err)
    })
  })
}

module.exports = {
  formatTime: formatTime,
  postPromise: postPromise,
  requestPromise: requestPromise
}