import styled from "styled-components";

export const Container = styled.main`
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 100vh;
`;