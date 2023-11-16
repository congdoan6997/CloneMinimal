import Masonry from '@mui/lab/Masonry';
import ComponentBlock from '../../component-block';
import LinearProgress from '@mui/material/LinearProgress';
import LabelProgress from './label-progress';

const COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;
type LinearProgressProps = {
  progress: number;
  buffer: number;
};

export default function UseLinearProgress({ progress, buffer }: LinearProgressProps) {
  return (
    <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
      <div>
        <LabelProgress text="Indeterminate" />
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          {COLORS.map((color) => (
            <LinearProgress key={color} color={color} sx={{ mb: 2, width: 1 }} />
          ))}
        </ComponentBlock>
      </div>

      <div>
        <LabelProgress text="Determinate" />
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          {COLORS.map((color) => (
            <LinearProgress
              key={color}
              color={color}
              variant="determinate"
              value={progress}
              sx={{ mb: 2, width: 1 }}
            />
          ))}
        </ComponentBlock>
      </div>
      <div>
        <LabelProgress text="Buffer" />
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          {COLORS.map((color) => (
            <LinearProgress
              key={color}
              color={color}
              variant="buffer"
              valueBuffer={buffer}
              value={progress}
              sx={{ mb: 2, width: 1 }}
            />
          ))}
        </ComponentBlock>
      </div>
      <div>
        <LabelProgress text="Query" />
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          {COLORS.map((color) => (
            <LinearProgress
              key={color}
              color={color}
              variant="query"
              valueBuffer={buffer}
              value={progress}
              sx={{ mb: 2, width: 1 }}
            />
          ))}
        </ComponentBlock>
      </div>
    </Masonry>
  );
}
