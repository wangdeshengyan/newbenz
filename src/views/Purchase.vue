<template>
    <div>
        <div id="img">
            <img  src="/img/purchase/online_purchase_pc.jpg" alt="">
            <img src="/img/purchase/Purchase_PC_01.jpg" alt="">
        </div>
        <div id="selecto">
            <ul>
                <li><router-link to="">梅赛德斯-奔驰</router-link></li>
                <li><router-link to="">梅赛德斯-AMG</router-link></li>
                <li><router-link to="">梅赛德斯-迈巴赫</router-link></li>
            </ul>
        </div>
        <div id="purchase_content">
        <h2>在线购车</h2>
<div>
 
    <div class="car">
           <h2>A级</h2>
        <div class="item">
         <img src="/img/purchase/460X186-veh-pc-长轴距A级运动轿车.png" alt="">
         <h2>长轴距A级运动轿车</h2>
         <p>厂商建议零售价￥21.18万起</p>
         <p>月付款￥476起</p>
        </div>
        <div class="item">
             <img src="/img/purchase/A级掀背车.png" alt="">
          <h2>长轴距A级运动轿车</h2>
          <p>长轴距A级运动轿车</p>
        </div>
    </div>
    <div class="car">
           <h2>B级</h2>
        <div class="item">
         <img src="/img/purchase/460X186-veh-pc-长轴距A级运动轿车.png" alt="">
        </div>
        <div class="item">
             <img src="/img/purchase/A级掀背车.png" alt="">

        </div>
    </div>
    <div class="car">
           <h2>C级</h2>
        <div class="item">
         <img src="/img/purchase/460X186-veh-pc-长轴距A级运动轿车.png" alt="">
        </div>
        <div class="item">
             <img src="/img/purchase/A级掀背车.png" alt="">

        </div>
        
    </div>
    <div class="car">
           <h2>E级</h2>
        <div class="item">
         <img src="/img/purchase/460X186-veh-pc-长轴距A级运动轿车.png" alt="">
        </div>
        <div class="item">
             <img src="/img/purchase/A级掀背车.png" alt="">

        </div>
    </div>
    <div class="car">
           <h2>S级</h2>
        <div class="item">
         <img src="/img/purchase/460X186-veh-pc-长轴距A级运动轿车.png" alt="">
        </div>
        
    </div>
   
</div>

        </div>
        <div  id="img1">
            <img src="/img/purchase/Purchase_PC_02.jpg" alt="">
        </div>
    </div>
</template>
<style scoped>
#purchase_content{
    width: 100%;
    height:2545px;
    text-align: center;
}
.car{
    width:940px;
    height:380px;
    margin:20px auto;
    display: flex;
    flex-flow: row wrap;
    text-align: left;
}
.item{
    width:300px;
    height: 280px;
    text-align:left;
    margin-top: 50px;
    margin-right: 100px;
}
.item img{
    width:240px;
    height:100px;
}
.item h2{
    margin-top:50px;
}
.item:hover{
    box-shadow: 5px 5px 4px #000;
}
#img img{
  width:100%;

}
#img1 img{
  width:100%;
 height:1200px;
}
#selecto{
    width: 100%;
    height:60px;
    background-color: #F6F6F6;
     position:sticky;
    top:0;
}



ul{
    display: flex;
    flex-flow:row nowrap;
    justify-content: center;
}
ul > li{
    float: left;
    padding-top:20px;
    padding-right:30px;
}
ul > li a{
    padding-bottom: 20px;
}
ul > li a:hover{
    border-bottom:3px solid #48D6F6;
}

</style>