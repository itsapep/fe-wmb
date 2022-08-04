import {Component} from "react";
import LoadingPage from "./loadingPage/LoadingPage";

function withLoading(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: false,
                isError: false,
                errMessage: ''
            }
        }

        handleShowLoading = (isShowing) => {
            this.setState({
                isLoading: isShowing
            })
        }

        handleShowError = (errMessage) => {
            this.setState({
                isLoading: false
            })
            alert(`oops...${errMessage}`)
        }

        render() {
            return (
                <>
                    {this.state.isLoading && <LoadingPage title={'Please Wait'}/>}
                    <WrappedComponent onShowLoading={this.handleShowLoading}
                                      onShowError={this.handleShowError} {...this.props}/>
                </>
            )
        }
    }
}

export { withLoading };