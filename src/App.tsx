import React, { FC, lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './theme/theme.scss';
import './App.scss';
import Preloader from './commonFiles/preloader/preloader';
import { RootState } from './redux/redux-store';
import { InitializedSuccess } from './redux/app-reducer';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Ads } from './components/ads/ads';
import { LoginContainer } from './components/login/login-container';
import News from './components/news/news';
import Music from './components/music/music';
import { Photos } from './components/photos/photos';
import { Footer } from './components/footer/footer';
import { Users } from './components/users/users';

const Dialogs = lazy(() =>
  import('./components/dialogs/dialogs')
    // eslint-disable-next-line no-shadow
    .then(({ Dialogs }) => ({ default: Dialogs })),
);
const Profile = lazy(() =>
  import('./components/profile/profile')
    // eslint-disable-next-line no-shadow
    .then(({ Profile }) => ({ default: Profile })),
);

export const App: FC = () => {
  const [theme, setTheme] = useState('light');

  const initialized = useSelector((state: RootState) => state.app.initialized);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(InitializedSuccess());
  }, [dispatch]);

  if (!initialized) {
    // eslint-disable-next-line react/jsx-filename-extension
    return <Preloader />;
  }

  return (
    <div className={`main ${theme}`}>
      <Header />
      <Navbar />
      <Ads />
      <div className="content">
        <div className="mode">
          <button onClick={() => setTheme('dark')}>mode</button>
          <button onClick={() => setTheme('light')}>mode</button>
        </div>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path="/profile/:userId?" render={() => <Profile />} />
            <Route path="/dialogs" render={() => <Dialogs />} />
          </Switch>
        </Suspense>
        <Route path="/users" render={() => <Users />} />
        <Route path="/login" render={() => <LoginContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/photos" render={() => <Photos />} />
      </div>
      <Footer />
    </div>
  );
};
