<template>
    <div class="app">
    <div class="zhence"></div>
    <div class="tuwen1">
        <div class="title">政策查询</div>
        <div class="title-shadow"></div>
    </div>
    <div class="tuwen2"></div>
    <div class="wen1">
        <div class="xinche">新车质量保障政策</div>
        <div class="wen2">
            <div class="wen3"><p>梅赛德斯-奔驰新车质量保障，助您安心拥有理想座驾。</p></div><br>
            <p>详细信息请参考以下政策：</p>
            <div class="wen3"><p>适用品牌</p></div>
            <p>梅赛德斯-奔驰品牌乘用车（包含smart品牌）</p><br>
            <div class="wen3"><p>实施细则 (开始日期以零售发票日期为准)</p></div>
            <p>自开具零售发票之日起60日内或者行驶里程3,000公里之内（以先到者为准），如因产品质量问题导致需要更换主要总成或主要零件的情况下，消费者可要求更换同款、同型号新车。
            备注：主要总成和主要零件种类范围，以梅赛德斯-奔驰品牌乘用车及smart品牌乘用车三包凭证为准，召回以及主动服务措施不适用本政策</p><br>
            <div class="wen3"><p>车辆范围</p></div>
            <p>2019年5月1日及之后由中国梅赛德斯-奔驰授权经销商初次销售的 (以零售发票日期为准）梅赛德斯-奔驰品牌乘用车（包含smart品牌）</p>
        </div>
    </div>
    </div>
</template>
<style scoped>
.app{
    background-color: black;
}
.app .zhence{
    background-size: cover;
    width: 100%;
    height: 400px;
    background-image: url(/img/banner4_1440.jpg);
}
.app .tuwen1{
    margin-top: -100px;
    width: 1000px;
    height: 200px;
    background-color: #111;
    color: #fff;
    margin-left: 400px;
}
.app .tuwen1 .title{
    font-size: 36px;
    font-weight: 300;
    padding: 80px 200px;
}
.app .tuwen2{
    width: 1000px;
    height: 80px;
    background-color: #111;
    margin-left: 400px;
    margin-top: 50px;
}
.app .wen1{
    width: 1000px;
    height: 100%;
    background-color: #111;
    color: #fff;
    margin-left: 400px;
    margin-top: 80px;
}
.app .wen1 .xinche{
    font-size: 36px;
    font-weight: 300;
    padding-top: 50px;
    padding-bottom: 50px;
}
.app .wen1 .wen2 .wen3{
    font-size: 25px;
    font-weight: 250;
}
</style>