class DataSource {
  constructor() {
    let i = 0;
    this._id = setInterval(() => this.emit(i++), 200);
  }
  
  emit(n) {
    const limit = 10;
    if (this.ondata) {
      this.ondata(n);
    }
    if (n === limit) {
      if (this.oncomplete) {
        this.oncomplete();
      }
      this.destroy();
    }
  }
  
  destroy() {
    clearInterval(this._id);
  }
}

// this is a basic implementation of an observable
// just to illustrate what an observable is at a basic level
function Observable(observer) {
  const dataSource = new DataSource()
  dataSource.ondata = observer.next
  dataSource.onerror = observer.error
  dataSource.oncomplete = observer.complete
  return () => {
    dataSource.destroy()
  }
}

const observer = {
  next(x) {
    console.log(x)
  },
  error(x) {
    console.error(x)
  },
  complete() {
    console.log('Hurray!')
  }
}

const unsubscribe = Observable(observer)

setTimeout(unsubscribe, 1800)
