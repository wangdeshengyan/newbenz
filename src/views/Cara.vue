<template>
  <div class="navlist">
    <nav-list></nav-list>
    <div class="pic"><img src="/img/ccc.jpg" alt=""></div>
   <div class="spic">
     <ul class="upic">
       <li v-for="(item,i) of listcar" :key="i">
         <img :src="(item.avatar)">
        <h4>{{item.lname}}</h4> 
        <p>厂商建议零售价</p>
        <p>¥<span>{{item.par}}</span>万起/月付¥<span>{{item.price}}</span> 起</p>
       </li>
       </ul>
     </div>
     <nav-right></nav-right>
  </div>
</template>
<script>
import navList from '../components/navList.vue';
import navRight from '../components/navRight.vue';

export default {
  components: { navList ,navRight},
  data() {
    return {
      listcar:[]
    }
  },
  //  mounted() {
  //    this.axios.get('/car').then(result=>{
  //      console.log(result.data.results);
  //      this.listcar=result.data.results;
  //    })
  // }
  };
 
</script>
<style scoped >
.navlist{
  width: 1904px;
  height:1200px;
  margin: 0 auto;
   background: #000;
}
/* 大图片 */
.pic{
  width: 1640px;
  height: 460px;
   float: left;

}
.pic img{
  width:100%;
  height:100%;
}
 /* 小图片 */
    .upic{
   width: 1200px;
   float: left;
 }
 
 .spic ul li{
   width: 310px;
   height: 200px;
   float: left;
   margin:40px  0  0 45px
 }
 .spic ul p>span:hover{
text-decoration:underline;
 font-size: 16px;
 }
 .spic ul li:hover{
     background-color: rgb(13,13,13);
     cursor: pointer;
     
 }
 .spic ul li img{
   width: 100%;
 
 }
 .spic ul li h4{
   color: #fff;
    margin: 0 0 5px 0;
 }
  .spic ul li p{
    color:red;
    margin:0 0 5px 0;
    font-size: 10px;
     color:rgb(111, 111, 111);
     font-size: 10px;
  }
</style>