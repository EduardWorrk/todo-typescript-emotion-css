import { css } from "@emotion/css";

export const inputStyles = {
  input: css`
    display: flex;
    padding: 20px;
    background: white;
    border: none;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);

    &:focus {
      outline: 1px solid #535bf2;
    }
  `,

  addTaskButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
    width: 50px;
    font-size: 20px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);

    &:hover {
      border: 1px solid #333;
    }
  `,
};
