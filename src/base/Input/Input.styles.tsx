import styled from "styled-components";

export const Label = styled.label`
  top: 40px;
  left: 20px;
  display: block;
  position: relative;
  color: ${({ theme }) => theme.color.white};
`;

export const Input = styled.input`
  all: unset;
  margin: 16px 0;
  padding: 17px 16px 17px 14px;
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  font-size: 15px;
  background-color: ${({ theme }) => theme.color.dark.shade100};
  border-radius: 8px;
  ::placeholder {
    color: ${({ theme }) => theme.color.dark.shade600};
  }
  :focus {
    outline: 2px solid ${({ theme }) => theme.color.dark.primary100};
  }
`;
