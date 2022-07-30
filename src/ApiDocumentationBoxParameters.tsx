import { FC } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Error } from '@mui/icons-material';
import { DocumentationEndpointAction } from './ApiDocumentationBox';

interface ApiDocumentationBoxParametersProps {
  action: DocumentationEndpointAction;
}

const paramsCell = { padding: '.25em' };

const ApiDocumentationBoxParameters: FC<ApiDocumentationBoxParametersProps> = ({ action }) =>
  action.parameters.length > 0 ? (
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
  );

export default ApiDocumentationBoxParameters;
