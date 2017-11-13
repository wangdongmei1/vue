<template>
    <span class="filter-item" @click='pander(ind)' :class='{actives:active}'>{{rangeObject.value}}</span>
</template>
<script>
    export default {
        props: ['ind', 'catagory', 'rangeObject', 'val', 'active'],
        methods: {
            pander: function (ind) {
                if (this.val == '高校层次') {
                    this.$store.commit('reset_school_range', {
                        index: ind,
                        selected: !this.active
                    })
                } else if (this.val == '高校地区') {
                    this.$store.commit('reset_school_college', {
                        index: ind,
                        selected: !this.active
                    })
                }

            }
        },
        mounted: function () {
            // console.log(this.rangeObject)
        }

    }

</script>

<style scoped>
</style>