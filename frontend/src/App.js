import ImageUploader from './components/ImageUploader';
import axios from 'axios'
import './App.css';

function App() {


  const uploadHandler = (e) =>{
    const form = e.target;
    const formData = form.files
    
    axios.post('http://192.168.0.57:5000/api/images', formData)
    .then((res)=>{
      console.log(formData);
      console.log(res);
    }).catch((err) =>{
      console.log(formData);
      console.log(err)
    })
  }

  return (
    <div className="App">
     <ImageUploader uploadHandler={uploadHandler}/>
    </div>
  );
}

export default App;
