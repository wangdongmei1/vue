import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        school_range_obj:[],
        school_area_obj:[]
    },
    mutations:{
        updata:function(state,list){
            state.school_range_obj = list;
        },
        update:function(state,list){
            state.school_area_obj = list;
        },
        reset_school_range: function(state, item) {
            let arr;
            arr = state.school_range_obj.map((value, index) => {
                if (item.index == index) {
                    value.selected = item.selected;
                    // console.log(item.selected)
                } else {
                    value.selected = false;
                }
                return value
            });

            let selected_none = true;
            arr.forEach(item => {
                if (item.selected) {
                    selected_none = false;
                }
            })
            if (selected_none) {
                arr[0].selected = true;
            }
            state.school_range_obj = arr;
        },
        reset_school_college:function(state, item){
            state.school_area_obj[0].selected = false;
            if(item.index==0){
                state.school_area_obj.map((value,index)=>{
                    value.selected = (index == 0);
                    return value;
                })
            }
            state.school_area_obj.map((value, index)=>{
                if(index == item.index){
                    value.selected = item.selected
                }
                return value;
            })

            let flag = true;
            state.school_area_obj.forEach(item => {
                if (item.selected) {
                    flag = false;
                }
            })
            if (flag) {
                state.school_area_obj[0].selected = true;
            }
        },
        clear_range:function (state) {
            state.school_range_obj.forEach((item, index) => {
                item.selected = (index==0)
            })
        },
        clear_area:function (state) {
            state.school_area_obj.forEach((item, index) => {
                item.selected = (index==0)
            })
        }
    },
    getters:{
        "school_all_range":function(state){
            var str = '';
            state.school_range_obj.forEach((value, index) => {
                if(value.selected){
                    str += value.value;
                }
            })
            return str;
        },
        "school_all_area":function(state){
            var str = '';
            state.school_area_obj.forEach((value, index) => {
                if(value.selected){
                    str += value.value + '，';
                }
            })
            return str;
        }
    }
})


export default store;