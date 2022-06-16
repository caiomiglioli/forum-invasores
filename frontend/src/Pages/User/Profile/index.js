import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../../services/api';

import avatarImage from '../../../img/avatar.png';
import postIcon from '../../../img/postIcon.svg';
import commentIcon from '../../../img/commentIcon.svg';
import contestationIcon from '../../../img/contestationIcon.svg';
import animaliaIcon from '../../../img/animaliaIcon.svg';
import plantaeIcon from '../../../img/plantaeIcon.svg';
import fungiIcon from '../../../img/fungiIcon.svg';
import protistaIcon from '../../../img/protistaIcon.svg';
import moneraIcon from '../../../img/moneraIcon.svg';

import Layout from '../../../components/Layout';
import Container from '../../../components/Container';

import { Paper } from '@mui/material';

import './style.css';

export default function Profile() {
  const [profileData, setProfileData] = useState({});
  const [topKingdomPosts, setTopKingdomPosts] = useState([]);
  const [topKingdomComments, setTopKingdomComments] = useState([]);
  const [topKingdomContestations, setTopKingdomContestations] = useState([]);
  const [contributionInfo, setContributionInfo] = useState([]);
  const { id } = useParams();
  const colors = ['#c71700', '#d1a400', '#04b500', '#8f00d1', '#7a7a7a'];
  const kingdoms = ['ANIMALIA', 'PROTOZOA', 'PLANTAE', 'MONERA', 'FUNGI'];

  async function getUser(id) {
    const { data } = await api.get(`users/${id}`);
    setProfileData(data);

    setTopKingdomPosts([
      kingdoms[data.topKingdomPostsAPI[0]],
      colors[data.topKingdomPostsAPI[0]],
      data.topKingdomPostsAPI[1]
    ]);

    setTopKingdomComments([
      kingdoms[data.commentInfo[0]],
      colors[data.commentInfo[0]],
      data.commentInfo[1]
    ]);

    setTopKingdomContestations([
      kingdoms[data.contestationInfo[0]],
      colors[data.contestationInfo[0]],
      data.contestationInfo[1]
    ]);

    setContributionInfo([
      kingdoms[data.contestationInfo[0]],
      colors[data.contestationInfo[0]],
      data.contestationInfo[1]
    ]);
    //return data;
  }

  useEffect(() => {
    getUser(id);
  }, [id]);

  return (
    <Layout>
      <Container container className="container">
        <div className="styledCard main">
          <img className="styledAvatar" src={avatarImage} alt="avatar" />
          <div className="styledDiv">
            Nome:
            <Paper className="styledPaper">
              {profileData.firstName} {profileData.lastName}
            </Paper>
          </div>
          <div className="styledDiv">
            Bio:
            <Paper className="styledPaper">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum
            </Paper>
          </div>
        </div>
        <div className="styledCard infos">
          <div className="contentDiv">
            <h3>CONTRIBUIÇÕES PARA REINOS:</h3>
            <div className="contentLine">
              <img className="icon" src={postIcon} alt="post icon" />
              <h4>POSTS:</h4>
              <h4
                className="topContribution"
                style={{ color: topKingdomPosts[1] }}
              >
                {topKingdomPosts[0]} ({topKingdomPosts[2]})
              </h4>
            </div>
            <div className="contentLine">
              <img className="icon" src={commentIcon} alt="comment icon" />
              <h4>COMENTÁRIOS:</h4>
              <h4
                className="topContribution"
                style={{ color: topKingdomComments[1] }}
              >
                {topKingdomComments[0]} ({topKingdomComments[2]})
              </h4>
            </div>
            <div className="contentLine">
              <img
                className="icon"
                src={contestationIcon}
                alt="contestation icon"
              />
              <h4>CONTESTAÇÕES:</h4>
              <h4
                className="topContribution"
                style={{ color: topKingdomContestations[1] }}
              >
                {topKingdomContestations[0]} ({topKingdomContestations[2]})
              </h4>
            </div>
            <h3>ESPECIALIDADES:</h3>
            <div className="contentLine">
              <img className="icon" src={animaliaIcon} alt="animalia icon" />
              <h4 style={{ color: '#c71700' }}>ANIMALIA:</h4>
              <h4 className="topContribution">
                {profileData.contributionsInfo[0]} contribuições
              </h4>
            </div>
            <div className="contentLine">
              <img className="icon" src={protistaIcon} alt="protista icon" />
              <h4 style={{ color: '#d1a400' }}>PROTOZOA:</h4>
              <h4 className="topContribution">
                {profileData.contributionsInfo[1]} contribuições
              </h4>
            </div>
            <div className="contentLine">
              <img className="icon" src={plantaeIcon} alt="plantae icon" />
              <h4 style={{ color: '#04b500' }}>PLANTAE:</h4>
              <h4 className="topContribution">
                {profileData.contributionsInfo[2]} contribuições
              </h4>
            </div>
            <div className="contentLine">
              <img className="icon" src={moneraIcon} alt="monera icon" />
              <h4 style={{ color: '#8f00d1' }}>MONERA:</h4>
              <h4 className="topContribution">
                {profileData.contributionsInfo[3]} contribuições
              </h4>
            </div>
            <div className="contentLine">
              <img className="icon" src={fungiIcon} alt="fungi icon" />
              <h4 style={{ color: '#7a7a7a' }}>FUNGI:</h4>
              <h4 className="topContribution">
                {profileData.contributionsInfo[4]} contribuições
              </h4>
            </div>
          </div>
        </div>
        {console.log(profileData)}
      </Container>
    </Layout>
  );
}
