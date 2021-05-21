import React, { FC, lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.scss';
import Preloader from './commonFiles/preloader/Preloader';
import { RootState } from './redux/redux-store';
import { InitializedSuccess } from './redux/app-reducer';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Ads } from './components/Ads/Ads';
import { LoginContainer } from './components/Login/LoginContainer';
import News from './components/News/News';
import MyMusic from './components/MyMusic/MyMusic';
import { Photos } from './components/Photos/Photos';
import { Footer } from './components/Footer/Footer';
import { Users } from './components/Users/Users';

const DialogsContainer = lazy(() =>
  import('./components/Dialogs/DialogsContainer')
    // eslint-disable-next-line no-shadow
    .then(({ DialogsContainer }) => ({ default: DialogsContainer })),
);
const Profile = lazy(() =>
  import('./components/Profile/Profile')
    // eslint-disable-next-line no-shadow
    .then(({ Profile }) => ({ default: Profile })),
);

export const App: FC = () => {
  const initialized = useSelector(
    (state: RootState) => state.app.initialized,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(InitializedSuccess());
  }, [dispatch]);

  if (!initialized) {
    // eslint-disable-next-line react/jsx-filename-extension
    return <Preloader />;
  }

  return (
    <main>
      <Header />
      <Navbar />
      <Ads />
      <div className={styles.content}>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route
              exact
              path="/profile/:userId?"
              render={() => <Profile />}
            />
            <Route
              path="/dialogs"
              render={() => <DialogsContainer />}
            />
          </Switch>
        </Suspense>
        <Route path="/users" render={() => <Users />} />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <MyMusic />} />
        <Route path="/photos" render={() => <Photos />} />
      </div>
      <Footer />
    </main>
  );
};
