import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Challenge from './lessons/01. React Basics/02. Props/Challenge.jsx'
import App from './App.jsx'
// import App from './01. React Basics/01. List of Data/App.jsx'
// import Challenge from '/lessons/01. React Basics/01. List of Data/Challenge.jsx'
// import Challenge from '/lessons/01. React Basics/02. Props/Challenge.jsx'


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        {/* <Challenge /> */}
    </StrictMode>
)