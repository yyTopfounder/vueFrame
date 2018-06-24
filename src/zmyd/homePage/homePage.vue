<template>
    <div id="homePage">
        <div>
        <mt-header title="首页">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        </div>
        <div id="homePageContrain">
            <div class="ionicContrain">
                <div class="ionRow" v-for="aryItem in ionicAry">
                    <div class="ionItem" v-for="ionic in aryItem" >
                        <div>
                            <img src="../../assets/img/icon-01.png" alt="">
                        </div>
                        <span>{{ionic}}</span>
                    </div>
                </div>
            </div>
            <div class="inforContrain">
                <div class="inforTitle">今日计划内任务</div>
                <div class="inforContent">
                    <div>市场检查:</div>
                    <div>共{{marketInspect.sum}}户,已检查{{marketInspect.inspect}}户。</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" module>
    #homePage{
        width 100%
        height 100%
        display flex
        flex-direction column
    }
    #homePageContrain{
        flex-grow 1
        display flex;
        justify-content space-between
        flex-direction column
        padding 10px
        div.ionRow{
            display flex
            flex-direction row
            justify-content space-between
            .ionItem{
                border 1px solid #ccc;
                width 60px
                height 70px
                div{
                    width 50px
                    height 50px
                    margin 0 auto
                    img{
                        width 50px
                        height 50px
                    }
                }
                span{
                    display block
                    text-align center
                }
            }
        }
        div.inforContrain{
            height 150px;
        }
    }

    .inforContrain{
        .inforTitle{
            font-size 16px
            font-weight 600
            border-bottom 2px solid #ccc
            padding-bottom 5px
        }
        .inforContent{
            padding-top 5px
            display flex
            justify-content space-between
            div:nth-child(1){
                padding-right 10px
            }
            div:nth-child(2){
                flex-grow 1
            }
        }
    }
</style>
<script>
    import axios from "axios"
    import { Header } from 'mint-ui';
    export default {
      data(){
        return {
          ionicAry:[
            ["ionic1","ionic2","ionic3","ionic4"],
            ["ionic5","ionic6","ionic7","ionic8"],
            ["ionic9","ionic10","ionic11","ionic12"],
            ["ionic13","ionic14","ionic15","ionic16"]
          ],
          marketInspect:{}
        }
      },

      created(){
        axios.get("http://localhost:3000/marketInspect").then((response)=>{
          this.marketInspect = response.data
        })
      },
      components:{
        Header
      }
    }
</script>