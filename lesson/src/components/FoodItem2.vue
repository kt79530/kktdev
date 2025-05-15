<!-- 
vue 구성요소 : 사용자의 인터페이스와 특정부분을 캡슐화하는 
재사용 가능하고 독립적인 코드 조각으로 사용하는것  
-->

<template>
<div v-on:click="countClicks">
<h1>{{foodName}}</h1>
<img src="./assets/image/img_quailty.svg" v-show="isFavorite">
<p>{{foodDesc}}</p>
<h2>{{name}}</h2>
<p>{{message}}</p>
<p id="red">
저를 {{clicks}} 번 클릭하셨내요
</p>
</div>
</template>

<script>
export default{
    data(){
        return{
        name:'황영일',
        message:'맥도날드',
        clicks:0
        }       
    },
    methods:{
        countClicks(){
            this.clicks++
        }
    }
}
</script>

<style>

</style>