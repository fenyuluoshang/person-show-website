<template>
  <div id="app">
    <div v-show="uiLoad" class="view">
      <router-view></router-view>
    </div>
    <BG1 class="bg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BG1 from "@/components/BG1.vue";
import EventBus from "@/util/EventBus";

@Component({
  components: {
    BG1
  }
})
export default class App extends Vue {
  uiLoad = false;

  mounted() {
    EventBus.$on("ui_ok", () => {
      this.uiLoad = true;
    });
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  overflow: hidden;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}

.bg {
  position: absolute;
  top: 0;
  z-index: -10;
  height: 100%;
}

.view {
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 5% 10%;
  @import "@/value.scss";
  @media (max-width: $xs-sm-width) {
    padding: 0;
  }
}

.page {
  background-color: rgba($color: #000000, $alpha: 0.3);
  color: mix(#000000, #ffffff, 0.3);
  animation-name: show-in;
  animation-duration: 0.5s;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.page-box {
  box-sizing: border-box;
  max-height: 100%;
  overflow: auto;
  padding: 3% 5%;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@keyframes show-in {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes index-link-active {
  0% {
    transform: perspective(1600px) rotateX(0) rotateY(0) translateZ(0);
  }
  16% {
    transform: perspective(1600px) rotateX(10deg) rotateY(5deg) translateZ(32px);
  }
  100% {
    transform: perspective(1600px) rotateX(0) rotateY(0) translateZ(65px);
  }
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 4px;
  border-radius: 2px;
  background-color: transparent;
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 2px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: rgba($color: #fff, $alpha: 0.2);
}
</style>
