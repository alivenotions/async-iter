export const map = mapper => async function*(iterable) {
  for await (const item of iterable) {
    yield mapper(item)
  }
}

export const filter = predicate => async function*(iterable) {
  for await (const item of iterable) {
    predicate(item) && (yield item)
  }
}

// this one's behavior is a bit different from the Array's reduce since it yields
// the accumulator on each item (because your original iterable may never end)
export const reduce = (reducer, acc) => async function*(iterable) {
  for await (const item of iterable) {
    yield (acc = reducer(acc, item))
  }
}
