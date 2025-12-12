function createCard(title,cname,view,old,duration,thumbnail){
    let viewstr;
    if(view<1000){
        viewstr= view
    }
    else if(view>1000000){
        viewstr=view/1000000 +"M";
    }
    else{
        viewstr=view/1000 +"k";
    }

    let html=`<div class="container">
        <div class="card">
            
            <div class="image"><img src="${thumbnail}">
            <div class="time">${duration}</div></div>
            </div>
        <div class="text"><h1>${title}</h1>
        <p>${cname} . ${viewstr} views . ${old} month ago</p></div>
    </div>`
    document.querySelector(".container").innerHTML=html;

    
}


// let a=parseFloat(prompt("enter first number"))
// let b=parseFloat(prompt("enter sirst number"))
// if(isNaN(a)|| isNaN(b)){
//     throw SyntaxError("enter number only")
// }
// alert(a+b)

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")