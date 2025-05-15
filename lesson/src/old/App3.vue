<template>
<h1>Food</h1>    
<p>v-for가 컴포넌트를 배열로 만들어 준다</p>
<div class="" id="wrapper">
    <food-item
        v-for="x in foods"
        v-bind:food-name="x"
    />
</div>
</template>

<script>
export default {
  data(){
      return{
         foods:['사과','피자','쌀','물고기','cake']
    };
  }
}
</script>

<style>
#wrapper{display:flex; flex-wrap:wrap;}
#wrapper > div {border:dashed black 1px; margin:10px; padding: 0 20px; background: palevioletred;}
</style>