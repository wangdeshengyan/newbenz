<template>
    <div>
        <div class="container">
            <h3 class="title">I love you<span>Hello</span></h3>
        </div>
    </div>
</template>
<style scoped>
.container{
    width:1000px;
    margin:10px auto;
    border:1px solid red;
}
h3.title{
    color:#F7AE11;
    font-size: 1.3em;
    margin: 3em;
    text-align: center;
    font-weight: 500;
    line-height: 1.1;
}
h3.title span{
    display: block;
    font-size: 3em;
    color:#212121;
    position: relative;
}
h3.title span:before,h3.title span:after{
    content:'';
    position: absolute;
    top: 52%;
    background: #494949;
    width:9%;
    height:2px;

}
h3.title span:before{
    left:25%;

}
h3.title span:after{
    right:25%;
}
</style>