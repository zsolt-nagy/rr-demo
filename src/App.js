import React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const NotFound = () => <h2>404 Not Found</h2>;

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
);

const App = () => (
    <Router>
        <div>
            <Navbar />
            <Routes basename={process.env.PUBLIC_URL ?? "/"}>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </Router>
);

export default App;
