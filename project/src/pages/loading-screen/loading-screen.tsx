import { CSSProperties } from 'react';
import { MoonLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  margin: '25% auto',
  borderWidth: '4px',
};

function LoadingScreen() {

  return (
    <MoonLoader
      color={'#4481c3'}
      cssOverride={override}
      size={60}
    />
  );
}

export default LoadingScreen;
