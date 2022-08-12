<template>
    <main>
        <router-view></router-view>
        <div class="bot">
            <ul >
                <li>
                    <router-link to="/index">
                        <i></i>
                        <span>首页</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/list">
                        <i></i>
                        <span>
                            分类
                        </span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/detailed">
                        <i></i>
                        <span>
                            值得买
                        </span>
                    </router-link>
                </li>
                <li>
                    <router-link to="">
                        <i></i>
                        <span>
                            购物车
                        </span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/my">
                        <i></i>
                        <span>
                            个人
                        </span>
                    </router-link>
                </li>
            </ul>
        </div>
    </main>
</template>

<style>
    *{
        margin: 0px;
        padding: 0px;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    html{
        font-size: 48px;
    }
    body{
        font-size: .24rem;
    }
</style>

<style scoped>
.bot{
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    position: fixed;
    z-index: 5;
}
.bot ul{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    position: relative;
    z-index: 6;
    height: .98rem;
    border-top: 1px solid #d9d9d9;
}
.bot li{
    text-align: center;
    font-size: 12px;
    position: relative;
    padding-top: 0.13rem;
}
.bot li i{
    background: url(../assets/images/jinglingtu2.png);
    display: inline-block;
    vertical-align: middle;
    width: .4rem;
    height: .4rem;
    background-size: 1.66rem 1.24rem;
}
.bot li span{
    display: block;
    margin-top: .07rem;
    font-size: .24rem;
    color: #666;
    line-height: 1;
}
.bot li:nth-of-type(1) span{
    color: #dd1a21;
}
.bot li:nth-of-type(1) i{
    background-position: -.84rem 0;
}
.bot li:nth-of-type(2) i{
    background-position: -.42rem -.42rem;
}
.bot li:nth-of-type(3) i{
    background-position: -.42rem -.84rem;
}
.bot li:nth-of-type(4) i{
    background-position: -.42rem 0;
}
.bot li:nth-of-type(5) i{
    background-position: -1.26rem 0;
}
.bot .router-link-active{
    color: red;
}
</style>