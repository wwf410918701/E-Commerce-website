import { ErrorImageText } from "./error-boundary.styles";
import { ErrorImageOverlay } from "./error-boundary.styles";
import { ErrorImageContainer } from "./error-boundary.styles";
import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super()

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if(this.state.hasError){
            return(
                <ErrorImageOverlay> 
                    <ErrorImageContainer imageUrl="https://i.imgur.com/qIufhof.png" />
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary