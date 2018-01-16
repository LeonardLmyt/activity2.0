Page({
  data: {
    address: "广州",
    row_home: '北京',
    windowHeight: 0,
    letter: [
      { l: '#', c: ['广州'] },
      { l: 'A', c: ['广州'] },
      { l: 'B', c: ['广州'] },
      { l: 'C', c: ['广州'] },
      { l: 'D', c: ['广州'] },
      { l: 'E', c: ['广州'] },
      { l: 'F', c: ['广州'] },
      { l: 'G', c: ['广州'] },
      { l: 'H', c: ['广州'] },
      { l: 'I', c: ['广州'] },
      { l: 'J', c: ['广州'] },
      { l: 'K', c: ['广州'] },
      { l: 'L', c: ['广州'] },
      { l: 'M', c: ['广州'] },
      { l: 'N', c: ['广州'] },
      { l: 'O', c: ['广州'] },
      { l: 'P', c: ['广州'] },
      { l: 'Q', c: ['广州'] },
      { l: 'R', c: ['广州'] },
      { l: 'S', c: ['广州'] },
      { l: 'T', c: ['广州'] },
      { l: 'U', c: ['广州'] },
      { l: 'V', c: ['广州'] },
      { l: 'W', c: ['广州'] },
      { l: 'X', c: ['广州'] },
      { l: 'Y', c: ['广州'] },
      { l: 'Z', c: ['广州'] }
    ],
    toView: '',
    reckon: {
      lh: 0,
      nlh: 0,
      th: 0
    }
  },
  onLoad: function () {
    let t = this
    wx.getSystemInfo({
      success: function (res) {
        t.data.reckon.lh = res.windowHeight * 0.9
        t.data.reckon.nlh = res.windowHeight * 0.9 / t.data.letter.length
        t.data.reckon.th = res.windowHeight * 0.09
        t.setData({
          windowHeight: res.windowHeight,
          reckon: t.data.reckon
        });
      }
    })
  },
  letterTouchStart: function (e) {
    let t = this
    t.setData({
      toView: e.currentTarget.dataset.id
    })
  },
  letterTouchMove: function (e) {
    let t = this,
      rt = t.reckonTouch(e)
    t.setData({
      toView: rt
    })
  },
  reckonTouch: function (e) {
    let t = this,
      pn = e.touches[0],
      lh = t.data.reckon.lh,
      nlh = t.data.reckon.nlh,
      th = t.data.reckon. th,
      n = t.data.letter[Math.floor((pn.pageY - th) / nlh)].l
    return n
  }
})
