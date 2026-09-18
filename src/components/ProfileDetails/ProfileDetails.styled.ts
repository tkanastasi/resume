import styled from "styled-components";

export const DetailsWrapper = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;

    margin-top: 42px;
  }
`;

export const DetailsSummary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 0;

  border-top: 1px solid #333;
  border-bottom: 1px solid #333;

  color: #aaa;

  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  .arrow {
    color: #666;
    font-size: 14px;

    transition: transform 0.2s ease;
  }

  details[open] & .arrow {
    transform: rotate(180deg);
  }
`;

export const DetailsContent = styled.div`
  padding-top: 4px;
`;

export const SectionTitle = styled.h2`
  margin: 26px 0 12px;

  color: #666;

  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.16em;
  line-height: 1.2;

  text-transform: uppercase;
`;

export const LanguageTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const InfoCard = styled.div`
  padding: 14px;

  background: #1c1c1c;
  border: 1px solid #333;
  border-radius: 5px;

  .title {
    margin-bottom: 8px;

    color: #ddd;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
  }

  .sub {
    color: #777;
    font-size: 11px;
    line-height: 1.6;
  }
`;

export const Interests = styled.div`
  color: #aaa;
  font-size: 12px;
  line-height: 1.6;

  p {
    margin: 10px 0 0;
    color: #888;
  }
`;