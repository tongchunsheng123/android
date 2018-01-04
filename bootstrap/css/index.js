import Vue from "vue";
import Router from "vue-router";
import Denglu from "@/components/Denglu";
import Homepage from "@/components/Homepage";
import Person from "@/components/PersonalInfo";
import Bin from "@/components/Bonuswithdraw";
import Mcustom from "@/components/Mycustom";
import Invition from "@/components/Invition";
import Withdraw from "@/components/Withdraw";
import Result from "@/components/Result";
import Register from "@/components/Register";
import Alregister from "@/components/Alregister";
import Mycode from "@/components/Mycode";

Vue.use(Router)

export default new Router({
  // mode:'history',
  // base:__dirname,
  //定义路由
  routes: [
    {
      path: "/",
      component:Denglu,

    }, {
      path: "/foo",
      component:Homepage

    }, {
      path: "/per",
      component:Person

    },{
      path: "/ti",
      component:Bin

    }, {
      path: "/zc",
      component:Mcustom
    },{
      path: "/inv",
      component:Invition
    },{
      path: "/returnlog",
      component:Denglu
    },{
      path: "/wdraw",
      component:Withdraw
    },{
      path: "/result:money",
      name:"Result",
      component:Result
    },{
      path: "/reg",
      component:Register
    },{
      path: "/alreg",
      component:Alregister
    },{
      path: "/code",
      component:Mycode
    }

  ]
});
