import axios from 'axios'
export default async(url,data={},type='GET')=>{
  return new Promise((resolve) => {
    let promise
    if (type === 'GET') {
      promise =axios.get(url, {
        params:data
      })
    }else{
      promise = axios.post(url, data)
    }
    promise.then((res)=>{
      resolve(res.data)
    }).catch((err)=>{
      alert(err.message)
    })
  })
}