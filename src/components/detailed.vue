<template>
    <main>
        <header>
            <div class="dd">
                <div class="d">
                    <router-link to="/index">
                    <i></i>
                    <i></i>
                </router-link>
                </div>
                <div class="d-right">
                    <router-link to="">
                        <i></i>
                    </router-link>
                    <router-link to="">
                        <i></i>
                    </router-link>
                </div>
            </div>
        </header>
        <div class="m-slide">
            <img src="img/ri.png" alt="">
            <span></span>
        </div>
        <div class="m-prom">
            <p>首单全额返 最高可100%返还</p>
            <p>
                <span>￥</span>
                88
                <span>
                    立返￥88元
                </span>
            </p>
        </div>
        <div class="m-detail">
            <div class="baseInfo">
                <div class="baseInfo-left">
                    <h3>每一口都有八种肉，全价猫粮</h3>
                    <p>
                        <img src="img/zy.png" alt="">
                        <img src="img/biao1.png" alt="">
                        网易严选
                    </p>
                    <span>推荐理由</span>
                </div>
                <div class="baseInfo-right">
                    <div class="ri">
                        <p>99.8%</p>
                        <p>好评率</p>
                    </div>
                    <i></i>
                </div>
            </div>
            <div class="rct">
                <div class="rcmdBanner">
                    <ul>
                        <li v-for="(item,index) in list" :key="index">
                            <span>{{item.num}}</span>
                            <span>{{item.title}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="listItem">
            <van-notice-bar mode="link">
                <p>
                    <span>规则：</span>
                    首单全额返最高返150余额，点击查看
                </p>
            </van-notice-bar>
        </div>
        <div class="fan">
            <ul class="tm-list">
                <li>
                    <van-notice-bar mode="link">
                        <p>
                            邮费:满99包邮
                        </p>
                    </van-notice-bar>
                    <van-divider />
                </li>
                <li>
                    <van-notice-bar mode="link">
                        <p>
                            购物返：最高返
                            <span>8积分</span>
                        </p>
                    </van-notice-bar>
                </li>
            </ul>
        </div>
        <div class="wup">
            <ul>
                <li>
                    <van-notice-bar mode="link">
                        <p>
                            请选择规格数量
                        </p>
                    </van-notice-bar>
                    <van-divider />
                </li>
                <li>
                    <van-notice-bar mode="link">
                        <p>
                            配送：
                            <span>
                                请选择配送地址
                            </span>
                        </p>
                    </van-notice-bar>
                </li>
                <li class="d">
                    <van-notice-bar mode="link">
                        <p>
                            服务：
                            <span>
                                7天无忧退换
                            </span>
                        </p>
                    </van-notice-bar>
                    <van-divider />
                </li>
            </ul>
        </div>
        <div class="pi">
            <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image.src" />
            </van-swipe-item>
            </van-swipe>
        </div>
        <div class="m-pj">
            <div class="head">
                <van-notice-bar mode="link">
                        <p>
                            用户评价（576069）
                            <span class="lu">
                                <span class="lv">99.8%</span>
                                好评率
                            </span>
                        </p>
                </van-notice-bar>
                <van-divider />
            </div>
            <div class="g-c">
                <div class="m-comment">
                    <div class="head">
                        <p>
                            <img src="img/tt.jpg" alt="">
                            <span>1****2</span>
                            <i></i>
                        </p>
                    </div>
                    <div class="extraInfo">
                        <span>2020-10-14 22:18:19</span>
                        <p>2.0配方 1.8千克*4袋</p>
                    </div>
                    <div class="content">
                        <p>这款喵粮非常好，猫咪喜欢吃。已经回购了好多次了，一直没有换过，以后也不会换！这次一下子买了四袋！</p>
                    </div>
                    <div class="pics">
                        <img src="img/ml1.jpg" alt="">
                        <img src="img/ml2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="dt-section">
            <div class="m-brandInfo">
                <div class="left">
                    <img src="img/biao1.png" alt="">
                </div>
                <div class="right">
                    <p class="title">
                        网易严选
                        <i></i>
                    </p>
                    <p class="desc">以“让美好生活触手可及”为初心，网易严选逐步发展成为中国新中产喜爱的生活方式品牌。</p>
                </div>
            </div>
        </div>
        <div class="lazy-component">
            <div class="head">
                <van-tabs v-model="active">
                    <van-tab title="商品名称">
                        <div class="m-attrCon">
                            <h3>商品参数</h3>
                            <ul class="panelList">
                                <li v-for="(item,index) in list1" :key="index">
                                    <div class="left">{{item.title}}</div>
                                    <div class="right">{{item.pse}}</div>
                                </li>
                            </ul>
                            <div class="hotArea-img">
                                <ul>
                                    <li><img src="img/lit/lit1.jpg" alt=""></li>
                                    <li><img src="img/lit/lit2.jpg" alt=""></li>
                                </ul>
                                <div class="hot">
                                    <div class="hot-btn">
                                        <span>您的专属顾问</span>
                                        查看
                                    </div>
                                </div>
                            </div>
                            <!-- 拼装图片 start -->
                            <ul class="m-detailHtml">
                                <li v-for="(item,index) in list2" :key="index">
                                    <img :src="item.src" alt="">
                                </li>
                            </ul>
                            <!-- 拼装图片 end -->
                        </div>
                        <div class="dt-section">
                            <div class="m-reportCheck">
                                <h3><van-divider>质检报告</van-divider></h3>
                                <div class="pic">
                                    <img src="img/baogao.jpg" alt="">
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="甄选家评测">内容 2</van-tab>
                </van-tabs>
            </div>
        </div>

        <!-- 固定底部 -->
        <div class="inner">
            <button>
                <i></i>
            </button>
            <button>
                立即购买¥88
                <span>(购买返88元余额)</span>
            </button>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    num:'1',
                    title:'41%蛋白质，高比例肉源蛋白'
                },
                {
                    num:'2',
                    title:'0谷物，减少碳水摄入，减少肠胃负担'
                },
                {
                    num:'3',
                    title:'7种肉源，多种优质鱼肉源搭配'
                },
                {
                    num:'4',
                    title:'2.0配方升级，改善便臭'
                },
            ],
            images: [
                {
                    src:'img/gg.png'
                },
                {
                    src:'img/gg1.jpg'
                }
            ],
            list1:[
                {
                    title:'营养分析保证值',
                    pse:'粗蛋白质≥41%；   粗脂肪≥16%；     粗纤维≤5.0%；    粗灰分≤10%；         水分≤10%；        钙≥1.1%；          总磷≥1.0%；          水溶性氯化物（以Cl-计）≥0.3%；     牛磺酸≥0.2%。'
                },
                {
                    title:'营养分析保证值',
                    pse:'粗蛋白质≥41%；   粗脂肪≥16%；     粗纤维≤5.0%；    粗灰分≤10%；         水分≤10%；        钙≥1.1%；          总磷≥1.0%；          水溶性氯化物（以Cl-计）≥0.3%；     牛磺酸≥0.2%。'
                },
                {
                    title:'营养分析保证值',
                    pse:'粗蛋白质≥41%；   粗脂肪≥16%；     粗纤维≤5.0%；    粗灰分≤10%；         水分≤10%；        钙≥1.1%；          总磷≥1.0%；          水溶性氯化物（以Cl-计）≥0.3%；     牛磺酸≥0.2%。'
                },
                {
                    title:'营养分析保证值',
                    pse:'粗蛋白质≥41%；   粗脂肪≥16%；     粗纤维≤5.0%；    粗灰分≤10%；         水分≤10%；        钙≥1.1%；          总磷≥1.0%；          水溶性氯化物（以Cl-计）≥0.3%；     牛磺酸≥0.2%。'
                },
                {
                    title:'营养分析保证值',
                    pse:'粗蛋白质≥41%；   粗脂肪≥16%；     粗纤维≤5.0%；    粗灰分≤10%；         水分≤10%；        钙≥1.1%；          总磷≥1.0%；          水溶性氯化物（以Cl-计）≥0.3%；     牛磺酸≥0.2%。'
                },
                {
                    title:'营养分析保证值',
                    pse:'粗蛋白质≥41%；   粗脂肪≥16%；     粗纤维≤5.0%；    粗灰分≤10%；         水分≤10%；        钙≥1.1%；          总磷≥1.0%；          水溶性氯化物（以Cl-计）≥0.3%；     牛磺酸≥0.2%。'
                },
                {
                    title:'营养分析保证值',
                    pse:'粗蛋白质≥41%；   粗脂肪≥16%；     粗纤维≤5.0%；    粗灰分≤10%；         水分≤10%；        钙≥1.1%；          总磷≥1.0%；          水溶性氯化物（以Cl-计）≥0.3%；     牛磺酸≥0.2%。'
                },
                {
                    title:'营养分析保证值',
                    pse:'粗蛋白质≥41%；   粗脂肪≥16%；     粗纤维≤5.0%；    粗灰分≤10%；         水分≤10%；        钙≥1.1%；          总磷≥1.0%；          水溶性氯化物（以Cl-计）≥0.3%；     牛磺酸≥0.2%。'
                },
                {
                    title:'营养分析保证值',
                    pse:'粗蛋白质≥41%；   粗脂肪≥16%；     粗纤维≤5.0%；    粗灰分≤10%；         水分≤10%；        钙≥1.1%；          总磷≥1.0%；          水溶性氯化物（以Cl-计）≥0.3%；     牛磺酸≥0.2%。'
                },
                {
                    title:'适用对象',
                    pse:'猫'
                },
            ],
            list2:[
                {
                    src:'img/lit/lit3.jpg'
                },
                {
                    src:'img/lit/lit4.jpg'
                },
                {
                    src:'img/lit/lit5.jpg'
                },
                {
                    src:'img/lit/lit6.jpg'
                },
                {
                    src:'img/lit/lit7.jpg'
                },
                {
                    src:'img/lit/lit8.jpg'
                },
                {
                    src:'img/lit/lit9.jpg'
                },
                {
                    src:'img/lit/lit10.jpg'
                },
                {
                    src:'img/lit/lit11.jpg'
                },
                {
                    src:'img/lit/lit12.jpg'
                },
                {
                    src:'img/lit/lit13.jpg'
                },
                {
                    src:'img/lit/lit14.jpg'
                },
                {
                    src:'img/lit/lit15.jpg'
                },
            ]
        }
    }
}
</script>
<style scoped>
header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 5;
    height: 42px;
}
.dd{
    height: .87rem;
    background-color: #fafafa;
    padding: 0 .16rem 0 .24rem;
    border-bottom: 1px solid #d9d9d9;
    position: relative;
}
.dd .d{
    float: left;
}
.d i:nth-of-type(1){
    background: url(../assets/images/jinglingtu5.png);
    background-size: 1.72rem 4.2rem;
    display: inline-block;
    width: .48rem;
    height: .44rem;
    background-position: 0 -.74rem;
    margin-bottom: 13px;
    margin-top: .2rem;
}
.d i:nth-of-type(2){
    background: url(../assets/images/jinglingtu5.png);
    background-size: 1.72rem 4.2rem;
    display: inline-block;
    width: 1.72rem;
    height: .54rem;
    background-position: 0 -1.28rem;
    margin-bottom: 13px;
    position: absolute;
    left: 3rem;
    top: 0.2rem;
}
.d-right{
    float: right;
}
.d-right a:nth-of-type(1) i{
    display: inline-block;
    background: url(../assets/images/jinglingtu5.png);
    background-size: 1.72rem 4.2rem;
    width: .64rem;
    height: .64rem;
    background-position: 0 -3.56rem;
    margin-bottom: 0.2rem;
    margin-top: 0.1rem;
}
.d-right a:nth-of-type(2) i{
    display: inline-block;
    background: url(../assets/images/jinglingtu5.png);
    background-size: 1.72rem 4.2rem;
    width: .64rem;
    height: .64rem;
    background-position: 0 0;
    margin-bottom: 0.2rem;
    margin-left: 0.2rem;
    margin-top: 0.1rem;
}
/* 头部结束 */
.m-slide{
    position: relative;
    width: 100%;
}
.m-slide img{
    width: 100%;
    margin-top: 6vh;
}
.m-slide span{
    display: inline-block;
    background: url(../assets/images/vie.png);
    width: .64rem;
    height: .64rem;
    cursor: pointer;
    position: absolute;
    left: .3rem;
    bottom: .4rem;
    background-size: cover;
}
.m-prom{
    width: 100%;
    background: rgb(250, 30, 50);
    padding-left: 6%;
}
.m-prom p:nth-of-type(1){
    font-size: .24rem;
    margin-bottom: 1vw;
    color: #fff;
}
.m-prom p:nth-of-type(2){
    font-size: .64rem;
    color: #fff;
}
.m-prom p:nth-of-type(2) span:nth-child(1){
    font-size: .36rem;
}
.m-prom p:nth-of-type(2) span:nth-child(2){
    color: rgb(250, 30, 50);
    background-color: #fff;
    border-radius: .48rem;
    font-size: .24rem;
    padding: 0 .1rem 0 .1rem;
}
.m-detail{
    width: 100%;
    padding: .26rem 0 .36rem .3rem;
}
.baseInfo{
    display: flex;
    margin-top: .14rem;
    width: 100%;
    padding-right: 3%;
}
.baseInfo-left{
    width: 80%;
}
.baseInfo-left h3{
    font-size: .32rem;
    font-weight: 700;
    margin-bottom: .04rem;
}
.baseInfo-left p{
    margin-top: .06rem;
    margin-bottom: .05rem;
    font-size: .24rem;
    color: #7f7f7f;
}
.baseInfo-left p img:nth-of-type(1){
    width: .64rem;
    
}
.baseInfo-left p img:nth-of-type(2){
    width: .28rem;
}
.baseInfo-left span{
    font-size: .24rem;
    color:#333;
}
.baseInfo-right{
    width: 20%;
    text-align: center;
    display: flex;
    align-items: center;
    padding-left: 0.4rem;
}
.baseInfo-right .ri{
}
.baseInfo-right p:nth-of-type(1){
    font-size: .32;
    color: #dd1a21;
    font-weight: 700;
}
.baseInfo-right p:nth-of-type(2){
    font-size: .24;
    color: #7f7f7f;
}
.m-detail i{
    background: url(../assets/images/jinglingtu4.png);
    display: inline-block;
    vertical-align: middle;
    width: .1rem;
    height: .19rem;
    background-size: 1.06rem .85rem;
    background-position: 0 -.66rem;
    margin-left: .1rem;
}
.rct{
    width: 100%;
    padding-right: 3%;
}
.rcmdBanner{
    width: 100%;
    background: #fafafa;
    border: 1px solid #e6e6e6;
    margin-top: 1vw;
    padding: .14rem .2rem;
}
.rcmdBanner li{
    font-size: .24rem;
    margin-bottom: .04rem;
}
.rcmdBanner li:nth-of-type(4){
    margin-bottom: 0;
}
.rcmdBanner li span:nth-of-type(1){
    display: inline-block;
    width: .24rem;
    height: .24rem;
    border: 1px solid #dd1a21;
    border-radius: 50%;
    font-size: .2rem;
    text-align: center;
    line-height: .24rem;
    font-weight: 700;
    color: #dd1a21;
    margin-right: .1rem;
}
.rcmdBanner li span:nth-of-type(2){
    display: inline-block;
}

