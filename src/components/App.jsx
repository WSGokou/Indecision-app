import Recipes from "./Recipes";
import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>React Project</h1>
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
