<template>
    <div>
        <div class="baba">
            <div class="d1"><h2>d1</h2></div>
            <div class="d2"><h2>d2</h2></div>
            <div class="d3"><h2>d3</h2></div>
            <div class="d4"><h2>d3</h2></div>
            <div class="d4"><h2>d3</h2></div>
            <div class="d4"><h2>d3</h2></div>
            <div class="d4"><h2>d3</h2></div>
            <div class="d4"><h2>d3</h2></div>
            <div class="d4"><h2>d3</h2></div>
        </div>
    </div>
</template>
<style scoped>
.baba{
    background: red;
    width:1920px;
    height: 400px;
    text-align: center;
    justify-content: center;

    display: flex;
    flex-flow: row wrap;
}
.d1{
    
    background-color: aqua;
    width:400px;
    height:100px;
}
.d2{
    background-color: darkgoldenrod;
    width:400px;
     height:100px;
}
.d3{
    background-color: khaki;
    width:400px;
     height:100px;
}
.d4{
    background-color: mediumseagreen;
    width:400px;
     height:100px;
}
</style>