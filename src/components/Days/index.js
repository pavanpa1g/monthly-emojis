import {useState, useEffect} from 'react'

import './index.css'

const Days = ({emojisList, daysList, datesList}) => {
  const [count, setCount] = useState(0)
  const [selectedDay, setSelectedDay] = useState(daysList[0].day)
  const [selectedEmoji, setSelectedEmoji] = useState(emojisList[0].emojiName)

  const handleDaySelection = e => {
    setSelectedDay(e.target.value)
  }

  const handleEmojiSelection = e => {
    setSelectedEmoji(e.target.value)
  }

  const check = (date, day) => {
    switch (day) {
      case 'Sun':
        if ([1, 8, 15, 22, 29].includes(date)) {
          return true
        }
        break
      case 'Mon':
        if ([2, 9, 16, 23, 30].includes(date)) {
          return true
        }
        break
      case 'Tue':
        if ([3, 10, 17, 24, 31].includes(date)) {
          return true
        }
        break
      case 'Wed':
        if ([4, 11, 18, 25].includes(date)) {
          return true
        }
        break
      case 'Thu':
        if ([5, 12, 19, 26].includes(date)) {
          return true
        }
        break
      case 'Fri':
        if ([6, 13, 20, 27].includes(date)) {
          return true
        }
        break
      case 'Sat':
        if ([7, 14, 21, 28].includes(date)) {
          return true
        }
        break

      default:
        return false
    }

    return false
  }

  const counterFunction = () => {
    let lcount = 0
    datesList.forEach(item => {
      const k = check(parseInt(item.date), selectedDay)
      if (k && item.emojiName === selectedEmoji) {
        lcount += 1
      }
    })
    setCount(lcount)
  }

  useEffect(() => {
    counterFunction()
  }, [datesList, selectedDay, selectedEmoji])

  return (
    <div className="days-bg-container">
      <div className="days-inner-container">
        <div>
          <select value={selectedEmoji} onChange={handleEmojiSelection}>
            <option value={emojisList[0].emojiName}>
              {emojisList[0].emojiName}
            </option>
            {emojisList.slice(1, emojisList.length).map(item => (
              <option key={item.id} value={item.emojiName}>
                {item.emojiName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select value={selectedDay} onChange={handleDaySelection}>
            <option value={daysList[0].day}>{daysList[0].day}</option>
            {daysList.slice(1, daysList.length).map(item => (
              <option value={item.day} key={item.id}>
                {item.day}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h1>{count < 10 ? `0${count}` : count}</h1>
      <ul>
        <li>{}</li>
      </ul>
    </div>
  )
}

export default Days
