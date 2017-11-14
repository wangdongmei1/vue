import overall from '../pages/overall.vue'
import college from '../pages/college.vue'
import major from '../pages/major.vue'

let routes = [
    {
        path:'/',
        redirect:'/overall'
    },
    {
        name:'overall',
        path:'/overall',
        component:overall
        // component:{
        //     template: `
        //     <div>
        //         <div style="clean:both"></div>
        //         <h1>综合检索</h1>

        //     </div>
        //     `
        // }
    },
    {
        name:'college',
        path:'/college',
        component: college
    },
    {
        name:'major',
        path:'/major',
        component: major
    }
]
export default routes;
