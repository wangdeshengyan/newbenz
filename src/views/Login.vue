<template>
  <div class="login">
    <div class="loginpic"></div>
    <div class="sign">
        <h4>用户登录</h4>
      <img src="@/assets/head.png" alt="">
     <input type="text" placeholder="请输入账号" v-model="name">
     <img v-show="dis==aa" src="@/assets/yes.png" alt=""  class="dis" ><br>
      <img src="@/assets/pass.png" alt="">
     <input type="password" placeholder="请输入密码" v-model="pwd" @keyup.13="checkForm">
      <img v-show="dis==dd" src="@/assets/yes.png" alt=""  class="dis"><br>
      <button id="testButton" @click="checkForm">登录</button>
      <router-link to="/reg"><p>免费注册</p></router-link>
    </div>
  </div>
</template>
<style>
.login{
  width: 100%;
  margin: 0 auto;
}
.login>.loginpic{
  background-image: url('/img/login.jpg');
  background-repeat: repeat;
  width: 100%;
  height: 900px;
  background-repeat: no-repeat;
 
  background-position:center;
 
  
}
#testButton { color:rgb(255, 255, 255);font-size:14px;padding-top:9px;padding-bottom:9px;padding-left:34px;padding-right:34px;border-width:3px;border-color:rgb(145, 208, 227);border-style:solid;border-radius:29px;background-color:rgb(0, 87, 194);
margin-top: 40px;
width: 320px;height: 40px;
 line-height: 20px;
 }
#testButton:hover{color:#ffffff;background-color:rgba(0, 87, 194,0.8);;border-color:rgba(240,241,242,0.5);
   cursor: pointer;
}
  .login>.sign{
   position: fixed;
   top: 20%;
   left: 50%;
   z-index: 30;
    background-color: rgba(240,241,242,0.5);
    width: 400px;
    height: 320px;
    border-radius:29px
 
    
 }
 .login>.sign>h4{
  margin-top: 20px;
  
   
 }
 .login>.sign>input{
    width: 300px;
    height: 40px;
   margin-top: 33px;
    padding-left: 39px;
    border-radius:29px
 }
  .login>.sign p{
    position: absolute;
    top: 274px;
     left: 50%;
     margin-left: 134px;
     font-size: 12px;
  }
 .sign> img{
     width: 28px;
     position: fixed;
     margin-top: 40px;
     margin-left: 8px;
   }
   .login>.sign>.dis{

     margin-left: -30px;
   } 
</style>
<script>
 import {mapMutations} from 'vuex'
export default {
 
   data() {
     return {
        name:'',
        pwd:'',
        dis:true,
        aa:false,
        dd:false
     }
   },
   methods: {
     ...mapMutations(["setname"]),
        checkname(){
           let reg=/^[\u4e00-\u9fa5]{2,6}$/;
           if(reg.test(this.name)){
             return true
           }else{
             return false
           }
        },
        checkpwd(){
           let reg=/^\d{5}$/;
           if(reg.test(this.pwd)){
             return true
           }else{
                return false
           }
        },
    checkForm(){
      //验证表单  验证3个fidle组件是否合法  因为button是事件处理的函数所以要写 @click 
   if(this.checkname()&&this.checkpwd()){
    //  console.log(`请求正确,发送请求`);
     this.axios.post('/sign',
     `username=${this.name}&password=${this.pwd}`).then(result=>{
      //  console.log(result);
       if(result.data.code==200){
           //访问vuex  mutations修改state的状态
           //不仅需要存到 vuex中 还需要存到 sessionstorage
          //  console.log(`登录ok`);
          this.setname(this.name)
           this.$router.push('/cara')
       }else if(result.data.code==201){
        alert(`账号或者密码不对`);
       }
     })
   }
    }
        
   },
   watch:{
     name(){
      console.log(this.name);
    if(this.checkname()){
      if(this.dis!=this.aa ){
     
         this.aa=true  } 
   }else{
     if( this.aa){
     this.aa=false
     }
   }
   },
    pwd(){
    if(this. checkpwd()){
      // console.log(`密码对`);
      if( this.dis!=this.dd ){
         this.dd=true } 
   }else{
     if( this.dd){
     this.dd=false
     }
   }
   },
   }
}
</script>