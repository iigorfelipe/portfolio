import { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNewOutlined';
import { useSettings } from '../../contexts/settings';
import { works } from '../../data/works';

const Work = () => {
  const { lang, isSmDown } = useSettings();
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleTooltipPosition = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setTooltipPosition({ top: event.clientY + 10, left: event.clientX + 10 });
  };

  const handleTooltipClose = () => {
    setTooltipPosition({ top: 0, left: 0 });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: '0px 10%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {
          works.map(({ project, media, descriptionBr, descriptionEn, appLink, githubLink }) => (
            <Box
              key={project}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: isSmDown ? '300px' : '800px',
              }}
            >
              {
                media.map(({ path, viewMode, alt }, index) => (
                  <Box
                    key={project+path}
                    sx={{
                      display: 'flex',
                      flexDirection: isSmDown ? 'column-reverse' : (index === 1 ? 'row-reverse' : 'row'),
                      justifyContent: 'center',
                      alignItems: 'center',
                      mt: isSmDown ? '0px' : (index === 1 ? '20px' : '0px'),
                      gap: isSmDown ? '0px' : '20px',
                    }}
                  >
                    <Box
                      sx={{
                        width: isSmDown ? '300px' : '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        p: isSmDown ? '20px' : '70px',
                        borderRadius: '20px',
                      }}
                    >
                      {
                        index === 0 ? (
                          <Typography>{lang === 'en' ? descriptionEn : descriptionBr}</Typography>
                        ) : (
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '10px',
                            }}
                          >
                            <Typography 
                              sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                  textDecoration: 'underline'
                                }
                              }}
                              onClick={() => window.open(appLink, '_blank')}
                            >
                              {lang === 'en' ? 'See the app running' : 'Veja a aplicação rodando'}
                              <OpenInNewIcon sx={{ width: '10px', height: '10px', p: '0px', mb: '4px' }} />
                            </Typography>
                            <Typography 
                              sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                  textDecoration: 'underline'
                                }
                              }}
                              onClick={() => window.open(githubLink, '_blank')}
                            >
                              {lang === 'en' ? 'Project Github' : 'Github do projeto'}
                              <OpenInNewIcon sx={{ width: '10px', height: '10px', p: '0px', mb: '4px' }} />
                            </Typography>                            
                          </Box>
                        )
                      }
                    </Box>

                    <Box
                      sx={{
                        width: viewMode === 'mobile' ? '150px' : (isSmDown ? '300px' : '400px'),
                        position: 'relative',
                        display: 'flex',                        
                        alignItems: 'center',
                        justifyContent: 'center',                             
                      }}
                    >
                      <img
                        src={path}
                        alt={alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          cursor: 'pointer',
                          borderRadius: '20px',

                        }}
                        onClick={() => window.open(path, '_blank')}
                        onMouseMove={handleTooltipPosition}
                        onMouseLeave={handleTooltipClose}
                      />
                      {
                        tooltipPosition.top !== 0 && (
                          <Typography
                            sx={{
                              position: 'fixed',
                              top: tooltipPosition.top,
                              left: tooltipPosition.left,
                              backgroundColor: '#EAEAEA',
                              color: '#0d1117',
                              borderRadius: '10px',
                              fontSize: '12px',
                              p: '5px',
                            }}
                          >
                            {lang === 'en' ? 'View in new tab' : 'Visualizar em nova guia'}
                            <OpenInNewIcon sx={{ width: '10px', height: '10px', p: '0px', mb: '4px' }} />
                          </Typography>
                        )
                      }
                    </Box>
                  </Box>
                ))
              }
              <Divider sx={{ width: '100%', m: isSmDown ? '20p' : '50px 0px' }} />
            </Box>
          ))
        }
      </Box>
    </Box>
  );
};

export default Work;
