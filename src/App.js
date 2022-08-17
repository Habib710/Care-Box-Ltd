import 'bootstrap/dist/css/bootstrap.min.css';
import Gmap from './components/Map/Gmap';
import Videos from './components/VideoPlayers/Videos';

function App() {
  return (
    <div>
      <Videos></Videos>
      
      <Gmap></Gmap>
    </div>
  );
}

export default App;
