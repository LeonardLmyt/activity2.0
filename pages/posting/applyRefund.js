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
      show: false,
      maskClass: 'mask_animation',
      maskbgClass: 'maskbg_animation'
    },
    errormessage: [{
      content: '双方协商一致退款',
      check: true
    }, {
      content: '拍错/无法出去了/无法出行',
      check: false
    },
    {
      content: '商家要求加价',
      check: false
    },
    {
      content: '行程不成团/商家无法安排',
      check: false
    },
    {
      content: '商家超时未确定订单',
      check: false
    },
    {
      content: '需要退差价/没有使用优惠',
      check: false
    },
    {
      content: '其他',
      check: false
    }],
    checkmess:''
  },
  submit: {
    userdata: [],
    clause: {
      show: true,
      false: '/public/images/nor.png',
      true: '/public/images/sel.png'
    }
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
  }, 
  toggleUser:function(e){
    let t = this,
    i = e.currentTarget.dataset.index
    t.data.errormessage.map((value, index) => { if (index === i) { value.check = true;
      t.setData({
        checkmess: value.content
      })
     } else { value.check = false}})
    t.setData({
      errormessage: t.data.errormessage
    })
  }
})