import { FC } from 'react';
import { DocumentationEndpoint } from './api';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

interface RestApiDocumentationOverviewProps {
  endpoints: DocumentationEndpoint[];
  setEndpoint: (endpoint?: string) => void;
}

const ApiDocumentationOverview: FC<RestApiDocumentationOverviewProps> = ({ endpoints, setEndpoint }) => (
  <>
    <h1 style={{ marginTop: 0 }}>Welcome to REST API Documentation</h1>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {endpoints.map((endpoint) => (
        <Box sx={{ width: 'calc(100%/3)' }} key={endpoint.class}>
          <Box
            sx={{ border: '1px solid rgba(0,0,0,.125)', borderRadius: '.25rem', margin: '.5em .5em' }}
            onClick={() => setEndpoint(endpoint.class)}
          >
            <MenuItem>
              {endpoint.name}
              {endpoint.description && <p>{endpoint.description}</p>}
            </MenuItem>
          </Box>
        </Box>
      ))}
    </Box>
  </>
);

export default ApiDocumentationOverview;
