// pages/detatl/detatl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title_centent: '香格里拉 普达拉 梅里雪山 大美沪沽湖悠闲师深度游',
    no_meny: '￥399',
    meny: '299',
    people: '2人团',
    spell: '已拼团423件',
    point: '●',
    list_name: '晓明alex',
    imgUrls: [
      '/public/images/img_750X380_01.png ',
      '/public/images/img_690X380_01.png ',
      '/public/images/banner01.png'
    ],
    pole: '报名人数',
    numbers: '66/100',
    out: '出发时间',
    time: '2017/12/12  8:30',
    collection: '集合地点',
    place: '广州市白云区石槎路369号',
    eventlist: '活动详情',
    content: '大香格里拉对于香格里拉这个世界的知名品牌,四川、云南、西藏三省区一度争得火热2001年,云南省将迪拜藏族自治州甸县,更名为香格里拉县。2002年.大香格里拉对于香格里拉这个世界的知名品牌,四川、云南、西藏三省区一度争得火热2001年',
    content_next: '大香格里拉对于香格里拉这个世界的知名品牌,四川、云南、西藏三省区一度争得火热2001年,云南省将迪拜藏族自治州甸县,更名为香格里拉县。2002年.大香格里拉对于香格里拉这个世界的知名品牌,四川、云南、西藏三省区一度争得火热2001年'

  },
  onLoad: function (options) {

  },
  onReady: function () {
    let t = this
    t.drawCanvas(10) //参数：进度
  },
  drawCanvas: function (num) { //生成进度算法
    const ctx = wx.createCanvasContext(),
      grd = ctx.createLinearGradient(30, 10, 120, 10)
    ctx.beginPath() //绘制灰色圆弧
    ctx.setLineWidth(5)
    ctx.arc(40, 40, 30, 0, Math.PI * 2, false)
    ctx.setStrokeStyle("#dddddd")
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath() //绘制剩余数量
    ctx.setFontSize(20)
    ctx.setTextAlign('center')
    ctx.setFillStyle("#61666d")
    ctx.fillText(100 - num, 40, 40)
    ctx.closePath()

    ctx.beginPath() //绘制剩余
    ctx.setFontSize(10)
    ctx.setTextAlign('center')
    ctx.setFillStyle("#949ab0")
    ctx.fillText('剩余', 40, 54)  
    ctx.closePath()

    grd.addColorStop(0, '#93D5FF')  //绘制环形渐变
    grd.addColorStop(0.16, '#97D7FF')
    grd.addColorStop(0.33, '#7AC5FF')
    grd.addColorStop(0.5, '#6989fb')
    grd.addColorStop(0.66, '#577bfd')
    grd.addColorStop(0.83, '#456dff')
    grd.addColorStop(1, '#355ffb')

    ctx.beginPath() //绘制环形
    ctx.arc(40, 40, 30, 1.5 * Math.PI, ((100 - num) * 0.02 + ((100 - num) < 25 ? 1.5 : -0.5)) * Math.PI)
    ctx.setLineWidth(5)
    ctx.setLineCap('round')
    ctx.setStrokeStyle(grd)
    ctx.setShadow(1, 1, 5, '#93D5FF')
    ctx.stroke()
    ctx.closePath()

    wx.drawCanvas({
      canvasId: 'progress',
      actions: ctx.getActions()
    });
  }
})