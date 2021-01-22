import utils from '../static/utils'
const state = {
	userInfo:{
		userName: '王磊'
	}
} 
/**
 * getters
 */
const getters = {
    userInfo: state.userInfo
}

/**
 * mutations
 */
const mutations = { 
	['SET_USER_INFO'.SET_USER_INFO] (state, playload) {
	    if (playload) {
	        utils.setLocal('userInfo', playload)
	        state.userInfo = playload
	    } else {
	        state.userInfo = utils.getLocal('userInfo') || {}
	    }
	}
}

export default {
    state,
	mutations,
	getters
}