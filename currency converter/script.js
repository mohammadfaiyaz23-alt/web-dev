const Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const options = document.querySelectorAll(".flags select");
const button = document.querySelector(".btn")
const fromCurr =document.querySelector(".from")
const toCurr =document.querySelector(".to")
for(let select of options){
    for(code in countryList){
        let nweOption =document.createElement("option")
        nweOption.innerText=code;
        nweOption.value=code
        if(select.name === "from" && code === 'USD'){
            nweOption.selected="selected"
        }else if(select.name === "to" && code === 'INR'){
            nweOption.selected="selected"
        }
        select.append(nweOption)
    }
    select.addEventListener("change",(e)=>{
        updateFlag(e.target)
    })
}
const updateFlag=(element)=>{
    let currCode =element.value
    let countryCode = countryList[currCode]
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src =newsrc 

}
button.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".input input")
    let amtval = amount.value;
    
    if(amtval=== ""||amtval<0){
        amtval=0.0
        amount.value="0.0"
    }
    
    const url = `${Base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response = await fetch(url)
    let data = await response.json();
    console.log(response)
})