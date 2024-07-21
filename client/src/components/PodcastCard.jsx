import React, {useState} from 'react';
import styled from 'styled-components';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Avatar, IconButton} from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const PlayIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: #9000ff !important;
  color: #ffffff !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute !important;
  top: 45%;
  right: 10%;
  display: none;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 16px 4px #9000ff50 !important;
`;

const Card = styled.div`
  position: relative;
  text-decoration: none;
  background-color: ${({theme}) => theme.card};
  max-width: 220px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;

    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
    filter: brightness(1.3);
  }
  &:hover ${PlayIcon} {
    display: flex;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  position: relative;
`;
const CardImage = styled.img`
  object-fit: cover;
  width: 220px;
  height: 140px;
  border-radius: 6px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }
`;
const CardInformation = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 450;
  padding: 14px 0px 0px 0px;
  width: 100%;
`;
const MainInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
`;
const Title = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme}) => theme.text_primary};
`;
const Description = styled.div`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme}) => theme.text_secondary};
  font-size: 12px;
`;
const CreatorsInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 6px;
`;
const CreatorName = styled.div`
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({theme}) => theme.text_secondary};
`;
const StyledIconButton = styled(IconButton)`
  top: 8px;
  right: 6px;
  padding: 6px !important;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  align-items: center;
  background: ${({theme}) => theme.text_secondary + 95} !important;
  color: #dee7ef !important;
  position: absolute !important;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 16px 6px #222423 !important;
  cursor: pointer;
  transform: scale(1.03);
  transition: all 0.3s ease-in-out;
`;
const Views = styled.div`
  font-size: 10px;
  color: ${({theme}) => theme.text_secondary};
  width: max-content;
`;

const PodcastCard = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  return (
    <Card>
      <Top>
        <StyledIconButton onClick={() => setIsFavorited(!isFavorited)}>
          {isFavorited ? (
            <FavoriteIcon
              style={{color: 'red', width: '16px', height: '16px'}}
            />
          ) : (
            <FavoriteIcon
              style={{color: 'white', width: '16px', height: '16px'}}
            />
          )}
        </StyledIconButton>
        <CardImage
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zuK_qXIpmCJGvE9NNcRQqnOcGQ6_-ggHWg&s'
          }
        />
      </Top>
      <CardInformation>
        <MainInfo>
          <Title>The Ranveer Show</Title>
          <Description> The real life ghost experience</Description>
          <CreatorsInfo>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Avatar
                style={{
                  backgroundColor: 'purple',
                  width: '26px',
                  height: '26px',
                }}
              >
                S
              </Avatar>
              <CreatorName>Sujit Kar</CreatorName>
            </div>
            <Views>• 1.9M views</Views>
          </CreatorsInfo>
        </MainInfo>
      </CardInformation>
      <PlayIcon>
        {'video' === 'video' ? (
          <PlayArrowIcon style={{width: '28px', height: '28px'}} />
        ) : (
          <HeadphonesIcon style={{width: '28px', height: '28px'}} />
        )}
      </PlayIcon>
    </Card>
  );
};

export default PodcastCard;
