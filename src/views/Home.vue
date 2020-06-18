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
            @click="clickBtn(item2)"
          />
        </div>
      </div>
    </div>
    <div v-show="model2" class="model">
      <div @click="closeModel" :class="{model_back:true,show:model}"></div>
      <div @click="stopEvent" :class="{__inner:true,show:model}">
        <div class="__body">
          <h3>{{action.title}}</h3>
          <div class="urls">
            <a v-if="action.github" target="_blank" :href="action.github">GitHub</a>
            <a v-if="action.url" target="_blank" :href="action.url">访问</a>
          </div>
          <div v-if="action.info" class="info">"&nbsp;{{action.info}}&nbsp;"</div>
          <div v-if="action.items" class="item">{{action.items}}</div>
          <template v-if="action.news">
            <h4>相关新闻及微信推送</h4>
            <a
              class="news"
              v-for="(item,index) in action.news"
              :key="index"
              target="_blank"
              :href="item.href"
            >
              <div class="__news_inner">
                <div class="title">《{{item.title}}》</div>
                <div class="from">——{{item.from}}</div>
              </div>
            </a>
          </template>
          <div v-if="action.image" class="image">
            <h4>页面截图</h4>
            <img :src="action.image" />
          </div>
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

  model = false;
  model2 = false;

  lock = false;

  action = {};

  datas = [
    {
      title: "学校网站",
      list: [
        {
          title: "Go!校园综合门户",
          image: GO_IMG,
          info: "可能是我们心目中最好的导航站",
          items:
            "一个结构很独特的门户网站\n项目使用Nuxt构建\n项目中搜索栏使用了自定义组件",
          url: "http://go.neusoft.edu.cn/guest"
        },
        {
          title: "2020教职工晚会",
          image: PARTY2019,
          info: "这是一次很棒的团队管理尝试",
          items:
            "作为队长和工作室成员一起负责了教职工晚会\n包括线上活动策划，指导开发，任务分配\n活动中心升级维护，抽奖接口维护。",
          news: [
            {
              title:
                "不忘初心，携手同行！我们以这样一场联欢会，共迎大东软2020新精彩！",
              href: "https://mp.weixin.qq.com/s/lusgOZk7AFFCTL1WwfK3Rw",
              from: "大连东软信息学院微信公众号"
            }
          ]
        },
        {
          title: "参观预约小程序",
          image: VISIT_IMG,
          info: "一个简洁大方的微信预约和抢票小程序",
          items: "为了学校对外开放、预约参观活动的需要"
        },
        {
          title: "大连东软信息学院官网",
          image: NEUSOFT_IMG,
          info: "有幸在学校官网上留下了自己的脚印",
          items:
            "和老师、社团同学一起维护着学校的官方网站，并在上面加了一些活动。",
          url: "http://www.neusoft.edu.cn",
          news: [
            {
              title: "大东软新版官网上线！颜值更高，体验更酷，等你猛戳！",
              href: "https://mp.weixin.qq.com/s/vLsMUstn8VTnypbjRsbdBg",
              from: "大连东软信息学院微信公众号"
            },
            {
              title: "今天，大东软官网想听你心里话",
              href: "https://mp.weixin.qq.com/s/X3eIvZWgK_nEZ3vS6GbKKA",
              from: "大连东软信息学院微信公众号"
            }
          ]
        },
        {
          title: "送祝福活动",
          image: WISH_IMG,
          info: "这个弹幕不会重叠",
          items:
            "在2020年教职工晚会和20周年校庆上的互动小活动\n收集祝福语并以弹幕同屏的形式展示\n实现了一套不会互相遮挡的高密度输出弹幕的控制器",
          news: [
            {
              title: "原来你一直牵念的人是我",
              href:
                "https://mp.weixin.qq.com/s?__biz=MzA4MDA1MTExMQ==&mid=2656733984&idx=1&sn=f0e318e3f280881833984f052ab8f4bf&chksm=840405e8b3738cfeb4eaf995c3e0664e90160b332c1142d2253f0a3423945ff5243b67d43cd2",
              from: "大连东软信息学院微信公众号"
            }
          ]
        },
        {
          title: "照片合成活动",
          image: PHOTOMAKE_IMG,
          items: "使用canvas给照片加边框(或者制作头像框。",
          url: "http://shimmer.neusoft.edu.cn/card",
          news: [
            {
              title: "这才是我最想pick的大东软头像！",
              href: "https://mp.weixin.qq.com/s/3gBtWFdGWbMU7y-rIIeFUA",
              from: "大连东软信息学院微信公众号"
            }
          ]
        },
        {
          title: "微光管理员中心",
          image: Admin_IMG,
          info: "解决了工作室一服务一密码的问题",
          items:
            "统一授权、统一控制用户权限、对工作室系统统一管理接入的一项服务，这项服务同时能让我们开放只有部分权限能力的账户给相关的老师"
        },
        {
          title: "DeMar大学生技术交流站",
          info: "一个以方便同学们寻找知己、一起学习交流和做实践项目的网站",
          items:
            "项目设计初期是为了给学校同学们个性化打造一款校园生活交流网站，同学们可以在这寻求组队，寻求学习上的帮助，交知心朋友，以博客的形式分享知识，以及报名参加社团和比赛。"
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
            "一个ts+ejs构建的网站\n使用了比较现代化、定制化的页面设计和webpack打包",
          url: "http://www.dbmt.com.cn"
        }
      ]
    },
    {
      title: "小玩具",
      list: [
        {
          title: "shimmer-joi",
          items: "基于 @hapi/joi 更好的 typescript 类型引导",
          github: "https://github.com/NeuShimmer/joi"
        }
      ]
    }
  ];

  clickBtn(data: any) {
    if (this.lock) return;
    this.lock = true;
    this.action = data;
    this.model2 = true;
    setTimeout(() => {
      this.model = true;
      this.lock = false;
    }, 0);
  }

  stopEvent(event: Event) {
    event.stopPropagation();
  }

  closeModel() {
    if (this.lock) return;
    this.lock = true;
    this.model = false;
    setTimeout(() => {
      this.model2 = false;
      this.lock = false;
    }, 800);
  }
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

