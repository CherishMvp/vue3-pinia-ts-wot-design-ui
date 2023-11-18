import { createSSRApp } from 'vue'
import App from './App.vue'
// import 'uno.css'
// import $un from '@/utils/un'
// import func from '@/utils/func'
// import * as setting from '@/setting'
// import * as config from '@/config'
import store from '@/store'
// main.js，注意要在use方法之后执行
import uviewPlus from 'uview-plus'
export function createApp() {
    const app = createSSRApp(App)
    // 使用 provide 方法提供全局属性
    // 考虑通过局部引入方法就行了
    // provide('$un', $un)
    // provide('$func', func)
    // provide('$setting', { ...setting, ...config })
    // provide('$safeArea', $un.getSafeArea())
    app.use(store)
    app.use(uviewPlus)
    // 如此配置即可
    return {
        app,
    }
}
