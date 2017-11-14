<template>
   <div class='divb'>
        <table class='tabbox' cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <td v-for="(item,index) in title" :key='index'>{{item}}</td>
                </tr>
            </thead>
            <tbody>
    
            </tbody>
        </table>
        <slot></slot>
   </div>

</template>
<script>
export default {
        props:{
            title:{
                required:true,
                type:Array
            }
        }
    }
</script>
<style>
    .divb{
        width:1000px;
    }
    .divb thead,.divb thead tr{
        width:100%;
        border:0;
    }
    .divb thead tr td{
    }
    .tabbox{
        width:100%;
        background: rgba(0, 160, 92, 1);
        color:#fff;
        height:40px;
    }
    .tabbox thead{
        line-height:40px;
    }
    
</style>
