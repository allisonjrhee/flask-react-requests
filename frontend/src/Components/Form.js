import React,{ useState } from 'react';
import APIService from '../Components/APIService'


const Form = (props) => {
    const [noun1, setNoun1] = useState('')
    const [noun2, setNoun2] = useState('')

    const insertArticle = () =>{
      APIService.InsertArticle({noun1,noun2})
      .then((response) => props.insertedArticle(response))
      .catch(error => console.log('error',error))
    }

    const handleSubmit=(event)=>{ 
      event.preventDefault()
      insertArticle()
      setNoun1('')
      setNoun2('')
    }

  return (
    <div className="shadow p-4">

        <form onSubmit = {handleSubmit} >

          <label htmlFor="noun1" className="form-label">Noun1</label>
          <input 
          type="text"
          className="form-control" 
          placeholder ="Enter Noun 1"
          value={noun1}
          onChange={(e)=>setNoun1(e.target.value)}
          required
          />

          <label htmlFor="noun2" className="form-label">Noun2</label>
          <input 
          className="form-control" 
          placeholder ="Enter Noun 2" 
          value={noun2}
          onChange={(e)=>setNoun2(e.target.value)}
          required
          />

          <button 
          className="btn btn-primary mt-2"
          >
          Generate Joke</button>
          
        </form>
              

    </div>
  )}

export default Form;