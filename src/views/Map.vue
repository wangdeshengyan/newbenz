<template>
    <div>
    
        <div id="container">
            <img v-text="msg" src="/img/map/dealer-bg.png" alt="">
    <div>

    <div class="amap-wrapper">
        <div class="dealer_search">
            <div class="dealer_once">
              <span><img src="/img/Map1.png" alt="">郑州市</span>
              <span>更改城市</span>
              <div class="dealer_san">
                  <img src="/img/search.png">
                  <input type="text"  placeholder="经销商名称">
                  <div class="dealer_si">
                    <img src="/img/list.png" alt="">
                    筛选 
                  </div>
              </div>
            </div>
        </div>
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
    </div>
        </div>
    </div>
</template> 
<script>
export default {
    data () {
        return {
            msg: 'vue-amap向你问好！'
        }
    }
}
</script>
<style scoped>
img{
    height: 280px;
    width: 1904px;
   
}
 .amap-wrapper {
  width: 1900px;
  height: 600px;
  color: white;
}
#container{
width:300px;
height: 180px;
}

.dealer_search{
    float: left;
    margin-top: -3px;
    width:520px;
    height:600px;
    background-color: #1F1F1F;
}
.dealer_once{
    width: 420px;
    height: 510px;
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 50px;
}
.dealer_once span>img{
    width: 16px;
    height: 16px;
    margin-left: -330px;
}
.dealer_once span{
    padding-left: 290px;
}
.dealer_san{
    margin-top: 20px;
    color: white;
    position:relative;
}
.dealer_san img{
  width: 20px;
  height: 20px;
}
.dealer_san input{
    border-left: none;
    border-top: none;
    border-right: none;
    background-color: #1F1F1F;
    width: 250px;
    height: 40px;
    margin-left: 10px;
}
.dealer_san .dealer_si{
    width: 70px;
    position:relative;
    left: 340px;
    top: -28px;
}
</style>


