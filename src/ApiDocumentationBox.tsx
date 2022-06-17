import { FC, ReactNode } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Error } from '@mui/icons-material';

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
}

export interface DocumentationEndpointActionParameter {
  position: number;
  name: string;
  type: string;
  default: any | null;
  required: boolean;
  description: string | null;
}

interface ApiDocumentationBoxProps {
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

const paramsCell = { padding: '.25em' };

const ApiDocumentationBox: FC<ApiDocumentationBoxProps> = ({ route, action, actions }) => (
  <Box sx={{ margin: '1em 0', border: '1px solid rgba(0,0,0,.125)', borderRadius: '.25rem' }}>
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
              color: 'white',
              background:
                variantByAction.find((httpVariant) => httpVariant.code === action.httpMethod)?.variant ?? '#007bff',
              fontSize: '10pt',
              paddingRight: '.6em',
              paddingLeft: '.6em',
              borderRadius: '10rem',
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
    <Box sx={{ padding: '1em' }}>
      {action.description && (
        <>
          <p style={{ whiteSpace: 'pre', lineHeight: '1.5', margin: 0 }}>{action.description}</p>
          <Box sx={{ borderTop: '1px solid #ccc', margin: '1.5em 0' }} />
        </>
      )}
      <Typography sx={{ fontWeight: 'bold' }}>{action.httpMethod === 'GET' ? 'Query' : 'Body'} parameters:</Typography>
      {action.parameters.length > 0 ? (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...paramsCell, width: '2em' }}>#</TableCell>
                <TableCell sx={paramsCell}>Name</TableCell>
                <TableCell sx={paramsCell}>Type</TableCell>
                <TableCell sx={paramsCell}>Default</TableCell>
                <TableCell sx={paramsCell}>Description</TableCell>
                <TableCell sx={{ ...paramsCell, width: '120px' }} />
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(action.parameters).map(([key, parameter]) => (
                <TableRow key={key}>
                  <TableCell sx={{ ...paramsCell, color: '#6c757d' }}>{Number(key) + 1}</TableCell>
                  <TableCell sx={paramsCell}>{parameter.name}</TableCell>
                  <TableCell sx={paramsCell}>
                    {parameter.type.split('|').map((type) => (
                      <Box
                        key={type}
                        component="span"
                        sx={{
                          border: '1px solid #ccc',
                          borderRadius: '6px',
                          padding: '0 4px',
                          marginRight: '2px',
                        }}
                      >
                        {type}
                      </Box>
                    ))}
                  </TableCell>
                  <TableCell sx={paramsCell}>
                    {parameter.default && (
                      <code>
                        {typeof parameter.default === 'string' ? (
                          parameter.default
                        ) : (
                          <Box
                            component="span"
                            sx={{
                              border: '1px solid #ccc',
                              borderRadius: '6px',
                              padding: '0 4px',
                              marginRight: '2px',
                              fontFamily: 'monospace',
                            }}
                          >
                            {JSON.stringify(parameter.default)}
                          </Box>
                        )}
                      </code>
                    )}
                  </TableCell>
                  <TableCell sx={paramsCell}>{parameter.description}</TableCell>
                  <TableCell sx={{ ...paramsCell, textAlign: 'right' }}>
                    {parameter.required ? (
                      <Typography component="span" sx={{ color: '#dc3545', textAlign: 'right', fontSize: '10pt' }}>
                        <Error sx={{ fontSize: '14pt', marginRight: '4px' }} />
                        Required
                      </Typography>
                    ) : (
                      <Typography component="i" sx={{ color: '#6c757d', fontSize: '10pt' }}>
                        optional
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography sx={{ fontStyle: 'italic', marginTop: 1 }}>No parameters.</Typography>
      )}
    </Box>
  </Box>
);

export default ApiDocumentationBox;
