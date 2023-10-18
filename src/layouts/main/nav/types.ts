export type NavItemProps = {
  title: string;
  path: string;
  icon?: React.ReactElement;
  children?: {
    subheader: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
};
export type NavProps = {
  offsetTop: boolean;
  data: NavItemProps[];
};
