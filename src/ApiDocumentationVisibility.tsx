import { FC } from 'react';
import { Box } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import { Lock, Public } from '@mui/icons-material';

export enum EndpointVisibility {
  Public = 'public',
  Private = 'private',
}

interface ApiDocumentationVisibilityProps {
  visibility: EndpointVisibility;
}

const ApiDocumentationVisibility: FC<ApiDocumentationVisibilityProps> = ({ visibility }) => (
  <Box
    sx={{
      padding: '1em',
      ...(visibility === EndpointVisibility.Public
        ? {
            color: '#155724',
            backgroundColor: '#d4edda',
            borderColor: '#c3e6cb',
          }
        : {
            color: '#856404',
            backgroundColor: '#fff3cd',
            borderColor: '#ffeeba',
          }),
    }}
    role="alert"
  >
    <Grid container rowSpacing={1}>
      <Grid item xs={10}>
        <Typography component="h3" sx={{ fontSize: '16pt', fontWeight: 'bold', display: 'flex' }}>
          {visibility === EndpointVisibility.Public ? (
            <>
              <Public /> This endpoint is public!
            </>
          ) : (
            <>
              <Lock /> This endpoint is private!
            </>
          )}
        </Typography>
        <Box component="p" sx={{ marginBottom: 0 }}>
          {visibility === EndpointVisibility.Public ? (
            <>
              This endpoint is&nbsp;publicly available from all over the&nbsp;Internet. Anyone can use, receive and send
              any data at&nbsp;any time. When implementing this endpoint, consider all security risks.
            </>
          ) : (
            <>
              This endpoint is&nbsp;systemically protected. You must log in&nbsp;and have specific rights assigned
              to&nbsp;call this endpoint.
            </>
          )}
        </Box>
      </Grid>
      <Grid item xs={2} sx={{ textAlign: 'right' }}>
        <Button
          variant="outlined"
          size="small"
          href="https://github.com/baraja-core/structured-api#-permissions"
          target="_blank"
        >
          More info
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default ApiDocumentationVisibility;
