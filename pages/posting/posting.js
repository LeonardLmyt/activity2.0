Page({
  data: {
    project: {
      cover: '/public/images/3@2x.png',
      title: '雪色浪漫 滑雪 看冰河雾松',
      setout: '广州出发',
      time: '06/18至06/22',
      originalprice: '299',
      price: '199'
    },
    winHeight: 0,
    currentTab: 0,
    seatHeight: 35,
    tab: [
      {
        title: '全部'
      },
      {
        title: '待付款'
      },
      {
        title: '已付款'
      },
      {
        title: '待成团'
      },
      {
        title: '售后'
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
