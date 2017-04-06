<template>
  <section class="menu_box">
    <div class="shoplist_container">
          <section class="menu_container">
            <section class="menu_left" id="wrapper_menu">
              <ul>
                <li v-for="(item,index) in menuList" :key="index" class="menu_left_li">
                  <img :src="getImgPath(item.icon_url)" v-if="item.icon_url">
                  <span>{{item.name}}</span>
                </li>
              </ul>
            </section>
            <section class="menu_right">
              <ul>
                <li  v-for="(item,index) in (menuList[menuIndex] && menuList[menuIndex]['foods'])" :key="index" class="menu_right_li">
                  <img :src="getImgPath(item.image_path)" v-if="item.image_path">
                  <div class="menu_right_des">
                    <h6>{{item.name}}</h6>
                    <p class="food_cont_sale_rate">
                      <span>月售{{item.month_sales}}份</span>
                      <span>好评率{{item.satisfy_rate}}%</span>
                    </p>
                    <p class="li_money_cont">
                      <span class="li_money_logo">￥</span>
                      <span class="li_money">11</span>
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </section>
    </div>
    <section class="menu_foot">

    </section>
  </section>
</template>


<script>
  import {loadMore, getImgPath, fetchReq} from '../common/mixin'
  export default {
    name: 'Shop',
    data () {
      return {
        menuList: [],
        menuIndex: 0,
      }
    },
    mounted(){
    },
    computed: {

    },
    mixins: [loadMore, getImgPath],
    methods: {

    }
  }
</script>

<style lang="scss"  rel="stylesheet/scss" scoped>
  @import 'src/style/mixin';
  .menu_box{
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    flex-direction:column;
    display: flex;
  }
  .shoplist_container{
    display: flex;
    flex: 1;
    padding-bottom: 2rem;
  }
  .menu_container{
    display: flex;
    flex: 1;
    height: 100%;
    overflow-y: hidden;
    .menu_left{
      overflow-y: auto;
      background-color: #f8f8f8;
      width: 3.8rem;
      .menu_left_li{
        padding: .7rem .3rem;
        border-bottom: 0.025rem solid #ededed;
        box-sizing: border-box;
        border-left: 0.15rem solid #f8f8f8;
        position: relative;
          img{
          @include wh(.5rem, .6rem);
          }
          span{
          @include sc(.6rem, #666);
          }
      }
    }
    .menu_right{
      -webkit-overflow-scrolling: touch;
      flex: 4;
      overflow-y: auto;
      .menu_right_li{
        display: flex;
        height: 5rem;
        background-color:#ffffff ;
        border-bottom: 0.025rem solid #ededed;
        padding: 0.4rem;
      }
      img{
        @include wh(2rem, 2rem);
        flex: 1 1 25%;
      }
      .menu_right_des{
        flex: 1 1 75%;
        h6{
          font-size: .7rem;
        }
        .food_cont_sale_rate{
          font-size: 13px;
          margin-top: .5rem;
          span{
            margin-right: 0.4rem;
          }
        }
        .li_money_cont{
          margin-top: .7rem;
          font-size: 0;
          -webkit-text-size-adjust:none;
          .li_money_logo{
            font-size: 10px;
            color: #ff8e42;
          }
          .li_money{
            @extend .food_cont_sale_rate;
            color: #ff8e42;
          }
        }

      }
    }
  }
  .menu_foot{
    height: 1rem;
    background-color: #3d3d3f;
  }

</style>
