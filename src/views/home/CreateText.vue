<template>
    <div class="create-text_wrap">
        <div class="title">创建纯文本内容</div>
        <mu-form :model="vo">
            <mu-form-item prop="title" label="标题">
                <mu-text-field v-model="vo.title"></mu-text-field>
            </mu-form-item>
            <mu-form-item prop="content" label="内容">
                <mu-text-field v-model="vo.content" multi-line :rows="6" full-width></mu-text-field><br/>
            </mu-form-item>
            <mu-form-item prop="isOpen" label="是否公开">
                <div style="margin-top: 10px">
                    <mu-radio v-model="vo.isOpen" value="1" label="公开"></mu-radio>
                    <mu-radio v-model="vo.isOpen" value="2" label="私有"></mu-radio>
                </div>
                <mu-text-field v-if="vo.isOpen === '2'" style="margin-top: 10px" v-model="vo.password" placeholder="请输入密码"></mu-text-field>
            </mu-form-item>
            <mu-form-item>
                <mu-button color="primary" @click="create">创建</mu-button>
            </mu-form-item>
        </mu-form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import { addLongTextApi } from '@/api/home';
    @Component
    export default class CreateText extends Vue {
        private vo = {
            title: '',
            content: '',
            isOpen: '1',
            type: 1
        }
        private async create () {
            const res: ResponseData = await addLongTextApi(this.vo)
            if (res.code === 200) {
                this.successMsg('创建成功～')
                this.$router.push('/home')
            }
        }
    }
</script>

<style lang="scss" scoped>
.create-text_wrap {
    .title {
        font-size:24px;
        margin-bottom: 24px;
    }
    padding: 10px 24px;
    .mu-button {
        width: 100%;
        color: #ffffff;
    }
}
</style>
