import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PodcastCard from '../components/PodcastCard';

const DashboardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;
`;
const Topic = styled.div`
  color: ${({theme}) => theme.text_primary};
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const Span = styled.div`
  color: ${({theme}) => theme.primary};
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Podcasts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  //center the items if only one item present
  @media (max-width: 550px) {
    justify-content: center;
  }
`;

const Dashboard = () => {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          Most Popular
          <Link
            to={`/showpodcasts/mostpopular`}
            style={{textDecoration: 'none'}}
          >
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard />
          <PodcastCard />
        </Podcasts>
      </FilterContainer>
      <FilterContainer>
        <Topic>
          Commedy
          <Link
            to={`/showpodcasts/commedy`}
            style={{textDecoration: 'none'}}
          >
            <Span>Show All</Span>
          </Link>
        </Topic>
        <Podcasts>
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </Podcasts>
      </FilterContainer>
    </DashboardMain>
  );
};

export default Dashboard;
