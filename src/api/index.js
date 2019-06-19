import ajax from './ajax'
const base = ''
const apiBase = '/api'
export const reqHomeData = () => ajax(base + '/mock/home')
export const reqSearchInit = () => ajax(apiBase +'/xhr/search/init.json')
export const reqMatching = (keywordPrefix) => ajax(apiBase + 'http://m.you.163.com/xhr/search/searchAutoComplete.json', {keywordPrefix})