
import React from 'react'
import Footer from './Components/FooterDiv/Footer'
import Value from './Components/ValueDiv/Value'
import Jobs from './Components/JobDiv/Jobs'
import Search from './Components/SearchDiv/Search'
import NavBar from './Components/NavBar/NavBar'




const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
    <NavBar/>
    <Search/>
    <Jobs/>
    <Value/>
    <Footer/>

    </div>
    
  )
}

export default App
