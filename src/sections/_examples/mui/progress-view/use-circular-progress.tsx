import Masonry from '@mui/lab/Masonry';
import LabelProgress from './label-progress';
import ComponentBlock from '../../component-block';
import CircularProgress from '@mui/material/CircularProgress';
const COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;

type CircularProgressProps = {
  progress: number;
};

export default function UseCircularProgress({ progress }: CircularProgressProps) {
  return (
    <Masonry columns={{ xs: 1, md: 3 }} spacing={3}>
      <div>
        <LabelProgress text="Indeterminate" />
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          {COLORS.map((color) => (
            <CircularProgress key={color} color={color} />
          ))}
        </ComponentBlock>
      </div>
      <div>
        <LabelProgress text="Determinate" />
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          <CircularProgress color="info" />
          <CircularProgress color="info" variant="determinate" value={25} />
          <CircularProgress color="info" variant="determinate" value={50} />
          <CircularProgress color="info" variant="determinate" value={75} />
          <CircularProgress color="info" variant="determinate" value={100} />
          <CircularProgress color="info" variant="determinate" value={progress} />
        </ComponentBlock>
      </div>
      <div>
        <LabelProgress text="Size" />
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          <CircularProgress size={48} color="info" />
          <CircularProgress size={40} color="info" />
          <CircularProgress size={32} color="info" />
          <CircularProgress size={24} color="info" />
        </ComponentBlock>
      </div>
    </Masonry>
  );
}
