<template>
  <div>
    <div class="banner banner_about">
      <div class="banner_content">
        <div class="about">
          <div class="about_title">苏金链科技</div>
          <div class="about_text">打造自主可控的区块链技术平台</div>
        </div>
      </div>
    </div>
    <div class="platform plat_5">
      <div class="platformBg"></div>
      <div class="out">
        <div class="index_content">
          <div class="title">
            <p class="big_title">关于我们</p>
            <p class="small_title">
              <span class="subline"></span>
              <span class="small_text">ABOUT US</span>
              <span class="subline"></span>
            </p>
          </div>
          <div class="about_us_text wow bounceInDown">
            链度科技（SJ-Blockchain）致力于打造自主可控的产业级、企业级区块链技术平台，
            服务于商品溯源、司法存证、信息安全、资产数字化、供应链金融等众多行业场景，
            公司依托雄厚的区块链技术团队和在各行业的应用实践，为用户提供区块链行业解决方案、
            定制应用开发、区块链系统建设服务，打造完美客户体验，成就客户价值。
          </div>
          <div class="title sj_second_cont">
            <p class="small_title">
              <span class="subline"></span>
              <span class="small_text">SJ-Blockchain</span>
              <span class="subline"></span>
            </p>
          </div>
          <div class="about_us_text wow bounceInDown">
            SJ-Blockchain is committed to creating an independently controllable
            industrial-grade and enterprise-level blockchain technology platform.
            It serves many industry scenes such as commodity traceability,
            judicial deposit, information security, asset digitization,
            and supply chain finance. Relying on the strong blockchain technology
            team and application practice in various industries, LD Blockchain provides
            users with blockchain industry solutions, customized application development,
            and blockchain system construction services to create perfect customer experiences
            and achieve customer value.
          </div>
        </div>
      </div>
    </div>
    <div class="platform plat_5">
      <div class="platformBg"></div>
      <div class="out">
        <div class="index_content">
          <div class="title">
            <p class="big_title">企业荣誉</p>
            <p class="small_title">
              <span class="subline"></span>
              <span class="small_text">ENTERPRISE HONOR</span>
              <span class="subline"></span>
            </p>
          </div>
          <div class="swiper-container">
            <div
              class="webticker"
              :style="{'margin-left':calleft + 'px'}"
              v-on:mouseover="stopmove()"
              v-on:mouseout="move()"
            >
              <div class="swiper-slide">
                <img src="../../static/images/credit_7.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="../../static/images/credit_7.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="../../static/images/credit_7.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="../../static/images/credit_7.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="../../static/images/credit_7.png" alt />
              </div>
              <div class="swiper-slide">
                <img src="../../static/images/credit_7.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="platform _join">
      <div class="platformBg"></div>
      <div class="out">
        <div class="index_content">
          <div class="title">
            <p class="big_title">加入我们</p>
            <p class="small_title">
              <span class="subline"></span>
              <span class="small_text">JOIN US</span>
              <span class="subline"></span>
            </p>
          </div>
          <div
            class="about_us_text join_small_text"
          >有意者请将个人简历、相关作品等资料发电子邮件至hr@sj-blockchain.com， 邮件请注明「应聘的职位」。苏金链科技期待您的加入！</div>
          <div class="member">
            <div class="member_item">
              <img class="member_bg" src="../../static/images/join_us_bg.png" alt />
              <div class="member_info wow bounceIn">
                <div class="icon_out">
                  <img class="member_icon" src="../../static/images/join_1.png" alt />
                </div>
                <div class="role_zh">销售专员、经理</div>
                <div class="role_en">Salesperson</div>
              </div>
            </div>
            <div class="member_item">
              <img class="member_bg" src="../../static/images/join_us_bg.png" alt />
              <div class="member_info wow bounceIn">
                <div class="icon_out">
                  <img class="member_icon" src="../../static/images/join_1.png" alt />
                </div>
                <div class="role_zh">产品助理、经理</div>
                <div class="role_en">Product Manager</div>
              </div>
            </div>
            <div class="member_item">
              <img class="member_bg" src="../../static/images/join_us_bg.png" alt />
              <div class="member_info wow bounceIn">
                <div class="icon_out">
                  <img class="member_icon" src="../../static/images/join_2.png" alt />
                </div>
                <div class="role_zh">区块链开发专员</div>
                <div class="role_en">Programmer</div>
              </div>
            </div>
            <div class="member_item">
              <img class="member_bg" src="../../static/images/join_us_bg.png" alt />
              <div class="member_info wow bounceIn">
                <div class="icon_out">
                  <img class="member_icon" src="../../static/images/join_3.png" alt />
                </div>
                <div class="role_zh">文案编辑</div>
                <div class="role_en">Writer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs';
export default {
  data() {
    return {
      calleft: 0
    }
  },
  mounted() {
    new WOW().init();
    this.move();
  },
  beforeDestroyed() {
    this.stopmove();
  },
  methods: {
    //走马灯效果
    move() {
      this.timer = setInterval(this.starmove, 0);
    },
    starmove() {
      this.calleft -= 0.2;
      if (this.calleft < -240) {
        this.calleft = 0;
      }
    },
    //去效果定时器
    stopmove() {
      clearInterval(this.timer);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin.scss";
@import "../../static/css/common.scss";
.banner_content {
  height: 100%;
  margin: 0 auto;
  @include fx(center);
  .about {
    text-align: center;
    .about_title {
      font-size: 48px;
    }
    .about_text {
      font-size: 24px;
    }
  }
}
.swiper-container {
  .webticker {
    overflow: hidden;
    width: 1440px;
    @include fx(space-around);
    .swiper-slide {
      width: 240px;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
//加入我们
._join {
  height: 500px;
  .join_small_text {
    width: 955px!important;
    font-size: 16px!important;
  }
  .member {
    margin-top: 40px;
    @include fx(space-around);
    .member_item {
      position: relative;
      width: 290px;
      height: 165px;
      .member_bg {
        display: block;
        width: 100%;
        height: 100%;
      }
      .member_info {
        text-align: left;
        position: absolute;
        left: 34px;
        top: 23px;
        .icon_out {
          width: 45px;
          height: 50px;
          margin-bottom: 5px;
          .member_icon {
            display: block;
          }
        }
        .role_zh {
          color: rgb(51, 51, 51);
          font-size: 20px;
          font-weight: bold;
          line-height: 2;
        }
        .role_en {
          color: rgb(104, 156, 246);
          font-size: 14px;
        }
      }
    }
  }
}
</style>