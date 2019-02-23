<template>
    <div class="g_header">
            <div class="header" v-show="flag">
                <span class="title">豆瓣市集</span>
                <i class="iconfont search-icon" @click="toggle">&#xe621;</i>
            </div>
            <div class="search-bar" v-show="!flag">
                <div class="search-content" >
                    <input type="text" placeholder="搜索更多" class="bar-search">
                    <i class="iconfont bar-search-icon" @click="handleBtnClick">&#xe621;</i>
                </div>
            </div>
        <div class="cover" v-show="!flag" @click="handleCoverClick"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: true
        }
    },
    methods: {
        handleBtnClick() {
            let v = document.getElementsByClassName("bar-search")[0].value
            alert(v)
        },
        toggle() {
            this.flag = !this.flag
        },
        handleCoverClick() {
            this.flag = !this.flag
        }
    }
}
</script>

<style scoped lang="stylus">
.g_header 
    .header
        position relative
        padding 0 .75rem
        background-color #68cb78
        height 3rem
        line-height 3rem
        .title
            float left
            font-size 1.5rem
            color #ffffff
        .search-icon
            float right
            font-size 1.75rem
    .search-bar
        height 5rem
        line-height 5rem
        background-color #68cb78
        .search-content
            text-align center
            .bar-search
                height 2rem
                border-radius 1.125rem
                width 70%
                padding-left .8rem               
                outline none
            .bar-search-icon
                font-size 1.75rem
                vertical-align bottom
    .cover
        position absolute
        top 5rem
        left 0
        right 0
        bottom 0
        background-color #000
        z-index 100
    </style>
