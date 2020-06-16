<template>
  <div class="home page">
    <div class="home-card">
      <h2>纷羽's 作品站</h2>
      <p class="small">来自梦想星球的菜鸟魔法师</p>
      <p class="small">
        <a href="https://fenyu.club">主页</a>&nbsp;
        <a href="https://blog.fenyu.club">我的博客</a>&nbsp;
        <a href="https://github.com/fenyuluoshang">GitHub</a>
      </p>
      <div>
        <h3>作品</h3>
        <div class="row">
          <RouterItem to="/go" title="Go!校园综合门户" :img="GO_IMG" />
          <RouterItem to="/about" title="2020教职工晚会后台" :img="PARTY2019" />
          <RouterItem to="/about" title="参观预约小程序" :img="VISIT_IMG" />
          <RouterItem to="/about" title="微光管理员中心" :img="Admin_IMG" />
          <RouterItem to="/about" title="大连东软信息学院官网" :img="NEUSOFT_IMG" />
          <RouterItem to="/about" title="大连冰山科技官网" :img="DBMT_IMG" />
          <RouterItem to="/about" title="挂书亭词库" :img="TOPPORS_IMG" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import RouterItem from "@/components/RouterItem.vue";
import { Vue, Component } from "vue-property-decorator";
import {
  GO_IMG,
  Admin_IMG,
  PARTY2019,
  DBMT_IMG,
  NEUSOFT_IMG,
  TOPPORS_IMG,
  VISIT_IMG
} from "@/assets/cdns";

const RESIZE = "?x-oss-process=image/resize,w_300,limit_0";
@Component({
  components: {
    RouterItem
  }
})
export default class HomePage extends Vue {
  GO_IMG = GO_IMG + RESIZE;
  Admin_IMG = Admin_IMG + RESIZE;
  PARTY2019 = PARTY2019 + RESIZE;
  DBMT_IMG = DBMT_IMG + RESIZE;
  NEUSOFT_IMG = NEUSOFT_IMG + RESIZE;
  TOPPORS_IMG = TOPPORS_IMG + RESIZE;
  VISIT_IMG = VISIT_IMG + RESIZE;
}
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  &:active {
    color: inherit;
  }
}

.home-card {
  box-sizing: border-box;
  padding: 3% 5%;
}

.small {
  font-size: 88%;
}

.router-item-a {
  width: (100% - 12%) /3;
  margin: 20px 2%;
}
</style>