const globalVars = {
	currentProductId: '', // 当前选择的产品
	currentTabPath: '' // 当前tabbar导航栏路径
}

export function setGlobalVarData(key, value) {
	globalVars[key] = value
}
export function getGlobalVarData(key) {
	return globalVars[key]
}
