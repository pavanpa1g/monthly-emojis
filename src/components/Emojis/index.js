import './index.css'

const Emojis = ({emojisList, setSelectedEmoji, selectedEmoji}) => {
  const handleEmojiSelection = emojiName => {
    setSelectedEmoji(emojiName)
  }
  return (
    <div className="emoji-bg-container">
      <ul className="emoji-inner-container">
        {emojisList.map(item => (
          <li
            key={item.id}
            className="emoji-list-container"
            onClick={() => handleEmojiSelection(item.emojiName)}
          >
            <button type="button" className="button align-column">
              <p>{item.emojiName}</p>
              <img
                src={item.emojiUrl}
                alt={item.emojiName}
                className={`${
                  selectedEmoji === item.emojiName && 'selected-image'
                } emoji-icon`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Emojis
