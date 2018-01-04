<template>
  <div class="login-wrap">
    <header class="header-wrap">
      <img src="../assets/login_logo.png" class="row"/>
    </header>
    <div class="content-wrap">
      <div>
        <img src="../assets/login_icon_zhanghao.png"/>
        <input v-model="mobileValue" type="text" placeholder="请输入手机号" class="mobile"/>
      </div>
      <div class="second">
        <img src="../assets/login_icon_mima.png" class="lock"/>
        <input v-model="codeValue" type="text" placeholder="请输入验证码" class="adjustInput"/>
        <!--<button class="login-yzm" v-show="show" @click="getCode">验证码</button>-->
        <!--<span v-show="show" @click="getCode">获取验证码</span>-->
        <!--<button v-show="!show" class="login-yzm count">{{count}} s</button>-->
      </div>

      <div class="validate">
        <button class="login-yzm" v-show="show" @click="getCode">验证码</button>
        <!--<span v-show="show" @click="getCode">获取验证码</span>-->
        <button v-show="!show" class="login-yzm count">{{count}} s</button>
      </div>
      <button @click="home" class="btn login-btn">立即登录</button>

      <!--      <router-link :to="{path:'/foo'}">
              <p>直接跳转</p>
            </router-link>-->
    </div>
  </div>
</template>
<script>
  export default {
    // name: "logins",

    data() {
      return {
        show: true,
        count: '',
        timer: null,
        items: '',

        mobileValue: null,
        codeValue: null,
        getCodeValue: null,
      }
    },
    watch: {
//      mobileValue:function (val) {
//        var myReg = /^1[34578]\d{9}$/;
//        if (!myReg.test(val)) {
//          this.receiverTel_length.display = "block"
//        }else{
//          this.receiverTel_length.display = "none"
//        }
//      }
    },
    methods: {

      getCode() {
        var self = this;
        // $(".mask").css("z-index","999");
        // $(".login-btn").addClass("count");
        if (!self.mobileValue) {
          alert("请输入正确的手机号")
          return;
        } else {
          var myReg = /^1[34578]\d{9}$/;
          if (!myReg.test(self.mobileValue)) {
            alert("请输入正确的手机号")
            return;
          }
        }

        console.log(self.mobileValue)
        //请求获取验证码
        $.ajax({
          async: false,
          url: self.url.BASE_URL + "/services/brokermanage/getOtp.do",
          data: {
            mobile: self.mobileValue,
            systemId: '3'
          },
          dataType: "json",
          type: "get",
          success: function (data) {
            console.log(data)
            if (data.code == 200) {
              self.getCodeValue = data.result;
              const TIME_COUNT = 60;
              if (!self.timer) {
                self.count = TIME_COUNT;
                self.show = false;
                self.timer = setInterval(() => {
                  if (self.count > 0 && self.count <= TIME_COUNT) {
                    self.count--;
                  } else {
                    self.show = true;
                    clearInterval(self.timer);
                    self.timer = null;
                    // $(".login-btn").removeClass("count");
                  }
                }, 1000)
              }
            }else{
               alert(data.message)
            }
          }
        })
      },
      home() {
        var self = this;
        // console.log(self.mobileValue)
        // console.log(self.codeValue)
        if (!self.mobileValue) {
          alert("请输入正确的手机号")
          return;
        } else {
          var myReg = /^1[34578]\d{9}$/;
          if (!myReg.test(self.mobileValue)) {
            alert("请输入正确的手机号")
            return;
          }
        }
        if (!self.codeValue) {
          alert("请输入验证码")
          return;
        }
//        if (self.codeValue != self.getCodeValue) {
//          alert("验证未通过")
//        }
        if (self.mobileValue && self.codeValue) { //验证通过
          $.ajax({
            url: self.url.BASE_URL + "/services/admin/loginOfSms.do",
            data: {
              systemId: '3',
              mobile: self.mobileValue,
              otp: self.codeValue
            },
            dataType: "json",
            type: "get",
            success: function (data) {
              console.log(data)
              if (data.code == 200) {
                //sessionStorage.setItem('mobile',13762019912);
                sessionStorage.setItem('mobile', data.result.mobile);
                sessionStorage.setItem('userId', data.result.channelUserId);
                sessionStorage.setItem('token', data.result.token);

                self.$router.push('/foo');
              } else {
                alert(data.message)
              }
            }
          })
          console.log(sessionStorage.getItem('channelId') + sessionStorage.getItem('token'))
        }
      }
    }
  }
</script>

<style scoped>
  .login-wrap {
    width: 100%;
  }
  input{
    color:#343434;
  }

  .header-wrap {
    display: flex;
    justify-content: center;
    background: url(../assets/homepage_bg.png) no-repeat;
    background-size: 100% 100%;
    width: 75rem;
    height: 41rem;
  }
  .lock{
    padding-left: 0.5rem;
  }

  .header-wrap img {
    width: 50rem;
    height: 12rem;
    font-family: HYk2gj;
    top: 20rem;
    position: relative;

  }

  .content-wrap {
    width: 64rem;
    margin: auto;
    margin-left: 2rem;
    padding-left: 3rem;
  }
  .content-wrap > div {
    width: 100%;
    height: 10rem;
    border-bottom: 1px solid #cecece;
    line-height: 13rem;
  }
  .content-wrap .adjustInput{
    padding-left: 0.7rem;
  }
  .login-wrap .validate{
  border-bottom:none;
}
  .login-wrap .second{
    width: 41rem;
  }
  .login-wrap .second input{
    width: 25rem;
  }


  .content-wrap > div:nth-child(2) {
    margin-bottom: 8rem;
  }

  .content-wrap > div > img {
    height: 4.5rem;
    margin-left: 2rem;
    vertical-align: middle;
  }

  .content-wrap > div > input {
    width: 35rem;
    height: 5rem;
    margin-left: 3rem;
    letter-spacing: 0px;

  }
  .content-wrap .mobile{
    padding-left: -5rem;
  }

  .content-wrap input {
    font-size: 3.6rem;
  }

  ::-webkit-input-placeholder {
    font-size: 3rem;
    border: none;
    color: #cecece;
    font-weight: 100;
  }

  .login-yzm {
    position: relative;
    bottom: 18rem;
    left:44rem;
    width: 19.4rem;
    display: inline-block;
    height: 7.6rem;
    margin-top: 2rem;
    background-color: #3a96ff;
    border-radius: 1rem;
    color: #fff;
    font-size: 3.2rem;
    margin-left: 0;
  }

  .login-btn {
    width: 63.6rem;
    height: 8.6rem;
    background-color: #3a96ff;
    border-radius: 1rem;
    color: #fff;
    z-index: 9;
    font-size: 3.4rem;
    position: relative;
    bottom: 8rem;
  }

  .count {
    background-color: #b7dcf6;
  }
  .login-wrap .mask{
    width: 63.6rem;
    height: 8.6rem;
    background-color:rgba(0,0,0,0);

    border-radius: 1rem;
    position: relative;
    bottom: 16.6rem;

  }


</style>
