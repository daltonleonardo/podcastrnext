
/*
SPA
    solução voltada para carregamento no browser do cliente
   
    import { useEffect } from "react"
    export default function Home() {
      useEffect(() => {
        fetch('http://localhost:3333/episodes')
        .then(response => response.json())
        .then(data => console.log(data))

      }, [])
      return (
      <h1>Index</h1>
      )
    }

SSR
    O NextJS executa a função getServerSideProps no lado do servidor
    traz as informações prontas, veja que o console.log está sendo 
    executado no terminal do vsCode e não no console do browser 
    
    export default function Home(props) { 
      console.log(props.episodes)
      return (
        <div>
          <h1>Index</h1>
          <p>{JSON.stringify(props.episodes)}</p>
        </div>
      )
    }

    export async function getServerSideProps() {
        const response = await fetch('http://localhost:3333/episodes')
        const data = await response.json()
      
        return {
          props: {
            episodes: data,
          }
        }
    }
SSG
    Executa a função getStaticProps e uma vez que o primeiro usuário  acessa a página,
    é feito um cach e os demais usuário acesssam a página pronta.
    o parametro 'revalidate', determina quando a página deve ser atualizada,
    neste exemplo daqui 8 horas.

    export default function Home(props) { 
      console.log(props.episodes)
      return (
        <div>
          <h1>Index</h1>
          <p>{JSON.stringify(props.episodes)}</p>
        </div>
      )
    }

    export async function getStaticProps() {
        const response = await fetch('http://localhost:3333/episodes')
        const data = await response.json()
      
        return {
          props: {
            episodes: data,
          },
          revalidate: 60 * 60 * 8,
        }
    }

*/
export default function Home(props) { 
  // console.log(props.episodes)
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json()
   
    return {
      props: {
        episodes: data,
      },
      revalidate: 60 * 60 * 8,
    }
}