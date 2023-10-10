import Contact from '../components/Contact';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Service from '../components/Service';

export default function HomePage() {
    return (
        <main>
            <Hero />
            <Featured />
            <Service />
            <Contact />
        </main>
    );
}
