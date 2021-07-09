import "bootstrap/dist/css/bootstrap.min.css";
import Img from "./resource/mathBook.jpg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import PageComponent from "./components/pagesComponent/PageComponent";

function App() {

  const BookStorage={

    FirstChapterPart1:[
      
      {
       title: "bjhbf",
       img:Img
    },
    {
      title: "bjhbf",
      img:Img
   },
  
  ]

  }


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <Home />
            <Footer />
          </Route>
          <Route path="/FirstChapter/part-1.1">
            <PageComponent Chapter={BookStorage.FirstChapterPart1} />
          </Route>
          <Route path="/FirstChapter/part-1.2">
            <PageComponent Chapter={BookStorage.FirstChapterPart1} />
          </Route>
          <Route path="/secondChapter">
            <PageComponent Chapter={BookStorage.FirstChapterPart1} />
          </Route>
          <Route path="/ThirdChapter/part-3.1">
            <PageComponent Chapter={BookStorage.FirstChapterPart1} />
          </Route>
          <Route path="/ThirdChapter/part-3.2">
            <PageComponent Chapter={BookStorage.FirstChapterPart1} />
          </Route>
          <Route path="/FourthChapter">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/FiveChapter/part-5.1">
            <PageComponent Chapter={BookStorage.FirstChapterPart1} />
          </Route>
          <Route path="/FiveChapter/part-5.2">
            <PageComponent  Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/FiveChapter/part-5.3">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/FiveChapter/part-5.4">
            <PageComponent Chapter={BookStorage.FirstChapterPart1} />
          </Route>
          <Route path="/FiveChapter/part-5.5">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/FiveChapter/part-5.6">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/FiveChapter/part-5.7">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/SixChapter/part-6.1">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/SixChapter/part-6.2">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/sevenChapter">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/EightChapter/part-8.1">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/EightChapter/part-8.2">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/EightChapter/part-8.3">
            <PageComponent Chapter={BookStorage.FirstChapterPart1} />
          </Route>
          <Route path="/NineChapter/part-9.1">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/TenChapter/part-10.1">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/TenChapter/part-10.2">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/ElevenChapter/part-11.1">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/ElevenChapter/part-11.2">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/ElevenChapter/part-11.3">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/ElevenChapter/part-11.4">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/Twelve">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/Thirteen">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
          <Route path="/Fourteen">
            <PageComponent Chapter={BookStorage.FirstChapterPart1}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
