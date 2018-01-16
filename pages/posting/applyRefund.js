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
    checked:false
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
  checked:function(e){
    let t = this
    t.setData({
      checked: !t.data.checked
    })
  }
})