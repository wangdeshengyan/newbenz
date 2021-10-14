<template>
    <div id="coupon">
        <div class="header">
 <span>限时购车新方案</span>
        </div>
        <div class="hero">
            <div class="sticky-nav">
                <ul>
                    <li>
            <router-link to="/">
               <span>置换重购优享方案</span>
            </router-link></li>
           <li><router-link to="/">
               <span>AMG车型优享方案</span>
           </router-link></li>
                </ul>
           
           
            </div>
            <img src="/GLB-2820-1176.jpg" alt="">
      
       <div class="slogan">
      <h5>无论是中意已久，还是终极梦想车型，多样的置换及重购保险支持，可享最高限额18000元/台，祝您轻松攻获理想座驾。</h5>
      <div class="button">
         <a href="#">
             <span>预约试驾</span></a> 
      </div>
       </div>
       <div class="choose">
           <div class="wrapper">
  <div class="details">
            支持车型
            <span>
                共有30个车型
            </span>
        </div>
        <div class="details_list" placeholder="de">
            <ul>
                <li v-for="(item,i) in cars" :key="i">
                    {{item.carname}}
                </li>
            </ul>
        </div>
           </div>
    
       </div>
         <div class="hero">
          <img src="/hero3-pc.jpg" alt="">
      </div>
       <div class="choose">
           <div class="wrapper">
  <div class="details">
            支持车型
            <span>
                共有23个车型
            </span>
        </div>
        <div class="details_list">
            <ul>
                <li v-for="(item,i) in 30" :key="i">	梅赛德斯-AMG A 35 4MATIC</li>
            </ul>
        </div>
           </div>
    
       </div>
     </div>
            <div class="text">
<p>{{cars.policytxt}}</p>
       </div>
 
    </div>
</template>
<script>

export default {
    data(){
        return {
           cars:[]

        }
    },
   
 mounted () {
     this.axios.get('/coupon').then((result)=>{
         console.log(result.data.results);
     this.cars=result.data.results;
     
     })
 }
   
}
</script>
<style scoped>

.header{
     width:1904px;
    height:150px;
    text-align: center;
    float: left;
    overflow: hidden;
}
#coupon span{
    color:#000;
}
.hero {
    
  float: left;
    height:800px;

}
.sticky-nav a{
    
padding-right: 40px;
color:#000;
}
.sticky-nav{
     height:54px;
     top:0;
    background-color:#F6F6F6;
    position:sticky;
}
.sticky-nav>ul {
    text-align: center;
    list-style:none;
     width:100%;
    padding-top: 20px;
    margin-left:400px;
    font-family:  "PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Source Han Sans SC","Microsoft YaHei","SimHei",Helvetica,Arial;
}
.sticky-nav>ul li {
   
    float: left;
}

.sticky-nav>ul a :hover{
color:#48D6F6;
border-bottom:3px solid #00ADEF;
padding-bottom: 10px;
}
.hero img{
    width:1904px;
    height: 670px;
}
.header{
    margin-top:30px;
    color: #666;
    text-align: center;
     
     overflow: hidden;
}
.header span{
    display: inline-block;
    font-size:30px;
   position:relative;
    padding-top: 20px;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    font-family: normal 400 36px/50px "DaimlerCA-Regular","SimSun",serif;
}
.header span::before{
    content:'';
    width:455px;
    height:1px;
    background-color: #e1e1e1;
    position:absolute;
      left: -520px;
    z-index: 1;
    top: 40px;
}
.header span::after{
    content:'';
    width:455px;
    height:1px;
    right: -520px;
    top: 40px;
    background-color: #e1e1e1;
    position:absolute;
    z-index: 1;
   
}
.slogan{
    width:100%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    float: left;
    margin:40px auto;
    height:200px;
}
.button{
    width:160px;
    height:40px;
    margin-top: 30px;
    text-align: center;
    font-size: 16px;
    position:absolute;
    left:810px;
    color:#fff;
    border: 1px solid transparent;
    background-color: #48D6F6;
    border-radius:2px;
    text-align: center;
    line-height: 40px;

  
}
 .button a{
  color:#fff;  
}
.slogan.button a:hover{
color:#176db7;
}
.choose{
    margin-top:10px;
    float: left;
    height:685px;
   
}
.wrapper{
    width:940px;
    height: 685px;
    padding-left: 400px;
    font-weight: 600;

    color:#333;
  
}
.details{
        font-size: 28px;
        margin-bottom: 32px;
}
.details span{
    color:#666;
    font-size: 20px;
   
}
.details_list ul{
      list-style: none;
      text-decoration: none;
      display: flex;
      flex-flow: row wrap;
     
     
}
.details_list ul li{
 width:305px;
    padding-bottom:40px;
     overflow: hidden;
}
.details_list ul li::before{
    content:"<";
    padding-right: 5px;

}
.text{
    float: left;
     width:940px;
    height: 200px;
    padding-left: 400px;
  margin-top:2700px;
}

</style>