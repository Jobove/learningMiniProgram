Page({
  data: {
    canIGetUserData: false,
    hasUserInfo: false,
    userInfo: {}
  },

  onLoad: function () {
    if(wx.getUserProfile) {
      this.setData(
        {
          canIGetUserData: true
        })
    }
  },

  jumpToRecord(e) {
    wx.redirectTo({
      url: '../logs/logs',
    })
  },
  
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '获取用户信息',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
})