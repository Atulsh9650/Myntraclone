function LoadingSpinner() {
    return (
        <center className="mt-3">
        <div className="d-felx justify-content-center spinner">
        <div className="spinner-border" role="status" style={{width:"5rem",height:"5rem"}}>
        <span className="visually-hidden">Loading...</span>
        </div>
        </div>
        </center>
    );
};

export default LoadingSpinner;