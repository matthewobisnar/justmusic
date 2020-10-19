export default {
        asyncSonglist({commit}, payload){
          commit('songlist', payload, {root: true});
        },
        ayncChangeSong({ commit, state, rootState }, payload) {

            commit('changeSong', payload);

            rootState.Audio.addEventListener("loadedmetadata", function() {
                rootState.songDuration = Math.round(rootState.Audio.duration);
                commit('play');
                commit('getcurrentDuration');
                commit('isPlaying', true);
            });

            rootState.Audio.addEventListener('ended', function () {
                if (rootState.Audio.ended) {
                    console.log("Ended");
                    if ((rootState.currentSongIndex += 1) < rootState.songlist.length) {
                      commit('changeSong', rootState.currentSongIndex);
                    } else {
                      commit('stop');
                    }
                }
            });
        },
        asyncPlay({commit}) {
            commit('play');
            commit('isPlaying', true);
        },
        asyncPause({commit}) {
            commit('pause');
            commit('isPlaying', false);
        },
        asyncForward({commit, state}) {
            commit('forward');
            commit('changeSong', state.currentSongIndex);
        },
        asyncBackward({commit, state}) {
            commit('backward');
            commit('changeSong', state.currentSongIndex);
        },
        asyncStop({commit}) {
            commit('pause');
            commit('stop');
        },
        asyncReset({commit}) {
            commit('reset');
        },

        asyncSelectAlbum({commit}, payload) {
            commit('selectAlbum', payload);
        },
        asyncaAlbumSongsList({commit, rootState}, payload) {
        //    commit('albumSongslist', payload);

        },
}