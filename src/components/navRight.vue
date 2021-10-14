<template>
  <div>
    
    <div class="ddd">
      <div><img src="/t1.png" alt="">
      <router-link to="/"> 预约试驾</router-link></div>
      <div><img src="/t2.png" alt=""><router-link to="/screen">在线购车</router-link></div>
      <div><img src="/t3.png" alt=""><router-link to="/map">查找经销商</router-link></div>
    </div>
  </div>
</template>

<style>

.ddd {
  position: fixed;
  top: 450px;
  left: 68%;
  margin-top:200px;
  margin-left: 520px;
  z-index: 20;
}
  .ddd>div{
         background-color: #1F1F1F;
         margin-top: 20px;
         text-align: right;
         width: 40px;
         height: 40px;
         font-size: 0%;
         margin-left: 38px;
         position: relative;
         color:#fff;
        cursor: pointer;
       }
.ddd > div>img{
  width: 40px;
  
  position: absolute;
  top: 0;
  left: 0;
}
.ddd > div:hover {
  width: 240px;
  font-size: 20px;
  text-align: left;
  line-height: 40px;
  margin-left: -85px;
 transition:1s;
  padding-left: 40px;
}
</style>