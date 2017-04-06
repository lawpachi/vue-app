<template>
  <div class="header_box">
    <section class="head_goback" @click="$router.go(-1)" v-if="goBack">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
      </svg>
    </section>
    <span class="title">{{title}}</span>
    <slot name="changeCity"></slot>
    <slot name="regist"></slot>
  </div>
</template>
<script>
  export default {
    name: 'CommonHeader',
    props: {
      title: {
        type: String,
      },
      goBack: {
        type: Boolean,
      }
    },
    data() {
        return{

        }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scope>
  @import 'src/style/mixin';
  .header_box{
    display: flex;
    font-size: .8rem;
    height: 1.6rem;
    align-items:center;
    justify-content: space-between;
    background-color: $blue;
    .head_goback{
      left: 0.4rem;
      @include wh(0.6rem, .8rem);
      margin-left: .4rem;
    }
    .title{
      color: #ffffff;
      width: 58%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .title_right{
      font-size: .6rem;
      margin-right: .3rem;
      color: #ffffff;
      span{
        color: #ffffff;
      }
    }
  }
</style>
