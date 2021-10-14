<template>
  <div>
    <nav>
     <router-link to="/" ><img class="logo" src="/logo-pc.png" alt="" /></router-link>
      <ul class="sub_content">
        <li class="dropdown">
          <span
            >探索车型
            <div class="dropdown-content">
              <ul class="sub_menu">
                <li><router-link to="/car">轿车</router-link></li>
                <li>SUV</li>
                <li>轿跑车 & 敞篷跑车</li>
                <li>MPV</li>
                <li>纯电动车</li>
                <li>插电式混合动力</li>
                <li >
              <router-link to="/screen"></router-link>
            </li>
              </ul>
            </div>
          </span>
        </li>

        <li class="dropdown">
          <span href="#"
            >购车支持
            <div class="dropdown-content">
              <ul class="sub_menu">
                <li><router-link to="/coupon">限时购车新方案</router-link></li>
                <li><router-link to="/financial">金融服务</router-link></li>
                <li><router-link to="/purchase">在线购车</router-link></li>
                <li>官方认证二手车</li>
                <li>大客户&留学生购车</li>
              </ul>
            </div>
          </span>
        </li>
        <li class="dropdown">
          <span
            >客户服务
            <div class="dropdown-content">
              <ul class="sub_menu">
                <li><router-link to="/sg"> 服务指南</router-link></li>
                <li>保养维修及救援</li>
                <li>选装配件及精品</li>
                <li>EQ客户服务</li>
              </ul>
            </div>
          </span>
        </li>
        <li class="dropdown">
          <span href="#"
            > 科技创新
            <div class="dropdown-content">
              <ul class="sub_menu">
                <li><router-link to="/aesthetic"> 设计美学 </router-link></li>

                <li>动力与效能科技</li>
                <li>智能科技</li>
                <li>智能科技 豪华体验科技与工艺</li>
              </ul>
            </div>
          </span>
        </li>
        <li class="dropdown"><span href="#">奔驰天下
            
            <div class="dropdown-content">
              <ul class="sub_menu">
                <li><router-link to="/">     品牌天地 </router-link></li>
                 <li>  品牌互动</li>
                <li> 客户承诺</li>
                <li>  企业社会责任</li>
                <li>   Mercedes me</li>
              </ul>
            </div>
            
            
            
             </span></li>
            
      </ul>
      <div class="header_right_container">
        <img src="/search_0.png" alt="">
        <router-link to="/login">登录</router-link>
      </div>
    </nav>
  </div>
</template>

<style scoped>
@media (min-width:1024px) {
  .header_right_container {
  position: absolute;
  top: 80px;
  right: 50px;
}
.header_right_container a:hover{
  color:#00adef;

}
#img {

  width: 15px;
  height: 15px;
  background:url(/search_0.jpg);
}
 .header_right_container #img:hover{
   background: url(/search_1.png);
 }
.logo {
  padding-top: 30px;
  padding-left: 100px;
  padding-right: 360px;
  float: left;
  height: 63px;
}
nav {
  width: 100%;
  height: 110px;
  background-color: black;
}
ul {
  height: 120px;
}
.sub_content li {
  padding-top: 60px;
  padding-bottom: 30px;
  padding-right: 40px;
  float: left;
}

nav > ul a {
  padding-bottom: 15px;
}
nav > ul #span:hover {
  border-bottom: 3px solid #00adef;
}
.dropdown li {
  padding-top: 20px;
}
.dropdown span{
  margin-right:30px;
}
.dropdown-content {
  position: absolute;
  top: 110px;
  left: 0;
  z-index: 2;
  width: 100%;
  justify-content: space-around;
  height: 70px;
  background-color: #1f1f1f;
  display: none;
}

.dropdown:hover .dropdown-content {
  z-index:1000;
  display: block;
  transition: all 5s;
}
.sub_menu {
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
  align-items: center;
  margin: 0 auto;
}

.sub_menu li>a:hover {
  color: #00adef;
}
.dropdown-content span:hover {
  color: #00adef;
}
}

@media (min-width:768px) {
  .header_right_container {
  position: absolute;
  top: 80px;
  right: 50px;
}
.header_right_container img {
  padding: 0px 20px;
  width: 15px;
  height: 15px;
}
.logo {
  padding-top: 30px;
  float: left;
  height: 63px;
}
nav {
  width: 100%;
  height: 110px;
  background-color: black;
}
ul {
  height: 120px;
}
.sub_content li {
  padding-top: 60px;
  padding-bottom: 30px;
  padding-right: 10px;
  float: left;
}

nav > ul a {
  padding-bottom: 15px;
}
nav > ul span:hover {
  border-bottom: 3px solid #00adef;
}
.dropdown li {
  padding-top: 20px;
}
.dropdown-content {
  position: absolute;
  top: 110px;
  left: 0;
  z-index: 2;
  width: 100%;

  justify-content: space-around;
  height: 70px;
  background-color: #1f1f1f;
  display: none;
}
.dropdown:hover .dropdown-content {
  display: block;
  z-index:1001;
  transition: all 5s;
}
.sub_menu {
  display: flex;
  justify-content: space-around;
  max-width: 1280px;
  align-items: center;
  margin: 0 auto;
}
.sub_menu li:hover {
  color: #00adef;
}
.dropdown-content span:hover {
  color: #00adef;
}
}
</style>
<script>
export default {
  methods: {
   
  }
};
</script>
