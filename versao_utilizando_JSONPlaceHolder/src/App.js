import React from 'react';
import { Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
//paginas
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';
//components
import { PostList, PostEdit, PostCreate } from './components/posts'
import { UserList } from './components/users';
//icons
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (

  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={Auth}>
    <Resource name="posts" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate}/>
    <Resource name="users" icon={UserIcon} list={UserList}/>
  </Admin>
  
  );


export default App;
