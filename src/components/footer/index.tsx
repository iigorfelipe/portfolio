import { Box, Link } from "@mui/material"
import { useSettings } from "../../contexts/settings";

const Footer = () => {
  const { theme } = useSettings();

  return (
    <Box
      sx={{
        display: 'flex',
        mt: '50px',
        p: '50px',
        height: '200px',
        bgcolor: theme === 'dark' ? '#fff' : '#000',
        color: theme === 'dark' ? '#000' : '#fff',
      }}
    >

      <Link
        href="https://github.com/iigorfelipe/portfolio"
        target="_blank"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Github do projeto
      </Link>
    </Box>
  );
};

export default Footer;
