/**
 * Created by shenlu on 17/3/31.
 */

import { fetchReq } from '../../tools';

const HOT_CTIY = 'HOT_CTIY';
const GUESS_CTIY = 'GUESS_CTIY';
const GROUP_CTIY = 'GROUP_CTIY';

const mutations = {
  [HOT_CTIY]: (state, { hotData }) => {
    state.hotCity = hotData;
  },
  [GUESS_CTIY]: (state, { guessData }) => {
    state.guessCity = guessData;
  },
  [GROUP_CTIY]: (state, { groupData }) => {
    state.gorupCity = groupData;
  },

};
const getters = {

};

const state = {
  hotCity: [],
  gorupCity: {},
  guessCity: {},
};

const actions = {
  fetchGuessCity({ commit }) {
    const url = '/v1/cities?type=guess';
    fetchReq(url)
      .then(guessData => commit(GUESS_CTIY, { guessData }));
  },
  fetchHotCity({ commit }) {
    const url = '/v1/cities?type=hot';
    fetchReq(url)
      .then(hotData => commit(HOT_CTIY, { hotData }));
  },
  fetchGorupCity({ commit }) {
    const url = '/v1/cities?type=group';
    fetchReq(url)
      .then(groupData => commit(GROUP_CTIY, { groupData }));
  }

};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
