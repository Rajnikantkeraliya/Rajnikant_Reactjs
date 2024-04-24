import React, { Suspense, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Errorboundry from './Component/ErrorBoundry/Errorboundry'
const Lasycomponent = React.lazy(() => import('./Component/Lasycomponent/Lasycomponent'))

function App() {

  return (

    <Errorboundry>
      <Suspense fallback={<h1>Plz Wait data is Loading.....</h1>}>
        <Lasycomponent />

      </Suspense>
    </Errorboundry>

  )
}

export default App
