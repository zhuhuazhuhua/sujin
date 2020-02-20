<template>
  <div>
    <div class="banner banner_traceability">
      <div class="banner_content">
        <div class="banner_title">苏金区块链</div>
        <div class="banner_title">溯源平台</div>
        <div class="banner_text_big">
          提供产品生产加工、商品出厂、物流运输、商品销售全流程信息溯源服务，
          防止信息篡改，实现有效追责和防伪溯源。
        </div>
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
            <img src="../../static/images/traceability_service_1.png" alt />
          </div>
          <div class="service_img wow flipInY">
            <img src="../../static/images/traceability_service_2.png" alt />
          </div>
          <div class="service_img wow flipInY">
            <img src="../../static/images/traceability_service_3.png" alt />
          </div>
          <div class="service_img wow flipInY">
            <img src="../../static/images/traceability_service_4.png" alt />
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
          <div class="traceability_advance">
            <div class="item wow fadeIn" data-wow-offset="200" data-wow-duration="2s">
              <div class="advance_img">
                <img src="../../static/images/traceability_advance_1.png" alt />
              </div>
              <div class="advance_title">数据安全保障</div>
              <div class="advance_text">用户数据安全加密，多级风险识别控制，保障信息安全。</div>
            </div>
            <div class="item wow fadeIn" data-wow-offset="200" data-wow-duration="2s">
              <div class="advance_img">
                <img src="../../static/images/traceability_advance_2.png" alt />
              </div>
              <div class="advance_title">一站式服务</div>
              <div class="advance_text">根据企业需求，提供对应行业解决方案，一站式服务解决轻松用户痛点。</div>
            </div>
            <div class="item wow fadeIn" data-wow-offset="200" data-wow-duration="2s">
              <div class="advance_img">
                <img src="../../static/images/traceability_advance_3.png" alt />
              </div>
              <div class="advance_title">精准定位</div>
              <div class="advance_text">支持追溯码与企业内部业务流程对接，产品行为和流通行为精准定位。</div>
            </div>
            <div class="item wow fadeIn" data-wow-offset="200" data-wow-duration="2s">
              <div class="advance_img">
                <img src="../../static/images/traceability_advance_4.png" alt />
              </div>
              <div class="advance_title">部署快，成本低</div>
              <div class="advance_text">部署方便，具备多重深度信息，操作简单，周期短成本低。</div>
            </div>
            <div class="item wow fadeIn" data-wow-offset="200" data-wow-duration="2s">
              <div class="advance_img">
                <img src="../../static/images/traceability_advance_5.png" alt />
              </div>
              <div class="advance_title">多端应用</div>
              <div class="advance_text">配备pc、app、dapp等多终端应用，随时查询使用。</div>
            </div>
            <div class="item wow fadeIn" data-wow-offset="200" data-wow-duration="2s">
              <div class="advance_img">
                <img data-wow-duration="1.5s" src="../../static/images/traceability_advance_6.png" alt />
              </div>
              <div class="advance_title">支持高并发量</div>
              <div class="advance_text">基于高频并发交易设计，支持大数据量，高性能、高并发。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_out">
      <div class="content">
        <div class="content_title">
          <div class="content_big_title">行业应用</div>
          <div class="content_small_title">INDUSTRIAL APPLICATION</div>
        </div>
        <div class="content_application">
          <div class="application_img">
            <img class="wow bounceIn" src="../../static/images/traceability_application.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs';
export default {
  mounted() {
    new WOW().init();
  }
};
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin.scss";
@import "../../static/css/common.scss";
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
.traceability_advance {
  @include fx(space-around);
  flex-wrap: wrap;
  .item {
    margin-top: 35px;
    width: 30%;
    .advance_title {
      font-size: 20px;
      font-weight: bold;
      margin-top: 30px;
    }
    .advance_text {
      font-size: 14px;
      color: rgb(75, 75, 75);
      width: 252px;
      margin: 25px auto 0;
      line-height: 2;
    }
  }
}
.content_application {
    margin-bottom: 20px;
    .application_img {
        width: 1200px;
        margin: 0 auto;
        img {
            display: block;
            width: 100%;
        }
    }
}
</style>