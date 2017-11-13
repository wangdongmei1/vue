<template>
    <div>
        <div class='div-over'>
            <span>高校地区：</span>
            <div class="gx1-content">
                <filter-item v-for="(value,index) in schoolArea " :ind="index" :range-object="value" :active="value.selected" :val="'高校地区'"></filter-item>
            </div>

        </div>
        <div style='clear:both'></div>
    </div>

</template>

<script>
    import filter_item from './filter_item.vue'
    export default {
        data(){
            
            return {
                
            }
        },
        props:['schoolArea'],
        // props:{
        //    "schoolArea":{
        //     type:Array,
        //     required:true
        //    }
        // },
        // created:function () {
        //     console.log(1)
        // },
        mounted:function(){
            setTimeout(function() {
                //console.log(this.schoolArea)
            }, 3000);
            // console.log(1)
           
        },
        components:{
            "filter-item":filter_item,
        }
    }
</script>

<style scoped>
</style>