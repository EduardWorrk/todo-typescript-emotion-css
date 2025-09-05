import { css } from "@emotion/css";

export const styles = {
  checkbox: css`
    appearance: none;
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid #ccc;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    background-color: #fff;

    &:hover {
      border-color: #4f4f4f;
    }

    &:checked {
      background-color: #4f4f4f;
      border-color: #8b8b8b;

      &::after {
        content: "";
        position: absolute;
        left: 6px;
        top: 2px;
        width: 6px;
        height: 12px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        transition: all 0.3s ease;
      }
    }
  `,

  task: css`
    background-color: white;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    position: relative;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
  `,

  drowpdown: css`
    position: absolute;
    right: 0;
    top: 45px;
    padding: 8px;
    row-gap: 3px;
    z-index: 2;
    width: 50px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-right: 4px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  `,

  drowpdownBtn: css`
    padding: 6px 3px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 12px;

    &:hover {
      opacity: 0.8;
      transition: 0.2s ease;
    }
  `,

  button: css`
    border-radius: 4px;
    font-size: 12px;
    padding: 10px;
    cursor: pointer;
    border: none;
  `,

  input: css`
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 4px;
    padding: 10px;
    width: 200px;

    &:focus {
      outline: none;
    }
  `,
};
