import utils from '../static/utils'
import Vue  from 'vue'
import Vuex from  "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo:{},
		updatePlate: {}
	},
	/**
	 * getters
	 */
	getters: {
	    userInfo: state => utils.getLocal('userInfo'),
		updatePlate: state => state.updatePlate,
	},
	
	/**
	 * mutations
	 */
	mutations: { 
		SET_USER_INFO (state, playload) {
			if (playload) {
			    utils.setLocal('userInfo', playload)
			    state.userInfo = playload
			} else {
			    state.userInfo = utils.getLocal('userInfo') || {}
			}
		},
		SET_UPDATE_PLATE (state, playload = {}) {
		    state.updatePlate = {
		        date: new Date().getTime(),
		        ...playload
		    }
		}
	}
})

export default store
