<template>
  <div class="NavList">
    <div class="left">
       <ul  @click="show($event)" style="margin-top:70px;">
         <li  id="m1">
           <img v-show="sw==1" src="/car.png" alt="">
           轿车</li>
         <li id="m2">
           <img v-show="sw==2" src="/car.png" alt="" >
           SUV</li>
         <li id="m3">
           <img v-show="sw==3" src="/car.png" alt="">
           轿跑车&敞篷跑车</li>
         <li id="m4">
           <img v-show="sw==4" src="/car.png" alt="">
           MPV</li>
         <li id="m5">
           <img v-show="sw==5" src="/car.png" alt="">
           纯电动车</li>
         <li id="m6">
           <img v-show="sw==6" src="/car.png" alt="">
           插电式混合动力</li>
       </ul>
     </div>
  </div>
</template>
<style >
@media (min-width:1024px) {
  .left>ul>li{
  text-align: left;
  line-height:70px;
  color:rgb(111, 111, 111);
   margin-left: 60px;
  
}
.NavList{
  width:200px;

}
.left>ul>li>img{
  width: 20px;

 
}
.left>ul>li:hover{
  color: #fff;
  cursor: pointer;
}
.left{
  float: left;
  width: 260px;
  height: 900px;
  margin: 0 auto;

}

}
@media (min-width:768px) {
   .left>ul>li{
  text-align: left;
  line-height:70px;
  color:rgb(111, 111, 111);
   margin-left: 60px;

}
.left>ul>li>img{
  width: 20px;

 
}
.left>ul>li:hover{
  color: #fff;
  cursor: pointer;
}
.left{
  float: left;
  width: 260px;
  height: 900px;
  margin: 0 auto;

}
}
  
</style>
<script>
export default {
data() {
  return {
  sw:false,
   
  }
},
methods: {
  show(e){
    //  console.log(e.target.id);

    
    let b=(e.target.id).split('m');
    //  console.log(b[1]);
    let ssw=this.sw
     if(!ssw){
      // sw=e.target.id
     this.sw=b[1];
    //  b.styel="margin-left:60px";
    //  e.target.style="margin-left:40px;";
    // console.log(`显示`);
    }else{
     this.sw=b[1];
    //  console.log(`隐藏`);
    //  e.target.style="margin-left:60px;";
    }
  }


  }
}
</script>
