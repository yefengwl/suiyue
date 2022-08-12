<template>
    <main>
        <header>
            <div class="m-profile">
                <div class="g-row">
                    <div class="left">
                        <img src="img/tx.png" alt="">
                        <div class="info">
                            <p>用户55942292</p>
                            <span>普通用户</span>
                        </div>
                    </div>
                    <div class="right">
                        <i></i>
                        <div class="m-super">
                            <i></i>
                            <div class="word">
                                <span>Pro会员</span>
                                <p>
                                    立即开通
                                    <i></i>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </header>
        <div class="m-u">
            <div class="m-myAsset">
                <h2>我的资产</h2>
                <ul>
                    <li v-for="(item,index) in list" :key="index">
                        <p>{{item.num}}</p>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
            <div class="m-uMenu">
                    <ul>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                                <i></i>
                                <p>我的订单</p>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="">
                            </router-link>
                        </li>
                    </ul>
            </div>
            <div class="btn">
                <van-button type="primary" size="large">
                    退出登录
                </van-button>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {
                    num:'￥0',
                    title:'余额'
                },
                {
                    num:'0',
                    title:'红包'
                },
                {
                    num:'0',
                    title:'优惠券'
                },
                {
                    num:'0',
                    title:'积分'
                },
                {
                    num:'0',
                    title:'礼品卡'
                },
            ]
        }
    }
}
</script>
<style scoped>
.m-profile{
    width: 100%;
    background: url(../assets/images/bj.png);
    background-size: 100%;
    padding-left: .3rem;
}
.m-profile .g-row{
    display: flex;
}
.m-profile .g-row .left{
    width: 65%;
    padding: .64rem 0;
    display: flex;
    align-items: center;
}
.m-profile .g-row img{
    width: 1.42rem;
    height: 1.42rem;
    border-radius: 50%;
    vertical-align: middle;
}
.m-profile .g-row .info{
    margin-left: .3rem;
    color: #fff;
}
.g-row .info p{
    font-size: .36rem;
}
.g-row .info span{
    font-size: .24rem;
}
.m-profile .g-row .right{
    width: 35%;
    padding-left: .17rem;
    position: relative;
}
.g-row .right .m-super{
    margin-top: 1.04rem;
    padding: 0 .2rem 0 .1rem;
    background-image: linear-gradient(180deg,#574e44,#0e0e0e);
    border-top-left-radius: .64rem;
    border-bottom-left-radius: .64rem;
}
.right .m-super>i{
    background: url(../assets/images/jinglingtu9.png);
    width: .56rem;
    height: .56rem;
    display: inline-block;
    background-size: 3.21rem 2.78rem;
    background-position: -.58rem -.66rem;
    margin: .1rem;
    vertical-align: middle;
}
.g-row .right .word{
    display: inline-block;
    padding: .1rem 0;
    color: #ede7db;
    vertical-align: middle;
}
.right .word span{
    font-size: .24rem;
    color: #f9e0c0;
}
.right .word p{
    font-size: .2rem;
    vertical-align: middle;
    color: #f9e0c0;
}
.right .word p i{
    background: url(../assets/images/jinglingtu9.png);
    display: inline-block;
    vertical-align: middle;
    background-size: 3.21rem 2.78rem;
    width: .18rem;
    height: .18rem;
    background-position: -2.87rem -.48rem;
    margin-left: .04rem;
    margin-top: -.04rem;
}
.right>i{
    background: url(../assets/images/jinglingtu9.png);
    display: inline-block;
    vertical-align: middle;
    background-size: 3.21rem 2.78rem;
    position: absolute;
    right: .14rem;
    top: .16rem;
    width: .64rem;
    height: .64rem;
}
.m-u{
    background-color: #f4f4f4;
}
.m-myAsset{
    background: #fff;
    border-bottom: .2rem solid #f4f4f4;
}
.m-myAsset h2{
    margin-left: .3rem;
    border-bottom: .01rem solid #d9d9d9;
    text-align: left;
    line-height: 1.04rem;
    font-size: .28rem;
    font-weight: 400;
}
.m-myAsset ul{
    width: 100%;
    display: flex;
    text-align: center;
}
.m-myAsset li{
    width: 20%;
    padding-top: .32rem;
    font-size: .24rem;
    margin-bottom: 0.32rem;
}
.m-uMenu{
    margin-bottom: .4rem ;
    background: #fff;
}
.m-uMenu ul{
    display: flex;
    flex-wrap: wrap;
}
.m-uMenu li{
    width: 33%;
    border-right: 1px solid rgba(0,0,0,.15);
    border-bottom: 1px solid rgba(0,0,0,.15);
    text-align: center;
    padding-top: .45rem;
}
.m-uMenu li i{
   background: url(../assets/images/jinglingtu9.png); 
    height: .5rem;
    vertical-align: middle;
    margin-bottom: .16rem;
    background-size: 3.21rem 2.78rem;
    width: .5rem;
    display: inline-block;
}
.m-uMenu li a{
    color: #333;
}
.m-uMenu li:nth-of-type(1) i{
    background-position: -2.35rem -.52rem;
}
.m-uMenu li:nth-of-type(2) i{
    background-position: -.52rem -2.28rem;
}

.m-uMenu li:nth-of-type(3) i{
    background-position: -2.87rem 0;
    width: .34rem;
}
.m-uMenu li:nth-of-type(4) i{
    background-position:  -2.35rem -1.56rem;
}
.m-uMenu li:nth-of-type(5) i{
    background-position: -1.04rem -1.24rem;
}
.m-uMenu li:nth-of-type(6) i{
    background-position: -2.35rem 0;
}
.m-uMenu li:nth-of-type(7) i{
    background-position: -1.04rem -1.76rem;
}
.m-uMenu li:nth-of-type(8) i{
    background-position: -2.35rem -1.04rem;
}
.m-uMenu li:nth-of-type(9) i{
    background-position: -1.03rem -2.28rem;
}
.m-uMenu li:nth-of-type(10) i{
    background-position: -.52rem -1.24rem;
}
.m-uMenu li:nth-of-type(11) i{
    background-position: 0 -2.28rem;
}
.m-uMenu li:nth-of-type(12) i{
    background-position: -1.31rem 0;
}
.m-uMenu li:nth-of-type(13) i{
    background-position: -1.83rem -.52rem;
}
.m-uMenu li:nth-of-type(14) i{
    width: .63rem;
    background-position: -.66rem 0;
}
.btn{
    margin-bottom: 6vh;
}
.van-button--primary {
    color: #333;
    background-color: #fff;
    border: 1px solid #fff;
}
</style>