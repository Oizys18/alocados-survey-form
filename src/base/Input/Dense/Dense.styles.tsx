import styled from "styled-components";

export const Input = styled.input`
  all: unset;
  width: 100%;
  margin: 16px 0;
  padding: 9px 8px 9px 12px;
  color: ${({ theme }) => theme.color.dark.shade600};
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  background-color: ${({ theme }) => theme.color.dark.shade100};
  border-radius: 8px;
  ::placeholder {
    color: ${({ theme }) => theme.color.dark.shade600};
  }
  :focus {
    outline: 2px solid ${({ theme }) => theme.color.dark.primary100};
  }
`;
