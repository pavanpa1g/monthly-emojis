import './index.css'

const Dates = ({
  initialDatesList,
  daysList,
  setDatesList,
  selectedImageUrl,
  selectedEmoji,
}) => {
  const handleDateEmojiSelection = id => {
    console.log('selectedImageUrl', selectedImageUrl)
    setDatesList(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              emojiUrl:
                item.emojiUrl === selectedImageUrl ? '' : selectedImageUrl,
              emojiName: item.emojiName === selectedEmoji ? '' : selectedEmoji,
            }
          : item,
      ),
    )
  }
  return (
    <div className="Dates-bg-container">
      <h1>January</h1>

      <ul className="ul-items-container">
        {daysList.map(item => (
          <li key={item.id} className="li-item-dates  days-li">
            <p>{item.day}</p>
          </li>
        ))}
      </ul>

      <ul className="ul-items-container">
        {initialDatesList.map(item => (
          <li
            key={item.id}
            className="li-item-dates"
            onClick={() => handleDateEmojiSelection(item.id)}
          >
            <button type="button" className="button">
              <p className="para-date">{item.date}</p>
              {item.emojiUrl && (
                <img
                  src={item.emojiUrl}
                  alt={item.emojiName}
                  className="li-emoji"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dates
