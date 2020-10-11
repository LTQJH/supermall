<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"/>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :titles="['流行','新款','精选']">
        </tab-control>
        <goods-list :goods="goods['pop'].list"></goods-list>
    </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  import HomeSwiper from "./childCompos/HomeSwiper";
  import RecommendView from "./childCompos/RecommendView";
  import FeatureView from "./childCompos/FeatureView";

  import {getHomeMultiData} from "network/home"
  import {getHomeGoods} from "../../network/home";

  export default {
    name: "Home",
    components: {
      GoodsList,
      NavBar,
      HomeSwiper, RecommendView, FeatureView,
      TabControl
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    created() {
      //1 请求banners和recommend数据
      this.getHomeMultiData()
      //2 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      getHomeMultiData() {
        getHomeMultiData().then(res => {
          //console.log(res.data.data.recommend.list)
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
            //console.log(res.pops)
            this.goods[type].list.push(...res.pops)
            console.log(this.goods[type].list);
          });
      }
    }

  }
</script>

<style scoped>
    #home {
        padding-top: 44px;
    }

    .home-nav {
        background-color: var(--color-background);
        color: #fff;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }

    .tab-control {
        position: sticky;
        top: 44px;
        z-index: 9;
    }
</style>