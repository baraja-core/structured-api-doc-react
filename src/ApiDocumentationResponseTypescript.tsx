import { FC, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Draggable from 'react-draggable';
import Paper, { PaperProps } from '@mui/material/Paper';

interface ApiDocumentationResponseTypescriptProps {
  definition: string;
}

const ApiDocumentationResponseTypescript: FC<ApiDocumentationResponseTypescriptProps> = ({ definition }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} size="small" variant="outlined" sx={{ padding: '0' }}>
        TS
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperComponent={(props: PaperProps) => (
          <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
          </Draggable>
        )}
        aria-labelledby="draggable-dialog-title"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Endpoint response Typescript definition
        </DialogTitle>
        <DialogContent sx={{ display: 'flex' }}>
          <pre style={{ fontFamily: 'monospace' }}>{definition}</pre>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ApiDocumentationResponseTypescript;
