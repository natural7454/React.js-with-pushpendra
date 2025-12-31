import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState('');
  const [detail, setdetail] = useState('');
  const [task, setask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const CopyTask = [...task];
    CopyTask.push({ title, detail });
    setask(CopyTask);

    settitle('');
    setdetail('');
  };

  // ✅ delete handler
  const deleteHandler = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    setask(copyTask);
  };

  return (
    <div>
      <div className="parent">
        <form onSubmit={submitHandler}>
          <h1 className="add">Add Notes</h1>

          <div>
            <input
              type="text"
              placeholder="Enter you Text"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </div>

          <div>
            <textarea
              placeholder="Write detail"
              value={detail}
              onChange={(e) => {
                setdetail(e.target.value);
              }}
            ></textarea>

            <div>
              <button type="submit"id="btn">Add Note</button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <h1 className="notes">Recent Notes</h1>
      </div>

      <div className="line"></div>

      <div className="flex">
        {task.map((item, index) => {
          return (
            <div className="Firstdiv" key={index}>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>

              {/* ✅ delete button */}
              <button onClick={() => deleteHandler(index)} className="delete">
                Delete Note
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;






