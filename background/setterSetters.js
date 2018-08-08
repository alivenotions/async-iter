// a setter is not an abstraction
// nothing can be done with this as it is a concrete value
// it takes something but does not return anything
const ten = 10

/* 
// this makes no sense
const setTen = x => { return undefined }
*/

// but setterSetters are an abstraction
const setTenListener = listener => {
  setTimeout(() => {
    listener(10)
    listener(10)
    listener(10)
    listener(10)
  }, 2000)
}

setTenListener(console.log)

// - Async
// - Inversion of Control
