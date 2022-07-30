import { FC, ReactNode } from 'react';
import { Box } from '@mui/system';
import { DocumentationEndpointAction } from './ApiDocumentationBox';

interface ApiDocumentationBoxHeaderProps {
  route: string;
  action: DocumentationEndpointAction;
  actions?: ReactNode[];
}

const variantByAction = [
  { code: 'GET', variant: '#3F51B5' },
  { code: 'POST', variant: '#4CAF50' },
  { code: 'CREATE', variant: '#4CAF50' },
  { code: 'PUT', variant: '#FF9800' },
  { code: 'PATCH', variant: '#FF9800' },
  { code: 'DELETE', variant: '#fd3131' },
];

const ApiDocumentationBoxHeader: FC<ApiDocumentationBoxHeaderProps> = ({ route, action, actions }) => (
  <Box
    sx={{
      display: 'flex',
      background: 'rgba(0,0,0,.03)',
      padding: '.75em',
      borderBottom: '1px solid rgba(0,0,0,.125)',
    }}
  >
    <Box sx={{ display: 'flex', width: '80%' }}>
      <Box>
        <Box
          sx={{
            display: 'flex',
            color: 'white',
            background:
              variantByAction.find((httpVariant) => httpVariant.code === action.httpMethod)?.variant ?? '#007bff',
            fontSize: '10pt',
            paddingRight: '.6em',
            paddingLeft: '.6em',
            borderRadius: '10rem',
            alignItems: 'center',
          }}
        >
          {action.httpMethod}
        </Box>
      </Box>
      <Box sx={{ marginLeft: 2 }}>
        <Box
          sx={{
            color: '#555',
            fontFamily: 'monospace',
            borderBottom: '1px dotted #555',
          }}
        >
          api/v1/{route}
        </Box>
      </Box>
    </Box>
    <Box style={{ width: '20%', textAlign: 'right' }}>{(actions ?? []).map((actionItem) => actionItem)}</Box>
  </Box>
);

export default ApiDocumentationBoxHeader;
