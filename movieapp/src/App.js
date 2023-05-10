import {useState,useEffect} from 'react';
import AddMovie from "./components/AddMovie";
import "./App.css";
import MovieList from './components/MovieList.js';
import Filtring from './components/Filtring.js';
import Description from './components/Description.js';
import {Routes,Route } from "react-router-dom";

const info = [
  { title:'Chernobyl',trailer:"https://www.youtube.com/embed/s9APLXM9Ei8", img:'https://upload.wikimedia.org/wikipedia/en/a/a7/Chernobyl_2019_Miniseries.jpg', description:"The events recount the circumstances of the explosion of the Chernobyl nuclear reactor in April 1986 in the Soviet Socialist Union, which became one of the worst human disasters in the twentieth century.", posterURL:"www.chernobyl.com", rating:9.4 },
  { title:'Cosmos',trailer:"https://www.youtube.com/embed/_erVOAbz420", img:'https://i.scdn.co/image/ab67616d0000b2739484dda8dbe4bd5418ecbbd5', description:"An exploration of our discovery of the laws of nature and coordinates in space and time.", posterURL:"www.cosmos.com", rating:9.3 },
  { title:'MR. ROBOT',trailer:"https://www.youtube.com/embed/xIBiJ_SzJTA", img:'https://m.media-amazon.com/images/M/MV5BM2QyNDIzOGMtNThhNS00NmUwLWI0ZjUtZjdkN2I1OTRjZWQ3XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_FMjpg_UX1000_.jpg', description:"The series tells the story of a young man who suffers from social anxiety disorder. Working as a computer programmer in the morning and a hacker in the evening, he is assigned to work by a mysterious man who calls himself 'Mr. Robot' to infiltrate large corporations they believe are corrupting society.", posterURL:"www.mrrobot.com", rating:8.5 },
  { title:'Planet Earth',trailer:"https://www.youtube.com/embed/7n_1JZgDPf4", img:'https://flxt.tmsimg.com/assets/p8431669_b_v8_aa.jpg', description:"Emmy Award-winning, 11 episodes, five years in the making, the most expensive nature documentary series ever commissioned by the BBC, and the first to be filmed in high definition.", posterURL:"www.planetearth.com", rating:9.4 },
  { title:'Prison Break',trailer:"https://www.youtube.com/embed/AL9zLctDJaU", img:'https://upload.wikimedia.org/wikipedia/en/3/39/Prison-break-the-final-break-dvd.jpg', description:"An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together, in addition to some other civilians in prison, they encounter a series of interesting and exciting problems and dilemmas, and they try to solve them in order to implement the plan, no matter what it costs them.", posterURL:"www.prisonbreak.com", rating:8.3 },
  { title:'Roman Empire',trailer:"https://www.youtube.com/embed/aOOKeYQs4w0", img:'https://m.media-amazon.com/images/M/MV5BY2UxYmY0NDktYTk2Mi00ZjI4LWJhYTAtYTEzMzYyNGU3ZTEzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjMyMTk1OQ@@._V1_.jpg', description:"Chronicles some of the most famous leaders of the Roman Civilization.", posterURL:"www.romanempire.com", rating:6.9 },
  { title:'The Expanse',trailer:"https://www.youtube.com/embed/caLji74IIp4", img:'https://m.media-amazon.com/images/M/MV5BZDVmMDljM2QtZDkzZC00ZDg2LWFiMGItZjNiNjliZjg2MGEzXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg', description:"In the 24th century, a disparate band of antiheroes unravel a vast conspiracy that threatens the Solar System's fragile state of cold war.", posterURL:"www.theexpanse.com", rating:8.5 },
  { title:'The Walking Dead',trailer:"https://www.youtube.com/embed/R1v0uFms68U", img:'https://m.media-amazon.com/images/M/MV5BNWIyNThjYWQtM2Y5Yi00ZjNhLTgwZmQtMDUwZTkxMDY5MDI0XkEyXkFqcGdeQXVyOTI3NzkwNzQ@._V1_.jpg', description:"Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.", posterURL:"www.thewalkingdead.com", rating:8.2 },
  { title:'Voltron',trailer:"https://www.youtube.com/embed/NXW1waqRCb0", img:'https://www.hollywoodreporter.com/wp-content/uploads/2022/03/Voltron-NEW-Rawson-Marshall-Thurber-Headshot-Inset-Everett-Publicity-H-2022.jpg', description:"Five teenagers become the last line of defense for the galaxy in an intergalactic battle against the evil alien force led by King Zarkon.", posterURL:"www.voltron.com", rating:8.1 },
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
      <Routes>
        {/* SHOW THIS TWO COMPONENTS IF WE ARE IN THE ROOT PATH */}
        <Route path="/"  element={ <> <Filtring filter={filter}/>  <MovieList list={filtredList} /> <AddMovie adding={adding} />   </> } />
        {/*  SHOW THIS COMPONENT IF WE ARE IN : /:id  */}
        <Route path="/:id" element={ <Description list={list} /> } />
      </Routes>
    </div>
      );
}

export default App;
