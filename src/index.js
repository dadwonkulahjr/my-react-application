import ReactDOM from 'react-dom/client';
import "./css/style.css";
import Header from './header';
import MainBody from './mainbody';
import Student from './student';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className="container">
  <Header/>
  <MainBody/>
  <div className="row">Students Enrolled</div>
  <Student name="Mike Simson" experience={2}/>
  <Student name="Rose Williams" experience={7}/>
  <Student name="James Walker" experience={10}/>
  <Footer/> 
</div>
);



