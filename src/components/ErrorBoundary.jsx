import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("App crashed:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-white bg-black min-h-screen flex items-center justify-center">
          <p>Something went wrong loading this section on mobile.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
