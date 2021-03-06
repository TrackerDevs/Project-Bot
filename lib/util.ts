/** Returns a promise that waits for (ms) milliseconds before resolving */
export const sleep = async (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))

/** Deletes a property off of an objects after a certain amount of time */
export const timedDestroy = async (val: object, key: string, ms: number) =>  [await sleep(ms), delete val[key]]

/** If the input is not an array, turns it into a singleton array */
export const arrify = <T>(item: T) => item instanceof Array ? item : [item]

/** NoOp as in No Operation */
export const noop = () => {}