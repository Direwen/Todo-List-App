import './bootstrap';
import {createApp} from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

const pinia = createPinia(); // Create an instance of Pinia

createApp(App).use(pinia).mount("#app"); // Use the Pinia instance
