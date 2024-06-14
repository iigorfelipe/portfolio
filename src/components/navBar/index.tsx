import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNewOutlined';
import { useSettings } from '../../contexts/settings';


const NavBar = () => {
  const { lang } = useSettings();
  const [currentTab, setCurrentTab] = useState('work');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    if (path && (path === 'work' || path === 'about')) {
      setCurrentTab(path);
    }
  }, [location]);

  const handleNavigation = (tab: string) => {
    if (tab !== currentTab) {
      navigate(`/portfolio/${tab}`);
    };
    setCurrentTab(tab);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        mb: '5%'
      }}
    >

      <Typography
        onClick={() => handleNavigation('work')}
        sx={{
          cursor: 'pointer',
          textUnderlineOffset: '2px',
          textDecoration: currentTab === 'work' ? 'underline' : 'none'
        }}
      >
        {lang === 'en' ? 'work' : 'projetos'}
      </Typography>
      /
      <Typography
        onClick={() => handleNavigation('about')}
        sx={{
          cursor: 'pointer',
          textUnderlineOffset: '3px',
          textDecoration: currentTab === 'about' ? 'underline' : 'none'
        }}
      >
        {lang === 'en' ? 'about' : 'sobre'}                    
      </Typography>
      /
      <Typography
        sx={{ cursor: 'pointer' }}
        onClick={() => window.open('/resume.pdf', '_blank')}
      >
        {lang === 'en' ? 'resume' : 'currículo'} {<OpenInNewIcon sx={{ width: '10px', height: '10px', p: '0px', mb: '4px' }} />}                      
      </Typography>

    </Box>
  );
};

export default NavBar;
