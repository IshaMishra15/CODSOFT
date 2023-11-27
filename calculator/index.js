let scrn=document.getElementById('inputext');

function input(x){
    scrn.value=scrn.value+x;
}

function allclear(){
    scrn.value=' ';
}

function calculate(){
    try{
        scrn.value=eval(scrn.value);
    }
    catch{
        scrn.value='ERROR';
    }   
}
    


