import './app.scss'

import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

export default function App() {
    return (
        <div className="mainApp">
            <Topbar />
            <main className="mainContent">
                <Intro />
                <Portfolio />
                <Works />
                <Testimonials />
                <Contact />
            </main>
        </div>
    )
}
