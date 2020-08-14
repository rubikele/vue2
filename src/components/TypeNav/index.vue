<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="currentsIndex = -1">
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2" @click='toSearch'>
            <div
              class="item"
              :class="{ item_on: currentsIndex === index }"
              v-for="(cName, index) in c1"
              :key="cName.categoryId"
              @mouseenter="moveIn(index)"
            >
              <h3>
                <a href="">{{ cName.categoryName }}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="cName2 in cName.categoryChild"
                    :key="cName2.categoryId"
                  >
                    <dt>
                      <a href="">{{ cName2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em
                        v-for="cName3 in cName2.categoryChild"
                        :key="cName3.categoryId"
                      >
                        <a href="">{{ cName3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentsIndex: -1,
    };
  },
  name: "TypeNav",
  //当数据渲染完后，挂载点时，调用这个函数
  mounted() {
    this.getCatgoryList();
    console.log(this);
  },
  //在一个方法里面去触发这个函数
  methods: {
    getCatgoryList() {
      this.$store.dispatch("getCatgoryList");
    },
    // var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
    // moveIn() {
    //   this.currentsIndex = index;
    // },

    moveIn: throttle(
      function(index) {
        this.currentsIndex = index;
      },
      30,
      { trailing: false }
    ),
    toSearch(){

    },
  },
  computed: {
    ...mapState({
      //这是数据的扩展，数据多，用对象接收，c1是属性，传参数state,返回的是state.home.categoryList 下收集的对象里面的数据
      c1: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 555px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: skyblue;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
