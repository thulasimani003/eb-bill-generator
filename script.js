function generate(){
    let unit=Number(document.getElementById("input").value)
    console.log(unit)
    let amount;
    if(unit<=50)
        amount=unit*0.75;
    else if(unit<=150)
        amount=(50*0.75)+((unit-50)*1.00);
    else if(unit<=250)
        amount=(50*0.75)+(100*1)+((unit-150)*1.30);
    else
    amount=(50*0.75)+(100*1)+(150*1.30)+((unit-250)*1.50);
   let result=document.querySelector(".result")
   result.innerHTML="The Bill Amount is "+ amount;
}