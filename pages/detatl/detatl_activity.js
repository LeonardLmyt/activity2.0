let mixin = require('../../public/js/mixin.js'),
  mx = null;

Page({
  data: {
    layer: {
      layerShow: true,
      layerStatus: '',
      layerContent: ''
    },
    project: {
      cover: '/public/images/3@2x.png',
      title: '雪色浪漫 滑雪 看冰河雾松',
      setout: '广州出发',
      time: '06/18至06/22',
      originalprice: '299',
      price: '199'
    },
    initialuserdata: [ //用户列表数据
      {
        id: 1,
        name: '帝江',
        phone: '13539792081',
        idcard: '441265199346183644',
        check: false
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
      userdata: [],
      clause: {
        show: true,
        false: '/public/images/fl_icon_confirm_nor.png',
        true: '/public/images/fl_icon_confirm_sel.png'
      }
    },
    toggleMask: {
      show: false,
      maskClass: 'mask_animation',
      maskbgClass: 'maskbg_animation'
    }
  },
  onLoad:function(){
    let t = this
    mx = new mixin(t)
  },
  clause: function (e) { //同意免责条款
    this.data.submit.clause.show = !e.currentTarget.dataset.show
    this.setData({
      submit: this.data.submit
    })
  },
  toggleMask: function (e) { //弹出添加其他人层，双向事件
    this.data.toggleMask.show = !e.currentTarget.dataset.show
    this.setData({
      toggleMask: this.data.toggleMask
    })
  },
  toggleUser: function (e) { //添加提交人员信息，双向事件
    let t = this,
      ds = e.currentTarget.dataset,
      i = t.getIdForIndex(ds.id, t.data.initialuserdata),
      s_i = t.getIdForIndex(ds.id, t.data.submit.userdata)
    t.data.initialuserdata[i].check = !ds.check
    if (!ds.check) { //判断是否选中
      t.data.submit.userdata.push(t.data.initialuserdata[i])
    }else{
      t.data.submit.userdata.splice(s_i,1)
    }
    t.setData({
      submit: t.data.submit,
      initialuserdata: t.data.initialuserdata
    })
  },
  getIdForIndex: function (id, data) { //根据id获取当前数据序号
    return data.findIndex(__v=> __v.id === id);
  },
  submit:function(){
    let t = this
    if (!t.data.submit.clause.show){
      mx.layer({
        state:'layer-errer',
        content:'不同意免责条款无权支付',
        time:2
      })
      return false
    }
    if (!t.data.submit.userdata.length) {
      mx.layer({
        state: 'layer-errer',
        content: '无报名人员信息',
        time: 2
      })
      return false
    }
  }
})