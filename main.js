function fibonnacci(n){
  const arr= [0,1];
  if (n<=2) return 1;
  for(var i=2; i<=n;i++){
    arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[n];
}
function askForName(){
  var n = parseInt(document.getElementById("user-input").value);
  if(isNaN(n)){
    document.getElementById("first-ptag").innerHTML = "That is not a number";
  }else{
    document.getElementById("first-ptag").innerHTML = "The fibonacci of your favorite number is: " + fibonnacci(n);
  }
}
