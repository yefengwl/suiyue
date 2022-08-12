<template>
    <main>
        <header>
                <div class="line">
                    <i></i>
                    <p>
                        <i></i>
                        <span>搜索商品, 共116996款好物</span>
                    </p>
                    <div class="loginbtn">
                        <router-link to="/login">登录</router-link>
                    </div>
                </div>
                <div class="tabWrap">
                    <div class="list">
                        <ul>
                            <li><router-link to=""><span>推荐</span></router-link></li>
                            <li><router-link to=""><span>居家生活</span></router-link></li>   
                            <li><router-link to=""><span>宠物生活</span></router-link></li>   
                            <li><router-link to=""><span>服饰鞋包</span></router-link></li>   
                            <li><router-link to=""><span>美食酒水</span></router-link></li>   
                            <li><router-link to=""><span>个护清洁</span></router-link></li>   
                            <li><router-link to=""><span>母婴亲子</span></router-link></li>   
                            <li><router-link to=""><span>运动旅行</span></router-link></li>   
                            <li><router-link to=""><span>数码家电</span></router-link></li>   
                            <li><router-link to=""><span>严选全球</span></router-link></li>
                        </ul>
                    </div>
                    <div class="toggleWrap">
                        <div class="linear"></div>
                        <div class="toggle">
                            <span></span>
                        </div>
                    </div>
                </div>
        </header>
         <!-- 轮播图 start -->
        <div>
            <div class="slideWarp">
                <van-swipe :autoplay="3000">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img :src="image.src" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <!-- 轮播图 end -->
            <div class="brand">
                <ul>
                    <li>
                        <i></i>
                        网易自营品牌
                    </li>
                    <li>
                        <i></i>
                        30天无忧退货
                    </li>
                    <li>
                        <i></i>
                        48小时快速退款
                    </li>
                </ul>
            </div>
            <!-- ———————————————————————— -->
            <div class="kingKong">
                <ul class="list2">
                    <li v-for="(item,index) in list2" :key="index">
                        <img :src="item.src" alt="">
                        <span>{{item.title}}</span>
                    </li>
                </ul>
            </div>
            <!-- ———————————————————————— -->
            <div class="floor">
                <img src="img/ds.gif" alt="">
            </div>
            <!-- 新人专享 start -->
            <div class="newpeople">
                <p class="new-peopleTitle">
                    —  新人专享礼  —
                </p>
                <div class="new-content">
                    <div class="con-left">
                        <h3>新人专享礼包</h3>
                        <div class="con-imgWrap">
                            <img src="img/static-union1.png" alt="">
                            <span></span>
                        </div>
                        
                    </div>
                    <div class="con-right">
                        <ul>
                            <li>
                                <div class="picWrap">
                                    <img src="img/zhekou1.png" alt="">
                                </div>
                                <p>
                                    福利社<br>
                                    <span>今日特价</span>
                                </p>
                                <div class="discount">
                                    <p>¥85<br><span>¥26</span></p>
                                </div>
                            </li>
                            <li>
                                <div class="picWrap">
                                    <img src="img/zhekou2.png" alt="">
                                </div>
                                <p>
                                    福利社<br>
                                    <span>今日特价</span>
                                </p>
                                <div class="discount">
                                    <p>¥85<br><span>¥99</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 新人专享 end -->
            <!-- 类目热销榜 start -->
            <div class="seller">
                <h3>类目热销榜</h3>
                <div class="sel-content">
                    <div class="sel-one">
                        <ul>
                        <li>
                            <p>
                                居家生活榜
                                <span></span>
                            </p>
                            <img src="img/sel1.png" alt="">
                            
                        </li>
                        <li>
                            <p>
                                美食酒水榜
                                <span></span>
                            </p>
                            <img src="img/sel2.png" alt="">
                            
                        </li>
                    </ul>
                    </div>
                    <div class="sel-two">
                        <ul class="list3">
                        <li v-for="(item,index) in list3" :key="index">
                            <p>{{item.title}}</p>
                            <img :src="item.src" alt="">
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            <!-- 类目热销榜 end -->
            <!-- 明星爆款和严选众筹 start-->
            <div class="wrapper">
                <ul>
                    <li>
                        <p>
                            明星爆款
                            <br>
                            <span>口碑放心买</span>
                        </p>
                        <!-- <div class="pic"> -->
                            <img src="img/wrap1.png" alt="">
                            <img src="img/wrap2.png" alt="">
                        <!-- </div> -->
                    </li>
                    <li>
                        <p>
                            严选众筹
                            <br>
                            <span>探索美与用</span>
                        </p>
                        <!-- <div class="pic"> -->
                            <img src="img/wrap3.png" alt="">
                            <img src="img/wrap4.png" alt="">
                        <!-- </div> -->
                    </li>
                </ul>
            </div>
            <!-- 明星爆款和严选众筹 end-->
            <!-- 固定广告 -->
            <div class="gg">
                <i></i>
            </div>
            <!-- 底部广告 start-->
            <div class="bott">
                <div class="bd">
                    <span>下载APP</span>
                    <span>电脑版</span>
                </div>
                <p>
                    网易公司版权所有 © 1997-2022
                    <br>
                    食品经营许可证：JY13301080111719
                </p>
            </div>
            <!-- 底部广告 end-->
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            list2:[
                {
                    src:'img/dh1.png',
                    title:'新品首发'
                },
                {
                    src:'img/dh2.png',
                    title:'居家生活'
                },
                {
                    src:'img/dh3.png',
                    title:'服饰鞋包'
                },
                {
                    src:'img/dh4.png',
                    title:'美食酒水'
                },
                {
                    src:'img/dh5.png',
                    title:'个护清洁'
                },
                {
                    src:'img/dh6.png',
                    title:'母婴亲子'
                },
                {
                    src:'img/dh7.png',
                    title:'运动旅行'
                },
                {
                    src:'img/dh8.png',
                    title:'运动旅行'
                },
                {
                    src:'img/dh9.png',
                    title:'宠物生活'
                },
                {
                    src:'img/dh10.gif',
                    title:'每日秒杀'
                },
            ],
            list3:[
                {
                    title:"服饰鞋包榜",
                    src:"img/line1.png"
                },
                {
                    title:"个护清洁榜",
                    src:"img/line2.png"
                },
                {
                    title:"宠物生活榜",
                    src:"img/line3.png"
                },
                {
                    title:"数码家电榜",
                    src:"img/line4.png"
                },
                {
                    title:"运动旅行榜",
                    src:"img/line5.png"
                },
                {
                    title:"母婴亲子榜",
                    src:"img/line6.png"
                },
                {
                    title:"严选全球榜",
                    src:"img/line7.png"
                },
            ],
            images: [
                {
                    src:"img/list1.jpg"
                },
                {
                    src:"img/list2.jpg"
                },
                {
                    src:"img/list3.jpg"
                },
                {
                    src:"img/list4.jpg"
                },
                {
                    src:"img/list5.jpg"
                },
                {
                    src:"img/list6.jpg"
                },
                {
                    src:"img/list7.jpg"
                },
            ],
        }
    }
}
</script>
<style scoped>
main{
     width: 100vw;
     overflow: hidden;
}
header{
    width: 100vw;
    position: fixed;
    z-index: 5;
}
header .line{
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    background: #fff;
    padding: .16rem .3rem;
}
header .line>i{
    background-image: url(../assets/images/jinglingtu1.png);
    vertical-align: middle;
    width: 1.38rem;
    height: .4rem;
    background-size: 3.76rem 3.76rem;
    background-position: -1.26rem -3.34rem;
    display: inline-block;
    margin-right: .2rem;
}
header .line p{
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: .56rem;
    font-size: .28rem;
    background-color: #ededed;
    border-radius: .08rem;
}
header .line p i{
    background: url(../assets/images/jinglingtu3.png);
    width: .28rem;
    height: .28rem;
    margin-right: .1rem;
    background-size: 2.38rem 2.03rem;
    background-position: -1.4rem -.56rem;
}
header .line span{
    color: #666;
}
header .line .loginbtn{
    width: 30px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #dd1a21;
    border: 1px solid #dd1a21;
    border-radius: 4px;
    margin-left: 7px;
    font-size: 12px;
}
.loginbtn a{
    color: #dd1a21;
}
.tabWrap{
    position: relative;
    z-index: 2;
    background: #fff;
    margin-top: -.01rem;
    height: 0.6rem;
    line-height: 0.6rem;
}
.list{
    margin-left: 10px;
    overflow: auto;
    
}
.list ul{
    display: flex;
    width: 230vw;
    text-align: center;
}
.list ul li{
    font-size: .28rem;
    width: 22vw;
    
}
.list li span{
    color: #333;
}
.list li:nth-of-type(1) span{
        color: #dd1a21;
}

