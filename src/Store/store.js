import Vue from 'vue';
import Vuex from 'vuex';
import playlist from "./playlist.js";
import album from "./album.js";
import mutations from './Global/mutations.js';
import actions from './Global/actions.js';

Vue.use(Vuex)

export default new Vuex.Store({
  namespace: true,
  state: {
        Audio: new Audio(),
        pagePlaying: '',
        selectedSong: '',
        AudioSrc: '',
        isPlaying: false,
        isActivePlayer: false,
        currentDuration:0,
        songDuration: 0,
        currentProgressBar: 0,
        trackProgressBar: 0,
        trackTimeLoop:'',
        mediaSettings: {
            openVolume: false
        },
  },
  
  modules: {
    playlist: playlist,
    album: album,
  },
  mutations: {
    pagePlaying (state, payload) {
      state.pagePlaying = payload;
      console.log(state.pagePlaying);
    } 
  },
  actions: {
    asyncpagePlaying ({commit}, payload) {
      commit ('pagePlaying', payload);
    }
  }
})
