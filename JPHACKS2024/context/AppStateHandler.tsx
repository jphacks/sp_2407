import React, { useEffect, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { AppState, AppStateStatus } from 'react-native';

type AppStateHandlerProps = {
  children: ReactNode;
};

const AppStateHandler: React.FC<AppStateHandlerProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      dispatch({ type: 'SET_APP_STATE', payload: nextAppState });
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => {
      subscription.remove();
    };
  }, [dispatch]);

  return <>{children}</>;
};

export default AppStateHandler;
