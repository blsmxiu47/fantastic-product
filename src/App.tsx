import { Routes, Route } from 'react-router-dom'
import './App.css'
import './global.css'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="why-intelliflex" element={<h1>Why IntellifleX?</h1>} />
        <Route path="why-intelliflex/managers" element={<h1>Managers</h1>} />
        <Route path="why-intelliflex/creative-strategists" element={<h1>Creative Strategists</h1>} />
        <Route path="why-intelliflex/designers" element={<h1>Designers</h1>} />
        <Route path="why-intelliflex/developers" element={<h1>Developers</h1>} />
        <Route path="resources" element={<h1>Resources</h1>} />
        <Route path="resources/testimony" element={<h1>Testimony</h1>} />
        <Route path="resources/guides-and-tutorials" element={<h1>Guides & Tutorials</h1>} />
        <Route path="resources/api-docs" element={<h1>API Docs</h1>} />
        <Route path="resources/blog" element={<h1>Blog</h1>} />
        <Route path="download" element={<h1>Download</h1>} />
        <Route path="mission" element={<h1>Mission</h1>} />
        <Route path="pricing" element={<h1>Pricing</h1>} />
        <Route path="book-a-demo" element={<h1>Book a Demo</h1>} />
        <Route path="log-in" element={<h1>Log In</h1>} />
        <Route path="sign-up" element={<h1>Sign Up</h1>} />
        <Route path="get-started" element={<h1>Get Started</h1>} />
      </Route>
    </Routes>
  )
}

export default App
