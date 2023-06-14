// 组件的自动注册
import {App} from "vue";

export const autoRegisterComponent = (app:App) => {
	const formComponents = import.meta.globEager('../components/form/*.vue')
	Object.entries(formComponents).forEach(([filePath,module]) => {
		const componentNameReg = filePath.match(/.+\/(?<base>.+)\.vue$/) || null
		const name = componentNameReg?.groups?.base
		app.component(name as string, (module as Record<string, any>).default)
	})
}




