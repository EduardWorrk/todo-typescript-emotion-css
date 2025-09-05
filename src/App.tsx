import { css } from "@emotion/css";
import { ListTask } from "./components/tasks/list-task.tsx";
import { Filters } from "./components/filters/filters.tsx";
import { InputAddTask } from "./components/input-add-task/input-add-task.tsx";

function App() {
  return (
    <div
      className={css`
        font-size: 24px;
        border-radius: 4px;
        width: 400px;
        margin: 3rem auto 0 auto;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
      `}
    >
      <InputAddTask />

      <Filters />

      <ListTask />
    </div>
  );
}

export default App;
