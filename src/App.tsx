import MainDisplay from './components/MainDisplay/MainDisplay'

function App() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-[url(./background/BG2.jpg)] bg-fixed bg-cover bg-center bg-clip-border brightness-60"
      />
      <div className="relative">
        <MainDisplay />
      </div>
    </div>
  )
}

export default App