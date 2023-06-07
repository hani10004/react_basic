import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Footer from "./Components/Footer"; 
import Children from "./Components/Children"; 

function App() {
  const name="반하으니";
  const footProps={
    name:"반하은",
    location: "울산"
  }

  function handleClick(){
    console.log("함수형클릭")
  }
  const arrowClick = ()=> {
    console.log("화살표함수실행")
  }
  return <div>
    <Header name={name}/>
    <Body name={name} location="부산시"/>
    <Footer {...footProps}/>
    <Children>
      <div>Children Component</div>
    </Children>
    <button onClick={handleClick} style={{color:"red"}}>함수형 클릭</button>
  <button onClick={arrowClick}>화살표함수클릭 </button>
   
  </div>
}

export default App;
