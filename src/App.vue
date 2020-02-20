<template>
  <div id="app">
    <header id="nav">
      <div class="container animated bounceInDown">
        <div class="row">
          <div class>
            <div class="logo-area">
              <router-link to="/">
                <img src="../static/images/index.png" alt />
              </router-link>
            </div>
          </div>
          <nav class="nav">
            <router-link class="nav_item" to="/index">首页</router-link>
            <router-link class="nav_item" to="/baas">BaaS平台</router-link>
            <router-link class="nav_item" to="/solution">解决方案</router-link>
            <router-link class="nav_item" to="/certificate">存证平台</router-link>
            <router-link class="nav_item" to="/traceability">溯源平台</router-link>
            <router-link class="nav_item" to="/about">关于苏金链</router-link>
          </nav>
        </div>
      </div>
    </header>
    <router-view />
    <footer id="footer">
      <div class="footer">
        <div class="footer_inner">
          <div class="footer_top">
            <div class="top_left">
              <div class="info_head">联系方式</div>
              <div class="info">
                <div class="info_item">电话：021-58383676</div>
                <div class="info_item">邮箱：support@SJ-blockchain.com</div>
                <div class="info_item">地址：南京市鼓楼区天花南路42号巨峰大厦A栋7楼</div>
              </div>
            </div>
            <div class="top_middle">
              <div class="info_head">友情链接</div>
              <div class="info_link">
                苏金链学院
              </div>
            </div>
            <div class="top_right">
              <div class="weixin">
                <img src="../static/images/gzh.png" alt />
              </div>
              <div class="gzh">微信公众号</div>
            </div>
          </div>
          <div class="footer_bottom">©2018 南京苏金科技有限公司 版权所有 沪ICP备18028133号</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "../static/css/mixin.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  min-width: 1200px;
  margin: 0 auto;
}
//导航css
#nav {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  padding: 10px 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.2);
}
.active {
  color: #2c3e50;
}
.row {
  @include fx();
  // width: 1200px;
}
.nav {
  .nav_item {
    color: #fff;
    padding: 20px;
    text-decoration: none;
    transition: 0.3s;
    margin: 0 6px;
    z-index: 1;
    font-family: "Microsoft Yahei", sans-serif;
    font-weight: 500;
    position: relative;
  }
}

//底部css
#footer {
  background-color: rgb(31, 31, 31);
  .footer {
    text-align: left;
    padding: 10px 0;
    width: 1200px;
    margin: 0 auto;
    .footer_inner {
      margin: 10px;
      .footer_top {
        @include fx(flex-start);
        align-items: flex-start;
        border-bottom: 1px solid #666;
        padding-bottom: 25px;
        position: relative;
        .top_left {
          width: 420px;
          .info_head {
            font-size: 16px;
            color: #888;
            margin-bottom: 20px;
          }
          .info {
            .info_item {
              margin-top: 15px;
              font-size: 14px;
              color: #fff;
            }
          }
        }
        .top_middle {
          margin-left: 40px;
          font-size: 16px;
          .info_head {
            color: #888;
            margin-bottom: 20px;
          }
          .info_link {
            color: #fff;
            cursor: pointer;
          }
        }
        .top_right {
          position: absolute;
          right: 90px;
          top: 4px;
          width: 108px;
          .weixin {
            width: 108px;
            height: 108px;
            img {
              display: block;
              width: 100%;
            }
          }
          .gzh {
            margin-top: 15px;
            color: #ccc;
            text-align: center;
          }
        }
      }
      .footer_bottom {
        font-size: 13px;
        color: rgb(169,169,169);
        margin-top: 20px;
      }
    }
  }
}
</style>
