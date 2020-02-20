<template>
  <div>
    <div class="banner banner_certificate">
      <div class="banner_content">
        <div class="banner_title">苏金区块链</div>
        <div class="banner_title">存证平台</div>
        <div class="banner_text_big">提供多行业区块链电子数据存证，电子合同、法律服务、查证验证等服务，保障用户自身权益。</div>
      </div>
    </div>
    <div class="content_out">
      <div class="content">
        <div class="content_title">
          <div class="content_big_title">平台服务</div>
          <div class="content_small_title">PLATFORM SERVICE</div>
        </div>
        <div class="content_service">
          <div class="service_img wow flipInY">
            <img src="../../static/images/certificate_service_1.png" alt />
          </div>
          <div class="service_img wow flipInY">
            <img src="../../static/images/certificate_service_2.png" alt />
          </div>
          <div class="service_img wow flipInY">
            <img src="../../static/images/certificate_service_3.png" alt />
          </div>
          <div class="service_img wow flipInY">
            <img src="../../static/images/certificate_service_4.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="platform plat_6">
      <div class="platformBg"></div>
      <div class="out">
        <div class="index_content">
          <div class="title">
            <p class="big_title">平台优势</p>
            <p class="small_title">
              <span class="subline"></span>
              <span class="small_text">PLATFORM ADVANTAGE</span>
              <span class="subline"></span>
            </p>
          </div>
          <div class="certificate_advance">
            <div class="between between_left">
              <div class="item">
                <div class="advance_title">·安全稳定</div>
                <div class="advance_text">
                  依托区块链去中心化的技术特性，存证服务高度去中心化，
                  确保存证服务的安全与稳定。
                </div>
              </div>
              <div class="item">
                <div class="advance_title">·数据无法篡改</div>
                <div class="advance_text">信息数据文件链上存证，同步到各联盟节点，无法篡改和伪造，增强数据可信度。</div>
              </div>
            </div>
            <div class="between">
              <div class="certificate_advance_img wow bounceIn" data-wow-offset="300">
                <img src="../../static/images/certificate_advance.png" alt />
              </div>
            </div>
            <div class="between between_right">
              <div class="item">
                <div class="advance_title">·信息溯源</div>
                <div class="advance_text">信息数据加密后在链上进行分布式存储和容灾备份，即使本地数据被破坏或删除，也可溯源，提升数据的安全等级。</div>
              </div>
              <div class="item">
                <div class="advance_title">·智能合约保障</div>
                <div class="advance_text">将传统合约变成数字智能合约，当合约完成或违约发生时，系统自动执行合约的相关内容。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_out">
      <div class="content">
        <div class="content_title">
          <div class="content_big_title">应用场景</div>
          <div class="content_small_title">APPLICATION SCENARIO</div>
        </div>
        <div class="content_certificate_application">
          <div class="application_item wow flipInX" v-for="(item, index) in applicationList" :key="index">
            <img :src="'../../static/images/certificate_application_' + item.picIndex + '.png'" alt />
            <div class="application_item_text">{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  data() {
    return {
      applicationList: [
        { picIndex: 1, text: "电子文件" },
        { picIndex: 2, text: "版权保护" },
        { picIndex: 3, text: "证书存证" },
        { picIndex: 4, text: "金融" },
        { picIndex: 5, text: "保险" },
        { picIndex: 6, text: "众筹私募" },
        { picIndex: 7, text: "租赁" },
        { picIndex: 8, text: "真爱见证" }
      ]
    };
  },
  mounted() {
    new WOW().init();
  }
};
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin.scss";
@import "../../static/css/common.scss";
.plat_6 {
  height: 650px;
}
.content_service {
  @include fx(space-around);
  .service_img {
    width: 286px;
    height: 394px;
    img {
      display: block;
      width: 100%;
    }
  }
}
.certificate_advance {
  margin-top: 40px;
  @include fx(space-around);
  .between {
    @include fx(space-between);
    flex-direction: column;
    height: 354px;
    .item {
      text-align: left;
      .advance_title {
        font-size: 20px;
      }
      .advance_text {
        margin-top: 3px;
        line-height: 1.8;
        font-size: 14px;
        color: rgb(75, 75, 75);
      }
    }
  }
  .between_left {
    width: 280px;
  }
  .between_right {
    width: 294px;
  }
}
.content_certificate_application {
  margin-bottom: 20px;
  @include fx();
  flex-wrap: wrap;
  .application_item {
    width: 25%;
    position: relative;
    img {
      display: block;
      width: 100%;
    }
    .application_item_text {
      position: absolute;
      left: 27px;
      bottom: 17px;
      font-size: 20px;
      color: #fff;
    }
  }
}
</style>