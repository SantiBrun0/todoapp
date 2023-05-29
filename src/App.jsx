
import { useContext } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { ThemeContext } from './components/utils/ThemeContext';
import Fab from './components/Fab';

function App() {

  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={isDarkMode ? 'app-darkmode' : 'app'}>
      <Header />
      <Tasks />
      <Footer />
      <Fab />
    </section>
  )
}

export default App
