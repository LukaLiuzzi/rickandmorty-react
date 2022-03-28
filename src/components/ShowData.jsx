import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Character from './Character'
import Spinner from './Spinner'

const ShowData = ({characterName}) => {
  
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    fetchApi(characterName)
  }, [characterName])

  const fetchApi = async (name) => {
    setLoading(true)
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)

      if (!res.ok) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Character not found',
        })
      } else {
        const data = await res.json()
        setCharacters(data.results)
      }

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

    }


  return (
    <>
    { loading ? <Spinner /> :
    <div className='row mt-5'>
      {
        characters.map((el) => (
          <Character key={el.id} character={el}/>
        ))
      }
    </div>
    }
    </>
  )
}

export default ShowData