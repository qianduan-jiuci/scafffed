import type { App } from 'vue'
import {setupElementPlus} from "~plugin/element-plus";
import {autoRegisterComponent} from "~plugin/autoRegComponent.ts";

export const setupPlugins = (app: App) => {
    setupElementPlus(app)
    autoRegisterComponent(app)
}
