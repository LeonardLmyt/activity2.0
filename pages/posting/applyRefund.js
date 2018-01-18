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
    checked: false,
    toggleMask: {
      show: true,
      maskClass: 'mask_animation',
      maskbgClass: 'maskbg_animation'
    },
    errormessage: [{
      content: '双方协商一致退款',
      check: true
    }, {
      content: '拍错/无法出去了/无法出行',
      check: true
    },
    {
      content: '商家要求加价',
      check: true
    },
    {
      content: '行程不成团/商家无法安排',
      check: true
    },
    {
      content: '商家超时未确定订单',
      check: true
    },
    {
      content: '需要退差价/没有使用优惠',
      check: true
    },
    {
      content: '其他',
      check: true
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  checked: function (e) {
    let t = this
    t.setData({
      checked: !t.data.checked
    })
  },
  toggleMask: function (e) { //弹出添加其他人层，双向事件
    this.data.toggleMask.show = !e.currentTarget.dataset.show
    this.setData({
      toggleMask: this.data.toggleMask
    })
  }
})