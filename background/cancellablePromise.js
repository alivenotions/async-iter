// it should be noted that this does cancellation through shared scope
function timer(time, cancelled) {
  let handle

  return new Promise((resolve, reject) => {
    handle = setTimeout(_ => resolve('give it away'), time)
    cancelled.then(() => {
      reject(new Error('Cancelled'))
      clearTimeout(handle)
    })
  })
}

let cancel
let cancelled = new Promise(resolve => cancel = resolve)
timer(1000, cancelled).then(console.log).catch(_ => console.log('woah'))
cancel()
