import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import EditProfile from './pages/User/EditProfile/EditProfile';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import ProfilePicture from './pages/ProfilePicture/ProfilePicture';
import Payment from './pages/Payment/Payment';
import ImageGallery from './pages/ImageGallery/ImageGallery';
import Settings from './pages/Settings/Settings';
import Security from './pages/Security/Security';
import Messages from './pages/Messages/Messages';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/user/edit-profile" component={Dashboard} />
                <Route exact path="/user/profile-photo" component={ProfilePicture} />
                <Route exact path="/user/payment" component={Payment} />
                <Route exact path="/user/image-gallery" component={ImageGallery} />
                <Route exact path="/user/settings" component={Settings} />
                <Route exact path="/user/security" component={Security} />
                <Route exact path="/user/messages" component={Messages} />
                <Route path="*">
                  <Redirect to="/login" />
                </Route>
              </Switch>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
