const foo = new Promise((resolve, reject) => {
    resolve('Promise1');
 });
 const bar = new Promise((resolve, reject) => {
    resolve('Promise2');
 });
 Promise.all(['Res',foo,bar])
 .then((data)=>{
     console.log(data)
 })