import { useState, useEffect } from 'react'
import { SearchResults } from './components/searchResults'
import { RandomQuote } from './components/randomQuote'
import { Quote } from './components/Quote'
import './index.css'

export const App = () => {
  const[searchText, setSearchText] = useState("");
  const[motdVisible, setMotdVisible] = useState(true);
  const[quote, setQuote] = useState<Quote>();
  const[isEnterPressed, setIsEnterPressed] = useState(false);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [resultCount, setResultCount] = useState(0);

  useEffect( () => {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(json => setQuote(json))
}, [])

  useEffect( () => {
    if(isEnterPressed){
      fetch(`https://usu-quotes-mimic.vercel.app/api/search?query=${searchText}`)
        .then(res => res.json())
        .then(json => {
            setQuotes(json.results)
            setResultCount(json.count)
        })
      setIsEnterPressed(false);
    }
  })

  function Content(){
    if (motdVisible){
      return (
        <div>
          <RandomQuote author={quote?.author!} content={quote?.content!}/>
        </div>
      )
    }
    else{
      return (
        <div>
            <SearchResults quotes={quotes!} count={resultCount}/>
        </div>)
    }
  }

  return (
    <div className="App">
      <div className='blue stuff-box'>
        <h1>Search By Author</h1>
        <div className='padded'>
          <input 
          className="search" 
          placeholder="Author Name" 
          onChange={e => setSearchText(e.target.value)} 
          onKeyDown={e => {
            if(e.key === "Enter"){
              setMotdVisible(false)
              setIsEnterPressed(true)
            }
          }}></input>
        </div>
      </div>
      <Content/>
    </div>
  )
}


