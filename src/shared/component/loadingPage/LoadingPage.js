import './loadingPage.css';

const LoadingPage = ({title}) => {
    return (
        <div className='loading-container'>
            <div className='loading-content'>
                {title}
            </div>
        </div>
    )
}
export default LoadingPage;
