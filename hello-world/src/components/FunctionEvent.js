export default function FunctionEvent() {

  // function handleClick(){
  //   console.log("Button is clicked")
  // }

  const handleClick = () => {
    console.log("Button is clicked")
  }
  
  return(
    <>
      Functional component <br/>
      <button onClick={handleClick}>Click here</button>
    </>
  )
}