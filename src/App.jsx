import { AppProvider } from "./context/Appcontext";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import Routy from "./routes/Routy";


function App() {
  return (
    <AppProvider>
      <Routy />
    </AppProvider>
  )
}

export default App
