<template>
  <section >
    <common-header :title="cityData.name" :goBack='true'>
      <router-link to="/" class="title_right" slot="changeCity">切换城市</router-link>
    </common-header>
    <section class="search_box">
      <input class="search_input" v-model="searchValue" placeholder="输入学校、商务楼、地址" type="text"/>
      <button @click="searchChange">提交</button>
    </section>
    <ul class="search_res">
        <li v-for="place in placeData" class="each_place" >
          <router-link :to="'/Msite/'+ place.latitude + '/' + place.longitude + '/' + place.geohash">
          <h4>{{place.name}}</h4>
          <p>{{place.address}}</p>
          </router-link>
        </li>
    </ul>
  </section>
</template>


<script>
  import {loadMore, getImgPath} from '../common/mixin'
  import CommonHeader from '../components/CommonHeader.vue'
  import { fetchReq } from '../tools';
  import { mapState, mapActions } from 'vuex';

  const ns = 'City';

  export default {
    name: 'City',
    data () {
      return {
        cityId: this.$route.params.CityId,
        searchValue: '',
      }
    },
    components: {
      CommonHeader,
    },
    computed: {
      ...mapState({
        cityData: state => state.City.cityData,
        placeData: state => state.City.placeData,
      }),
    },
    mounted(){
      this.fetchCityData(this.cityId);
    },
    mixins: [loadMore, getImgPath],
    methods: {
      ...mapActions({
        fetchCityData: `${ns}/fetchCityData`,
        fetchSearchPosi: `${ns}/fetchSearchPosi`,
      }),
      searchChange() {
        this.fetchSearchPosi({id:this.cityId, value:this.searchValue})
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
  @import 'src/style/mixin';
  .search_box{
    margin-top: .4rem;
    background-color: #ffffff;
    padding: .5rem;
    .search_input{
      width: 100%;
      font-size: .65rem;
      height: 1.5rem;
      border-radius: 0.1rem;
      margin-bottom: 0.4rem;
    }
    input{
      border: 1px solid $bc;
      padding: 0 0.3rem;
    }
    button{
      @extend .search_input;
      background-color: $blue;
      color: #ffffff;
    }
  }
  .search_res{
    background-color: #ffffff;
    .each_place{
      padding-top: 0.65rem;
      border-bottom: 1px solid $bc;
      h4{
        width: 90%;
        @include sc(0.65rem, #333);
        margin: 0 auto 0.35rem;
      }
      p{
        width: 90%;
        @include sc(0.45rem, #999);
        margin: 0 auto 0.55rem;
      }
    }
  }
</style>
