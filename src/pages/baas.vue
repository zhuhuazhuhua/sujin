<template>
  <div>
    <div class="banner banner_baas">
      <div class="banner_content">
        <div class="banner_title">苏金区块链</div>
        <div class="banner_title">BaaS平台</div>
        <div class="banner_text">
          链度区块链Baas平台是链度科技自主研发的具备高性能、强隐私保护的区块链技术服务平台，
          平台致力于打造一站式服务，有效解决商业、金融等多行业场景区块链应用问题。
        </div>
      </div>
    </div>
    <div class="content_out">
      <div class="content">
        <div class="content_title">
          <div class="content_big_title">平台特色</div>
          <div class="content_small_title">PLATFORM FEATURES</div>
        </div>
        <div class="content_info">
          <div class="content_left">
            <div class="left_img wow rubberBand">
              <img class="img" src="../../static/images/baas_unique.png" alt />
            </div>
            <div class="left_text">
              <div class="left_text_item">· 跨链技术，打通公链与联盟链数据交互</div>
              <div class="left_text_item">· 多链技术，实现数据上链过程中的多链切换</div>
            </div>
          </div>
          <div class="content_right">
            <div class="right_img">
              <img class="img" src="../../static/images/li.png" alt />
            </div>
            <div class="unique">
              <div class="item wow lightSpeedIn">
                <div class="unique_title">异构多链体系</div>
                <div class="unique_text">
                  采用异构多链体系，支持高并发、低延迟的实时区块写入和查询；
                  同时支持多副本复制、多实例部署，并通过一致性算法保证数据一致性。
                </div>
              </div>
              <div class="item wow lightSpeedIn" data-wow-delay="0.05s">
                <div class="unique_title">快速接入</div>
                <div class="unique_text">快速、安全、灵活的数据对接，支持SDK/API等多种方式，大幅降低业务开发、迁移及维护工作量，节约人员成本。</div>
              </div>
              <div class="item wow lightSpeedIn" data-wow-delay="0.1s">
                <div class="unique_title">全行业覆盖</div>
                <div class="unique_text">提供司法存证、防伪溯源、供应链金融等多行业应用场景服务，全方位解决用户痛点，提供完善的行业应用解决方案。</div>
              </div>
              <div class="item wow lightSpeedIn" data-wow-delay="0.15s">
                <div class="unique_title">合规安全</div>
                <div
                  class="unique_text"
                >完善的用户、密钥、权限管理和隔离处理，多层加密保障，可靠的网络安全基础能力，在保障数据信息安全的基础上，实现穿透式合规监管。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_out core_functionalty">
      <div class="content">
        <div class="content_title">
          <div class="content_big_title">核心功能</div>
          <div class="content_small_title">CORE FUNCTION</div>
        </div>
        <div class="content_info">
          <div class="core_item wow flipInY">
            <img src="../../static/images/core_1.png" alt />
          </div>
          <div class="core_item wow flipInY">
            <img src="../../static/images/core_2.png" alt />
          </div>
          <div class="core_item wow flipInY">
            <img src="../../static/images/core_3.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="content_out">
      <div class="content">
        <div class="content_title">
          <div class="content_big_title">配套产品</div>
          <div class="content_small_title">SUPPORTING PRODUCTS</div>
        </div>
        <div class="content_info">
          <div v-for="i in 2" :key="i" class="supporting_item hover wow bounceIn">
            <img class="img" :src="'../../static/images/supporting_' + i + '.png'" alt />
            <img class="hover_img" :src="'../../static/images/supporting_hover_' + i + '.png'" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="content_out application">
      <div class="content">
        <div class="content_title">
          <div class="content_big_title">应用场景</div>
          <div class="content_small_title">APPLICATION SCENARIO</div>
        </div>
        <div class="content_info">
          <div v-for="i in 5" :key="i" class="application_item hover">
            <img class="img" :src="'../../static/images/application_' + i + '.png'" alt />
            <img class="hover_img" :src="'../../static/images/application_hover_' + i + '.png'" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="content_out">
      <div class="content">
        <div class="content_title">
          <div class="content_big_title">接入流程</div>
          <div class="content_small_title">ACCESS TO THE PROCESS</div>
        </div>
        <div class="content_info">
          <img class="process_img wow bounceIn" data-wow-duration="1s" src="../../static/images/process.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  mounted() {
    new WOW().init()
  }
};
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin.scss";
@import "../../static/css/common.scss";
.core_functionalty {
  background-color: rgb(17, 6, 57);
  color: #fff;
}
.application {
  background-color: rgb(13, 34, 52);
  color: #fff; 
}
.content_info {
  @include fx(flex-end);
  align-items: flex-start;
  .content_left {
    margin-top: 10px;
    margin-right: 90px;
    .left_img {
      width: 367px;
      height: 396px;
      .img {
        display: block;
        width: 100%;
      }
    }
    .left_text_item {
      text-align: left;
      font-size: 20px;
      margin-top: 5px;
    }
  }
  .content_right {
    text-align: left;
    margin-right: 8px;
    @include fx(flex-start);
    align-items: flex-start;
    .right_img {
      width: 91px;
      height: 528px;
      .img {
        display: block;
        width: 100%;
      }
    }
    .unique {
      margin-left: 20px;
      .item {
        margin-bottom: 34px;
        width: 435px;
        .unique_title {
          font-size: 20px;
          font-weight: bold;
        }
        .unique_text {
          font-size: 16px;
          line-height: 1.6;
        }
      }
    }
  }
  .core_item {
    flex: 1;
    img {
      display: block;
      width: 100%;
    }
  }
  .supporting_item {
    width: 50%;
  }
  .application_item {
    width: 20%;
    margin-bottom: 50px;
  }
  .process_img {
      display: block;
      width: 100%;
      margin-bottom: 50px;
  }
}
</style>