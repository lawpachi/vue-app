/**
 * Created by shenlu on 17/3/31.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import mutations from './mutations';
import getters from './getters';
import Position from './modules/Position.store';
import City from './modules/City.store';
import Msite from './modules/Msite.store';


Vue.use(Vuex);

const state = {
  currentCityId: '',
};

const store = new Vuex.Store({
  modules: {
    Position,
    City,
    Msite,
  },
  state,
  actions,
  mutations,
  getters,
});

export default store;
