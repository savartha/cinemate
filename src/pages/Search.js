
import { useSearchParams } from 'react-router-dom'
import { Card } from '../components'
import { useFetch } from '../hooks/useFetch'
import { useTitle } from '../hooks/useTitle'
export const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get('q')
    console.log(queryTerm)
    const {data: movies} = useFetch(apiPath,queryTerm)
    useTitle(`Search results for ${queryTerm}`)
return (
  <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>
            {movies.length ===0 ? `No results found for '${queryTerm}'` : `Results for for '${queryTerm}'`} 
        </p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
          <div className='flex justify-start flex-wrap other:justify-evenly'>
              {movies && movies.map((movie) => (
                  <Card key={movie.id} movie={movie}/>
              ))}               
          </div>
      </section>
  </main>
)
}
