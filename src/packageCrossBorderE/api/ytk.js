import request from '../../request'
import { mockRequest, useMock } from './index'
import { ytkAccountListMock } from '../mock/ytk'

// 收款账户列表
export function getAccountList(data) {
	if (useMock) return mockRequest(ytkAccountListMock)
	return request('/todos/1', data)
}
