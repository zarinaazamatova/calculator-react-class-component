import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import {Message} from './components/Message'
import Header from './components/Header';
import Footer from './components/Footer';
import TipCalculator from './components/Tipcalculator'
import './App.css';

function App() {
  return (
    <>
   {/*  <Form/> */}
   <div className='main'>
    <Header />
    <TipCalculator />
    <Footer />
    </div>
    </>
  );
}

export default App;
