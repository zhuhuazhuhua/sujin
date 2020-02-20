<template>
  <div>
    <div class="banner banner_solution">
      <div class="banner_content">
        <div class="banner_title">行业解决方案</div>
        <div class="banner_text_big">应用场景多样化，区块链赋能，致力于解决用户痛点，为用户提供完善的解决方案。</div>
      </div>
    </div>
    <div class="sort">
      <div
        :class="[item.num == currentType ? 'choose' : '','sort_item']"
        v-for="(item, index) in sortList"
        :key="index"
        @click="changeType(item)"
      >{{item.text}}</div>
    </div>
    <solution-detail :currentType="currentType"></solution-detail>
    <div class="platform contact_plat">
      <div class="platformBg"></div>
      <div class="out">
        <div class="index_content">
          <div class="contact_title">
            <div class="title_text">项目合作联系方式</div>
            <div class="title_line"></div>
          </div>
          <div class="contact_type">
            <div class="contact_item">
              <img class="left_img" src="../../static/images/solution_contact_phone.png" alt />
              <div class="right_text">13370045631</div>
            </div>
            <div class="contact_item">
              <img class="left_img" src="../../static/images/solution_contact_wx.png" alt />
              <img  class="qrcode" src="../../static/images/solution_contact_qrcode.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import solutionDetail from "./solutionDetail";
import { WOW } from 'wowjs'
export default {
  components: {
    solutionDetail
  },
  data() {
    return {
      currentType: 1,
      sortList: [
        { num: 1, text: "积分联盟" },
        { num: 2, text: "供应链金融" },
        { num: 3, text: "资产数字化" },
        { num: 4, text: "身份认证" },
        { num: 5, text: "股权管理" }
      ]
    };
  },
  mounted() {
    new WOW().init();
  },
  methods: {
    changeType(current) {
      if (current.num != this.currentType) this.currentType = current.num;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../static/css/mixin.scss";
@import "../../static/css/common.scss";
.banner_title {
  width: 300px;
}
.sort {
  width: 900px;
  margin: 5px auto 0;
  @include fx(space-between);
  font-size: 20px;
  .sort_item {
    width: 130px;
    height: 50px;
    @include fx(center);
    border-bottom: 2px solid #fff;
    cursor: pointer;
    transition: all 0.33s;
  }
  .choose {
    color: rgba(0, 123, 203, 1);
    border-bottom: 2px solid rgba(0, 123, 203, 1);
    transition: all 0.33s;
  }
}
.out {
  margin: 0 !important;
  height: auto!important;
  padding: 40px 0;
  .index_content {
    color: #fff;
    @include fx();
    flex-direction: column;
    .contact_title {
      .title_text {
        font-size: 30px;
      }
      .title_line {
        margin: 6px auto 0;
        width: 62px;
        height: 2px;
        background-color: #fff;
      }
    }
    .contact_type {
      @include fx(center);
      .contact_item {
        @include fx();
        margin: 50px;
        .right_text {
          font-size: 20px;
          margin-left: 30px;
        }
        .qrcode {
          margin-left: 25px;
        }
      }
    }
  }
}
</style>