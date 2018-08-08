function range (left, right) {
  return () => {
    // lazy initialization
    let x = left
    return () => {
      // lazy iteration
      if (x <= right) {
        // done is a completion marker
        return { done: false, value: x++ }
      } else {
        return { done: true }
      }
    }
  }
}

const getGet = range(10, 2500)

for (let get = getGet(), res = get(); !res.done ; res = get()) {
  console.log(res.value)
}
