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
  background: #fafaf9;
  border-left: 3px solid #FAC775;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  padding: 16px 20px;
  border-radius: 8px;
  margin: 25px 0 35px;

  a {
    color: #7F77DD;
    text-decoration: none;
    font-weight: 500;
  }
`;

export const ReferenceBlock = styled.div`  
  background: #fafaf7;
  border-left: 4px solid #FAC775;
  padding: 16px 20px;
  border-radius: 8px;
  margin-bottom: 35px;
`;

export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  margin: 25px 0 35px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;