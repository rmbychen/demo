import pathExists from 'path-exists'
export function exists(p) {
  return pathExists.sync(p)
}
export function log() {
  console.log('utils')
}
