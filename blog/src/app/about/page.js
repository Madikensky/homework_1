import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function Page() {
  return (
    <main className="flex flex-col h-screen justify-center">
      <Header />
      <h1 className="flex-grow flex items-center justify-center">
        <strong>This is About us page.</strong>
      </h1>
      <Footer />
    </main>
  );
}

export default Page;
