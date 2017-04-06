/**
 * Created by shenlu on 17/3/31.
 */
import * as types from './mutations-types';
export default {
  [types.CURRENT_CITY_ID]: (state, payload) => {
    state.currentCityId = payload.id;
  },
}
