import { Box, IconButton, Link, Typography } from "@mui/material"
import { useSettings } from "../../contexts/settings";
import { contacts } from "../../data/contacts";

const YEAR = '2024';

const Footer = () => {
  const { theme, lang, isSmDown } = useSettings();

  return (
    <Box
      sx={{
        display: 'flex',
        mt: '50px',
        p: '50px',
        bgcolor: theme === 'dark' ? '#fff' : '#000',
        color: theme === 'dark' ? '#000' : '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: isSmDown ? 'column' : 'row',
        gap: isSmDown ? '20px' : 0,
      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: isSmDown ? 'center' : 'start',
        }}
      >
        <Link
          href="https://wa.me/5598991595038"
          sx={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          (98) 9 9159-5038
        </Link>
        <Link
          href="mailto:iigorfelipe@example.com"
          sx={{
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          iigorfelipe@gmail.com
        </Link>
      </Box>


      <Box
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >

        {
          contacts.map(({ label, link, Icon }) => (
            <IconButton
              key={label}
              href={link}
              target="_blank"
              sx={{
                height:'30px',
                width: '30px',
                m:'0px',
                p: '0px',
                color: theme === 'dark' ? '#000' : '#fff',
                display: 'flex',
                justifyContent: 'center'            
              }}
            >
              <Icon />
            </IconButton>
          ))
        }
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: isSmDown ? 'center' : 'end',
          mb: isSmDown ? '20px' : 0
        }}
      >
        <Typography>{lang === 'en' ? 'Project Github' : 'Gituhub do projeto'}</Typography>
        <Typography>{lang === 'en' ? 'version' : 'versão'} {YEAR}</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
