import React, { useEffect, useState } from 'react';
import { getProject1, getProject2, getProject3, getProject4 } from '../services/list';

//import stock
// import coffee from "../img/coffeeFinder.jpg";
// import argenda from "../img/Argenda.jpg";
// import stripe from "../img/stripeapi.png";
// import rank from "../img/RANK.png"
// import expense from "../img/ExpenseTracker.png"

function Portfolio() {
  const [title, setTitle] = useState([]);
  const [category, setCategory] = useState([]);
  const [github, setGithubs] = useState([]);

  useEffect(() => {
    let mounted = true;
    getProject1()
      .then(title => {
        if(mounted) {
          setTitle(title)
          setCategory(category)
          setGithubs(github)
        }
      })
      .then(category => {
        if(mounted) {
         setCategory(category)
        }
      })
      .then(github => {
        if(mounted) {
          setGithubs(github)
        }
      })
      
    return () => mounted = false;
  })

  useEffect(() => {
    let mounted = true;
    getProject2()
      .then(title => {
        if(mounted) {
          setTitle(title)
        }
      })
      .then(category => {
        if(mounted) {
          setCategory(category)
        }
      })
      .then(github => {
        if(mounted) {
          setGithubs(github)
        }
      })
    return () => mounted = false;
  })

  useEffect(() => {
    let mounted = true;
    getProject3()
      .then(title => {
        if(mounted) {
          setTitle(title)
        }
      })
      .then(category => {
        if(mounted) {
          setCategory(category)
        }
      })
      .then(github => {
        if(mounted) {
          setGithubs(github)
        }
      })
    return () => mounted = false;
  })

  // useEffect(() => {
  //   let mounted = true;
  //   getProject4()
  //     .then(title => {
  //       if(mounted) {
  //         setTitle(title)
  //       }
  //     })
  //     .then(category => {
  //       if(mounted) {
  //         setCategory(category)
  //       }
  //     })
  //     .then(github => {
  //       if(mounted) {
  //         setGithubs(github)
  //       }
  //     })
  //   return () => mounted = false;
  // }, [])


    return (
    
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row">
            
        
            <ul>
          
             {title.map((i) => <li key={i}>{i.title}<br></br>{i.category}<br></br> {i.github}</li>)}

             {title.map((i) => <li key={i}>{i.title}<br></br>{i.category}<br></br> {i.github}</li>)}
             
           
            </ul>
            
          
             
            

          </div>{/*row*/}
        </div>{/*container*/}
      </section>
      
    )
  
}

export default Portfolio
