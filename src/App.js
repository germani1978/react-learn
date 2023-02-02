import * as React from 'react';
import './App.css';
import { Button, AppBar, Toolbar, Checkbox,IconButton, Fab, MenuItem, Radio, Select, Slider, Box, Switch, TextField, Avatar, Divider, List, ListItemText, BottomNavigation, BottomNavigationAction } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import MenuIcon from '@mui/icons-material/Menu'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">Hello World</Button>

      <Checkbox defaultChecked />

      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>

      <Radio />

      <Select>
        <MenuItem>Uno</MenuItem>
        <MenuItem>Dos</MenuItem>
      </Select>

      <Box width={300}>
        <Slider
          size="big"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Box>

      <Divider />

      <Switch checked={true} />

      <TextField />

      <Avatar>H</Avatar>

      <List>
        <ListItemText primary="Uno" />
        <ListItemText primary="Dos" />
      </List>


      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>


      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
            <MenuIcon/>
         </IconButton>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

     <BottomNavigation showLabels>
      <BottomNavigationAction label='recents' icon={<RestoreIcon />}/>
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
     </BottomNavigation>
    
   
    </div>
  );
}

export default App;



// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// export default function AlertDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open alert dialog
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Use Google's location service?"}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Let Google help apps determine location. This means sending anonymous
//             location data to Google, even when no apps are running.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Disagree</Button>
//           <Button onClick={handleClose} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
