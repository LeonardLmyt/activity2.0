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
    let ctx = wx.createContext();
    // Draw coordinates
    ctx.arc(50, 50, 10, 0, 2 * Math.PI)
    ctx.setFillStyle('#EEEEEE')
    ctx.fill()
    wx.drawCanvas({
      canvasId: 'progress',
      actions: ctx.getActions()
    });
  }
})