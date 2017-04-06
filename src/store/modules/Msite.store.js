/**
 * Created by shenlu on 17/3/31.
 */

import { fetchReq } from '../../tools';

const SHOP_LIST_DATA = 'SHOP_LIST_DATA';
const SHOP_SORT_DATA = 'SHOP_SORT_DATA';
const POIS_DATA = 'POIS_DATA';
const mutations = {
  [SHOP_LIST_DATA] : (state, shopList ) => {
    state.shopList = shopList
  },
  [SHOP_SORT_DATA] : (state, shopSort ) => {
    state.shopSort = shopSort
  },
  [POIS_DATA] : (state, poisData ) => {
    state.poisData = poisData
  },
};
const getters = {

};

const state = {
  shopList: [],
  shopSort: [],
  poisData: {},
};

const actions = {
  fetchShopList({ commit }, { latitude, longitude, limit }) {
    const url = `/shopping/restaurants?latitude=${latitude}&longitude=${longitude}&offset=0&limit=${limit}&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=`
    fetchReq(url)
      .then(shopList => commit(SHOP_LIST_DATA,  shopList ));
  },
  fetchShopSort({ commit }, { geohash}) {
    const url = `/v2/index_entry?geohash=${geohash}&group_type=1&flags[]=F`
    fetchReq(url)
      .then(shopSort => commit(SHOP_SORT_DATA,  shopSort ));
  },
  fetchPoisData({ commit }, { geohash}) {
    const url = `/v2/pois/${geohash}`
    fetchReq(url)
      .then(poisData => commit(POIS_DATA,  poisData ));
  },

};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
