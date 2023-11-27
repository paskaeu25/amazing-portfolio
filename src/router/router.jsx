import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages:
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';

// Import components:
import Nav from '../components/Nav/Nav';
import Theme from '../components/Theme/Theme';
import Social from '../components/Social/Social';

export default function router() {
  return (
    <BrowserRouter>
      <Nav />
      <Theme />
      <Social />
      <Routes>
        <Route path="/amazing-portfolio/home" element={<Home />} />
        <Route path="/amazing-portfolio/about" element={<About />} />
        <Route path="/amazing-portfolio/portfolio" element={<Portfolio />} />
        <Route path="/amazing-portfolio/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

// const router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default router;
