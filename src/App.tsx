import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Footer } from './layout/footer/Footer';

function App() {
    return (
        <div className="App">

            <Header />
            <Main />
            <Footer />
            
        </div>
    );
}

export default App;
