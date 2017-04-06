/**
 * Created by shenlu on 17/4/1.
 */
/**
 * Created by shenlu on 17/3/31.
 */

import { fetchReq } from '../../tools';

const CURRENT_CITY_DATA = 'CURRENT_CITY_DATA';
const SEARCH_PLACE_DATA = 'SEARCH_PLACE_DATA';

const mutations = {
  [CURRENT_CITY_DATA]: (state, { cityData }) => {
    state.cityData = cityData;
  },
  [SEARCH_PLACE_DATA]: (state, { placeData }) => {
    state.placeData = placeData;
  },
};
const getters = {

};

const state = {
  cityData: {},
  placeData:[]
};

const actions = {
  fetchCityData({ commit }, id) {
    const url = `/v1/cities/${id}`;
    fetchReq(url)
      .then(cityData => commit(CURRENT_CITY_DATA, { cityData }));
  },
  fetchSearchPosi({ commit }, {id, value}) {
    const url = `/v1/pois?type=search&city_id=${id}&keyword=${value}`;
    fetchReq(url)
      .then(placeData => commit(SEARCH_PLACE_DATA, { placeData }));
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
