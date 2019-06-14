// pages/special/special.js
//获取应用实例
const app = getApp()
// 引用模块
const utilApi = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '万里热风',
    barBg: '#f2f2f2',
    color: '#000000',
    specialNo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      specialNo:options.specialNo,
      no:options.specialNo
    })


    utilApi.requestPromise("https://hotwind.liuhaitao.vip/hot-wind/specialContent?no="+this.data.specialNo)
      // 使用.then处理结果
      .then(res => {

        let ret = res.data.data;

        console.log(ret);

        this.setData({
          specialContent:ret
        });

      })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})