
function checkForParndrome (text){
    if(text.split("").reverse().join("") == text){
        console.log("this is parndrome")
    }else{

        console.log("this is not for parndrome")
    }
}

checkForParndrome("madam")