.listItem .van-notice-bar{
    background-color: #fff;
    border-top: 1px solid #d9d9d9;
    color: #7f7f7f;
    font-size: .28rem;
}
.listItem .van-notice-bar p{
    color: #7f7f7f;
}
.van-notice-bar span{
    color: #333;
}
.fan{
    border-top: 0.200002rem solid rgb(244, 244, 244);
    background-color: #7f7f7f;
}
.fan .tm-list{
    background-color: #fff;
}
.tm-list .van-notice-bar p{
    color: #333;
}
.van-notice-bar{
    color: #7f7f7f;
    background-color: #fff;
}
.van-divider{
    margin: 0;
}
.tm-list .van-notice-bar p span{
    color: rgb(221, 26, 33)
}
.wup{
    border-top: 0.200002rem solid rgb(244, 244, 244);
    margin-bottom: 6vh;
}
.wup .van-notice-bar p{
    color: #333;
}
.wup .van-notice-bar p span{
    color: #7f7f7f;
}
.d .item:after{
    left: .3rem;
    width: 7.2rem;
}
.d .van-notice-bar .left{
    color: #333;
}
.pi{
    border-top: 0.200002rem solid rgb(244, 244, 244);
}
.pi img{
    width: 100%;
    height: 100%;
}
.m-pj{
    width: 100%;
    border-bottom: .2rem solid #eee;
}
.head{
    width: 100%;
}
.head p{
    width: 100%;
}
.head .van-notice-bar P{
    color: #333;
}
.head .van-notice-bar .lu{
    color: #333;
}
.head .van-notice-bar .lv{
    color: #dd1a21;
}
.head .van-notice-bar .van-notice-bar__content{
    width: 100%;
}
.g-c{
    padding: 0 .3rem;
}
.m-comment{
    padding-bottom: .32rem;
}
.m-comment .head{
    display: flex;
    padding: .3rem 0 .04rem;
    align-items: center;
}
.m-comment .head p{
    width: 100%;
}
.m-comment .head img{
    width: .64rem;
    height: .64rem;
    margin-right: .16rem;
    border-radius: 50%;
    vertical-align: middle;
}
.m-comment .head span{
    margin-right: .12rem;
}
.m-comment .head i{
    background: url(../assets/images/jinglingtu8.png);
    display: inline-block;
    vertical-align: middle;
    width: .3rem;
    height: .3rem;
    background-size: .94rem .62rem;
    background-position: 0 -.32rem;
}
.m-comment .extraInfo{
    margin-top: .18rem;
    font-size: .24rem;
    line-height: 1;
    color: #7f7f7f;
}
.m-comment .extraInfo span{
    font-size: .24rem;
    color: #7f7f7f;
}
.m-comment .extraInfo p{
    display: inline-block;
    margin-left: .16rem;
}
.m-comment .content{
    margin-top: .18rem;
    padding-right: .3rem;
}
.m-comment .pics{
    margin: .22rem 0 .06rem;
    display: flex;
}
.m-comment .pics img{
    width: 20%;
    margin-right: 2vw;
}
.dt-section{
    background: #fff;
    border-bottom: .2rem solid #eee;
}
.dt-section .m-brandInfo{
    background: #fff;
    color: #000;
    padding-bottom: .3rem;
    display: flex;
    padding-right: .3rem;
    position: relative;
}
.dt-section .m-brandInfo .left{
    width: 20%;
    text-align: center;
}
.dt-section .m-brandInfo img{
    width: 80%;
    margin-top: .5rem;
}
.dt-section .m-brandInfo .right{
    width: 80%;
}
.dt-section .m-brandInfo .title{
    display: flex;
    font-weight: 600;
    margin-top: .4rem;
    margin-bottom: .16rem;
    margin-right: .2rem;
    font-size: .32rem;
    align-items: center;
}
.dt-section .m-brandInfo .title i{
    background: url(../assets/images/jinglingtu7.png);
    display: inline-block;
    vertical-align: middle;
    width: .5rem;
    height: .5rem;
    background-size: 4.22rem 2.88rem;
    background-position: -2.5rem -.38rem;
    position: absolute;
    right: .18rem;
}
.dt-section .m-brandInfo .dese{
    font-size: .24rem;
}
.lazy-component{
    margin-bottom: 6vh;
}
.lazy-component .head{
    padding: 0 .3rem;
}
.m-attrCon{
    padding: .3rem;
}
.m-attrCon h3{
    padding: .4rem 0 .24rem;
    font-size: .28rem;
    font-weight: 300;
}
.m-attrCon .panelList li{
    display: flex;
    font-size: .24rem;
    line-height: .44rem;
    padding: .1rem .3rem .1rem 0;
    background-image: linear-gradient(90deg,#919191 33%,hsla(0,0%,100%,0) 0);
    background-position: top;
    background-size: 12px 1px;
    background-repeat: repeat-x;
}
.m-attrCon .left{
    width: 23%;
    color: #999;
}
.m-attrCon .right{
    width: 77%;
}
.m-attrCon .hotArea-img{
    width: 100%;
    position: relative;
}
.m-attrCon .hotArea-img img{
    width: 100%;
}
.m-attrCon .hotArea-img li{
    margin-bottom: -0.033rem;
}
.m-attrCon .hotArea-img .hot{
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    z-index: 0;
}
.m-attrCon .hotArea-img .hot-btn{
    display: inline-block;
    padding: 0 .12rem;
    background: rgba(0,0,0,.6);
    border-radius: .22rem;
    font-size: .22rem;
    color: #fff;
}
.hotArea-img .hot-btn span{
    margin-right: .1rem;
}
.m-attrCon .m-detailHtml{
    width: 100%;
}
.m-attrCon .m-detailHtml li{
    margin-bottom: -0.05rem;
}
.m-attrCon .m-detailHtml img{
    width: 100%;
}
.dt-section{
    padding: 0 .3rem;
    margin-top: 3vw;
}
.dt-section h3{
    padding: 0 25%;
}
.dt-section .pic{
    position: relative;
    margin-bottom: 6vw;
}
.dt-section img{
    width: 100%;
    height: 100%;
}
.dt-section .pic i{
    background: url(../assets/images/sech1.png);
    position: absolute;
    bottom: .2rem;
    right: .2rem;
    width: .69rem;
    height: .69rem;
    background-size: 100%;
}
/* 固定底部 */
.inner{
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
}
.inner button:nth-of-type(1){
    width: 20%;
    color: #333;
    background-color: #fff;
    border: 1px solid #c7c7c7;
}
.inner i{
    background: url(../assets/images/jinglingtu7.png);
    display: inline-block;
    vertical-align: middle;
    background-size: 4.22rem 2.88rem;
    width: .6rem;
    height: .6rem;
    background-position: -1.88rem -.38rem;
}
.inner button:nth-of-type(2){
    width: 80%;
    background-color: #dd1a21;
    border: 1px solid #dd1a21;
    font-size: .28rem;
    color: #fff;
    padding: 3vw 0;
}
.inner button:nth-of-type(2) span{
    color: #fff;
    font-size: .2rem;
}

</style>