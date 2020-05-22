<template>
    <div class="my-home-wrap">
        <div class="title">
            <span>XXXXX</span>
            <mu-menu cover placement="bottom-end" :open.sync="isShow">
                <div class="add-btn">+</div>
                <mu-list slot="content">
                    <mu-list-item button @click="$router.push('/create-text')">
                        <mu-list-item-title @click="$router.push('/create-text')">创建文本</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button @click="$router.push('/create-atlas')">
                        <mu-list-item-title >创建图文</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-menu>
        </div>
        <ul class="home-list-wrap">
            <li v-for="(item, index) in vo.list" :key="index">
                <div class="left-content">{{item.title}}</div>
                <div class="right-content" @click="jumpPage(item)">
                    <img v-if="item.is_open === 2" width="20" height="20" src="../../assets/img/lock.png">
                    <van-icon name="arrow" />
                </div>
            </li>
        </ul>
        <van-dialog v-model="bo.passwordModel"
                    title="请输入密码"
                    show-cancel-button
                    @confirm="unlock">
            <mu-text-field  v-model="vo.password" type="password" />
        </van-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {articleUnlockApi, getHomeListApi} from '@/api/home';
    @Component
    export default class HomeIndex extends Vue {
        private isShow = false
        private bo = {
            passwordModel: false
        }
        private vo = {
            list: [],
            password: '',
            passwordId: '',
            type: 0,
        }

        private created () {
            this.getList()
        }

        private jumpPage (item: any) {
            if (item.is_open === 2) {
                this.opModel(item.article_id, item.type)
            } else {
                this.$router.push({
                    path: item.type === 1 ? '/view-text' : '/view-card',
                    query: {
                        //@ts-ignore
                        id: item.article_id,
                        type: item.type
                    }
                })
            }
        }

        private close () {
            Object.assign(this.vo, {
                password: '',
                passwordId: '',
                type: 0,
            })
        }

        private async unlock () {
            const res = await articleUnlockApi({
                id: this.getVoState('passwordId'),
                password: this.getVoState('password'),
                type: this.getVoState('type')
            })
            if (res.code === 200) {
                let id = this.vo.passwordId
                let type = this.vo.type
                this.$router.push({
                    path: this.vo.type == 1 ? '/view-text' : '/view-card',
                    //@ts-ignore
                    query: {id, type}
                })
            } else {
                this.warningMsg(res.msg)
            }
        }
        private async opModel (id: number, type: number) {
            this.setBoState('passwordModel', true)
            this.setVoState('passwordId', id)
            this.setVoState('type', type)
        }

        private async getList() {
            const res: ResponseData = await getHomeListApi({})
            if (res.code === 200) {
                this.setVoState('list', res.data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    /deep/.van-dialog__content {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .my-home-wrap {
        width: 100%;
        padding: 10px 12px;
        .title {
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                font-size: 30px;
            }
            .add-btn {
                font-size: 30px;
            }
        }
        .home-list-wrap {
            width: 100%;
            li {
                width: 100%;
                height: 60px;
                background: #fff;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 16px;
                font-size: 18px;
                margin-bottom: 10px;
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
                .right-content {
                    display: flex;
                    align-items: center;
                    img {
                        margin-right: 15px;
                    }
                }
                .left-content {
                    max-width: 250px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                &:after {
                    content: '';
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 2px;
                    height: 100%;
                    background: #5e83dd;
                }
                &:active {
                    background: rgba(255, 255, 255, .7);
                }
            }
        }
    }
</style>