.model {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
}

.model_back {
  width: 100%;
  height: 100%;
  background-color: rgba($color: #262626, $alpha: 0.7);
  opacity: 0;
  transition: opacity 0.8s cubic-bezier(0.315, 0.605, 0.375, 0.925);
  &.show {
    opacity: 1;
  }
}

.__inner {
  z-index: 1024;
  height: 100vh;
  width: 40vw;
  @media (max-width: $xs-sm-width) {
    width: 80vw;
  }
  z-index: 1;
  right: 0;
  top: 0;
  position: absolute;
  box-sizing: border-box;
  padding: 10px 20px;
  overflow: hidden;
  background-color: rgba($color: #262626, $alpha: 0.8);
  color: #bbb;
  transform: translateX(100%);
  transition: transform 0.8s cubic-bezier(0.315, 0.605, 0.375, 0.925);

  &.show {
    transform: translateX(0);
  }

  h3 {
    color: #fff;
  }

  h4,
  h5 {
    color: #ddd;
  }
}
.__body {
  font-size: 17px;
  height: 100%;
  overflow: auto;
  .image {
    width: 100%;
    > img {
      width: 100%;
    }
  }
  .urls {
    margin: 10px 0;
    font-size: 14px;

    color: #c9d6df;
    > a {
      margin-left: 15px;
    }
    :nth-child(1) {
      margin-left: 0;
    }
  }
  .news {
    text-decoration: none;
    .__news_inner {
      margin-top: 10px;
      box-sizing: border-box;
      padding: 8px 10px;
      background-color: #000;
      color: #999;
    }
    .title {
      font-size: 15px;
    }
    .from {
      text-align: right;
      font-size: 14px;
    }
  }
  .info {
    font-style: italic;
    margin-bottom: 10px;
  }
}
</style>