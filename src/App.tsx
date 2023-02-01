import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageLazy } from './pages/aboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/mainPage/MainPage.lazy';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/about' element={<AboutPageLazy />} />
            <Route path='/' element={<MainPageLazy />}/>
        </Routes>
      </Suspense>
    </div>
  )
};

export default App;
