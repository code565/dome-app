let StorageEs = {}

/**
 * 设置localStorage
 * @param {*} key
 * @param {*} val
 */
StorageEs.setLocal = function (key, val) {
	if (key, val) wx.setStorageSync(key, val)
}

/**
 * 获取localStorage
 * @param {*} key
 */
StorageEs.getLocal = function (key) {
    if (key) return wx.getStorageSync(key)
    return null
}

export default StorageEs