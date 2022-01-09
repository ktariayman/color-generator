import { useState } from "react";
import Values from "values.js";
import SingleColor from "../EventsList/SingleColor";
import "./Dashboard.css";
function Dashboard() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#245789").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
       <div className="center">
       <h3 >color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#245789"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
       </div>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}

      </section>
    </>
  );
}
export default Dashboard;
