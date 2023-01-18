// import React from 'react';

// const Footer = () => {
//   return (
//     <div>
//       <div>
//         <div>
//           <a href=''>Home</a>
//           <a href=''>Shop</a>
//         </div>

//         <div>
//           <a href=''>News</a>
//           <a href=''>Contact</a>
//           <a href=''>About</a>
//         </div>
//       </div>
//       <div>
//         <div>Logo</div>
//         <div>SmartNest®. Todos los derechos reservados 2023</div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Footer() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar className="footer_container" position="relative">
        <Toolbar className='footer_text'>
          <p>Todos los derechos reservados 2023</p>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