.toggleWrap{
    display: flex;
    position: absolute;
    top: 0;
    right: 0
    
}
.toggleWrap .linear{
    width: .6rem;
    height: .6rem;
    background-image: linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff);
}
.toggleWrap .toggle{
    width: 1rem;
    height: .6rem;
    text-align: center;
    background: #fff;
}
.toggleWrap .toggle span{
    background: url(../assets/images/jinglingtu4.png);
    width: .3rem;
    height: .3rem;
    display: inline-block;
    background-size: 1.06rem .85rem;
    margin-bottom: 12px;
}
/* 轮播图 start */
.slideWarp{
    position: relative;
    margin-top: 11vh;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
.slideWarp img{
    width: 100%;
    height: 100%;
}
.van-swipe__track{
    height: 100%;
}
/* 轮播图 end */
.brand ul{
    display: flex;
    width: 100%;
    height: .72rem;
    padding: 0 .3rem;
    align-items: center;
}
.brand li{
    flex: 1;
    font-size: .24rem;
    color: #333;
    margin-left: .08rem;
    line-height: .32rem;
}
.brand li:nth-of-type(1) i{
    background: url(../assets/images/nav1.png);
    width: .32rem;
    height: .32rem;
    display: inline-block;
    vertical-align: middle;
    background-size: 100% 100%;
}
.brand li:nth-of-type(2) i{
    background: url(../assets/images/nav2.png);
    width: .32rem;
    height: .32rem;
    display: inline-block;
    vertical-align: middle;
    background-size: 100% 100%;
}
.brand li:nth-of-type(3) i{
    background: url(../assets/images/nav3.png);
    width: .32rem;
    height: .32rem;
    display: inline-block;
    vertical-align: middle;
    background-size: 100% 100%;
}
.kingKong{
    width: 100%;
}
.kingKong ul{
    overflow: hidden;
    padding: 0 5%;
}
.kingKong li{
    width: 20%;
    float: left;
    text-align: center;
}
.kingKong li:nth-of-type(5n){
    margin-right: 0 ;
}
.kingKong li img{
    width: 1.1rem;
    height: 1.1rem;
}
.kingKong li span{
    text-align: center;
    font-size: .24rem;
    color: #333;
    line-height: .36rem;
    white-space: nowrap;
    display: block;
}
.floor{
    margin-top:.2rem;
}
.floor img{
    width: 100%;
}
/* 新人专享 start */
.newpeople{
    width: 100%;
    margin-top: .4rem;
    padding-bottom: .3rem;
}
.new-peopleTitle{
    height: .9rem;
    width: 100%;
    line-height: .9rem;
    text-align: center;
    font-size: .32rem;
    padding: 0 .3rem;
}
.new-content{
    overflow: hidden;
    padding: 0 5%;
}
.con-left{
    height: 4.34rem;
    background: #f9e9cf;
    border-radius: .04rem;
    margin-right: .04rem;
    float: left;
    color: #333;
    width: 49%;
}
.con-left h3{
    font-size: .32rem;
    padding: .3rem 0 0 .3rem;
}
.con-imgWrap{
    margin: .37rem auto;
    width: 2.58rem;
    height: 2.57rem;
    position: relative;
}
.con-imgWrap img{
    width: 2.58rem;
    height: 2.57rem;
}
.con-imgWrap span{
    background: url(../assets/images/donghua.png);
    position: absolute;
    width: .3rem;
    height: .2rem;
    bottom: .18rem;
    right: .65rem;
    animation: carousel 1s linear infinite;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.con-right{
    float:left;
    width: 50%;
}
.con-right ul{
    width: 100%;
}
.con-right li:nth-of-type(1){
    background: #fbe2d3;
    border-radius: 4px;
    height: 2.15rem;
    margin-bottom: .04rem;
}
.con-right li:nth-of-type(2){
    background: #ffecc2;
    border-radius: 4px;
    height: 2.15rem;
    margin-bottom: 0;   
}
.con-right li:nth-of-type(2){
    margin-bottom:0;
}
.con-right li{
    margin: 0 .04rem .04rem 0;
    font-size: .24rem;
    padding: .2rem 0 0 .3rem;
    position: relative;
}
.con-right li .picWrap{
    top: .15rem;
    width: 2rem;
    height: 2rem;
    position: absolute;
    right: 0;
}
.picWrap img{
    width: 2rem;
    height: 2rem;
}
.con-right li>p{
    font-size: .32rem;
}
.con-right li span{
    font-size: .16rem;
}
.con-right li .discount{
    background: #f59524;
    position: absolute;
    width: .8rem;
    height: .8rem;
    top: .2rem;
    right: .3rem;
    opacity: .8;
    border-radius: 50%;
    padding-top: .1rem;
    color: #fff;
    text-align: center;
}
.discount>p{
    font-size: .24rem;
}
.discount span{
    font-size: .2rem;
    margin-top: -.07rem;
    text-decoration: line-through;
}
/* 新人专享 end */
/* 类目热销榜 start */
.seller{
    margin-bottom:.2rem;
    width: 100%;
    padding: 0 5%;
}
.seller h3{
    font-size: .32rem;
    line-height: 1rem;
}
.sel-content .sel-one ul{
    margin-bottom: .1rem;
    display: flex;
    width: 100%;
}
.sel-content .sel-one ul li{
    background: #f9f3e4;
    width: 50%;
    overflow: hidden;
    position: relative;
}
.sel-content .sel-one li:nth-of-type(2){
    background: #ebeff6;
}
.sel-content .sel-one li:nth-of-type(1){
    margin-right: .1rem;
}
.sel-content .sel-one li p{
    font-size: .28rem;
    margin-top: .4rem;
    position:relative;
    margin-left: .2rem;
    display: inline-block;
    width: 50%;
}
.sel-content .sel-one li span{
    display: inline-block;
    content: "";
    position: absolute;
    left: 0;
    bottom: -.16rem;
    width: .48rem;
    height: .04rem;
    background: #333;
}

.sel-content .sel-one li img{
    width: 40%;
    float: right;
}
.sel-two{
    width: 100%;
}
.sel-content .sel-two ul{
    overflow: hidden;
    width: 100%;
}
.sel-content .sel-two li{
    background: #f5f5f5;
    float: left;
    margin: 0px 0.1rem 0.1rem 0;
    width: 23%;
    text-align: center;
}
.sel-content .sel-two li:nth-of-type(4n){
    margin-right: 0;
}
.sel-content .sel-two p{
    margin-top: .1rem;
    text-align: center;
    font-size: .24rem;
    color: #333;
}
.sel-content .sel-two img{
    width: 50%;
}
/* 类目热销榜 end */
/* 明星爆款和严选众筹 start */
.wrapper{
    margin-bottom: .2rem;
    padding: 0 5%;
}
.wrapper ul{
    overflow: hidden;
}
.wrapper li{
    background: #f5f5f5;
    float: left;
    width: 49%;
    margin-left: 1%;
}
.wrapper li p{
    font-size: .32rem;
}
.wrapper li:nth-of-type(1) span{
    color: rgb(166, 130, 200);
    font-size: .24rem;
}
.wrapper li:nth-of-type(2) span{
    color: rgb(255, 111, 15);
    font-size: .24rem;
}
.wrapper li img{
    float: left;
    width: 50%;
    height: 50%;
}
/* 明星爆款和严选众筹 end */
/* 底部广告 start */
.bott{
    border-top: 1px solid rgba(0,0,0,.15);
    background-color: #414141;
    padding: .54rem .2rem .28rem;
    text-align: center;
    margin-bottom: 6vh;
}
.bd {
    font-size: .24rem;
    margin-bottom: .36rem;
}
.bd span{
    width: 1.72rem;
    height: .62rem;
    line-height: .62rem;
    color: #fff;
    display: inline-block;
    border: 1px solid #999;
    border-radius: 4px;
}
.bd span:nth-of-type(1){
    margin-right: .5rem;
}
.bott p{
    font-size: .24rem;
    line-height: .32rem;
    color: #999;
}
/* 底部广告 end */
.gg{
    position: fixed;
    right: 0;
    bottom: 2.4rem;
    display: block;
    z-index: 10;
}
.gg i{
    background: url(../assets/images/jinglingtu1.png);
    display: inline-block;
    vertical-align: middle;
    width: 1.12rem;
    height: .8rem;
    background-size: 3.76rem 3.76rem;
    background-position: -1.26rem -2.52rem;
}
</style>
