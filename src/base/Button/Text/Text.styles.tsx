import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  width: 100%;
  cursor: pointer;
  height: 36px;
  margin: 16px 0;
  padding: 10px 0;
  border-radius: 12px;

  display: flex;
  justify-content: center;

  font-size: 15px;
  font-weight: 600;
  line-height: 36px;

  color: ${({ theme, color }) =>
    color ? color : theme.color.dark.primaryFont};
  :active {
    background-color: ${({ theme }) => theme.color.dark.shade200};
  }
  transition: all 0.2s ease-in-out;
`;
