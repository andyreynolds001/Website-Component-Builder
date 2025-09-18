import { Carousel } from './components/Carousel'
import AA_Hero_vertical from './assets/AA Hero-vertical.png'
import Desktop_feature_grid_1_1_features from './assets/Desktop-feature-grid_1-1-features.png'
import Desktop_feature_grid_1_3_features from './assets/Desktop-feature-grid_1-3-features.png'
import Desktop_feature_grid_1 from './assets/Desktop-feature-grid_1.png'
import Team_Members from './assets/Team Members.png'
import Desktop_CTA_card_3 from './assets/Desktop-CTA-card_3.png'
import Desktop_CTA_image_bg_1 from './assets/Desktop-CTA-image-bg_1.png'
import Desktop_CTA_image_bg_2 from './assets/Desktop-CTA-image-bg_2.png'
import Desktop_gallery_grid_1 from './assets/Desktop-gallery-grid_1.png'
import Desktop_team_member_1 from './assets/Desktop-team-member_1.png'
import Desktop_testimonials_1 from './assets/Desktop-testimonials_1.png'

function App() {
  const getRandomHeight = () => Math.floor(Math.random() * (800 - 480 + 1)) + 480

  const imageUrls = [
    AA_Hero_vertical,
    Desktop_feature_grid_1_1_features,
    Desktop_feature_grid_1_3_features,
    Desktop_feature_grid_1,
    Team_Members,
    Desktop_CTA_card_3,
    Desktop_CTA_image_bg_1,
    Desktop_CTA_image_bg_2,
    Desktop_gallery_grid_1,
    Desktop_team_member_1,
    Desktop_testimonials_1
  ]

  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length)
    return imageUrls[randomIndex]
  }

  const featuredItems = [
    { id: '1', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '2', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '3', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '4', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '5', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() }
  ]

  const trendingItems = [
    { id: '6', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '7', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '8', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '9', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '10', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() }
  ]

  const recentItems = [
    { id: '11', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '12', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '13', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '14', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '15', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '16', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() }
  ]

  const specialItems = [
    { id: '17', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '18', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '19', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() },
    { id: '20', title: '', content: '', color: '', height: getRandomHeight(), imageUrl: getRandomImageUrl() }
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
