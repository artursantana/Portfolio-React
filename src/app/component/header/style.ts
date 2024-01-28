import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Container = styled.header`
  border-bottom: 3px solid #323232;
  border-radius: 1px;
`;

export const HeaderUl = styled.ul<{responsivePage?: number}>`
  display: flex;
  list-style: none;
  text-decoration: none;
  padding: 20px;
  font-weight: bold;

  ${({ responsivePage }) =>
  (responsivePage || 0) < 650
    ? css`
        justify-content: center;
        
        gap: 30px;
      `
    : css`
        justify-content: flex-end;
        gap: 50px;
      `};

  li {
    
    a {
      position: relative;
      color: black;
      text-decoration: none;

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #323232;
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
      
    }

    .select{
      text-align: left;
      font-size: 20px;
    }
    .select::after{
      width: 100%;
      
  }
  }

  
`;
