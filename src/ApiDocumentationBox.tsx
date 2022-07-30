import { FC, ReactNode } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ApiDocumentationResponseBadge from './ApiDocumentationResponseBadge';
import ApiDocumentationBoxParameters from './ApiDocumentationBoxParameters';
import ApiDocumentationBoxHeader from './ApiDocumentationBoxHeader';

export interface DocumentationEndpointAction {
  name: string;
  method: string;
  route: string;
  httpMethod: string;
  methodName: string;
  description: string | null;
  roles: string[];
  throws: string[];
  parameters: DocumentationEndpointActionParameter[];
  parametersDeclaringType?: string;
  returnType?: string;
  responses: DocumentationEndpointActionResponse[];
}

export interface DocumentationEndpointActionParameter {
  position: number;
  name: string;
  type: string;
  default: any | null;
  required: boolean;
  description: string | null;
}

export interface DocumentationEndpointActionResponse {
  httpCode: number;
  message?: string;
  properties: DocumentationEndpointActionResponseProperty[];
  typescriptDefinition?: string;
}

export interface DocumentationEndpointActionResponseProperty {
  name: string;
  type: string;
  description?: string;
  annotation?: string;
  nullable: boolean;
  children: DocumentationEndpointActionResponseProperty[];
}

interface ApiDocumentationBoxProps {
  route: string;
  action: DocumentationEndpointAction;
  actions?: ReactNode[];
}

const ApiDocumentationBox: FC<ApiDocumentationBoxProps> = ({ route, action, actions }) => (
  <Box sx={{ margin: '1em 0', border: '1px solid rgba(0,0,0,.125)', borderRadius: '.25rem' }}>
    <ApiDocumentationBoxHeader route={route} action={action} actions={actions} />
    <Box sx={{ padding: '1em' }}>
      {action.description && (
        <>
          <p style={{ whiteSpace: 'pre', lineHeight: '1.5', margin: 0 }}>{action.description}</p>
          <Box sx={{ borderTop: '1px solid #ccc', margin: '1.5em 0' }} />
        </>
      )}
      <Typography sx={{ fontWeight: 'bold' }}>
        {action.httpMethod === 'GET' ? 'Query' : 'Body'} parameters
        {action.parametersDeclaringType && (
          <>
            {' (declared in '}
            <Typography
              component="span"
              sx={{
                background: '#eee',
                borderRadius: '6px',
                padding: '2px 4px',
              }}
            >
              {action.parametersDeclaringType}
            </Typography>
            )
          </>
        )}
        :
      </Typography>
      <ApiDocumentationBoxParameters action={action} />
      <ApiDocumentationResponseBadge action={action} />
    </Box>
  </Box>
);

export default ApiDocumentationBox;
