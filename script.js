function removeUser(id) {
    document.getElementById(id).style.display="none";  
    var requests=document.getElementById('requests').innerHTML;
    requests=requests-1;
    document.getElementById('requests').innerHTML=requests;
}


function increment(){
    var friends=parseInt(document.getElementById('friends').innerHTML);
    friends=friends+1;
    document.getElementById('friends').innerHTML=friends;
}

function elementChange(){
    
    document.getElementById('toni').innerHTML="Anton Turkaj";
}  



// function removeUser1() {
//    document.getElementById('listItem1').style.display="none";
// }


// function removeUser2() {
//    document.getElementById('listItem2').style.display="none";
// }
