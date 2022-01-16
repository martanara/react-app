import Home from './components/Home/Home'
import Favorite from './components/Favorite/Favorite'
import About from './components/About/About'
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
        <About />
        <Favorite />
      </Container>
    </main>
  );
};

export default App;
