// pages/camera/camera.js
Page({
  takePhoto: function () {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log("拍照");
        this.setData({
          src: res.tempImagePath
        })
        wx.previewImage({
          urls: [this.data.src],
        })
        //设置缓存
        console.log('开始保存')
        wx.setStorage({
          key: 'key1',
          data: this.data.src,
          success: function (res) {
            console.log('异步保存成功')
          }
        }),
          //获取缓存
          wx.getStorage({
            key: 'key1',
            success: function (res) {
              console.log(res.data)
            }
          })
      }
    })
  }
})