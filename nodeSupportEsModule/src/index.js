import { log, add,  exists} from './utils.js'
import path from 'path'
log()
const sum = add(1,10)
console.log('sum', sum)
asyncFn()
async function asyncFn() {
    // const url = exists(path.resolve('.'))
    await new Promise(resolve => setTimeout(resolve, 1000))
    // console.log('url', url)
    console.log('ok')
}