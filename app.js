function Task()
{
let myobject = {name:"Madras"};
let newObject=myobject;
myobject.name="Chennai";
let myarray=["a","e","i","o"];
let vowelarray= myarray;
myarray.push("u");
console.log(myarray)
const hi=()=>{alert("Check the console output!")}
return <div><button onClick={hi}>Reference Data Types</button></div>
}
ReactDOM.render(<Task/>,document.getElementById("mydiv"))