//alternate to callback using Promise

//if parameters are known
// let a=(n)=>new Promise((resolve,reject)=>
//         {
//           (setTimeout(()=>resolve(console.log(`${n}`)),1000))
//         })

// a(3)
//   .then(()=>a(2))
//   .then(()=>a(1))
//   .then(()=>a("happy new year"))

//if parameters are not known and passing parameters to next promise
let a=(n)=>new Promise((resolve,reject)=>
        {
          if(n>0)
            {
              setTimeout(()=>
              {
                console.log(n);
                resolve(n)
              },1000)
            }
          else{
            reject("Happy new year")
          }
})

a(3)
  .then((x)=>a(--x))
  .then((x)=>a(--x))
 .then((x)=>a(--x))
  .catch(msg=>console.log(msg))
