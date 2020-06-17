<template>
  <a class="router-item-a" @click="click">
    <div @mouseenter="image_show=true" class="router-item">
      <span>{{title}}</span>
      <div class="item-bg"></div>
      <div v-if="img!=null" class="img-box">
        <img :src="image_src" />
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class RouterItem extends Vue {
  @Prop()
  img?: string;

  image_show = false;

  @Prop()
  title?: string;

  get image_src() {
    return this.image_show ? this.img : "";
  }

  click(e: Event) {
    this.$emit("click", e);
  }
}
</script>
<style lang="scss">
@keyframes box-showin {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
</style>
<style lang="scss" scoped>
@import "@/value.scss";
.router-item-a {
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
}
.router-item {
  position: relative;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
    transform: translateY(-10px);
    animation: index-link-active 0.8s cubic-bezier(0.315, 0.605, 0.375, 0.925)
      forwards;
    .item-bg {
      height: 100%;
      width: 100%;
      border-radius: 5px;
      box-shadow: 0 3px 20px rgba(0, 0, 0, 0.28);
    }
    .img-box {
      display: block;
      animation: box-showin 0.8s cubic-bezier(0.315, 0.605, 0.375, 0.925);
    }
  }
}
.item-bg {
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.28);
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: -1;
  height: 1%;
  background-color: rgba($color: #35d1f8, $alpha: 0.8);
  transition: all 0.5s;
}
.img-box {
  position: absolute;
  z-index: 5;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 5px;
  top: -5px;
  left: 50%;
  transform: translateY(-100%) translateX(-50%);
  display: none;
  width: 300px;
  max-width: 50%;
  max-height: 350%;
  overflow: hidden;
  transition: all 0.5s;
  @media (max-width: $xs-sm-width) {
    max-width: 100%;
  }
  img {
    width: 100%;
  }
}
</style>

