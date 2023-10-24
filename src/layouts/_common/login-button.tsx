import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';
import { PATH_AFTER_LOGIN } from 'src/config-global';
import { RouterLink } from 'src/routes/components';

type Props = {
  sx?: SxProps<Theme>;
};
export default function LoginButton({ sx }: Props) {
  return (
    <Button component={RouterLink} href={PATH_AFTER_LOGIN} variant="outlined" sx={{ mr: 1, ...sx }}>
      Login
    </Button>
  );
}
