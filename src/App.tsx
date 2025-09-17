import { Carousel } from './components/Carousel'

function App() {
  const getRandomHeight = () => Math.floor(Math.random() * (800 - 480 + 1)) + 480

  const featuredItems = [
    { id: '1', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '2', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '3', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '4', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '5', title: '', content: '', color: '', height: getRandomHeight() }
  ]

  const trendingItems = [
    { id: '6', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '7', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '8', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '9', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '10', title: '', content: '', color: '', height: getRandomHeight() }
  ]

  const recentItems = [
    { id: '11', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '12', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '13', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '14', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '15', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '16', title: '', content: '', color: '', height: getRandomHeight() }
  ]

  const specialItems = [
    { id: '17', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '18', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '19', title: '', content: '', color: '', height: getRandomHeight() },
    { id: '20', title: '', content: '', color: '', height: getRandomHeight() }
  ]

  return (
    <div className="app">
      <main className="app-main">
        <Carousel items={featuredItems} baseColor="rgba(0,0,0,0.05)" />
        <Carousel items={trendingItems} baseColor="rgba(0,0,0,0.2)" />
        <Carousel items={recentItems} baseColor="rgba(0,0,0,0.35)" />
        <Carousel items={specialItems} baseColor="rgba(0,0,0,0.5)" />
      </main>
    </div>
  )
}

export default App
