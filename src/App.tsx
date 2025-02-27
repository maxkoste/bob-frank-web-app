import MainDisplay from './components/MainDisplay/MainDisplay'

function App() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-[url(/background/Cactus2.JPG)] bg-fixed bg-cover bg-center bg-clip-border brightness-60"
      />
      <div className="relative">
        <MainDisplay />
      </div>
    </div>
  )
}

export default App