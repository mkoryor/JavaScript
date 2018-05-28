function count(str){
    str = str.toLowerCase();
    str = str.replace("a-z", '');
    var obj = {};
    
    for (var i = 0; i < str.length; i++){
        obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1;  //ternary if operation '?'
    }
    return obj
}  

// console.log(count("hello hey"));


/*url = "";
if (url == ""){
    console.log("yes");
}
else{
    console.log("no");
}

n = url == "" ? "no" : url;
console.log(n);*/


function array_flip(){
    var flip = [1,2,4,3];
   
    for(var i = 0; i < flip.length; i++){
        return Array.reverse(i);
    }
}
array_flip();




