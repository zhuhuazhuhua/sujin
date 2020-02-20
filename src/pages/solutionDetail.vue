<template>
  <div>
    <div class="content_out">
      <div class="content">
        <div class="content_title">
          <div class="solution_line"></div>
          <div class="solution_title">
            <div class="title_zh">行业痛点</div>
            <div class="title_en">INDUSTRY ACCESS POIN</div>
          </div>
          <div class="solution_line"></div>
        </div>
        <div class="content_pain">
          <div class="pain_item" v-for="(item, index) in current.pain" :key="index">
            <div class="order">{{item.li}}</div>
            <div class="pain_text">{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_out">
      <div class="content">
        <div class="content_title">
          <div class="solution_line"></div>
          <div class="solution_title">
            <div class="title_zh">解决方案</div>
            <div class="title_en">SOLUTION</div>
          </div>
          <div class="solution_line"></div>
        </div>
        <div class="solution_text">{{current.solution}}</div>
        <div class="solution_img">
          <img :src="'../../static/images/solution_' + current.solutionImg + '.png'" alt />
        </div>
      </div>
    </div>
    <div class="content_out">
      <div class="content">
        <div class="content_title">
          <div class="solution_line"></div>
          <div class="solution_title">
            <div class="title_zh">方案优势</div>
            <div class="title_en">PLAN ADVANTAGE</div>
          </div>
          <div class="solution_line"></div>
        </div>
        <div class="content_advance">
          <div class="advance_item" v-for="(item, index) in current.advance" :key="index">
            <img src="../../static/images/solution_advance_bg.png" alt />
            <div class="advance_cont wow bounceIn">
              <div class="advance_title">{{item.title}}</div>
              <div class="advance_text">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_out">
      <div class="content">
        <div class="content_title">
          <div class="solution_line"></div>
          <div class="solution_title">
            <div class="title_zh">应用场景</div>
            <div class="title_en">APPLICATION SCENARIO</div>
          </div>
          <div class="solution_line"></div>
        </div>
        <div class="content_application">
          <div
            class="application_item"
            v-for="(item, index) in current.applicationImg"
            :key="index"
          >
            <img class="wow bounceIn" :src="'../../static/images/solution_application_' + item.num + '.png'" alt />
            <div class="application_title">{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  props: ["currentType"],
  data() {
    return {
      type: "",
      current: {},
      solutionList: [
        //积分联盟
        {
          pain: [
            {
              li: "01",
              text: "积分活动奖励成本高，收益小，商户积极性不足。"
            },
            {
              li: "02",
              text: "消费者可兑换礼品种类少，积分兑换限制多，门槛高。"
            },
            {
              li: "03",
              text: "各商户积分自成体系，过于分散，且无法累加，商户间无法通兑。"
            }
          ],
          solution:
            "通过基于区块链技术的积分系统提升传统积分流通性、安全性，同时打造行业联盟生态，通过数据智能分析实现精准营销，提升整体营销价值。",
          solutionImg: "core",
          advance: [
            {
              title: "构建积分生态",
              text:
                "建立基于区块链的全网身份认证服务或公共监管征信系统，增强公信力。"
            },
            {
              title: "提高运营效率和安全性",
              text: "分布式账本记账，数据不可篡改可追溯，安全可信任。"
            },
            {
              title: "提高积分流通率",
              text: "去中心化交易模式，促进积分的流通和使用。"
            }
          ],
          applicationImg: [
            { num: "1", text: "商业积分" },
            { num: "2", text: "电子券" },
            { num: "3", text: "预付卡" },
            { num: "4", text: "游戏装备" },
            { num: "5", text: "保险卡单" }
          ]
        },
        //供应链金融
        {
          pain: [
            {
              li: "01",
              text: "信息不对称、作假，缺乏透明度，造成信任成本高涨。"
            },
            {
              li: "02",
              text:
                "涉及到应付账款方、增信机构、保险机构的多方处理，花费时间长、成本高。"
            },
            {
              li: "03",
              text:
                "业务量受限，中小企业得不到及时融资，严重制约了企业的进一步发展。"
            }
          ],
          solution:
            "链度科技区块链基于不可篡改、可溯源的特性，实现供应链金融体系的信用穿透，极大提高了资金的流转，为金融机构和实体经济全产业链上下游提供一站式融资管理服务。",
          solutionImg: "finance",
          advance: [
            {
              title: "快速盘活主体资产",
              text:
                "基于未来可预测、稳定、权属清晰的现金流进行融资，助力企业快速盘活资产。"
            },
            {
              title: "降低资金端风控成本",
              text:
                "提供高度可信的环境，解决信息被篡改的问题，降低资金端风控成本。"
            },
            {
              title: "智能合约提升效率",
              text: "通过智能合约控制供应链流程，减少人为交互，提升产业效率。"
            }
          ],
          applicationImg: [
            { num: "6", text: "应收账款融资" },
            { num: "7", text: "消费金融理财" },
            { num: "8", text: "交易所仓单融资" },
            { num: "9", text: "银行物流合作融资" }
          ]
        },
        //资产数字化
        {
          pain: [
            {
              li: "01",
              text: "资产流转的复杂度增加，反洗钱和资金用途的监控困难。"
            },
            {
              li: "02",
              text: "传统资产发行及流通受制条件较多，交易成本高。"
            },
            {
              li: "03",
              text: "传统资产较难拆分，资产流通不灵活，并难以追溯流通过程。"
            }
          ],
          solution:
            "区块链上发行资产，后续流通环节可以不依赖于发行方系统，资产流通由单中心控制变成社会化传播，任何有资源的渠道都可以成为资产流通的催化剂。因此，区块链能极大地提升数字资产流通效率，真正达到“多方发行、自由流通”的效果。",
          solutionImg: "digitalize",
          advance: [
            {
              title: "资产安全",
              text: "资产数据多方记录，并不可篡改，多重保障用户资产安全。"
            },
            {
              title: "合规监管",
              text: "监管节点实时掌握资产流通状态，流通过程全程可以追溯。"
            },
            {
              title: "流通便利",
              text: "资产上链发行后，可拆散流通，并在流通环节不依赖发行方。"
            }
          ],
          applicationImg: [
            { num: "10", text: "证券化资产" },
            { num: "11", text: "电子商务" },
            { num: "12", text: "股权交易" },
            { num: "13", text: "私募管理" }
          ]
        },
        //身份认证
        {
          pain: [
            {
              li: "01",
              text: "各系身份难以统一管理"
            },
            {
              li: "02",
              text: "难以形成全面的身份画像"
            },
            {
              li: "03",
              text: "难以对数据使用进行授权"
            }
          ],
          solution:
            "运用区块链分布式账本及非对称加密技术的技术，将数据存储值区块链上，让身份认证和用户数据避开传统中央式数据存储的缺点，让ID数据避免篡改、攻击，提升ID使用效率，进而降低成本。",
          solutionImg: "auth",
          advance: [
            {
              title: "分布式身份标识",
              text: "多个身份标识的对应，实现各系身份统一管理。"
            },
            {
              title: "隐私保护",
              text: "非对称加密技术，保障用户隐私安全。"
            },
            {
              title: "多维式身份验证",
              text: "链接多维身份验证，提升数据安全等级。"
            }
          ],
          applicationImg: [
              { num: "14", text: "社交媒体" },
              { num: "15", text: "联合征信" },
              { num: "16", text: "求职招聘" },
              { num: "17", text: "司法认证" },
              { num: "18", text: "政务管理" }
          ]
        },
        //股权管理
        {
          pain: [
            {
              li: "01",
              text: "信息披露难，运营方与投资人之间的信息不对称。"
            },
            {
              li: "02",
              text: "权益流转难，权益的确权、交易、流通流程复杂。"
            },
            {
              li: "03",
              text: "权利委托难，股东权利委托的潜在纠纷和风险多。"
            }
          ],
          solution:
            "通过构建分布式应用，建立端到端的信任体系，为投资人及投资机构提供高效可信的资产流通环境，让股权从登记到执行，数据信息连续记录在区块上并形成唯一的数字凭证，保证信息真实完整性，可追溯特性能够对更新情况实时追踪。",
          solutionImg: "manage",
          advance: [
            {
              title: "有效投资管理",
              text: "针对项目的信息可信流转、多元评价体系和声誉管理。"
            },
            {
              title: "保障权益流通",
              text: "权益的数字化和可授权化设计，全流程的区块链记录。"
            },
            {
              title: "信任权利委托",
              text: "委托的多方认可和行权的有效记录，支持查询、出证。"
            }
          ],
          applicationImg: [
              { num: "19", text: "私募股权" },
              { num: "20", text: "公募股权" },
              { num: "21", text: "股权众筹" },
              { num: "22", text: "股权转让" }
          ]
        }
      ]
    };
  },
  watch: {
    currentType() {
      this.current = this.solutionList[this.currentType - 1];
    }
  },
  mounted() {
    this.current = this.solutionList[0];
    new WOW().init();
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin.scss";
@import "../../static/css/common.scss";
.content_title {
  width: 520px;
  margin: 20px auto 0;
  @include fx();
  .solution_line {
    width: 120px;
    height: 1px;
    background-color: #000;
  }
  .solution_title {
    .title_zh {
      margin-top: -18px;
      font-size: 30px;
      color: rgb(31, 31, 31);
      font-weight: bold;
    }
    .title_en {
      color: rgb(153, 153, 153);
      font-size: 14px;
    }
  }
}
.content_pain {
  @include fx();
  .pain_item {
    @include fx();
    .order {
      color: rgb(104, 156, 246);
      font-size: 48px;
    }
    .pain_text {
      font-size: 16px;
      text-align: left;
      line-height: 1.7;
      width: 280px;
      margin-left: 20px;
    }
  }
}
.solution_text {
  width: 770px;
  color: rgb(33, 33, 33);
  font-size: 16px;
  margin: 0 auto;
  line-height: 1.8;
}
.solution_img {
  margin-top: 50px;
}
.content_advance {
  @include fx(center);
  .advance_item {
    margin: 0 13px;
    width: 347px;
    height: 176px;
    position: relative;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .advance_cont {
      position: absolute;
      left: 40px;
      top: 27px;
      width: 256px;
      text-align: left;
      .advance_title {
        font-size: 20px;
        font-weight: bold;
        color: rgb(33, 33, 33);
      }
      .advance_text {
        margin-top: 25px;
        font-size: 14px;
        line-height: 1.8;
        color: #888;
      }
    }
  }
}
.content_application {
    margin-bottom: 30px;
    @include fx(center);
    .application_item {
        width: 224px;
        height: 140px;
        margin: 5px;
        position: relative;
        img {
            display: block;
            width: 100%;
        }
        .application_title {
           font-size: 24px;
           font-family: '楷体'; 
           color: #fff;
           position: absolute;
           left: 0;
           top: 0;
           width: 100%;
           height: 100%;
           @include fx(center);
        }
    }
}
</style>