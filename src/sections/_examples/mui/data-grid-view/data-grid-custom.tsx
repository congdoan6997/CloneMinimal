import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { GridFilterInputValueProps, GridToolbar, getGridNumericOperators } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { GridColumnVisibilityModel } from '@mui/x-data-grid/hooks';
import { GridColDef, GridRowSelectionModel } from '@mui/x-data-grid/models';
import { useCallback, useState } from 'react';
import Iconify from 'src/components/iconify';
import Label from 'src/components/label';
import { fPercent } from 'src/utils/format-number';
const columns: GridColDef[] = [
  {
    field: 'id',
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    align: 'center',
    headerAlign: 'center',
    width: 64,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params: any) => (
      <Avatar alt={params.row.name} sx={{ width: 36, height: 36 }}>
        {params.row.name.charAt(0).toUpperCase()}
      </Avatar>
    ),
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
    editable: true,
    renderCell: (params: any) => (
      <Typography variant="body2" sx={{ textDecoration: 'underline' }} noWrap>
        {params.row.email}
      </Typography>
    ),
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    flex: 1,
    type: 'dateTime',
    align: 'right',
    headerAlign: 'right',
    width: 200,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 160,
    disableColumnMenu: true,
    renderCell: (params: any) => (
      <Rating size="small" value={params.row.rating} precision={0.5} readOnly />
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'singleSelect',
    valueOptions: ['online', 'alway', 'busy'],
    width: 120,
    align: 'center',
    headerAlign: 'center',
    renderCell: (params: any) => (
      <Label
        variant="soft"
        sx={{ mx: 'auto' }}
        color={
          params.row.status === 'online'
            ? 'success'
            : params.row.status === 'busy'
            ? 'error'
            : 'warning'
        }
      >
        {params.row.status}
      </Label>
    ),
  },
  {
    field: 'isAdmin',
    headerName: 'Admin',
    type: 'boolean',
    align: 'center',
    headerAlign: 'center',
    width: 80,
    renderCell: (params: any) =>
      params.row.isAdmin ? (
        <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main' }} />
      ) : (
        '-'
      ),
  },
  {
    field: 'performance',
    headerName: 'Performance',
    type: 'number',
    align: 'center',
    headerAlign: 'center',
    width: 160,
    renderCell: (params: any) => (
      <Stack
        spacing={1}
        direction={'row'}
        alignItems={'center'}
        sx={{ width: 1, height: 1, px: 1 }}
      >
        <LinearProgress
          value={params.row.performance}
          variant="determinate"
          sx={{ width: 1, height: 6, borderRadius: 4 }}
          color={
            params.row.performance < 30
              ? 'error'
              : params.row.performance >= 30 && params.row.performance < 70
              ? 'warning'
              : 'primary'
          }
        />
        <Typography variant="caption" sx={{ width: 80 }}>
          {fPercent(params.row.performance)}
        </Typography>
      </Stack>
    ),
  },
  {
    field: 'action',
    headerName: ' ',
    width: 80,
    align: 'right',
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params: any) => (
      <IconButton onClick={() => console.info('ID', params.row.id)}>
        <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
    ),
  },
];

type Props = {
  data: {
    id: string;
    name: string;
    email: string;
    lastLogin: Date;
    performance: number;
    rating: number;
    status: string;
    isAdmin: boolean;
    lastName: string;
    firstName: string;
    age: number;
  }[];
};

export default function DataGridCustom({ data }: Props) {
  const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);

  const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>({
    id: false,
  });

  if (columns.length) {
    const ratingColumn = columns.find((column) => column.field === 'rating')!;

    const ratingColIndex = columns.findIndex((col) => col.field === 'rating');

    const ratingFilterOperators = getGridNumericOperators().map((operator) => ({
      ...operator,
      InputComponent: RatingInputValue,
    }));
    columns[ratingColIndex] = {
      ...ratingColumn,
      filterOperators: ratingFilterOperators,
    };
  }

  const handleChangeColumnVisibilityModel = useCallback((model: GridColumnVisibilityModel) => {
    setColumnVisibilityModel(model);
  }, []);

  const hiddenFields = ['id', 'action'];

  const getTogglableColumns = () =>
    columns.filter((column) => !hiddenFields.includes(column.field)).map((column) => column.field);

  const selected = data.filter((row) => selectedRows.includes(row.id));

  console.info('SELECTED ROWS', selected);

  return (
    <DataGrid
      checkboxSelection
      disableRowSelectionOnClick
      rows={data}
      columns={columns}
      onRowSelectionModelChange={(newSelectionModel) => {
        setSelectedRows(newSelectionModel);
      }}
      columnVisibilityModel={columnVisibilityModel}
      onColumnVisibilityModelChange={handleChangeColumnVisibilityModel}
      slots={{
        toolbar: GridToolbar,
      }}
      slotProps={{
        columnsPanel: {
          getTogglableColumns,
        },
      }}
    />
  );
}

function RatingInputValue({ item, applyValue }: GridFilterInputValueProps) {
  return (
    <Box sx={{ p: 1, height: 1, alignItems: 'flex-end', display: 'flex' }}>
      <Rating
        size="small"
        precision={0.5}
        placeholder="Filter value"
        value={Number(item.value)}
        onChange={(event, newValue) => {
          applyValue({ ...item, value: newValue });
        }}
      />
    </Box>
  );
}
