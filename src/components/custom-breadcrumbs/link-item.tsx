import Box from '@mui/material/Box';
import { BreadcrumbsLinkProps } from './type';
import Link from '@mui/material/Link';
import { RouterLink } from 'src/routes/components';

type Props = {
  link: BreadcrumbsLinkProps;
  activeLast?: boolean;
  disable: boolean;
};

export default function BreadcrumbsLink({ link, activeLast, disable }: Props) {
  const { name, href, icon } = link;

  const styles = {
    typography: 'body2',
    alignItems: 'center',
    color: 'text.primary',
    display: 'inline-flex',
    ...(disable &&
      !activeLast && {
        cursor: 'default',
        pointerEvents: 'none',
        color: 'text.disabled',
      }),
  };
  const renderContent = (
    <>
      {icon && (
        <Box
          component="span"
          sx={{ mr: 1, display: 'inherit', '& svg': { width: 20, height: 20 } }}
        >
          {icon}
        </Box>
      )}
      {name}
    </>
  );
  if (href) {
    return (
      <Link underline="none" component={RouterLink} href={href} sx={styles}>
        {renderContent}
      </Link>
    );
  }

  return <Box sx={styles}>{renderContent}</Box>;
}
