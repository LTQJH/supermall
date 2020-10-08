<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="isActive">
            <slot name="item-icon-active">
            </slot>
        </div>
        <div v-else >
            <slot name="item-icon">
            </slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text">
            </slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String,
      activeColor:{
        type:String,
        default:'green'
      }
    },
    data(){
      return{
        // isActive:true
      }
    },
    computed:{
      isActive(){
        console.log(this.$route)
        return this.$route.path.indexOf(this.path) != -1
      },
      // 动态绑定属性
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
    .tab-bar-item{
        flex:1;    /* 平均分布 */
        text-align: center;
        height:49px;
    }

    .tab-bar-item img{
        height:24px;
        width: 24px;
        margin-top: 3px;
        vertical-align: middle;  /*减少图片和下方DIV组件的空隙*/
    }
</style>