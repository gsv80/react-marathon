// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Layout from "./components/Layout";
import Footer from './components/Footer';
import Bg1 from './assets/bg1.jpg'
import Bg3 from './assets/bg3.jpg'


const App=()=>{
  
  return (
    <>
      <Header 
        title= 'This is title' 
        descr= 'This is description'
       />
      <Layout 
        
        title='this is new title'
        desc='this is my desc'
        colorBG='green'
        urlBg={Bg1}
      />
      <Layout 
      colorBg='#e2e2e2'
      />
      <Layout 
        title='this is another title'
        desc='this is my desc'
        urlBg={Bg3}
      />
      <Footer />

      
    </>  
  )
}
export default App;
