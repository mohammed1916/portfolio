import { useState, useEffect } from 'react';

// Custom cursor hook for managing cursor state globally
export const useCursor = () => {
  const [cursorState, setCursorState] = useState('default');

  // Apply cursor class to body
  useEffect(() => {
    const body = document.body;
    
    // Remove any existing cursor classes
    body.classList.remove('interactive-cursor', 'interactive-cursor-large', 'no-custom-cursor');
    
    // Apply current cursor state
    switch (cursorState) {
      case 'interactive':
        body.classList.add('interactive-cursor');
        break;
      case 'large':
        body.classList.add('interactive-cursor-large');
        break;
      case 'none':
        body.classList.add('no-custom-cursor');
        break;
      default:
        // Default state - let CSS handle it
        break;
    }
    
    return () => {
      // Cleanup on unmount
      body.classList.remove('interactive-cursor', 'interactive-cursor-large', 'no-custom-cursor');
    };
  }, [cursorState]);

  return {
    cursorState,
    setCursorState,
    setInteractive: () => setCursorState('interactive'),
    setLarge: () => setCursorState('large'),
    setDefault: () => setCursorState('default'),
    disable: () => setCursorState('none')
  };
};

// Higher-order component for adding cursor behavior
export const withCursor = (WrappedComponent, cursorType = 'interactive') => {
  const WithCursorComponent = (props) => {
    const { setCursorState } = useCursor();
    
    const handleMouseEnter = () => {
      setCursorState(cursorType);
    };
    
    const handleMouseLeave = () => {
      setCursorState('default');
    };
    
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-wrapper"
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
  
  WithCursorComponent.displayName = `withCursor(${WrappedComponent.displayName || WrappedComponent.name})`;
  return WithCursorComponent;
};
