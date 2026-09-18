import styled from "styled-components";

export const Tag = styled.span`
  padding: 8px 12px;

  color: #c0c0c0;
  background: #1c1c1c;
  border: 1px solid #404040;
  border-radius: 5px;

  font-size: 12px;
  line-height: 1;

  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: #f1f1f1;
    background: #222;
    border-color: #777;
  }
`;