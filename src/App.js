import React, { Suspense, lazy } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loadding from './components/Loadding';
import 'antd/dist/antd.css';  //antd css


// import Home from './pages/Home';
// import History from './pages/History';
// import About from './pages/About';
const Home = lazy(() => import('./pages/Home'));
const History = lazy(() => import('./pages/History'));
const About = lazy(() => import('./pages/About'));
// 竟然还不能这么写
// const Loadding = lazy(()=> import('./components/Loadding'));

const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

function App() {
  return (
    <>
      <Header />
        <Switch>
         <main>
         <Suspense fallback={<Loadding />}>
            <Route path="/" exact><Home /></Route>
            <Route path="/history" component={History} />
            <Route path="/about" component={About}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
          </Suspense>
         </main>
        </Switch>
      <Footer />
    </>
  );
}

export default App;
