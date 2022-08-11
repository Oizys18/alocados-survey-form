import styled from "styled-components";

export const Wrapper = styled.button`
  all: unset;
  width: 100%;
  cursor: pointer;
  height: 56px;
  padding: 10px 0;
  border-radius: 12px;

  display: flex;
  justify-content: center;

  font-size: 15px;
  font-weight: 600;
  line-height: 36px;

  background-color: transparent;
  color: ${({ theme }) => theme.color.dark.primaryFont};
`;
