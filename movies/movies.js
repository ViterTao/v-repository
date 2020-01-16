// pages/listDel/index.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    // x轴方向的偏移
    x: 0,
    // 当前x的值
    currentX: 0
  },

  handleMovableChange: function (e) {
    // this.data.currentX = e.detail.x;
    this.data.currentX = e.detail.x;
  },

  handleTouchend: function (e) {
    this.isMove = true;
    if (this.data.currentX < -46) {
      this.data.x = -92;
      this.setData({
        x: this.data.x
      });
    } else {
      this.data.x = 0;
      this.setData({
        x: this.data.x
      });
    }
  },
  handleTouchestart: function (e) { },
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    // let _this = this;
    // wx.createSelectorQuery().selectAll('.delBtn ').boundingClientRect(function(rect) {
    // _this.data.delWidth = rect[0].width;
    // }).exec();
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