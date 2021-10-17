import '@testing-library/jest-dom/extend-expect'
import { server } from './src/api/mocks/server'

// モック関連の設定を行う
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
