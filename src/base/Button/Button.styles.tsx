import styled from "styled-components";

export const Wrapper = styled.button<{ $short: boolean }>`
  all: unset;
  cursor: pointer;
  min-width: 79px;
  width: ${({ $short }) => ($short ? "79px" : "100%")};

  height: ${({ $short }) => ($short ? "40px" : "56px")};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: ${({ $short }) => ($short ? "500" : "600")};
  font-size: ${({ $short }) => ($short ? "14px" : "15px")};
  line-height: ${({ $short }) => ($short ? "24px" : "36px")};

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ color }) => color};
`;
