import ajax from './ajax'
const base = ''
export const reqHomeData = () => ajax(base + '/mock/home')