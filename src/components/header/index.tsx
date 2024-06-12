import { Box, IconButton, Popover, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/TranslateOutlined';
import DarkIcon from '@mui/icons-material/DarkModeOutlined';
import LightIcon from '@mui/icons-material/WbSunnyOutlined';
import { useSettings } from '../../contexts/settings';
import NavBar from '../navBar';
import { useState } from 'react';

const ICON_SIZE = { width: '20px', height: '20px' }


const Header = () => {
  const { toggleTheme, theme, setLang } = useSettings();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLang = (lang: string) => {
    setLang(lang);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '20px'}}>
  
        <Typography>Igor</Typography> 

        <Box sx={{display: 'flex', alignItems: 'center'}}>

          <IconButton
            aria-describedby={id}
            onClick={handleClick}
          >
            <LanguageIcon sx={ICON_SIZE} />
          </IconButton>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', p: '5px', gap: '2px'}}>
              <IconButton onClick={() => handleLang('en')}>
                <img src="/usa-flag.png" />
              </IconButton>
              <IconButton onClick={() => handleLang('br')}>
                <img src="/brazil-flag.png" />
              </IconButton>
            </Box>
          </Popover>

          <IconButton onClick={() => theme !== 'dark' ? toggleTheme() : null}>
            <DarkIcon sx={ICON_SIZE} />
          </IconButton>

          <IconButton onClick={() => theme !== 'light' ? toggleTheme() : null}>
            <LightIcon sx={ICON_SIZE} />
          </IconButton>

        </Box>

      </Box>

      <NavBar />

    </Box>
  );
};

export default Header;
