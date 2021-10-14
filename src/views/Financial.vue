<template>
    <div>
        <div id="pic">
 <img id="img" src="/KV-PC%20.jpg" alt="">
 <h1>梅赛德斯-奔驰金融服务</h1>
        </div>
        <div class="content">
       <div class="header">
            <div class="header_subtitle">
            <h3> <span class="header_subtitleline">梦想，信赖，真诚，人生值得奔驰</span></h3>
        </div>
        </div>
        <div class="text">
            <p>有梦想就能奔驰。奔驰金融/租赁为您提供丰富的产品，助您轻松购买/置换奔驰座驾。</p>
            <p>从您第一次了解奔驰金融/租赁开始，我们就将真诚款待，用值得信赖的高品质服务陪伴您的购车/用车旅程。</p>
        </div>
        </div>
        <div class="video" >
            <img src="/img/fina/001.jpg" />
        
        </div>
        <div class="video">
               <img  src="/img/fina/002.jpg"/>
        </div>  
        <div class="panel">
            <div class="panel_item_1">
              <img src="/img/fina/004.jpg" alt="">
            </div>
            <div class="panel_item_2">
              <img src="/img/fina/005.png" alt="">
            </div>
            <div class="panel_item_3">
              <img src="/img/fina/006.jpg" alt="">
            </div>
            <div class="panel_item_4">
             <img src="/img/fina/007.png" alt="">
             <img src="/img/fina/008.png" alt="">
             <img src="/img/fina/009.png" alt="">
            </div>
        </div>  
    </div>
</template>
<style scoped>
div{
  
    width:100%;
}
#img{
    width: 100%;
    height:800px;
   
    
}
#pic{
     position: relative;
}
h1{
position: absolute;
top:100px;
left:800px;
color:#666;
font-size: 2em;
}

.content{
 
  height: 258px;
}
.header{
  
    height: 140px;

}
.header_subtitle{
    position: relative;
    overflow: hidden;
    max-width: 940px;
    text-align: center;
    margin:0 auto 30px;
    padding-top:20px;
    color:#fff;
}
.header_subtitle span{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 30px;
    display: block;
    position: relative;
    }

.header_subtitle span::before,
.header_subtitle span::after 
{
    content:'';
    width:30%;
    height:1px;
    position: absolute;
    z-index: 1;
    top:52%;
    background: #494949;

}
.header_subtitle span::before{
    right:-5%;
}
.header_subtitle span::after{
    left:-5%;
}
.text{
    text-align: left;
    color:#fff;
    margin:0 auto 30px;
    max-width: 940px;
    height: 140px;
}
.panel{
    background-color: #111111;
    width: 100%;
    height:2400px;
    margin-top: 24px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    text-align: center;
}
.panel_item_1{
 
    width:1400px;
    height:600px;
}
.panel_item_1 img{
    
    width:940px;
    height:400px;
    overflow: hidden;
}
.panel_item_1 img:hover{
    
    width:960px;
    height:440px;
    transition: 2ms;
}
.panel_item_2{
   
    width:1400px;
    height:600px;
}
.panel_item_2 img:hover{
width:960px;
height:500px;
transition: 2ms;
}
.panel_item_3{
   
    width:1400px;
    height:600px;
}
.panel_item_3 img:hover{
    width:960px;
    height: 500px;
}

.panel_item_4{
  
    width:100%;
    height:500px;
    display: flex;
    flex-flow: row warp;
    justify-content: space-between;

}
.panel_item_4 img{
    width:460px;
    height:446px;
}
.panel_item_4 img:hover{
    width:480px;
    height:467px;
}
.video{
    width:100%;
}

</style>
<script>
export default {
    data(){
        return {
            controls:false
        }
    },
    methods: {
      play(){
          this.controls=true;
        
      },
      startvideo:function(){
          if(this.$refs.startvideo.paused){
              this.$refs.startvideo.play()
          }else{
              this.$refs.startvideo.pause()
          }
      }
    }
}
</script>