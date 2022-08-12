<template>
    <main>
        <header>
            <div class="listhd">
                <p>
                    <i></i>
                    <span>搜索商品, 共116996款好物</span>
                </p>
            </div>
        </header>
        <div class="min">
           <div class="min-left">
             <ul>
                <li></li>
             </ul>
           </div>
        </div>
    </main>
</template>
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
};
<style scoped>
header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    border-bottom: 1px solid #d9d9d9;
}
.listhd{
    padding: 0 5%;
}
.listhd p{
    width: 100%;
    background-color: #ededed;
    margin: 2vw 0;
    line-height: 7vw;
    text-align: center;
}
.listhd p i{
    background: url(../assets/images/jinglingtu3.png);
    display: inline-block;
    vertical-align: middle;
    background-size: 2.38rem 2.03rem;
    width: .28rem;
    height: .28rem;
    margin-right: .1rem;
    background-position: -1.4rem -.56rem;
}
.min{
    width: 100%;
    margin-top: 6.4vh;
    display: flex;
}
.min .min-left{
    width: 20%;
}
</style>
