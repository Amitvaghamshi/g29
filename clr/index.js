console.log("HELLO WORLD");

let arr=["kaushal","rahul","rohit","keyur"];

let body=document.querySelector("body");

for(let i=0;i<arr.length;i++){
       let li=document.createElement("li");
       li.append(arr[i]);

       body.append(li);
}