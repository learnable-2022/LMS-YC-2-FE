import { AppProvider } from "./context/Appcontext";
import Routy from "./routes/Routy";


function App() {
  return (
    <AppProvider>
      <Routy />
    </AppProvider>
  )
}

export default App
