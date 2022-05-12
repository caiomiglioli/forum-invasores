import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Container from '../../components/Container';
import Layout from '../../components/Layout';
import StyledButton from '../../components/Button';
import StyledCard from '../../components/Card';
import HeaderPage from '../../components/HeaderPage';

export default function ListPosts() {  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await api.get('/posts');
      
      setPosts(data);
    };
    fetch();
  }, []);

  return (
    <Layout>
      <Container container>
        <StyledButton />
        <HeaderPage title="Mostrando observações recentes:" filter />
        {
          posts.map((post) => (
            <StyledCard
              key={post.id}
              post={post}
            />
          ))
        }
      </Container>
    </Layout>
  );
};