<template>
  <div class="notfound page">
    <div class="page-box">
      <h2>404 NOT FOUND</h2>
      <p class="small">
        <router-link to="/">首页</router-link>&nbsp;
        <a v-if="history > 1" href="javascript:void(0);" @click="$router.go(-1)"
          >返回上一页</a>&nbsp;
        <a href="https://fenyu.club">主页</a>&nbsp;
        <a href="https://blog.fenyu.club">我的博客</a>&nbsp;
        <a href="https://github.com/fenyuluoshang">GitHub</a>&nbsp;
        <router-link to="/about">致敬</router-link>
      </p>
      <div>
        <p>您正在访问的资源或许不存在，请尝试修正</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  computed: {
    history() {
      return window.history.length;
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  &:active {
    color: inherit;
  }
}

.small {
  font-size: 88%;
}
</style>