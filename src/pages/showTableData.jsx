import { useEffect, useState } from "react";
import DataTable from "../components/datatable";
import { useParams, useNavigate } from 'react-router-dom';
import CardView from "../components/card";

const ShowTableData = (props) => {
    var state = {
        columns: [
            { field: 'name', headerName: 'Name', width: "323", headerClassName: 'super-app-theme--header', },
            { field: 'type', headerName: 'Type', width: "323", headerClassName: 'super-app-theme--header', },
            { field: 'size', headerName: 'Size', width: "323", headerClassName: 'super-app-theme--header', },
            { field: 'created', headerName: 'Created', width: "323", headerClassName: 'super-app-theme--header', },
        ],
        rows: [],
        listdata: {},
        fileType: ''
    };
    const [myState, setState] = useState(state);
    const { file } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/api/files/${file}`).then((res) => res.json()).then((json) => {
            setState(prev => ({ ...prev, rows: json.fileMetadata, listdata: {path:json.path,noOfFiles:json.nooffiles,fileType:file } }));
        })
    }, [0]);

    const handleRowClick = (event) => {
        
    }

    return (
        <>
            <div className="w-100 float-left mt-5">
                <div className="d-flex justify-content-beetween align-items-center">
                    <h1 className="w-100">File Explorer</h1>
                    <button className="addFolder btn btn-info fz14" onClick={() => navigate(-1)} >Back</button>
                </div>
                <div className="mt4">
                    <div className="w-100 float-left">
                        <CardView
                            datas={myState.listdata}
                            fileTypeCount={myState.rows.length}
                        />
                    </div>
                    <DataTable
                        columns={myState.columns}
                        rows={myState.rows}
                        getData={handleRowClick}
                    />
                </div>
            </div>
        </>
    )
};

export default ShowTableData;