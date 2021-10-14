<template>
  <div class="index">
    <div>
   <nav-right></nav-right>
      <el-carousel :interval="4000" height="900px" >
        <el-carousel-item v-for="item in imgList1" :key="item.id">
          <img :src="item.idView" class="image" />
        </el-carousel-item>
      </el-carousel>
   
    </div>
  </div>
</template>
<script>
  import navRight from '../components/navRight.vue';
export default {
  components: {navRight},
  name:'index',
  data() {
    return {
      imgList1: [
        { id: 0, idView: "/homepage-pc-1.jpg" },
        { id: 1, idView: "/homepage-pc-2.jpg" },
        { id: 2, idView: "/homepage-pc-3.jpg" },
        { id: 3, idView: "/homepage-pc-4.jpg" }
      ]
     
    };
  },
};
</script>
<style scoped>
.index {
height:900px;
  text-align: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel--horizontal{
  width:1920px;
  height:900px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
el-carousel__arrow--left{
  left:150px;
}
el-carousel__arrow--right{
 right:150px;
}
.el-carousel__item img{
  width:1920px;
  height:100%;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
