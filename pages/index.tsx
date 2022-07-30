import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { documentation } from '../src/api';
import { Box, CircularProgress } from '@mui/material';
import ApiDocumentationApp from '../src/ApiDocumentationApp';
import Logo from '../src/Logo';

const Home: NextPage = () => {
  const [endpoints, setEndpoints] = useState<documentation | undefined>();

  useEffect(() => {
    const apiEndpoint = document.getElementById('brj-endpoint-url');
    if (apiEndpoint) {
      fetch(`${apiEndpoint.textContent}`)
        .then((data) => data.json())
        .then((data) => setEndpoints(data.endpoints));
    }
  }, []);

  return endpoints ? (
    <ApiDocumentationApp endpoints={endpoints} />
  ) : (
    <Box sx={{ textAlign: 'center', margin: '8em 1em' }}>
      <CircularProgress />
      <Box sx={{ marginTop: '2em' }}>
        <Logo height={20} />
      </Box>
    </Box>
  );
};

export default Home;
