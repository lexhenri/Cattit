import React from 'react';
import { Redirect } from 'react-router-dom';
import ErrorNotFound from './not_found'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
   
     };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { 
      hasError: true,
      error: error,
      };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      <h2>error!</h2>
    }
    return this.props.children;
  }

}

export default ErrorBoundary;