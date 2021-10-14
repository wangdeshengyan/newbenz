<template>
    <div>
        <el-tabs :tab-position="tabPosition" style="height: 900px;">
    <el-tab-pane label="用户管理">
          <div class="box">
     <nav-right></nav-right>
     <div class="right">
       <div class="d1" >
         <img v-if="isLogin" src="/img/s.png" 
          @mouseenter="index(1)">
         <img v-else src="/img/s1.png" alt=""  @mouseleave="index(2)">
       </div>
      
       <div class="d2">
          <router-link to="/cara">
         <img  src="/img/c.png" alt=""  v-if="isLogin1"  @mouseenter="index(9)" >
         <video src="/img/c1.mp4" 
         autoplay width="100%" height="100%"  object-fit loop
         v-else  @mouseleave="index(10)"></video>
          </router-link>
       </div>
    
       <div class="d3">
         <router-link to="/suv">
          <img src="/img/b.png" alt="" v-if="isLogin2"   @mouseenter="index(3)">
          <img src="/img/b1.png" alt="" v-else   @mouseleave="index(4)">
         </router-link>
       </div>
      <div class="down">
 <div class="d4">
          <img src="/img/a.png" alt="" v-if="isLogin3"  @mouseenter="index(5)">
          <img src="/img/a1.png" alt="" v-else  @mouseleave="index(6)">
       </div>
       <div class="d5">
          <img src="/img/e.png" alt="" v-if="isLogin4" @mouseenter="index(7)">
          <img src="/img/e1.png" alt="" v-else   @mouseleave="index(8)">
       </div>
    </div>
       
     </div>
   </div>
    </el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
    </div>
</template>
<script>

import navRight from '../../components/navRight.vue';

export default {
  components: { navRight},
  data() {
    return {
       isLogin:true,
      isLogin1:true,
      isLogin2:true,
      isLogin3:true,
      isLogin4:true,
      tabPosition:'left'

    }
  },
  methods:{
    
    index(val){
      if(val==1){
      this.isLogin=false
    }else if(val==2){
      this.isLogin=true
    }
      if(val==3){
      this.isLogin2=false
    }else if(val==4){
      this.isLogin2=true
    }
      if(val==5){
      this.isLogin3=false     
    }else if(val==6){
      this.isLogin3=true   
    }
      if(val==7){
      this.isLogin4=false
    }else if(val==8){
      this.isLogin4=true    
    }
      if(val==9){
      this.isLogin1=false
    }else if(val==10){
      this.isLogin1=true
    }
  },
  
 }
  
}
</script>
<style  >
.el-tabs__header.is-left{
  margin: 20px;
}
  /*背景颜色为黑色 */
.box{
width:100%;
height:900px;
background-color: #000;
margin: 0 auto;}
/* 导航栏 */

.right{
  margin: 0 auto;
  display: flex;
flex-flow: row wrap;
}

.d1{
  width:660px;
  height: 520px;
  
}
.d2{
  width: 980px;
  height: 430px;
  
}
.down{
  height: 430px;
  display: flex;
  flex-flow: row;
  position: absolute;
  top:540px;
 right:3px;
}
.d4,.d5{
  width:490px;

  

}
.d3{width: 660px;height:342px;

}

 .right img{
 width: 100%;
 height: 100%;
}

</style>