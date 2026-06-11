import styled from "styled-components";

export const ContentWrapper = styled.div`
  padding: 30px;
`;

export const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
  color: #23232A;
`;

export const Summary = styled.div`
  color: #23232A;
  font-size: 14px;
  margin-bottom: 25px;
`;

export const Job = styled.div`
  margin-bottom: 20px;
`;

export const JobTitle = styled.div`
  font-weight: bold;
`;

export const JobMeta = styled.div`
  font-size: 12px;
  color: #777;
  margin-bottom: 8px;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 18px;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
`;

export const Block = styled.div`
  margin-top: 25px;
`;

export const FeaturedProject = styled.div`  
  display: flex;
  flex-direction: column;
  height: 100%;

  background: #fafaf9;
  border-left: 3px solid #FAC775;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  padding: 12px 16px;
  border-radius: 8px;

  a {
    margin-top: auto;
    color: #7F77DD;
    text-decoration: none;
    font-weight: 500;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.45;
  }
`;

export const ReferenceBlock = styled.div` 
  display: flex;
  flex-direction: column;
  height: 100%;

  background: #fafaf7;
  border-left: 4px solid #FAC775;
  padding: 12px 16px;
  border-radius: 8px;

  a {
    margin-top: auto;
    color: #7F77DD;
    text-decoration: none;
    font-weight: 500;
  }
  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.45;
  }
`;

export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 16px;

  margin: 25px 0 55px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const CardLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  color: #888780;

  margin-bottom: 12px;
`;

export const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 700;

  color: #23232A;

  margin-bottom: 8px;
`;

export const ColorDivider = styled.div`
  width: 100%;
  height: 1px;

  background: #7F77DD;

  opacity: 0.4;

  margin: 12px 0 24px;
`;

export const GrayDivider = styled.div`
  width: 100%;
  height: 1px;

  background: #D3D1C7;

  opacity: 0.6;

  margin: 12px 0 24px;
`;