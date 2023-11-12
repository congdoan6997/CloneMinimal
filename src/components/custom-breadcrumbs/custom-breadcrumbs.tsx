import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { CustomBreadcrumbsProps } from './type';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import LinkItem from './link-item';
import Link from '@mui/material/Link';

export default function CustomBreadcrumbs({
  links,
  action,
  heading,
  moreLink,
  activeLast,
  sx,
  ...other
}: CustomBreadcrumbsProps) {
  const lastLink = links[links.length - 1].name;
  return (
    <Box sx={{ ...sx }}>
      <Stack direction="row" alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          {heading && (
            <Typography variant="h4" gutterBottom>
              {heading}
            </Typography>
          )}
          {!!links.length && (
            <Breadcrumbs separator={<Separator />} {...other}>
              {links.map((link) => (
                <LinkItem
                  key={link.name || ''}
                  link={link}
                  activeLast={activeLast}
                  disable={link.name === lastLink}
                />
              ))}
            </Breadcrumbs>
          )}
        </Box>
        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Stack>

      {!!moreLink && (
        <Box sx={{ mt: 2 }}>
          {moreLink.map((link) => (
            <Link
              key={link}
              href={link}
              target="_blank"
              rel="noopener"
              variant="body2"
              underline="none"
              sx={{ display: 'table' }}
            >
              {link}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

function Separator() {
  return (
    <Box
      component="span"
      sx={{
        width: 4,
        height: 4,
        borderRadius: '50%',
        bgcolor: 'text.disabled',
        mb: 1,
      }}
    ></Box>
  );
}
