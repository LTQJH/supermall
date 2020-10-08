<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"/>
        <recommend-view :recommends="recommends"></recommend-view>
    </div>


</template>

<script>
    import {getHomeMultiData} from "network/home"
    import NavBar from "components/common/navbar/NavBar";
    import HomeSwiper from "./childCompos/HomeSwiper";
    import RecommendView from "./childCompos/RecommendView";

    export default {
    name: "Home",
    components:{
      HomeSwiper,
      NavBar,RecommendView
    },
      data(){
        return{
          banners: [],
          recommends: []
        }
      },
      created() {
        getHomeMultiData().then(res=>{
          //console.log(res.data.data.recommend.list)
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      }
  }
</script>

<style scoped>
    .home-nav{
        background-color: var(--color-background);
        color:#fff;
    }
</style>