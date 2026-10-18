import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home, { AboutPage, HomePage, WorkPage } from './pages/Home'
import NotFound from './pages/NotFound'
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
        <Route element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="projects" element={<WorkPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/:view" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
