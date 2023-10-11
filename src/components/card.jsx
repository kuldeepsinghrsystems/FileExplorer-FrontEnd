const CardView = (props) => {
    console.log(props)
    return (
        <>
            <ul className="listul">
                <li><span className="fw-bold">Folder</span> :  {props.datas.path}</li>
                <li><span className="fw-bold">Total number of Files</span> :  {props.datas.noOfFiles}</li>
                { props.datas.fileType && <li><span className="fw-bold">{props.datas.fileType} file count</span> : {props.fileTypeCount}  </li>}
            </ul>
        </>
    )
};

export default CardView;