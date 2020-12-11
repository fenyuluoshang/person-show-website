<template>
  <div class="about page">
    <div class="page-box">
      <h2>关于</h2>
      <p class="small">
        <router-link to="/">首页</router-link>&nbsp;
        <a href="https://fenyu.club">主页</a>&nbsp;
        <a href="https://blog.fenyu.club">我的博客</a>&nbsp;
        <a href="https://github.com/fenyuluoshang">GitHub</a>&nbsp;
      </p>
      <div class="continue">
        <p>背景出自于 three.js 官方教程</p>
        <p>
          按钮动画出自于大魔法师
          <a target="_blank" href="https://flag.moe">哞菇</a> 大佬的网站
        </p>
        <p>感谢各位大佬和各位朋友来看我的实验室</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.continue {
  font-size: 16px;
  a {
    font-size: inherit;
  }
}

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