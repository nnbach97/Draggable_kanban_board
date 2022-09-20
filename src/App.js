import Kanban from "./components/kanban";
import "./scss/app.scss";

function App() {
  return (
    <div style={{ padding: "50px 20px" }}>
      <h1 style={{ textAlign: "center" }}>Kanban UI</h1>
      <Kanban />
    </div>
  );
}

export default App;
