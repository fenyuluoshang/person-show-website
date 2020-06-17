<template>
  <div class="home page">
    <div class="page-box">
      <h2>纷羽's 作品站</h2>
      <p class="small">来自梦想星球的菜鸟魔法师</p>
      <p class="small">
        <a href="https://fenyu.club">主页</a>&nbsp;
        <a href="https://blog.fenyu.club">我的博客</a>&nbsp;
        <a href="https://github.com/fenyuluoshang">GitHub</a>&nbsp;
        <router-link to="/about">致敬</router-link>
      </p>
      <div v-for="(item,index) in datas" :key="index">
        <h3>{{item.title}}</h3>
        <div class="row">
          <RouterItem
            v-for="(item2,index2) in item.list"
            :key="index2"
            :title="item2.title"
            :img="item2.image?item2.image+RESIZE:null"
          />
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
  VISIT_IMG,
  PHOTOMAKE_IMG,
  WISH_IMG
} from "@/assets/cdns";

const RESIZE = "?x-oss-process=image/resize,w_300,limit_0";
@Component({
  components: {
    RouterItem
  }
})
export default class HomePage extends Vue {
  RESIZE = "?x-oss-process=image/resize,w_300,limit_0";
  GO_IMG = GO_IMG + RESIZE;
  Admin_IMG = Admin_IMG + RESIZE;
  PARTY2019 = PARTY2019 + RESIZE;
  DBMT_IMG = DBMT_IMG + RESIZE;
  NEUSOFT_IMG = NEUSOFT_IMG + RESIZE;
  VISIT_IMG = VISIT_IMG + RESIZE;
  PHOTOMAKE_IMG = PHOTOMAKE_IMG + RESIZE;
  WISH_IMG = WISH_IMG + RESIZE;

  datas = [
    {
      title: "学校网站",
      list: [
        {
          title: "Go!校园综合门户",
          image: GO_IMG,
          items:
            "一个结构很独特的门户网站\n项目使用Nuxt构建\n项目中搜索栏使用了自定义组件"
        },
        {
          title: "2020教职工晚会",
          image: PARTY2019,
          items:
            "2020年和工作室成员一起负责了教职工晚会\n这是一次很棒的团队管理尝试",
          news: [
            {
              title:
                "不忘初心，携手同行！我们以这样一场联欢会，共迎大东软2020新精彩！",
              href: "https://mp.weixin.qq.com/s/lusgOZk7AFFCTL1WwfK3Rw"
            }
          ]
        },
        {
          title: "参观预约小程序",
          image: VISIT_IMG,
          items: "一个简洁大方的微信预约和抢票小程序"
        },
        {
          title: "大连东软信息学院官网",
          image: NEUSOFT_IMG,
          items: "有幸在学校官网上留下了自己的脚印",
          url: "http://www.neusoft.edu.cn"
        },
        {
          title: "送祝福活动",
          image: WISH_IMG,
          items:
            "用在了2020年教职工晚会和20周年校庆\n实现了一套不会互相遮挡的弹幕控制器",
          news: [
            {
              title: "原来你一直牵念的人是我",
              href:
                "https://mp.weixin.qq.com/s?__biz=MzA4MDA1MTExMQ==&mid=2656733984&idx=1&sn=f0e318e3f280881833984f052ab8f4bf&chksm=840405e8b3738cfeb4eaf995c3e0664e90160b332c1142d2253f0a3423945ff5243b67d43cd2"
            }
          ]
        },
        {
          title: "照片合成活动",
          image: PHOTOMAKE_IMG,
          items: "使用canvas给照片加边框(或者制作头像框。",
          news: [
            {
              title: "这才是我最想pick的大东软头像！",
              href: "https://mp.weixin.qq.com/s/3gBtWFdGWbMU7y-rIIeFUA"
            }
          ]
        },
        {
          title: "微光管理员中心",
          image: Admin_IMG,
          items: "解决了工作室一服务一密码的问题"
        },
        {
          title: "DeMar大学生技术交流站",
          image: null,
          items: "一个以方便同学们寻找知己、一起学习交流和做实践项目的网站"
        }
      ]
    },
    {
      title: "外包项目",
      list: [
        {
          title: "大连冰山科技官网",
          image: DBMT_IMG,
          items:
            "一个结构很独特的门户网站\n项目使用Nuxt构建\n项目中搜索栏使用了自定义组件"
        }
      ]
    },
    {
      title: "小玩具",
      list: []
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "@/value.scss";
a {
  color: inherit;
  &:active {
    color: inherit;
  }
}

.small {
  font-size: 88%;
}

.router-item-a {
  width: (100%-12%)/3;
  margin: 20px 2%;
  @media (max-width: $xs-sm-width) {
    width: 96%;
  }
}
</style>