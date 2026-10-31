import React, { createContext, useContext, useState, useEffect } from 'react';

// Cursor context for global cursor state management
const CursorContext = createContext();

// Custom cursor types
export const CURSOR_TYPES = {
  DEFAULT: 'default',
  INTERACTIVE: 'interactive',
  LARGE: 'large',
  DISABLED: 'disabled'
};

// Cursor provider component
export const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState(CURSOR_TYPES.DEFAULT);
  const [isHovering, setIsHovering] = useState(false);

  // Apply cursor styles to document body
  useEffect(() => {
    const body = document.body;
    
    // Remove all cursor classes
    Object.values(CURSOR_TYPES).forEach(type => {
      body.classList.remove(`cursor-${type}`);
    });
    
    // Add current cursor class
    if (cursorType !== CURSOR_TYPES.DEFAULT) {
      body.classList.add(`cursor-${cursorType}`);
    }
    
    return () => {
      // Cleanup all cursor classes on unmount
      Object.values(CURSOR_TYPES).forEach(type => {
        body.classList.remove(`cursor-${type}`);
      });
    };
  }, [cursorType]);

  const value = {
    cursorType,
    setCursorType,
    isHovering,
    setIsHovering,
    // Helper methods
    setInteractive: () => setCursorType(CURSOR_TYPES.INTERACTIVE),
    setLarge: () => setCursorType(CURSOR_TYPES.LARGE),
    setDefault: () => setCursorType(CURSOR_TYPES.DEFAULT),
    disable: () => setCursorType(CURSOR_TYPES.DISABLED)
  };

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  );
};

// Custom hook to use cursor context
export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursorContext must be used within a CursorProvider');
  }
  return context;
};

// HOC for adding cursor interactions to components
export const withCursorInteraction = (Component, hoverCursorType = CURSOR_TYPES.INTERACTIVE) => {
  const WithCursorInteraction = React.forwardRef((props, ref) => {
    const { setCursorType, setDefault, setIsHovering } = useCursorContext();
    
    const handleMouseEnter = () => {
      setCursorType(hoverCursorType);
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      setDefault();
      setIsHovering(false);
    };
    
    return (
      <Component
        {...props}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    );
  });
  
  WithCursorInteraction.displayName = `withCursorInteraction(${Component.displayName || Component.name})`;
  return WithCursorInteraction;
};
