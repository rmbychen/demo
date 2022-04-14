import { log, exists } from '../src/utils'
import path from 'path'
log()
const url = exists(path.resolve('.'))
console.log('url', url)