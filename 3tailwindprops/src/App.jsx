import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="bg-green-700 text-4xl text-green-50 p-7">Tailwind test</h1>

      <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md " alt="" src="https://cdn.pixabay.com/photo/2021/11/03/21/44/nature-6766923_1280.jpg" />
  </div>
  <div class="flex">
    <span class="text-2xl font-medium">Class Warfare </span>
    <span class="font-medium text-sky-500">The Anti-Patterns </span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>












    </>
  )
}

export default App
