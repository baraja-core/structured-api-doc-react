import { FC } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { DocumentationEndpoint } from './api';
import ApiDocumentationVisibility, { EndpointVisibility } from './ApiDocumentationVisibility';
import ApiDocumentationBox from './ApiDocumentationBox';

interface RestApiDocumentationEndpointProps {
  endpoint: DocumentationEndpoint;
}

const ApiDocumentationEndpoint: FC<RestApiDocumentationEndpointProps> = ({ endpoint }) => (
  <Box>
    <h1 style={{ marginTop: 0 }}>{endpoint.name}</h1>
    {endpoint.description && <p>{endpoint.description}</p>}
    <ApiDocumentationVisibility visibility={endpoint.public ? EndpointVisibility.Public : EndpointVisibility.Private} />
    {Object.entries(endpoint.actions).map(([key, action]) => {
      return (
        <ApiDocumentationBox
          key={key}
          route={`${endpoint.route}${action.route !== 'default' ? `/${action.route}` : ''}`}
          action={action}
          actions={[
            <Button size="small" variant="outlined" sx={{ padding: '0' }}>
              TS
            </Button>,
          ]}
        />
      );
    })}
  </Box>
);

export default ApiDocumentationEndpoint;
