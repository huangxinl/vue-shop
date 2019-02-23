<template>
    <div class="nav-bar">
        <ul>
            <router-link tag="li" v-for="(item,index) in Tips" :key="index" :to="item.url">{{item.text}}</router-link>
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Tips: [
                {
                    text: '首页',
                    url: '/'
                },
                {
                    text: '分类',
                    url: '/sort'
                },
                {
                    text: '购物车',
                    url: '/cart'
                },
                {
                    text: '我的',
                    url: '/my'
                }
            ]
        }
    }
}
</script>

<style scoped lang="stylus">
.nav-bar
    background-color #ffffff
    ul
        display flex
        line-height 2.4rem
        height 2.4rem
        border-bottom 2px solid #8bc34a
        li
            flex 1
            text-align center
</style>
