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
        <div class="de">
            <div class="logowrap">
                <img src="img/logo1.png" alt="">
            </div>
            <div class="btn">
                <van-button type="danger" size="large">
                    <i></i>
                    手机号快捷登录
                </van-button>
                <i></i>
                <van-button plain hairline type="primary" size="large">账号邮箱登录</van-button>
            </div>
            <div class="thirdwrap">
                <ul>
                    <li>
                        <i></i>
                        <span>微信</span>
                    </li>
                    <li>
                        <i></i>
                        <span>QQ</span>
                    </li>
                    <li>
                        <i></i>
                        <span>微博</span>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>
<style scoped>
main{
    position: relative;
    height: 100%;
    background: #f2f5f4;
}
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
.de{
    margin-top: 6vh;
    height: 94vh;
}
/* logo start */
.logowrap{
    text-align: center;
    padding-top: 1.6rem;
}
.logowrap img{
    width: 2.68rem;
    height: .9rem;
}
/* logo end */

/* 按钮 */
.btn{
    margin-top: 1rem;
    padding: 0 .4rem;
    margin-bottom: 2.05rem;
    text-align: center;
}
.btn button{
    height: .94rem;
    font-size: .28rem;
    margin-bottom: .32rem;
}
.btn button:nth-of-type(2){
    border: 1Px solid #DD1A21;
    color:#DD1A21;
}
.btn ::after{
    border: #DD1A21;
}
/* .btn i:nth-of-type(1){
    background: url(/img/jinglingtu6.png);
    background-size: .4rem 2.9rem;
    background-position: 0 -.5rem;
    position: absolute;
    display: inline-block;
    width: .4rem;
    height: .4rem;
    background-repeat: no-repeat;
}

.btn i:nth-of-type(2){
    background: url(/img/jinglingtu6.png);
    background-size: .4rem 2.9rem;
    background-position: 0 -.5rem;
    display: inline-block;
    position: absolute;
    width: .4rem;
    height: .4rem;
    top: 0.7rem;
    z-index: 5;
    left: 2.3rem;
    
} */

.thirdwrap{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: .8rem;
    height: .4rem;
    text-align: center;
}
.thirdwrap ul{
    display: flex;
    margin: 0 48px;
}
.thirdwrap li{
    height: .4rem;
    border-right: 1px solid #979797;
    display: inline-block;
    text-align: center;
    padding: 0 .4rem;
}
.thirdwrap li:nth-of-type(3){
    border-right: 0px;
}
.thirdwrap li span{
    font-size: .28rem;
    line-height: .4rem;
    height: .4rem;
    color: #7f7f7f;
    margin-left: .05rem;
}
.thirdwrap li:nth-of-type(1) i{
    background: url(/img/waibu1.png);
    background-size: 98%;
    display: inline-block;
    width: .4rem;
    height: .4rem;
    vertical-align: middle;
}
.thirdwrap li:nth-of-type(2) i{
    background: url(/img/waibu2.png);
    background-size: 98%;
    display: inline-block;
    width: .4rem;
    height: .4rem;
    vertical-align: middle;
}
.thirdwrap li:nth-of-type(3) i{
    background: url(/img/waibu3.png);
    background-size: 98%;
    display: inline-block;
    width: .4rem;
    height: .4rem;
    vertical-align: middle;
}
</style>