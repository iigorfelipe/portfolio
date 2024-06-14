import { Box, Typography } from "@mui/material";
import { icons } from "../../data/icons";
import { useSettings } from "../../contexts/settings";
import { aboutText } from "../../data/about";


const About = () => {
  const { isSmDown, lang } = useSettings();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isSmDown ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 100px)',
        mt: '-100px',
        gap: '30px',
        p: isSmDown ? '20px' : '0',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: isSmDown ? '100%' : '500px',
          textAlign: 'justify'
        }}
      >

        {
          aboutText[lang as 'br' | 'en'].map((paragraphString) => (
            <Typography key={paragraphString} paragraph>
              {paragraphString}
            </Typography>
          ))
        }
          
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          width: isSmDown ? '100%' : '300px',
        }}
      >
        {icons.map(({ id, Icon, link }) => (
          <Box
            key={id}
            sx={{
              fontSize: '40px',
              cursor: 'pointer',
            }}
            onClick={() => window.open(link, '_blacnk')}
          >
            <Icon />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default About;
