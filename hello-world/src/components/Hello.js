// export default function Hello() {
//   return <h1>Hello World!</h1>
// }

const name = "Userbot"
const displayMessage = () => {
  return "I need help!"
}

const Hello = () => <h1>The message is: {displayMessage()}</h1>

export default Hello