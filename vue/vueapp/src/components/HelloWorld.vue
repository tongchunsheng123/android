<template>
  <div class="hello">
     <!-- <div @click="dot">点击</div> -->
     <router-link :to="{path:'index',query:{a}}">hhhhh</router-link>
     <div @click="bm">aaa</div>
     <p v-for="(item,index) in items" :key="index">{{item.name}}</p>
     <app-header :listImg="listImg"></app-header>
  </div>
</template>

<script>
import indexone from '@/components/indexone.vue'
import a from '../assets/mq.jpg'
 import b from '../assets/mq.jpg'
 import c from '../assets/mq.jpg'
 import d from '../assets/mq.jpg'
export default {
  name: 'HelloWorld',
  data () {
    return {
       name:"tong",
       a:"num",
       items:[],
       listImg:[
         {url:a},
        {url:b},
        {url:c},
         {url:d},
       ]
    }
  },
  components:{
     "app-header":indexone
  },
  methods:{
    // dot:function(){
    //   this.$router.push({
    //     path:"/index",
    //     query:{names:this.name}
    //   })
    // }
    bm:function(){
      var that = this
      axios.get('http://localhost:8080/src/components/test.json',{

      }).then(function(res){
        
        that.items = res.data
        console.log( that.items);
      }).catch(function(err){

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
