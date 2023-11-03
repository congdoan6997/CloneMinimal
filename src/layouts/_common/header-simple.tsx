import { bgBlur } from "src/theme/css";
import { HEADER } from "../config-layout";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { useOffsetTop } from "src/hooks";
import Logo from "src/components/logo";
import Stack from "@mui/material/Stack";
import SettingsButton from "./settings-button";
import Link from "@mui/material/Link";
import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";

export default function Header() {
  const theme = useTheme();
  const offsetTop = useOffsetTop(HEADER.H_DESKTOP);
  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Logo />
        

        <Stack direction="row" alignItems='center' spacing={1}>
          <SettingsButton />

            <Link
            href={paths.faqs}
            component={RouterLink}
            color="inherit"
            sx={{ typography: 'subtitle2'}}
            >
              Need help?
            </Link>
        </Stack>
      </Toolbar>

</AppBar>)}