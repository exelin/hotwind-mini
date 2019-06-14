//index.js
//获取应用实例
const app = getApp()
// 引用模块
const utilApi = require('../../utils/util.js')

Page({
  data: {
    title: '万里热风',
    barBg: '#f2f2f2',
    color: '#000000',
    specialNo: ''
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  onLoad: function() {
    this.requestNet();
  },

  //下拉刷新
  onPullDownRefresh() {

    utilApi.requestPromise("https://hotwind.liuhaitao.vip/hot-wind/random")
      // 使用.then处理结果
      .then(res => {
        let ret = res.data.data;
        if (ret.source == null) {
          ret.source = '';
        }
        if (ret.author == null) {
          ret.author = '';
        }

        wx.stopPullDownRefresh();

        this.setData({
          content: ret.content,
          source: ret.source,
          author: ret.author,
        });

      })

  },

  // 登录验证
  requestNet: function() {
    var that = this;

    utilApi.requestPromise("https://hotwind.liuhaitao.vip/hot-wind/random")
      // 使用.then处理结果
      .then(res => {
        let ret = res.data.data;
        if (ret.source == null) {
          ret.source = '';
        }
        if (ret.author == null) {
          ret.author = '';
        }
        that.setData({
          content: ret.content,
          source: ret.source,
          author: ret.author,
        });

      }).then(function() {
        wx.request({
          url: 'https://hotwind.liuhaitao.vip/hot-wind/special',
          method: 'GET',
          success: function(res) {
            console.log(res);
            that.setData({
              specialTitle: res.data.data.specialTitle,
              specialNo: res.data.data.specialNo
            });

          }
        })

      })

  },
  specialContent: function() {
    wx.navigateTo({
      url: '../special/special?specialNo=' + this.data.specialNo,
    });
  }



})