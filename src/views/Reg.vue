<template>
  <div class="login">
    <div class="loginpic"></div>
    <div class="sign" id="unin">
          <h4>用户注册</h4>
      <img src="@/assets/head.png" alt="">
     <input type="text" placeholder="请输入需要注册的账号 为汉字" :disabled="disabled" v-model="sname" >
     <img v-if="age==sname2" src="@/assets/yes.png" alt=""  class="uesra"   >
     <img  v-else src="@/assets/no.png" alt="" class="user" >
     <br>
      <img src="@/assets/pass.png" alt="">
     <input type="text" placeholder="请输入密码 为5到10位数字" :disabled="disabled" v-model="spwd">
     <img v-if="age==spwdd" src="@/assets/yes.png" alt="" class="uesra">
     <img  v-else src="@/assets/no.png" alt="" class="user"><br>
      <img src="@/assets/pass.png" alt="">
     <input type="password" placeholder="请输再次入密码" :disabled="disabled" v-model="spwd2" @keyup.13="che">
     <img v-if="age==spwd2d" src="@/assets/yes.png" alt="" class="uesra">
     <img  v-else src="@/assets/no.png" alt="" class="user"><br>
      <button id="testButton" @click="che">点击登录</button><br>
     <div class="font">
     <input type="checkbox" id="check" @click="check"> 我同意并遵守 <span>《梅赛德斯奔驰服务协议》《隐私政策》《汽车使用授权协议》</span></div>
    </div>
  </div>
</template>
<style >
  #unin>input{
    margin-top: 18px;
  }
  #unin button{
    margin-top: 18px;
  }
   #unin img{
     width: 28px;
     position: fixed;
     margin-top: 25px;
     margin-left: 8px;
   }
   .sign>#check{
     width: 20px;
  
   }
    .sign>.font{
        font-size: 10px;
         cursor: pointer;
        margin-top: 10px;
        
    }
     .sign>.font>span{
       color: blue;
     }
    .login #unin .user{
       width: 20px;
       margin-left: -25px;
       display: none; 
      }
       .login #unin>.uesra{
       position: fixed;
       margin-top: 25px;
          left:50%;
          margin-left: 335px;
          
       }
     
</style>
<script >
export default {
   data(){
   return{
        disabled:true,
        sname:'',
        spwd:'',
        spwd2:'',
        age:true,
        sname2:false,
        spwdd:false,
        spwd2d:false
   }
   },
 methods:{
  check(){
    
    if(this.disabled==true){
    this.disabled=false
    }else{
      this.disabled=true
    }
  },
         checkname(){
      let reg=/^[\u4e00-\u9fa5]{2,6}$/;
           if(reg.test(this.sname)){
            // console.log(`账号输入正确`)
            return  true
           }else{
            // console.log(`账号输入错误`)
            return false
           }
        },
        checkpwd(){
           let reg=/^\d{5,10}$/;
           if(reg.test(this.spwd)){
          //  console.log(`密码对`)
          return  true
           }else{
            //  console.log('密码错')
                return false
           }
        },
        checkpwd2(){
           let reg=/^\d{5,10}$/;
           if(reg.test(this.spwd2)&&(this.spwd==this.spwd2)){
            // console.log(`密码对2`)
            return true
           }else{
            // console.log('密码错2')
            return false
           }
        },
        che(){
          if(this.checkname()&&this.checkpwd()&&this.checkpwd()){
            console.log(`完全OK了`);
           this.axios.post(
       '/reg',`username=${this.sname}&password=${this.spwd}`).then(result=>{
         console.log(result);
          if(result.data.code===200){//注册成功
          alert(`注册成功`);
             this.$router.push('/sign')
         }else if(result.data.code===201){//注册失败
             alert(`用户已存在`);
         }
          }) 
         
          }
     },
    //  test(){
    //    console.log(`慢慢来就可以了`);
    //  }
  
 },
 watch:{
  sname(){
    if(this.checkname()){
      if( this.age!=this.sname2 ){
         this.sname2=true  } 
   }else{
     if( this.sname2){
     this.sname2=false
     }
   }
   
   },
    spwd(){
        if(this.checkpwd()){
      if( this.age!=this.spwdd ){
         this.spwdd=true  } 
   }else{
     if( this.spwdd){
     this.spwdd=false
     }
   }
    },
    spwd2(){
       if(this.checkpwd2()){
      if( this.age!=this.spwd2d ){
         this.spwd2d=true  } 
   }else{
     if( this.spwd2d){
     this.spwd2d=false
     }
   }
    }
 }
 
}
</script>