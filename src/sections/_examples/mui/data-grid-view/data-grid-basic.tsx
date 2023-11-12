import IconButton from '@mui/material/IconButton';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid/models';
import Iconify from 'src/components/iconify';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 120,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: ' ',
    width: 80,
    align: 'right',
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => (
      <IconButton>
        <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
    ),
  },
];

type Props = {
  data: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    fullName: string;
  }[];
};

export default function DataGridBasic({ data }: Props) {
  return (
    <DataGrid
      columns={columns}
      rows={data}
      checkboxSelection
      disableRowSelectionOnClick
      initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
      pageSizeOptions={[5, 10, 20]}
    />
  );
}
