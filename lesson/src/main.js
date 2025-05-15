import { createApp } from 'vue'

import App from './App.vue'
//import FoodItem from './components/FoodItem.vue'
import Vinds from './components/Vinds.vue'

const app = createApp(App)

app.component('food-item', Vinds)

app.mount('#app')
/*
404 = url오류
500 = 오타 써야되는 내용을 쓰지 않은것도 오타
400 = 기능을 부여하지 않았을때
*/
