<template>
    <mu-container>
        <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
            <mu-card-header :title="vo.detail.create_user" :sub-title="'创建于' + vo.detail.create_time">
                <mu-avatar slot="avatar">
                    <img src="../../assets/img/7.jpeg">
                </mu-avatar>
            </mu-card-header>
            <van-swipe class="my-swipe" indicator-color="white">
                <van-swipe-item v-for="(item, index) in vo.imgs" :key="index"><img :src="item"></van-swipe-item>
            </van-swipe>
            <mu-card-title :title="vo.detail.title"></mu-card-title>
            <mu-card-text>
                {{vo.detail.content}}
            </mu-card-text>
        </mu-card>
    </mu-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import { getCardDetailApi } from '@/api/home';
    @Component
    export default class ViewCard extends Vue {
        private vo = {
            detail: {},
            imgs: []
        }

        private created () {
            this.getDetail()
        }

        private async getDetail () {
            try {
                const res = await getCardDetailApi({
                    id: this.$route.query.id,
                    type: this.$route.query.type
                })
                if (res.code === 200) {
                    this.setVoState('detail', res.data)
                    this.setVoState('imgs', res.data.img_arr.split('+'))
                } else {
                    this.warningMsg(res.msg)
                }
            } catch (e) {
                throw new Error(e)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
</style>
