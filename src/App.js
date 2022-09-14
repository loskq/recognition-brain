import React, {useState} from 'react';
// import Clarifai from 'clarifai'
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import ImageReco from './components/ImageReco/ImageReco';
import Rank from './components/Rank/Rank';
import ParticleMagic from './components/ParticleMagic/ParticleMagic';
import FaceReco from './components/FaceReco/FaceReco';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';


function App() {
 
  const [input, setInput] = useState(); 
  const [imageUrl, setImageUrl] = useState();
  const [route, setRoute] = useState('Signin');
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  })

  // useEffect(()=>{
  //   fetch('http://localhost:5000')
  //     .then(response=> response.json())
  //     .then(console.log)
  //     // {shortFor - (data=> console.log(data))}   
  // },)

  function loadUser(data){
   setUser({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
   }})
  }

  function onInputChange(event){
    setInput(event.target.value);
  }
  
  function onSubmit(){
    setImageUrl(input);

    const USER_ID = 'b71k8u24fm8v';
    const PAT = '7e63b0282d904bdfb83037e9a7cd6eda';
    const APP_ID = '08b12024149d4a2eb929034275a2929e';
    const MODEL_ID = 'general-image-recognition';
    const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    
    const IMAGE_URL = input;

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": IMAGE_URL
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(
          function (result) {
            console.log (result.outputs[0].data.concepts)})
        .catch(error => console.log('error', error));    
   }     
  

  function onRouteChange(route){
    setRoute(route);

   if (route === 'home') { 
    setSignedIn(true)
  } else if (route === 'Signout') {
        setSignedIn(false)
      } 
  }

 //  function isSignedIn(route){
 //    the conditional for signedIn - I couldnt make it work here?
 //    why?    
 // }

  return (
    <div className="App">
      <ParticleMagic />
      <Nav onRouteChange={onRouteChange}
        signIn={signedIn} />
      { route === 'home' ? 
      <div>   {/*b/c returning multi.*/}
        <Logo />
        <Rank name={user.name} entries={user.entries} />
        <ImageReco 
        onSubmit={onSubmit}
        onInputChange={onInputChange} />
        <FaceReco imageUrl={imageUrl} />
      </div>
      :
       (route === 'Signin' 
        ? <Signin loadUser={loadUser} onRouteChange={onRouteChange}/>
        : <Register loadUser={loadUser} onRouteChange={onRouteChange}/>
        )  
    }
      
    </div>
  );
}


export default App;