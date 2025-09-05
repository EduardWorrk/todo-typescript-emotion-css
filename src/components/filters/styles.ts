import { css } from "@emotion/css";

export const styles = {
  filters: css`
    display: flex;
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  `,

  filtersButton: css`
    flex: 1;
    padding: 10px 0;
    border: none;
    background: transparent;
    cursor: pointer;
    color: #666;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    transition: all 0.3s ease;

    &:hover {
      background: #e0e0e0;
      color: #333;
    }

    &:active {
      transform: scale(0.97);
    }
  `,

  filterButtonActive: (color: string) => css`
    background: ${color};
    color: white;
    font-weight: 700;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  `,
};
