const globalVars = {
	productList: [], // 产品列表
	productMaps: [], // 产品名称映射
	currentProductId: '', // 当前选择的产品
	currentTabPath: '' // 当前tabbar导航栏路径
}

export function setGlobalVarData(key, value) {
	globalVars[key] = value
}
export function getGlobalVarData(key) {
	return globalVars[key]
}
