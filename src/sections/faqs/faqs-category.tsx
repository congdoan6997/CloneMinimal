import Box from '@mui/material/Box';
import { useBoolean, useResponsive } from 'src/hooks';
import CardDesktop from './faqs-card-desktop';

const CATEGORIES = [
  {
    label: 'Managing your account',
    icon: '/assets/icons/faqs/ic_account.svg',
    href: '#',
  },
  {
    label: 'Payment',
    icon: '/assets/icons/faqs/ic_payment.svg',
    href: '#',
  },
  {
    label: 'Delivery',
    icon: '/assets/icons/faqs/ic_delivery.svg',
    href: '#',
  },
  {
    label: 'Problem with the Product',
    icon: '/assets/icons/faqs/ic_package.svg',
    href: '#',
  },
  {
    label: 'Return & Refund',
    icon: '/assets/icons/faqs/ic_refund.svg',
    href: '#',
  },
  {
    label: 'Guarantees and assurances',
    icon: '/assets/icons/faqs/ic_assurances.svg',
    href: '#',
  },
];

export default function FaqsCategory() {
  const mdUp = useResponsive('up', 'md');
  const nav = useBoolean();

  if (!mdUp) {
    return <></>;
  }
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        md: 'repeat(3, 1fr)',
        lg: 'repeat(6, 1fr)',
      }}
      gap={3}
    >
      {CATEGORIES.map((category) => (
        <CardDesktop category={category} />
      ))}
    </Box>
  );
}
