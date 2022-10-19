import "./App.scss";
import Accordian from "./components/Accordian";
import HomeLayout from "./layouts/HomeLayout";

function App() {
  return (
    <HomeLayout>
        <div className="container py-10">
          <Accordian title="Accordian title">Accordian content</Accordian>
        </div>
    </HomeLayout>
  );
}

export default App;
