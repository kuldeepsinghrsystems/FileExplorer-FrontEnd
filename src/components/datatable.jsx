import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const DataTable = (props) => {
    const handleRowClick = (event) => {
        props.getData(event.row)
    }

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    '& .super-app-theme--header': {
                        backgroundColor: 'rgb(89 196 255)',
                        color: 'rgb(255 255 255)'
                    },
                }}
            >
                <DataGrid
                    onRowClick={handleRowClick}
                    rows={props.rows}
                    columns={props.columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 20 },
                        },
                    }}
                    rowHeight={45}
                    columnHeaderHeight={45}
                    sx={{
                        fontSize: 15
                    }}
                    pageSizeOptions={[1, 10]}
                />
            </Box>

        </>
    )
};

export default DataTable;