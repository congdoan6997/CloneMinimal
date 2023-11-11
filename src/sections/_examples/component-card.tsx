import { CardActionArea, Paper, Typography } from "@mui/material";
import { RouterLink } from "src/routes/components";
import { alpha} from "@mui/material/styles"
import Image from 'src/components/image';
type Props = {
  item:{
    name: string;
    href: string;
    icon: string;

  }
}


export default function ComponentCard({item}: Props) {
const {name, icon, href} = item;
  return (
  <Paper
  component={RouterLink}
  href={href}
  variant="outlined"
  sx={{
    overflow:'hidden',
    textDecoration: 'none',
    borderColor: (theme) => alpha(theme.palette.grey[500],0.08)
  }}

  >
    <CardActionArea>
    <Image alt={name} src={icon} />
    </CardActionArea>
    <Typography variant="subtitle2" sx={{p:2 }}>
      {name}
    </Typography >
  </Paper>
  )
}