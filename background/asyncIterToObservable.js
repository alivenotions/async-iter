function toObservable(iterable) {
  return new Observable(observer => {
    let stop = false
    async function drain() {
      for await (let x of iterable) {
        if (stop) break
        observer.next(x)
      }
    }
    drain().then(x => observer.complete(x), err => observer.error(err))
    return _ => { stop = true }
  })
}