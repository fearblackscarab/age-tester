let form=document.getElementById('form')
let invisText=document.getElementById('invisText')

x= new Date()
day=x.getDate()
month=x.getMonth()
year=x.getFullYear()
// console.log(day)
// console.log(month)
// console.log(year)

form.addEventListener('submit',()=>{
    let checkbox=document.getElementById('checkbox')
    let dob=document.getElementById('dob').value
    y=new Date(dob)

    if(checkbox.checked){
        if((y.getFullYear()==year-21)&&(y.getMonth()<=month)){
            if((y.getMonth()==month)&&(y.getDate()<day)){
                invisText.innerHTML=`<p class="woohoo">yes</p>`
                window.open("https://www.google.com")
            }
            else{
                invisText.innerHTML=`<p class="no">no</p>`
            }
        }
        else if(y.getFullYear()<year-21){
            invisText.innerHTML=`<p class="woohoo">yes</p>`
            window.open("https://www.google.com")
        }
        else{
            invisText.innerHTML=`<p class="no">no</p>`
        }
    }else{
        invisText.innerHTML=`<p class="no">not checked</p>`
    }
})