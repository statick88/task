// App.jsx
import { MyRoutes } from './routers/routes';
import { AuthContextProvider } from './context/AuthContext';


const App = () => {
  return (
    
    <AuthContextProvider>
      <MyRoutes/>
    </AuthContextProvider>

  );
};

export default App;
