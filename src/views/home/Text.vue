<template>
    <mu-container>
        <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
            <mu-card-header :title="vo.detail.create_user" :sub-title="'创建于' + vo.detail.create_time">
                <mu-avatar slot="avatar">
                    <img src="../../assets/img/7.jpeg">
                </mu-avatar>
            </mu-card-header>
            <mu-card-title :title="vo.detail.title"></mu-card-title>
            <mu-card-text>{{vo.detail.content}}</mu-card-text>
        </mu-card>
        <van-tabbar>
            <van-tabbar-item >评论</van-tabbar-item>
            <van-tabbar-item >删除</van-tabbar-item>
        </van-tabbar>
    </mu-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {getCardDetailApi, delArticleByIdApi} from "../../api/home"
    @Component
    export default class TextIndex extends Vue {
        private vo = {
            detail: {},
        }

        private created () {
            this.getDetail()
        }

        private async delArticle () {
            const res: ResponseData = await delArticleByIdApi({
                id: this.$route.query.id,
                type: this.$route.query.type
            })
            if (res.code === 200) {
                this.successMsg('删除成功')
            }
        }

        private async getDetail () {
            try {
                const res = await getCardDetailApi({
                    id: this.$route.query.id,
                    type: this.$route.query.type
                })
                if (res.code === 200) {
                    this.setVoState('detail', res.data)
                } else {
                    this.warningMsg(res.msg)
                }
            } catch (e) {
                throw new Error(e)
            }
        }
    }
</script>

<style scoped>

</style>
