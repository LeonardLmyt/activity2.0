Page({
  data: {
    place_name: '广州',
    select_activities: '精选活动',
    set_out: '广州出发',
    tite: '免费挑战人生的第一哥500米,四姑娘山大峰登山',
    content: '背包玩世界彩虹之国,自驾南非克鲁格国家公园',
    di: '上海',
    cast: "450人浏览",
    winHeight: 0,
    currentTab: 0,
    seatHeight: 35,
    tab: [
      {
        title: '报名中'
      },
      {
        title: '已结束'
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
