import { createContext, useContext, useState } from "react";
import LoadingPage from "../component/loadingPage/LoadingPage";

const LoadingContext = createContext();

export const WithLoading = ({children}) => {
    const [loadingData, setLoadingData] = useState({
        isLoading: false,
        isError: false,
        errMessage: ''
    })

    const handleShowLoading = (isShowing) => {
        setLoadingData({
            isLoading: isShowing
        })
    }

    const handleShowError = (errMessage) => {
        setLoadingData({
            isLoading: false
        })
        alert(`oops...${errMessage}`)
    }

    return (
        <>
            {loadingData.isLoading && <LoadingPage title={'Please Wait'}/>}
            <LoadingContext.Provider value={{handleShowLoading, handleShowError}}>{children}</LoadingContext.Provider>
        </>
    )
}

export const useLoading = () => {
    return useContext(LoadingContext);
};