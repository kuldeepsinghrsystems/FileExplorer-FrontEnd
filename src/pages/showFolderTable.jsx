import { useEffect, useState } from "react";
import DataTable from "../components/datatable";
import { useNavigate } from "react-router-dom";
import CardView from "../components/card";

const ShowFolderTable = (props) => {
    var state = {
        columns: [
            { field: 'fileType', headerName: 'File Type', width: 646, headerClassName: 'super-app-theme--header' },
            { field: 'count', headerName: 'Count', width: 646, headerClassName: 'super-app-theme--header' },
        ],
        rows: [],
        listdata: {}
    };
    let navigate = useNavigate();
    const [myState, setState] = useState(state);

    useEffect(() => {
        if (props.selectedData) {
            setState(prev => ({
                ...prev, rows: props.selectedData.files,
                listdata: {
                    "noOfFiles": props.selectedData.noOfFiles,
                    "path": props.selectedData.path,
                }
            }));
        }
    }, [props.selectedData]);

    const handleRowClick = (event) => {
        navigate(`/showData/${event.fileType}`);
    }

    return (
        <>
            <div className="w-100  float-left">
                <CardView
                    datas={myState.listdata}
                />
            </div>
            <DataTable
                columns={myState.columns}
                rows={myState.rows}
                getData={handleRowClick}
            />

        </>
    )
};

export default ShowFolderTable;