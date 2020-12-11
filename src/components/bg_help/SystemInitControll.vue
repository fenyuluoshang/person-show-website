<template>
  <div v-if="info" :class="{'info':true,'unshow':unshowAction}">
    <p v-for="(item,index) in text" :key="index">{{item}}</p>
  </div>
  <div v-else class="info"></div>
</template>

<script lang="ts">
import EventBus from "@/util/EventBus";
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

const INIT = "SERVER CONNECT FROM JAPAN; CDN CONNECT SUCCESS! WELCOME!";
const BEFORE_LOAD = "SYSTEM INIT:系统初始化中...";
const MODEL_LOAD = "核心初始化中...";
const MODEL_OK = "核心已上线";
const MODEL_FAIL = "核心加载失败;skip...";
const UI_OK = "UI界面初始化...";
const ALL_OK = "ALL SYSTEM ON!";
@Component
export default class TxtPanel extends Vue {
  info = true;
  text: string[] = ["CONSOLE START"];

  unshowAction = false;

  unshowShould = false;

  @Prop({
    default: false
  })
  "modelok"?: boolean;

  @Prop({
    default: false
  })
  "modelfail"?: boolean;

  init = false;
  initAfter?: Function;

  mounted() {
    this.text.push(INIT);
    setTimeout(() => {
      this.text.push(BEFORE_LOAD);
    }, 500);
    setTimeout(() => {
      this.text.push(MODEL_LOAD);
      this.init = true;
      if (this.initAfter) this.initAfter();
    }, 1000);
  }

  loadUi() {
    this.text.push(UI_OK);
    setTimeout(() => {
      EventBus.$emit("ui_ok");
      this.allOk();
    }, 500);
  }

  allOk() {
    this.text.push(ALL_OK);
    this.unshowShould = true;
  }

  @Watch("modelok")
  modelOkWatch() {
    if (this.init) {
      this.text.push(MODEL_OK);
      this.$emit("start");
      setTimeout(() => {
        this.loadUi();
      }, 500);
    } else {
      this.initAfter = () => {
        this.text.push(MODEL_OK);
        this.$emit("start");
        setTimeout(() => {
          this.loadUi();
        }, 500);
      };
    }
  }

  @Watch("modelfail")
  modelFailWatch() {
    if (this.init) {
      this.text.push(MODEL_FAIL);
      // this.$emit("start");
      setTimeout(() => {
        this.loadUi();
      }, 500);
    } else {
      this.initAfter = () => {
        this.text.push(MODEL_FAIL);
        // this.$emit("start");
        setTimeout(() => {
          this.loadUi();
        }, 500);
      };
    }
  }

  @Watch("unshowShould")
  unshow() {
    if (this.unshowShould)
      setTimeout(() => {
        this.unshowAction = true;
        setTimeout(() => {
          this.info = false;
        }, 300);
      }, 3500);
  }
}
</script>

<style lang="scss" scoped>
.info {
  position: absolute;
  z-index: 1;
  color: #fff;
  bottom: 0;
  transition: color 0.3s ease-out;
  padding: 5px;

  p {
    margin: 5px 5px;
    font-family: "SimHei";
    font-size: 90%;
  }

  &.unshow {
    color: transparent;
  }
}
</style>