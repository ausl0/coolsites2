import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Suppress specific Recharts warnings
    if (
      error.message.includes("Support for defaultProps will be removed") &&
      (errorInfo.componentStack.includes("XAxis") || errorInfo.componentStack.includes("YAxis"))
    ) {
      console.log("Suppressed Recharts warning:", error.message);
      return;
    }
    
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;