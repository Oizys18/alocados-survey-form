import styled from "styled-components";

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  margin: 16px 0;
  padding: 17px 16px 17px 14px;

  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  border-radius: 8px;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.dark.shade100};
  ::placeholder {
    color: ${({ theme }) => theme.color.dark.shade600};
    font-weight: 400;
  }
  :focus {
    outline: 2px solid ${({ theme }) => theme.color.dark.primary100};
  }
`;
