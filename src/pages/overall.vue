<template>
    <div class="wrap">
        <div style='clear:both'></div>
        <div class='div-over yx-box'>
            <span>已选条件：</span>
            <div class="yx-content">
                <span v-if="$store.getters.school_all_range!='不限'">{{$store.getters.school_all_range}}
                    <em @click='clearRange'>×</em>
                </span>
                <span v-if="$store.getters.school_all_area!='不限'">{{$store.getters.school_all_area}}
                    <em @click='clearArea'>×</em>
                </span>
            </div>
        </div>
              <div style='clear:both'></div>
        <div class="div-bottombox">
            <div class='div-over'>
                <span>专业层次：</span>
                <div class="zy-content">

                </div>
            </div>
            <div style='clear:both'></div>
            <school-range :school-range="$store.state.school_range_obj"></school-range>
            <school-area :school-area="$store.state.school_area_obj"></school-area>
        </div>
             <div style='clear:both'></div>
        <h2 class='title'>选考科目分析</h2>
        <div class="remind">*科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。</div>
        <div class='tabl'>
            <tab-view class="tab_list" :title_="tab_title" :list_="tab_left_list"></tab-view>
            <tab-view class="tab_list" :title_="tab_title" :list_="tab_left_list"></tab-view>
        </div>
        <div class="clearfix"></div>

        <div class='table'>
            <table-wrap :title='tab_title'>
                <table-row v-for="(x,ind) in row_list" :row='x' :key='ind'></table-row>
            </table-wrap>
        </div>
    </div>


</template>
<script>
    import school_range from '../components/school_range.vue'
    import school_area from '../components/school_area.vue'
    import tab_view from '../components/table_view.vue'
    import table_row from '../components/table_row.vue'
    import table_wrap from '../components/table_wrap.vue'

    export default {
        data: function () {
            return {
                tab_title: [],
                tab_left_list: [],
                tab_right_list: [],
                row_list: []
            }
        },
        created: function () {
            let that = this;
            this.$http.get('./server/shoolRange.json').then(function (res) {
                let arr;
                arr = res.data.list.map((value, index) => {
                    return index == 0 ? { value: value, selected: true } : { value: value, selected: false }
                })
                that.$store.commit('updata', arr);
                //console.log(that.$store.state.school_range_obj)
            })
            this.$http.get('./server/shoolArea.json').then(function (res) {
                let temp;
                temp = res.data.list.map((value, index) => {
                    return index == 0 ? { value: value, selected: true } : { value: value, selected: false }
                })
                that.$store.commit('update', temp);
                // console.log(that.$store.state.school_area_obj)

            })
            this.$http("./server/tab.json").then(function (res) {
                that.tab_title = res.data.result.title;
                that.row_list = res.data.result.rows
                var tab_list = res.data.result.analysisData;
                var left_arr = [];
                tab_list.forEach((value, index) => {
                    if (index < tab_list.length / 2) {
                        left_arr[index] = value;
                    }
                });
                that.tab_left_list = left_arr;
                var right_arr = [];
                var s = 0;
                tab_list.forEach((value, index) => {
                    if (index >= tab_list.length / 2) {
                        right_arr[s] = value;
                        s++;
                    }
                });

                // 根据大学数据
                that.tab_right_list = right_arr;
                that.college_title = res.data.result.title;
                that.college_detail = res.data.result.rows;

            })
        },
        components: {
            "school-range": school_range,
            "school-area": school_area,
            "tab-view": tab_view,
            "table-row": table_row,
            "table-wrap": table_wrap
        },
        methods: {
            clearRange: function () {
                this.$store.commit('clear_range')
            },
            clearArea: function () {
                this.$store.commit('clear_area')
            }
        },
        mounted: function () {
            //console.log(school_area)
        }
    }
</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }
    .table{
        width:100%;
    }
    .wrap {
        width: 100%;
        height: auto;
        font-size: 16px;
    }

    .div-over span,
    .gx2-content,
    .gx1-content,
    .div-over div {
        float: left;
    }

    .yx-content em {
        cursor: pointer;
        font-style: normal;
    }

    .div-over .gx1-content {
        width: 80%;
    }

    .yx-box {
        width: 100%;
        /* margin-left:80px; */
        margin-top: 10px;
    }

    .div-bottombox {
        width: 100%;
        height: auto;
        /* margin-left:80px; */
        border: 1px solid #ccc;
    }

    .div-bottombox .div-over {
        line-height: 35px;
    }

    .div-bottombox .div-over div span:hover,
    .actives {
        background: #00a15c;
        color: #fff;
    }

    .div-over span {
        display: block;
        min-width: 50px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        padding: 0 5px;
        margin: 5px;
    }

    .active {
        background: #00a15c;
        color: #fff;
    }


    .remind {
        color: #ff0000;
        font-size: 12px;
        line-height: 20px;
        margin-top: 10px;
    }

    .title {
        font-size: 16px;
        font-weight: normal;
        border-bottom: 1px solid #ccc;
        width: 100%;
        height: 50px;
        line-height: 50px;
    }

    .tabl {
        width: 100%;
        height: auto;
        display: flex;

    }

    .tab_list {
        width: 50%;

    }

    .tabl thead {
        border: 0px solid #00a15c;
        height: 40px;
    }

    .tabl tbody tr td {
        background: #fff;
        color: #000;
        border: 1px solid #ccc;
        height: 40px;
        text-align: center;
    }

    .tabl table tr th {
        background: #00a15c;
        color: #fff;
        font-weight: normal;
        height: 40px;
        border: 1px solid #00a15c;
    }
</style>