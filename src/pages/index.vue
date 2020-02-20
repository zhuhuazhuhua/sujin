<template>
  <div>
    <div class="banner banner_index"></div>
    <div class="platform plat_1">
      <div class="platformBg"></div>
      <div class="out">
        <div class="index_content">
          <div class="title">
            <p class="big_title">BaaS平台</p>
            <p class="small_title">
              <span class="subline"></span>
              <span class="small_text">BaaS PLATFORM</span>
              <span class="subline"></span>
            </p>
          </div>
          <div class="platform_text">
            苏金区块链BaaS平台为客户提供一站式区块链解决方案，
            快速构建区块链基础设施，一键完成区块链应用开发部署，
            助力各行业区块链商业应用场景落地，有效降低企业的移动信息化投入成本。
          </div>
          <div class="advance">
            <div class="advance_item">
              <div class="advance_title">高性能</div>
              <div class="advance_text">高业务并发处理能力，TPS达12000+</div>
            </div>
            <div class="advance_item">
              <div class="advance_title">全行业覆盖</div>
              <div class="advance_text">覆盖司法存证、防伪溯源、数字资产、供应链金融等多个行业</div>
            </div>
            <div class="advance_item">
              <div class="advance_title">个性化定制</div>
              <div class="advance_text">根据用户业务需求打造量身化定制区块链服务</div>
            </div>
          </div>
          <div class="saas_more" @click="changeRouter('/baas')">
            <img src="../../static/images/more.png" alt />
          </div>
          <div class="services">
            <div class="service_item item_1">
              <div class="service_title">链改服务</div>
              <div class="service_text">基于区块链底层技术特性，提供多行业解决方案。</div>
            </div>
            <div class="service_item item_2">
              <div class="service_title">系统建设</div>
              <div class="service_text">快速高效配置、部署、管理、监控企业区块链网络。</div>
            </div>
            <div class="service_item item_3">
              <div class="service_title">定制开发应用</div>
              <div class="service_text">定制开发各行业区块链小程序、DApp、后台等应用，为企业有效引流。</div>
            </div>
            <div class="service_item item_4">
              <div class="service_title">硬件配备</div>
              <div class="service_text">提供定制解决方案配套硬件设备，最大化降低企业成本。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="platform plat_2">
      <div class="platformBg"></div>
      <div class="out">
        <div class="index_content">
          <div class="title">
            <p class="big_title">存证平台</p>
            <p class="small_title">
              <span class="subline"></span>
              <span class="small_text">CERTIFICATE STORAGE PLATFORM</span>
              <span class="subline"></span>
            </p>
          </div>
          <div class="platform_text">
            苏金区块链存证平台联合仲裁委员会、司法鉴定中心等多个司法机构，
            构建完整的区块链司法联盟体系，为各节点提供电子存储，电子合同、
            法律服务、查证验证等服务，保障链上数据的真实有效。
          </div>
          <div class="second_cont">
            <div class="imgs wow bounceInLeft">
              <img src="../../static/images/cunzheng_1.png" alt />
            </div>
            <div class="ads wow bounceInRight">
              <div class="ads_item">
                <div class="item_icon">
                  <img src="../../static/images/cz_icon_1.png" alt />
                </div>
                <div class="item_right">
                  <div class="item_title">强司法有效力</div>
                  <div class="item_text">节点包含仲裁委员会、司法鉴定中心、公证处等权威机构。</div>
                </div>
              </div>
              <div class="ads_item">
                <div class="item_icon">
                  <img src="../../static/images/cz_icon_2.png" alt />
                </div>
                <div class="item_right">
                  <div class="item_title">安全稳定</div>
                  <div class="item_text">存证服务高度去中心化，确保存证服务安全稳定。</div>
                </div>
              </div>
              <div class="ads_item">
                <div class="item_icon">
                  <img src="../../static/images/cz_icon_3.png" alt />
                </div>
                <div class="item_right">
                  <div class="item_title">数据真实公正</div>
                  <div class="item_text">信息数据链上存证，多节点保全，保障数据真实可信。</div>
                </div>
              </div>
              <div class="ads_item cz_more">
                <img
                  @click="changeRouter('/certificate')"
                  class="cz_more_icon"
                  src="../../static/images/cz_more.png"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="platform plat_3">
      <div class="platformBg"></div>
      <div class="out">
        <div class="index_content">
          <div class="title">
            <p class="big_title">溯源平台</p>
            <p class="small_title">
              <span class="subline"></span>
              <span class="small_text">TRACING PLATFORM</span>
              <span class="subline"></span>
            </p>
          </div>
          <div class="platform_text">
            链度区块链溯源平台，结合区块链技术特点，将产品出厂信息，产品运输数据，
            产品交易信息全流程溯源信息上链，完整、安全、永久的保存在去中心化的数据库中，
            同时溯源信息不可篡改，保障数据安全，帮助企业快速构建良好的供应链生态体系。
          </div>
          <div class="second_cont">
            <div class="imgs">
              <div class="su_more">了解更多>></div>
              <img src="../../static/images/su_img.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="platform plat_4">
      <div class="out">
        <div class="index_content">
          <div class="title">
            <p class="big_title">合作伙伴</p>
            <p class="small_title">
              <span class="subline"></span>
              <span class="small_text">PARTNER</span>
              <span class="subline"></span>
            </p>
          </div>
          <div class="partners">
            <div v-for="i in 10" :key="i" class="partner_item hover">
              <img class="img" :src="'../../static/images/partner_' + i + '.png'" alt />
              <img class="hover_img" :src="'../../static/images/partner_hover_' + i + '.png'" alt />
            </div>
          </div>
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
          <div class="about_us_text">
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
          <div class="about_us_text">
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
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  data() {
    return {};
  },
  mounted() {
    new WOW().init()
  },
  methods: {
    changeRouter(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style lang="scss" sccoped>
@import "../../static/css/mixin.scss";
@import "../../static/css/common.scss";
.platform {
  .platform_text {
    margin: 0 auto;
    color: rgb(75, 75, 75);
    width: 1069px;
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
  }
  .advance {
    margin-top: 160px;
    margin-left: 30px;
    width: 554px;
    height: 196px;
    text-align: left;
    .advance_item {
      margin-bottom: 20px;
      .advance_title {
        font-size: 18px;
        color: rgba(255, 255, 255, 0.984);
        font-weight: bold;
      }
      .advance_text {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.864);
      }
    }
  }
  .saas_more {
    margin-top: 50px;
    margin-left: 30px;
    width: 150px;
    z-index: 9;
    cursor: pointer;
    img {
      display: block;
      width: 150px;
    }
  }
  .services {
    position: absolute;
    bottom: 80px;
    left: 23px;
    height: 100px;
    @include fx(space-between);
    .service_item {
      margin: 0 20px;
    }
    .service_title {
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 16px;
    }
    .service_text {
      color: rgba(255, 255, 255, 0.864);
      font-size: 16px;
    }
  }
  //存证css
  .second_cont {
    @include fx(center);
    align-items: flex-start;
    margin-top: 50px;
    .ads {
      margin-left: 80px;
      margin-top: 30px;
      .ads_item {
        text-align: left;
        @include fx(flex-start);
        align-items: flex-start;
        margin-bottom: 25px;
        .item_icon {
          width: 70px;
          margin-top: 5px;
        }
        .item_right {
          .item_title {
            font-size: 20px;
          }
          .item_text {
            margin-top: 15px;
            font-size: 16px;
            color: #888;
          }
        }
      }
      .cz_more {
        margin-top: 70px;
        .cz_more_icon {
          cursor: pointer;
        }
      }
    }
    .imgs {
      position: relative;
      .su_more {
        position: absolute;
        left: 265px;
        bottom: 190px;
        color: rgb(73, 110, 232);
        cursor: pointer;
      }
    }
  }
  //合作伙伴css
  .partners {
    @include fx(space-around);
    flex-wrap: wrap;
    .partner_item {
      margin: 30px 30px 0;
    }
  }
}
.plat_1 {
  height: 937px;
  .platformBg {
    @include fullFix();
    background: url("../../static/images/platform_1.png") no-repeat bottom,
      transparent;
    background-size: auto;
  }
}
.plat_2 {
  height: 835px;
  .platformBg {
    @include fullFix();
    background: url("../../static/images/platform_2.png") no-repeat bottom,
      transparent;
    background-size: auto;
  }
}
.plat_3 {
  height: 816px;
  .platformBg {
    @include fullFix();
    background: url("../../static/images/su_bg.png") no-repeat bottom,
      transparent;
    background-size: auto;
  }
  .big_title {
    color: #fff !important;
  }
  .small_title {
    .subline {
      height: 2px !important;
    }
    .small_text {
      color: #838383 !important;
    }
  }
  .platform_text {
    width: 1140px !important;
    color: #fff !important;
  }
}
.plat_4 {
  .out {
    position: static;
    margin-bottom: 50px;
  }
}
</style>