import MainScreen from '../../pages/main-screen/main-screen';

const Setting = {
  CountPlaces: 320,
} as const;

function App(): JSX.Element {
  return (
    <MainScreen
      countPlaces = {Setting.CountPlaces}
    />
  );
}

export default App;
