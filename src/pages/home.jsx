import { useState } from "react";
import ShowFolderTable from "./showFolderTable";


const HomePage = () => {
    var state = {
        seletedOption: false,
        folderPath: "",
        getFolderData: {},
        errors: false
    };
    const [myState, setState] = useState(state);

    const handleChange = (event) => {
        const path = encodeURIComponent(event.target.value)
        setState(prev => ({ ...prev, folderPath: path }));
    };

    const seleteFolderPath = () => {
        fetch(`http://localhost:3001/api/showFiles?path=${myState.folderPath}`).then((res) => res.json()).then((response) => {
            console.log(response);
            if(!response.error)
                setState(prev => ({ ...prev, seletedOption: true, getFolderData: response, errors:false }));
            else
                setState(prev => ({ ...prev, seletedOption: false, errors:true,getFolderData: {} }));
              
        })
    }

    return (
        <>
            <div className="w-100 mt-5">
                <h1 className="w-100">File Explorer</h1>
                <div className="d-flex justify-content-center w-100">
                    <div className="f49">
                        <div className="w-100 mt4 ">
                            <div className="d-flex justify-content-between align-items-center">
                                <input type="text" placeholder="Please Select Folder Path" aria-label="First name" onChange={handleChange} class="form-control inputFile fz14" />
                                <button onClick={seleteFolderPath} className="addFolder btn btn-primary fz14" disabled={!myState.folderPath}>Show Files</button>
                            </div>
                        </div>
                        {
                            myState.errors && <div className="w-100 fz13 text-danger">
                                Invalid path / No data found
                            </div>
                        }
                    </div>
                </div>

            </div>

            {
                myState.seletedOption && <div className="w-100 float-left">
                    <ShowFolderTable selectedData={myState.getFolderData} />
                </div>
            }
        </>)

};


export default HomePage;