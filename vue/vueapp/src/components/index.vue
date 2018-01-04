<template>
 <div>
   {{aa}}
   {{bb}}
    <router-link :to="{path:'indexone'}">mmmm</router-link>
 </div>
 
</template>

<script>
 export default {
   data () {
     return {
        aa:this.$route.query.names,
         bb:this.$route.query.a,
     }
   },
   components: {

   }
 }
</script>

<style>

 
</style>
