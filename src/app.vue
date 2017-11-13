
<template>
    <div class="route">
    
<P class='remind'>
*由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！</P>        <ul class='tab'>
            <router-link :to="{name:'overall'}">综合检索</router-link>
            <router-link :to="{name:'college'}">高校检索</router-link>
            <router-link :to="{name:'major'}">专业检索</router-link>
        </ul>
        

        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>
<style scoped>
    
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-size: 1.4rem;
     }

    ul, li {
     list-style: none; 
    }

    a {
        text-decoration: none;
        color: #000; 
    }
    .route{
        width:1000px;
        margin:0 auto;
        font-size:16px;
        }
        .tab{
            font-size:0;
        }
        
        .tab a:hover,.router-link-active{
            background:#00a15c;
            color:#fff;
        }
        .tab a {
            float:left;
            display: block;
            min-width:50px;
            height:35px;
            text-align: center;
            line-height:35px;
            padding:0 9px;
            font-size:16px;
        }

        .remind{
            color:#ff0000;
            font-size:12px;
            line-height:20px;
            margin-top:10px;
        }
</style>