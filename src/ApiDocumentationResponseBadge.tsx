import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { DocumentationEndpointAction } from './ApiDocumentationBox';
import ApiDocumentationResponse from './ApiDocumentationResponse';

interface ApiDocumentationResponseBadgeProps {
  action: DocumentationEndpointAction;
}

const ApiDocumentationResponseBadge: FC<ApiDocumentationResponseBadgeProps> = ({ action }) => (
  <>
    <Typography sx={{ fontWeight: 'bold', marginTop: 2 }}>
      Response
      {action.returnType && action.returnType !== 'void' && (
        <>
          {' (based on '}
          <Typography
            component="span"
            sx={{
              background: '#eee',
              borderRadius: '6px',
              padding: '2px 4px',
            }}
          >
            {action.returnType}
          </Typography>
          )
        </>
      )}
      :
    </Typography>
    {Object.values(action.responses).length > 0 ? (
      Object.entries(action.responses).map(([responseKey, response]) => (
        <Box key={responseKey}>
          <ApiDocumentationResponse response={response} />
        </Box>
      ))
    ) : (
      <Box sx={{ marginTop: '.5em', textAlign: 'center', color: '#555' }}>
        This endpoint does not use strict data types for response.
      </Box>
    )}
  </>
);

export default ApiDocumentationResponseBadge;
