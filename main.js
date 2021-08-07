function fibonacci(n){
  const arr= [0,1];
  if (n<=2) return 1;
  for(var i=2; i<=n;i++){
    arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[n];
}
function askForNumber(){
  var n = parseInt(document.getElementById("user-input").value);
  if(isNaN(n)){
    document.getElementById("response").innerHTML = "That is not a number";
  }
  else{
    document.getElementById("response").innerHTML = "The " + n+ "th number of the fibonacci sequence based on your favorite number is: " + fibonacci(n);
  }
}
