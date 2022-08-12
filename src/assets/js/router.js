import VueRouter from 'vue-router'
import first from '../../components/first.vue'
import index from '../../components/index.vue'
import login from '../../components/login.vue'
import list from '../../components/list.vue'
import detailed from '../../components/detailed.vue'
import my from '../../components/my.vue'


var router= new VueRouter({
    routes:[
        {
            path:'/',
            component:first,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/list',
                    component:list
                },
                {
                    path:"/my",
                    component:my
                }
              ],
            redirect:'/index'
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/detailed',
            component:detailed
        },
        {
            path:"/*",
            redirect:'/index'
        }
        
    ]
  })
  // 导出
  export default router;