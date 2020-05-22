<template>
    <div class="login-bg">
        <div class="login-contain">
            <div class="login-header">
                <p>注册</p>
            </div>
            <div class="login-logo" align="center">
                <img src="../../assets/img/7.jpeg" alt="">
                <p>划过美好生活</p>
            </div>
            <div class="form-group">
                <div class="form-item">
                    <label for="nickName">
                        <img src="../../assets/img/phone.png" alt="">
                    </label>
                    <input v-model="vo.nickName" id="nickName" type="text" placeholder="请输入昵称">
                </div>
                <div class="form-item">
                    <label for="phone">
                        <img src="../../assets/img/phone.png" alt="">
                    </label>
                    <input v-model="vo.phone" id="phone" type="text" placeholder="请输入手机号">
                </div>
                <div class="form-item">
                    <label for="password">
                        <img src="../../assets/img/code.png" alt="">
                    </label>
                    <input v-model="vo.password" id="password" type="password" placeholder="请输入密码">
                </div>
                <div class="form-item">
                    <label for="confirm-password">
                        <img src="../../assets/img/code.png" alt="">
                    </label>
                    <input v-model="vo.rePassword" id="confirm-password" type="password" placeholder="请确认密码">
                </div>
            </div>
            <div class="button-group">
                <button class="login-btn" @click="register">注册</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import { registerApi } from '@/api/login';

    @Component
    export default class RegisterIndex extends Vue {
        private vo = {
            phone: '',
            nickName: '',
            password: '',
            rePassword: '',
        }

        private checkForm () {
            for (let i = 0; i < Object.keys(this.vo).length; i++) {
                let key = Object.keys(this.vo)[i]
                //@ts-ignore
                if (this.vo[key] === '') {
                    return '请将信息填写完整'
                }
            }
            if (this.vo.password !== this.vo.rePassword) {
                return '两次密码填写不一致'
            }
        }
        private async register () {
            let checkMsg = this.checkForm()
            if (checkMsg) {
                this.warningMsg(checkMsg)
                return
            }
            const res = await registerApi({
                phone: this.getVoState('phone'),
                nickName: this.getVoState('nickName'),
                password: this.getVoState('password')
            })
            if (res.code === 200) {
                this.successMsg(res.msg)
                this.$router.push('/login')
            } else {
                this.warningMsg(res.msg)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-bg {
        background-image: url("../../assets/img/l-bg.jpeg");
        background-size: cover;
        color: #ffffff;
        height: 100%;
    }
    .login-contain {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }
    .login-header {
        padding: 5%;
    }
    .login-header p {
        font-size: 20px;
        color: #ffffff;
        text-align: center;
    }
    .login-logo {
        padding: 5%;
    }
    .login-logo img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
    }
    .login-logo p {
        color: #ffffff;
        font-size: 14px;
        text-align: center;
        letter-spacing: 2px;
        margin-top: 2%;
    }
    .form-group {
        padding: 5%;
    }
    .form-group .form-item {
        border-bottom: 1px #ffffff solid;
        margin-top: 5%;
    }
    .form-group .form-item input {
        outline: none;
        border: 0;
        background-color: transparent;
        color: #ffffff;
        height: 40px;
        font-size: 18px;
        width: 55%;
        margin-left: 12%;
    }
    .form-group .form-item input::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #ffffff;
        font-size: 16px;
    }
    .form-group .form-item input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #ffffff;
        font-size: 16px;
    }
    .form-group .form-item input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #ffffff;
        font-size: 16px;
    }
    .form-group .form-item input:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #ffffff;
        font-size: 16px;
    }
    .form-group .form-item label img {
        width: 25px;
        position: absolute;
        margin-top: 2%;
    }
    .form-group .form-item button {
        outline: none;
        background: transparent;
        border: 1px #00cc99 dashed;
        color: #ffffff;
        height: 30px;
        border-radius: 5px;
        float: right;
        padding: 1%;
    }
    .button-group {
        padding: 5%;
    }
    .button-group button {
        outline: none;
        border: 0;
        width: 90%;
        height: 35px;
        margin-top: 4%;
        border-radius: 20px;
        margin-left: 4%;
        color: #ffffff;
        font-size: 18px;
    }
    .button-group .login-btn {
        background-color: #00cc99;
    }
    .button-group .login-register {
        background: transparent;
        border: 1px #ffffff solid;
    }
    .casual {
        text-align: center;
    }
    .casual a {
        color: #ffffff;
        font-size: 18px;
    }
    .order-login {
        padding: 5%;
    }
    .order-login p {
        display: block;
        /*设置为块级元素会独占一行形成上下居中的效果*/
        position: relative;
        /*定位横线（当横线的父元素）*/
        text-align: center;
        font-size: 14px;
        color: #cccccc;
    }
    .order-login ul {
        margin-left: 25%;
        margin-top: 5%;
        height: 40px;
    }
    .order-login ul li {
        width: 25%;
        float: left;
    }
    .order-login ul li a img {
        width: 35px;
        height: 35px;
    }
    .order-login p:before,
    .order-login p:after {
        content: '';
        position: absolute;
        /*定位背景横线的位置*/
        top: 50%;
        background: #cccccc;
        /*背景横线颜色*/
        width: 20%;
        /*单侧横线的长度*/
        height: 1px;
    }
    .order-login p:before {
        left: 10%;
        /*调整背景横线的左右距离*/
    }
    .order-login p:after {
        right: 10%;
    }
    .copyright {
        text-align: center;
        padding: 2%;
    }
</style>
