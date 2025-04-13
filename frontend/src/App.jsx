import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import HomePage from "./pages/HomePage"
import NewsPage from "./pages/NewsPage"
import CategoryPage from "./pages/CategoryPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </Router>
  )
}

export default App