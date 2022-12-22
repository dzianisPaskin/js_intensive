let num1 = prompt('Enter the number', '')
let num2 = prompt('Enter the number', '')

if(Number(num1) && Number(num2)) {
  console.log(num1.toString(num2))
} else {
  console.log("Некорректный ввод!")
}