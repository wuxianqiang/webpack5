let root = document.getElementById('root')
root.onclick = function () {
  let res = import('./title')
  console.log(res)
}
