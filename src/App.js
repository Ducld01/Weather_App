import 'bootstrap/dist/css/bootstrap.min.css'
import Leftside from './component/Leftside'
import Rightside from './component/Rightside';

function App() {
  return /*html5*/(
    <div className="container position-absolute overflow-hidden">
      <div className="row">
        <Leftside />
        <Rightside />
      </div>
    </div>
  );
}

export default App;
