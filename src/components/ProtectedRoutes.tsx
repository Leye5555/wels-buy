import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes =
  (
    Component: React.FunctionComponent,
    hasAccess: boolean,
    redirectPath: string
  ) =>
  (props: any) => {
    return (
      <>
        {hasAccess ? (
          <Component {...props} />
        ) : (
          <Navigate to={redirectPath} replace />
        )}
      </>
    );
  };

export default ProtectedRoutes;
