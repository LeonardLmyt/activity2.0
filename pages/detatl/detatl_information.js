Page({
  data: {
     sex:true
  },
  onLoad: function (options) {
  
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  checkSex:function(e){
    let t = this
    t.setData({
      sex: e.currentTarget.dataset.ch === t.data.sex ? t.data.sex : !t.data.sex
    })
  }
})