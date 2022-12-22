let num1 = +prompt('Enter the number', '0');
let errMessage = 'Некорректный ввод!'

if(Number(num1)) {
  let num2 = +prompt('Enter the number', '0');
  if(Number(num2)) {
    console.log(`Ответ: ${num1 + num2}, ${Math.trunc(num1/num2)}`)
  } else {
    console.log(errMessage)
  }
} else {
  console.log(errMessage)
}