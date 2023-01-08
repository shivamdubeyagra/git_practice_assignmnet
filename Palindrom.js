let str='aman';
let bag='';
for(let i=str.length-1; i>=0; i--){
	bag+=str[i];
}
if(str==bag){
		console.log("Palindrom");
	}else{
		console.log("Not Palindrom");
	}
	