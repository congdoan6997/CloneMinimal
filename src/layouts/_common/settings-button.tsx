import { m } from 'framer-motion';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Iconify from "src/components/iconify";
import { Theme, SxProps } from '@mui/material/styles';
import Badge ,{ badgeClasses } from "@mui/material/Badge";
import { varHover } from 'src/components/animate/variants';

type Props = {
  sx?: SxProps<Theme>;
};

export default function SettingsButton({ sx }: Props) {
  // const settings = useSettingsContext();
  return (
    <Badge
      color="error"
      variant="dot"
      invisible= {true}
      sx={{
        [`& .${badgeClasses.badge}`]: {
          top: 8,
          right: 8,
        },
        ...sx,
      }}
    >
      <Box
        component={m.div}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
        }}>
      <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          aria-label="settings"
          sx={{
            width: 40,
            height: 40,
          }}
        >

      <Iconify icon="solar:settings-bold-duotone" width={24} />
      </IconButton>
      </Box>
    </Badge>
  );}
