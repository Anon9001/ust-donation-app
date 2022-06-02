import Navbar from "./components/Navbar";
import Footer  from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
      <div className="flex flex-col h-screen">
          <Navbar/>
          <main className='place-items-center mx-auto'>
              <Home/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
