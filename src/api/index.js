import ajax from './ajax'
const base = ''
const apiBase = '/api'
export const reqHomeData = () => ajax(base + '/mock/home')
export const reqCategory = () => ajax(base + '/mock/category')
export const reqSearchInit = () => ajax(apiBase +'/xhr/search/init.json')
export const reqMatching = (keywordPrefix) => ajax(apiBase + 'http://m.you.163.com/xhr/search/searchAutoComplete.json', {keywordPrefix})
export const reqDiscover = (page, size) => ajax(apiBase + `http://m.you.163.com/topic/v1/find/recAuto.json?page=${page}&size=${size}`)
export const reqDiscernNav = () => ajax(apiBase + 'http://m.you.163.com/topic/v1/find/getTabs.json')
export const reqADImg = (id) => ajax(apiBase + 'https://m.you.163.com/topic/v1/look/getCollection.json?id=' + id)
export const reqComment = (page, size) => ajax(apiBase + `http://m.you.163.com/topic/v1/look/getList.json?page=${page}&size=${size}&type=1`)