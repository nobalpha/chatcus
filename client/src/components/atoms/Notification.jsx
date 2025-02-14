import React from 'react';

const VARIANTS = {
  success: 'green',
  error: 'red',
  warning: 'yellow',
  default: 'blue',
};
export const NotificationBar = ({ variant, header, message, onClose, onBodyClick, hideCloseOption }) => {
  const color = VARIANTS[variant];
  return (
    <div
      className={`bg-${color}-100 border border-${color}-400 text-${color}-700 px-4 py-3 rounded relative overflow-hidden`}
      role="alert"
    >
      <strong className="font-bold mr-1.5">{header}</strong>
      <span
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
          onBodyClick(e);
        }}
        onKeyUp={(e) => {
          e.stopPropagation();
          e.key === 'Enter' && onBodyClick(e);
        }}
        className={`block sm:inline ${!hideCloseOption ? 'mr-10' : ''}`}
      >
        {message}
      </span>
      {!hideCloseOption && (
        <span
          tabIndex={0}
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose(e);
          }}
          onKeyUp={(e) => {
            e.stopPropagation();
            e.key === 'Enter' && onClose(e);
          }}
          className="absolute top-0 bottom-0 right-0 px-4 py-3 overflow-hidden"
        >
          <svg
            className={`fill-current h-6 w-6 text-${color}-500`}
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      )}
    </div>
  );
};
