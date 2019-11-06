
const https = {
    request(options = {}) {
        const { url, method, data, header = {} } = options;
        try {
            let value = wx.getStorageSync("usertoken");
            if (value) {
                header.Authorization = value//在请求头中携带token
            }else{
            }
        } catch (e) {
            throw e;
        }
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                method,
                data,
                header,
                success: res => {
                    if (res.statusCode == 404) {
                        reject()
                        return false;
                    } else if (res.statusCode == 401) {
                        wx.hideLoading();
                        wx.showModal({
                            title: "提示",
                            content: res.data.msg,
                            showCancel: false,
                            success(res) {
                                if (res.confirm) {
                                    wx.reLaunch({ url: "../tologin/main" });
                                }
                            }
                        });
                        try {
                            wx.removeStorageSync('usertoken')//如果token过期删除本地token
                        } catch (e) {}
                        return false;
                    } else if (res.statusCode != 200) {
                        wx.showToast({
                            title: '网络出错,稍后在试!',
                            icon: 'none'
                        });
                        return false
                    }
                    resolve(res.data)
                },
                fail: err => {
                    reject(err)
                }
            })
        })
    }
}

export default https