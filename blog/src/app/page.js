import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Body from './components/layout/Body';

export default function Home() {
  return (
    // <main className="flex flex-col justify-space">
    <main>
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
