import type { App } from 'vue'
import {setupElementPlus} from "~plugin/element-plus";

export const setupPlugins = (app: App) => {
    setupElementPlus(app)
}
