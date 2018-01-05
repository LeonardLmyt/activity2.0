App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  globalData:{
      userInfo : {}
      },
  onLaunch: function () {
    var that = this;
    var status = wx.getStorageSync('keeplogin');
    //登录  === start === 
    // if(status == ''){
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.request({
              url: 'https://www.152gd.com/footflag/Home/Index/login',
              data: {
                code: res.code
              },
              success: function (res1) {
                console.log(res1);
                console.log(res1.data.openid);
                var openid = res1.data.openid;
                wx.setStorageSync('openid', res1.data.openid);
                wx.setStorageSync('keeplogin', res1.data.keeplogin);
              }
            })
          }
        }
      })
    // }
    //登录  === end === 
  },

//  ==== 获取用户信息 start====
  getUserInfo:function(){
    var that = this;
    var keeplogin = wx.getStorageSync('keeplogin'); 
    var openid = wx.getStorageSync("openid");
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var iv = res.iv;
        var encryptedData = res.encryptedData;
        wx.request({
          url: 'https://www.152gd.com/footflag/Home/Index/getUserInfo',
          data: {
            openid: openid,
            iv: iv,
            keeplogin: keeplogin,
            encryptedData: encryptedData
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {  
            wx.setStorage({
              key: 'userInfo',
              data: res.data,
            })
          }

        })
      }
    }) 
  },
  //  ==== 获取用户信息 end ====

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  
})
