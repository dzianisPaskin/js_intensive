let n1 = prompt('Enter the number', '')
let n2 = prompt('Enter the number', '')

if(Number(n1) && Number(n2)) {
  console.log(n1.toString(n2))
} else {
  console.log("Некорректный ввод!")
}