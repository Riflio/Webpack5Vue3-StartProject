import { createApp } from 'vue'

let app = createApp({});

import component1 from './component1.vue'
app.component("my-component1", component1);

app.mount('#app')