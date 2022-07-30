import { FC } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DocumentationEndpointActionResponse } from './api';
import ApiDocumentationResponseTypescript from './ApiDocumentationResponseTypescript';
import getColorByHttpCode from './getColorByHttpCode';

interface ApiDocumentationResponseProps {
  response: DocumentationEndpointActionResponse;
}

const paramsCell = { padding: '.25em' };

const ApiDocumentationResponse: FC<ApiDocumentationResponseProps> = ({ response }) => {
  return (
    <Box
      sx={{
        margin: '1em 0',
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '.25rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          background: 'rgba(0,0,0,.03)',
          padding: '.75em',
          borderBottom: '1px solid rgba(0,0,0,.125)',
        }}
      >
        <Box sx={{ display: 'flex', width: '80%' }}>
          <Box
            sx={{
              display: 'flex',
              color: 'white',
              background: getColorByHttpCode(response.httpCode),
              fontSize: '10pt',
              paddingRight: '.6em',
              paddingLeft: '.6em',
              borderRadius: '10rem',
              alignItems: 'center',
            }}
          >
            {response.httpCode}
          </Box>
        </Box>
        <Box style={{ width: '20%', textAlign: 'right' }}>
          {response.typescriptDefinition && (
            <ApiDocumentationResponseTypescript definition={response.typescriptDefinition} />
          )}
        </Box>
      </Box>
      <Box>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...paramsCell, width: '2em' }}>#</TableCell>
                <TableCell sx={paramsCell}>Name</TableCell>
                <TableCell sx={paramsCell}>Type</TableCell>
                <TableCell sx={paramsCell}>Description</TableCell>
                <TableCell sx={{ ...paramsCell, width: '120px' }} />
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(response.properties).map(([key, property]) => (
                <TableRow key={key}>
                  <TableCell sx={{ ...paramsCell, color: '#6c757d' }}>{Number(key) + 1}</TableCell>
                  <TableCell sx={paramsCell}>{property.name}</TableCell>
                  <TableCell sx={paramsCell}>{property.annotation ?? property.type}</TableCell>
                  <TableCell sx={paramsCell}>{property.description}</TableCell>
                  <TableCell
                    sx={{
                      ...paramsCell,
                      textAlign: 'right',
                    }}
                  >
                    {property.nullable && 'nullable'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ApiDocumentationResponse;
