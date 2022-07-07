import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'
import Contact from './components/Test/contact'
import Error from './components/Error/error'
import About from './components/About/about'
import AllBlogs from './components/Blogs/allBlogs'
import CreateBlog from './components/Blogs/createblog'
import SignIn from './components/Authentication/signin'
import SignUp from './components/Authentication/signup'
import Footer from './components/Footer/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/blogs" element={ <AllBlogs />} />
      <Route path="/post" element={ <CreateBlog />} />
      <Route path="/about" element={ <About />} />
      <Route path="/contact" element={ <Contact />} />
      <Route path="/signin" element={ <SignIn />} />
      <Route path="/signup" element={ <SignUp />} />
      <Route path="*" element={ <Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
