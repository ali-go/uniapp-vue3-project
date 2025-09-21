export const useMock = true
export const mockRequest = mockData => {
	return new Promise(resolve => setTimeout(() => resolve({ data: mockData }), 200))
}
