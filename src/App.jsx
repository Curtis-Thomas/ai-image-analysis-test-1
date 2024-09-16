
import './App.css'
import ImageAnalysis from './core/ImageAnalysis.jsx'

function App() {
const imgList = [

  'https://upload.wikimedia.org/wikipedia/en/2/29/Sir_Laurence_George_Gale.jpg',
  'https://upload.wikimedia.org/wikipedia/en/0/01/Prema_Yuddham.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/67/SeitzFaunaAfricanaXIIITaf28.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/e/ea/Site_of_North_Walsall_station_shortly_after_it_was_filled_in..jpg',
]

const randomImgList =[
  'https://upload.wikimedia.org/wikipedia/commons/6/62/Santiago_Pazo_de_Fonseca_5.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/55/Ballerina_Liudmila_Titova.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/0/06/Shining_Tree_ON.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/2/25/Steven_Hoffenberg_1962.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/15/90th_Annual_Tony_the_Tiger_Sun_Bowl_game_%288189158%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/86/A7261001h_%28cropped%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/8/89/Jetour_X95_003.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e0/Polarstern_rothera_hg.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/0/0e/JohannesTropfkePortrait.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/23/Pythian_Castle_Arcata_CA.jpg',
  'https://upload.wikimedia.org/wikipedia/en/b/b8/Alien_Hunag_Love_Hero-cover.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/56/Sheila_Jordan.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/60/Chapel_at_New_Southgate_Cemetery_04.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/7/79/Deinbollia_oblongifolia_Pipeline.JPG',
]



 


  return (
    <>
   <ImageAnalysis imgList={imgList} randomImgList={randomImgList}/>
    </>
  )
}

export default App
