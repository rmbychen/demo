import { pathExists } from 'path-exists'
export const exists =(p) => pathExists.sync(p)
export const  log = () => console.log('utils')
export const add = (a, b) => a+b