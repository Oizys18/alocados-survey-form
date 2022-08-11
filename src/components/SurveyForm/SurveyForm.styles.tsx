import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 120px 0;
  height: 100%;
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 562px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 32px;
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
`;
