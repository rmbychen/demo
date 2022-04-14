export async function asyncFn() {
    // const url = exists(path.resolve('.'))
    await new Promise(resolve => setTimeout(resolve, 1000))
    // console.log('url', url)
    console.log('ok')
}