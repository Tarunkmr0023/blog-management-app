import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNewBlog from "./components/AddNewBlog";
import BlogDetails from "./components/BlogDetails";
import EditBlog from "./components/EditBlog";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<AddNewBlog />} />
          <Route path="/editBlog" element={<EditBlog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
