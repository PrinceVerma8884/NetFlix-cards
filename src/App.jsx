import "./App.css";
// import EventHandling from "./components/EventHandling";
import './components/Netflix.css'
// import './components/Netflix.module.css'
//? default exports
import Netflix from './components/NetFlixSeries';
//? named exports
// import {Footer} from './components/NetFlixSeries';

//! other way to write it 😍
// import Netflix ,{Footer} from './components/NetFlixSeries';
// import Netflix from "./components/NetFlixSeries";

const App = () => {
  return (
    <>
      <section className="container">
      <h1 className="card-heading">List of Netflix Series</h1>
      <Netflix />
      {/* <EventHandling/> */}
      </section>
      
    </>
  );
};

export default App;
