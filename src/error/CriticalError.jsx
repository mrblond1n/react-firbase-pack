import React from 'react';
import {Button, MessageSplash} from '../components';


class ErrorBoundary extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            errorInfo: null,
        	hasError: false,
            message: '',
        };
    }

    componentDidCatch (error, info) {
        const {message} = error;

        this.setState({
            errorInfo: info,
            hasError: true,
            message,
        });
    }

    render () {
        const {hasError, errorInfo, message} = this.state;
        const details = errorInfo?.componentStack?.toString();

        if (hasError) {
            return (
                <MessageSplash details={details} title={message}>
                    <Button size="small" color="primary" onClick={() => window.location.reload()} fullWidth>
                        Reload page
                    </Button>
                </MessageSplash>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
