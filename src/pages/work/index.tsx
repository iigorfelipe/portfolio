import { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNewOutlined';
import { useSettings } from '../../contexts/settings';

const teste = [
  {
    project: 'Invoice Insight',
    gifs: ['/invoice-insight-settings.gif', '/invoice-insight-user.gif'],
    appLink: 'https://iigorfelipe.github.io/invoice-insight/',
    githubLink: 'https://github.com/iigorfelipe/invoice-insight',
    descriptionEn:  'Performance listing of clients and services by month. Includes graph and filtering by period.',
    descriptionBr: 'Listagem performática de clientes e prestações por mês. Inclui gráfico e filtragem por períodos.',
  },
  {
    project: 'Github Explorer',
    gifs: ['/github-explorer.gif', '/github-explorer.gif'],
    appLink: 'https://iigorfelipe.github.io/github-explorer/',
    githubLink: 'https://github.com/iigorfelipe/github-explorer',
    descriptionEn: 'Explore GitHub repositories with ease. Filtering by type, language and sorting available.',
    descriptionBr: 'Explore repositórios GitHub com facilidade. Filtragem por tipo, linguagem e ordenação disponíveis.',
  },
]

const Work = () => {
  const { lang } = useSettings();
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
          teste.map(({ project, gifs, descriptionBr, descriptionEn, appLink, githubLink }) => (
            <Box
              key={project}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: '800px'
              }}
            >
              {
                gifs.map((gif, index) => (
                  <Box
                    key={project+gif+index}
                    sx={{
                      display: 'flex',
                      flexDirection: index === 1 ? 'row-reverse' : 'row',
                      mt: index === 1 ? '20px' : '0px',
                      gap: '20px',
                    }}
                  >
                    <Box
                      sx={{
                        width: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        p: '70px',
                        borderRadius: '20px',
                        // border: `1px solid #99ffff`,
                        // backgroundColor: '#99ffff'
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
                        width: '400px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',      
                                        
                      }}
                    >
                      <img
                        src={gif}
                        alt="GIF"
                        style={{
                          width: '100%',
                          height: '100%',
                          cursor: 'pointer',
                          borderRadius: '20px',

                        }}
                        onClick={() => window.open(gif, '_blank')}
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
              <Divider sx={{ width: '100%', m: '50px 0px' }} />
            </Box>
          ))
        }
      </Box>
    </Box>
  );
};

export default Work;
