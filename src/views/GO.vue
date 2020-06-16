<template>
  <div class="page">
    <h1>Go!校园综合门户</h1>
    <div></div>
    <img :src="IMG" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { GO_IMG } from "@/assets/cdns";

@Component
export default class GoPage extends Vue {
  IMG = GO_IMG + "?x-oss-process=image/resize,w_500,limit_0";
}
</script>