<template>
  <section >
    <section class="topNav">
      <span>ele.me</span>
      <p>
        <span> 登录 </span>
        <span>| </span>
        <span> 注册 </span>
      </p>
    </section>
    <section class="position">
      <p class="city_tip">
        <span> 当前定位城市</span>
        <span> 定位不准时请在城市列表中选择</span>
      </p>
      <p class="location_city" @click="changeCityId(guessCity.id)">
        <span >{{guessCity.name}}</span>
        <span></span>
      </p>
    </section>
    <section class="city_container hot_city">
      <p>热门城市</p>
      <ul >
        <li v-for="item in hotCity">{{item.name}}</li>
      </ul>
    </section>
    <section class="group_city city_container" v-for="(citygroup, key) in sortGroupCity" :key="key">
      <p class="city_top">{{key}} <span v-show="key == 'A'" >(按字母排序)</span></p>
      <ul>
        <li v-for="(city, key) in citygroup">{{city.name}}</li>
      </ul>
    </section>
  </section>
</template>


<script>
  import {loadMore, getImgPath} from '../common/mixin'
  import { fetchReq } from '../tools';
  import { mapState, mapActions } from 'vuex';
  import { CURRENT_CITY_ID } from '../store/mutations-types';

  const ns = 'Position';

  export default {
    name: 'Position',
    data () {
      return {
      }
    },
    computed: {
      ...mapState({
        hotCity: state => state.Position.hotCity,
        gorupCity: state => state.Position.gorupCity,
        guessCity: state => state.Position.guessCity,
        cityId: state => state.currentCityId,
      }),
      sortGroupCity() {
        let sortobj = {};
        for (let i = 65; i <= 90; i++) {
          if (this.gorupCity[String.fromCharCode(i)]) {
            sortobj[String.fromCharCode(i)] = this.gorupCity[String.fromCharCode(i)];
          }
        }
        return sortobj
      }
    },
    mounted(){
      this.fetchHotCity();
      this.fetchGuessCity();
      this.fetchGorupCity();
    },
    mixins: [loadMore, getImgPath],
    methods: {
      ...mapActions({
        fetchHotCity: `${ns}/fetchHotCity`,
        fetchGuessCity: `${ns}/fetchGuessCity`,
        fetchGorupCity: `${ns}/fetchGorupCity`,
      }),
      changeCityId(id) {
        this.$store.commit(CURRENT_CITY_ID, { id });
        location.hash = `/City/${id}`
      }

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  @import 'src/style/mixin';
  .topNav{
    display: flex;
    justify-content: space-between;
    padding: .6rem;
    background-color: $blue;
    font-size: .7rem;
    span{
      color: #ffffff;
    }
  }
  .position{
    display: flex;
    flex-direction: column;
    font-size: .6rem;
    background-color: #ffffff;
    border-bottom: 2px solid $bc;
    p{
      display: flex;
      justify-content: space-between;
      padding:.4rem;
      border-bottom: 1px solid $bc;
    }
    .city_tip{
      span:nth-of-type(1){
        @include sc(0.55rem, #666);
      }
      span:nth-of-type(2){
        font-weight: 900;
        @include sc(0.475rem, #9f9f9f);
      }
    }
    .location_city{
      font-size: .8rem;
      display: flex;
      justify-content: space-between;
      span{
        color: $blue;
      }
    }
  }
  .city_container{
    margin-top: .6rem;
    p{
      padding: .3rem .6rem;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        font-size: .6rem;
        flex: 1 1 25%;
        color: $blue;
        text-align: center;
        height: 1.6rem;
        line-height: 1.6rem;
        vertical-align: middle;
        border-right: 1px solid $bc;
        border-bottom: 1px solid $bc;
      }
      li:nth-of-type(4n){
        border-right: none;
      }
    }
    @extend .position
  }
  .group_city{
    .city_top{
      justify-content: flex-start;
      span{
        margin-left: .5rem;
        @include sc(0.475rem, #999);
      }
    }
    ul li {
      word-wrap: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #666;
    }

  }
</style>
