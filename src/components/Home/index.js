import {useState} from 'react'

import './index.css'
import Dates from '../Dates'
import Emojis from '../Emojis'
import Days from '../Days'

const Home = ({emojisList, daysList, initialDatesList}) => {
  const [selectedEmoji, setSelectedEmoji] = useState(emojisList[0].emojiName)
  const [datesList, setDatesList] = useState(initialDatesList)

  const selectedImageUrl = emojisList.filter(
    item => item.emojiName === selectedEmoji,
  )
  console.log(datesList)
  return (
    <div className="bg-container">
      <h1 className="main-head">Monthly Emojis</h1>
      <div className="hm-inner-container">
        <div>
          <Dates
            initialDatesList={datesList}
            daysList={daysList}
            setDatesList={setDatesList}
            selectedImageUrl={selectedImageUrl[0].emojiUrl}
            selectedEmoji={selectedEmoji}
          />
        </div>
        <div>
          <Emojis
            emojisList={emojisList}
            setSelectedEmoji={setSelectedEmoji}
            selectedEmoji={selectedEmoji}
          />
          <Days
            emojisList={emojisList}
            daysList={daysList}
            datesList={datesList}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
