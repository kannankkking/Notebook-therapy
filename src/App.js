import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Section2_1 from './Components/Section2_1'
import Section2_2 from './Components/Section2_2'
import Section2_3 from './Components/Section2_3'
import Section2_4 from './Components/Section2_4'
import Section2_6 from './Components/Section2_6'
import Section2_5 from './Components/Section2_5'

const App = () => {
  return (

    
  <BrowserRouter>
  <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/section2_1" element={<Section2_1/>}></Route>
<Route path="/section2_2" element={<Section2_2/>}/>
<Route path="/section2_3" element={<Section2_3/>}/>
<Route path="/section2_4" element={<Section2_4/>}/>
<Route path="/section2_5" element={<Section2_5/>}/>
<Route path="/section2_6" element={<Section2_6/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
