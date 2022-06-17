import { FC } from 'react';
import { Grid, Tooltip } from '@mui/material';
import { ChevronLeft, ChevronRight, Home, Lock, Public } from '@mui/icons-material';
import { DocumentationEndpoint } from './api';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

interface RestApiDocumentationMenuProps {
  endpoints: DocumentationEndpoint[];
  activeEndpoint?: string;
  isMenuOpen: boolean;
  setEndpoint: (endpoint?: string) => void;
  setMenuOpen: () => void;
}

const ApiDocumentationMenu: FC<RestApiDocumentationMenuProps> = ({
  endpoints,
  activeEndpoint,
  isMenuOpen,
  setEndpoint,
  setMenuOpen,
}) => (
  <Paper sx={{ width: 320, maxWidth: '100%' }}>
    <Grid container>
      <Grid item xs={isMenuOpen ? 10 : 6}>
        <MenuItem sx={{ textAlign: 'center' }} onClick={() => setEndpoint(undefined)}>
          {isMenuOpen ? (
            <>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              {isMenuOpen && <ListItemText>Overview</ListItemText>}
            </>
          ) : (
            <Home />
          )}
        </MenuItem>
      </Grid>
      <Grid item xs={isMenuOpen ? 2 : 6}>
        <MenuItem sx={{ textAlign: 'center' }} onClick={setMenuOpen}>
          {isMenuOpen ? <ChevronLeft /> : <ChevronRight />}
        </MenuItem>
      </Grid>
    </Grid>
    <MenuList>
      {endpoints.map((endpoint) => (
        <MenuItem
          key={endpoint.class}
          onClick={() => setEndpoint(endpoint.class)}
          sx={
            endpoint.class === activeEndpoint
              ? {
                  borderLeft: '3px solid #dc3545',
                  borderRight: '3px solid #dc3545',
                  background: '#eee',
                }
              : {
                  borderLeft: '3px solid transparent',
                  borderRight: '3px solid transparent',
                }
          }
        >
          {isMenuOpen ? (
            <>
              <ListItemIcon>{endpoint.public ? <Public /> : <Lock />}</ListItemIcon>
              <ListItemText>{endpoint.name}</ListItemText>
              {endpoint.actions.length > 0 && (
                <Typography variant="body2" color="text.secondary">
                  {endpoint.actions.length}
                </Typography>
              )}
            </>
          ) : (
            <Tooltip
              title={`${endpoint.name}${endpoint.actions.length > 0 ? ` (${endpoint.actions.length})` : ''}`}
              placement="right"
            >
              <ListItemIcon>{endpoint.public ? <Public /> : <Lock />}</ListItemIcon>
            </Tooltip>
          )}
        </MenuItem>
      ))}
    </MenuList>
  </Paper>
);

export default ApiDocumentationMenu;
