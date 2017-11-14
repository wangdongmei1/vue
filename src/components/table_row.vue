<template>
    <tbody>
        <tr class='trbk'>
            <td v-for="(item, index) in item_row" :key='index'><span v-if='index==0' class='bg' @click='hideShow'>{{add}}</span>{{item}}</td>
        </tr>
        <tr v-show="flag" >
            <td colspan='9'>
                <table class='rowbox' cellpadding="0" cellspacing="0" >
                    <thead>
                        <tr>
                            <td>高校地区</td>
                            <td>高校名称</td>
                            <td>专业（类）</td>
                            <td>类中所含专业</td>
                            <td>远考科目范围</td>
                        </tr>
                        <tr v-for="(it, index) in item_table" :key='index'>
                            <td>{{it.province}}</td>
                            <td>{{it.collegeName}}</td>
                            <td>{{it.majorName}}</td>
                            <td>{{it.remark.join('、')}}</td>
                            <td>{{it.subjectRangeNames.join('、')}}</td>
                        </tr>
                    </thead>
                </table>
            </td> 
        </tr>
    </tbody>

</template>
<script>
    export default {
        props:['row'],
        data(){
            return{
                item_row:[],
                item_table:[],
                flag:false,
                add:"+"
            }
        },
        created:function(){
            this.item_row = this.row.slice(0,8)
            this.item_table = this.row[9]
            // console.log(this.row)
        },
        methods:{
            hideShow:function () {
                this.flag = !this.flag;
                if(this.flag){
                    this.add = "-"
                } else {
                    this.add = "+"
                }
            }
        }
    }
</script>
<style>
    td{
        text-align: center;
        border:1px solid #ccc;
        /* max-width: 100px */
    }
    .rowbox{
        width:100%;
        background:#f4f4f4;
    }
    .rowbox tr td{
        min-width: 100px;
        height:40px;
        border-top:0;
        border-right:0;
    }
    .trbk{
        width:1000px;
        border-right:1px solid #ccc;
    }
    .trbk td{
        min-width: 107px;
        height:40px;
        position: relative;
        padding-left:16px;
        border-top:0;
        /* border-right:0; */
        border-bottom:0;
    }
    .bg{
        background: rgba(0, 160, 92, 1);
        color:#fff;
        width:15px;
        height:15px;
        text-align: center;
        line-height:15px;
        position: absolute;
        top:13px;
        left:2px;
    }
</style>
