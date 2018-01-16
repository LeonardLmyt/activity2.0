Page({
  data: {
    winHeight: 0,
    currentTab: 0,
    seatHeight: 35,
    tab: [
      {
        title: '待支付'
      },
      {
        title: '已支付'
      },
      {
        title: '退款'
      }
    ]
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight - that.data.seatHeight
        });
      }
    });
  },
  tabFun: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  }
})
