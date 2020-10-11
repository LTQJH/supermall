<template>
    <div class="goods-item">
        <img :src="goodsItem.thumbnail_pic_s" alt="">
        <div class="goods-info">
            <p>{{goodsItem.author_name}}</p>
            <span class="price">￥{{goodsItem.price}}</span>
            <span class="collect">{{goodsItem.sc}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>
<style scoped>
    .goods-item{
        padding-bottom: 40px;
        position: relative;

        width: 48%   /*一行显示两个，并且根据屏幕去适配*/
    }

    .goods-item img{
        width: 100%;
        border-radius: 5px;
    }

    .goods-info{
        font-size:12px;
        position: absolute;
        bottom: 5px;
        left:0;
        right:0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .goods-info .collect{
        position: relative;
    }

    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height:14px;
        background: url("~assets/img/common/sc.png") 0 0/14px 14px;
    }
</style>