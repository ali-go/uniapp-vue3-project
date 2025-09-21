const globalVars = {
	currentProductId: '' // 当前选择的产品
}

export function setGlobalVarData(key, value) {
	globalVars[key] = value
}
export function getGlobalVarData(key) {
	return globalVars[key]
}
