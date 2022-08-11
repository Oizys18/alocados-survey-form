import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100%;
  background-color: ${({ theme }) => theme.color.dark.shade000};
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 562px;
  padding: 120px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 32px;
  align-self: flex-start;
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

export const Question = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ButtonContainer = styled.div`
  gap: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
