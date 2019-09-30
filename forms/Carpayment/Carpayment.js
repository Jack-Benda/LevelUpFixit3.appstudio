let go = "yes"

function carLoanPayment(p, n, i){
 
  payment = (Math.pow(1+i, n) * i) / (Math.pow(1+i, n)-1)
  payment = payment * p
  
  pay = payment.toFixed(2)
  
  alert(`A home loan for ${p} dollars over ${n} months at ${i*100}% interest would have a monthly payment of ${pay} dollars`)
}

function homeLoanPayment(p, n, i){
  
  payment = (Math.pow(1+i, n) * i) / (Math.pow(1+i, n)-1)
  payment = payment * p
  
  pay = payment.toFixed(2)
  
  alert(`A home loan for ${p} dollars over ${n} months at ${i*100}% interest would have a monthly payment of ${pay} dollars`)
}


while(go == "yes"){
  
  choice = prompt("enter 1 for car loan calculator and 2 for home loan calculator")
  let interest = prompt("enter percent annual interest as a decimal")

  let loanAmount = prompt("enter loan amount")

  if (choice == 1){periods = prompt("please enter months of loan")
      carLoanPayment(loanAmount, periods, interest)
  }
  else if (choice == 2){periods = prompt("please enter years of loan")
      periods = periods * 12
      homeLoanPayment(loanAmount, periods, interest)
  }

 go = prompt("type yes to continue")
 
}  