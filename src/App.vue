<template>
  <div id="app">
    <navbar></navbar>
    
    <router-view/>
  
  </div>
</template>
<script>
export default {
  data () {
    return {
      minHeight:0
    }
  },
  mouted(){
    this.minHeight.document.documentElement.clientHeight-170;
var that=this;
    window.onresize=()=>{
      that.minHeight=document.documentElement.clientHeight-170
      }
  }
}
</script>


