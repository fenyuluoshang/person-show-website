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
          <RouterItem to="/about" title="Go!校园综合门户" :img="GO_IMG" />
          <RouterItem to="/about" title="Go!校园综合门户" />
          <RouterItem to="/about" title="Go!校园综合门户" />
          <RouterItem to="/about" title="Go!校园综合门户" />
          <RouterItem to="/about" title="Go!校园综合门户" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import RouterItem from "@/components/RouterItem.vue";
import { Vue, Component } from "vue-property-decorator";
import { GO_IMG } from "@/assets/cdns";

@Component({
  components: {
    RouterItem
  }
})
export default class HomePage extends Vue {
  GO_IMG = GO_IMG;
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