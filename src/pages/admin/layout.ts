

export const message = (type:string='success', msg:string) =>  {
	ElMessage({
		showClose: true,
		message: msg,
		type,
	})
}

export const parseFileContent = (file:File):Promise<string> => {
	return new Promise((resolve, reject) => {
		const read = new FileReader()
		read.onload = () => {
			resolve(read.result as string)
		}
		read.onerror = () => {
			reject()
		}
		read.readAsText(file, 'GB2312')
	})
}
