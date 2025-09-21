import request from '../../request'
import { productListMock } from '../mock/common'
import { mockRequest, useMock } from './index'

// 所有产品
export function getProductList(data) {
	if (useMock) return mockRequest(productListMock)
	return request('/todos/1', data)
}
