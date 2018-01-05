// pages/detatl/detatl_activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    project: {
      cover: '/public/images/3@2x.png',
      title: '雪色浪漫 滑雪 看冰河雾松',
      setout: '广州出发',
      time: '06/18至06/22',
      originalprice: '299',
      price: '199'
    },
    initialuserdata:[
      {
        id: 1,
        name: '帝江',
        phone: '13539792081',
        idcard: '441265199346183644',
        check:false
        },
      {
        id: 2,
        name: '句芒',
        phone: '13539792081',
        idcard: '441265199346183644',
        check: false
      },
      {
        id: 3,
        name: '祝融',
        phone: '13539792081',
        idcard: '441265199346183644',
        check: false
      },
      {
        id: 4,
        name: '蓐收',
        phone: '13539792081',
        idcard: '441265199346183644',
        check: false
      }
    ],
    submit: {
      userdata: [
        {
          id:1,
          name:'张海川',
          phone:'13539792081',
          idcard: '441265199346183644',
          check: false
        }
      ],
      clause: {
        show: true,
        false: '/public/images/fl_icon_confirm_nor.png',
        true: '/public/images/fl_icon_confirm_sel.png'
      }
    },
    toggleMask:{
      show: false,
      maskClass:'mask_animation',
      maskbgClass: 'maskbg_animation'
    }
  },
  clause: function (e) {
    this.data.submit.clause.show = !e.currentTarget.dataset.show
    this.setData({
      submit: this.data.submit
    })
  },
  toggleMask:function(e){
    this.data.toggleMask.show = !e.currentTarget.dataset.show
    this.setData({
      toggleMask: this.data.toggleMask
    })
  }
})