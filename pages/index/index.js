//index.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 0,

   
  },

  /**
   * current 改变时会触发 change 事件
   * @param {*} e 
   */
  swiperChange(e) {
    this.setData({
      pageIndex: e.detail.current
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

  },

 
})