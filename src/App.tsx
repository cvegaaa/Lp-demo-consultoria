import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problema from '@/components/Problema';
import Servicios from '@/components/Servicios';
import Testimonios from '@/components/Testimonios';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-crema-50">
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Servicios />
        <Testimonios />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
