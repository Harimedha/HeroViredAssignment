import './App.css';
import Trekdeatils from './components/TrekDetails';
import Heading from './components/Heading';
import LoginForm from './components/LoginForm';
import Mediaicons from './components/Mediaicons';

function App() {

  const treks=[
    {
      title: "1.Chaddar Lake Trek",
      imgsrc: "images/chadar-lake-trek.jpeg",
      desc:"Passing through the valley over the frozen Zanskar River is the sole link between the Zanskar village and the outside world. Thin slippery ice, a skid, unforseen break, fall in the ice-cold water, and adios to the world!",
      elevation:3390
    },
    {
      title: "2.Auden's Col Trek",
      imgsrc: "images/AudensCol.jpg",
      desc:"Joining the Khatling glacier and the Jogin I glacier is the Auden's Col pass. The trail to this gigantic pass is great to experience Himalayan beauty accompanied by tough terrain only for experienced trekkers with long-driving mettle.",
      elevation:5284
   
    },
    {
      title: "3.Lamkhaga Pass",
      imgsrc: "images/lamkha-pass-trek.jpg",
      desc:"With a special permission from the Indian Government this trek can be attempted at one's own risk.  ",
      elevation: 5940
   
    },
    {
      title: "4. Kinner Kailash Circuit Hike",
      imgsrc: "images/kinner-kailash-trek.jpg",
      desc:"Breathtaking beauty of the Himalayas, dead silence will accompany you at every step, however there will be no one to save you if you fall or freeze. All by myself......",
      elevation: 5242
     
    },   
    {
      title: "5.Green Lake Trail on Everest",
      imgsrc: "images/green-lake-trek-in-sikkim.jpg",
      desc: "With heaps of challenges this trek remains the most unexplored and overwhelming and alarming. If your lucky you might get a chance to meet snow-beasts and Yetis. ",
      elevation:5500

    } 

  ]
  return (
    <div className="App">
      <Heading></Heading>      
     {treks.map((item) => <Trekdeatils title={item.title} imgsrc={item.imgsrc} desc={item.desc} elevation={item.elevation}></Trekdeatils>)}
    <br></br>
    <br></br>    
    <Mediaicons></Mediaicons>
    <LoginForm></LoginForm>
    </div>
  );
}

export default App;