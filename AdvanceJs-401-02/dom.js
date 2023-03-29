function btnClick(){
    const temp = document.getElementsByClassName("name")
    console.log(temp[temp.length-1]);
    temp[0].setAttribute("style" , "background-color:blue")
    temp[8].setAttribute("style" , "background-color:green")
    temp[temp.length-1].setAttribute("style" , "background-color:PaleVioletRed")
    

    for(let i=0;i<temp.length;i++){
        if(i%2==1){
            temp[i].setAttribute("style" , "background-color:lime")
        }
    }
}