<template>
    <div>
        <div class='div-over'>
            <span>高校层次：</span>
            <div class="gx1-content">
                <filter-item v-for="(value,index) in  schoolRange " :range-object="value" :ind="index" :active="value.selected" :val="'高校层次'"></filter-item>
            </div>

        </div>
    <div style='clear:both'></div></div>

</template>

<script>
import filter_item from './filter_item.vue'
    export default {
        data(){
            
            return {
                
            }
        },
        props:['schoolRange'],
        mounted:function(){
            
        },
        components:{
            "filter-item":filter_item,
        }
    }
</script>

<style>


</style>