/*2)Rewrite as async/await pattern
function callApi(){
     return fetch('url/to/api/endpoint') //some amazing endpoint
       .then(resp => resp.json())
.then(data => {
// datas }).catch(err => {
// errors
})
}*/
global.fetch = require("node-fetch");

const url='https://jsonplaceholder.typicode.com/todos/1'

async function callApi(){
    try{
    const resp= await fetch(url)
    const data=await resp.json()
    console.log('Data:', data)
} catch(err) {
    console.log(err)
    }
}
callApi()