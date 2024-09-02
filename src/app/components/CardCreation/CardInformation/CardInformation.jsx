import React, { useEffect } from 'react';
import './CardInformation.css';

function CardInformation({ cardName, setCardName, cardType, setCardType, description, setDescription }) {
  const [localCardName, setLocalCardName] = React.useState(cardName);
  const [localCardType, setLocalCardType] = React.useState(cardType);
  
  useEffect(() => {
    localStorage.setItem('cardName', localCardName);
    setCardName(localCardName);
  }, [localCardName, setCardName]);

  useEffect(() => {
    localStorage.setItem('cardType', localCardType);
    setCardType(localCardType);
  }, [localCardType, setCardType]);

  useEffect(() => {
    localStorage.setItem('description', description);
  }, [description]);

  return (
    <div>
      <h2 className='CardInformation__title'>Add Brand Information</h2>
      <div className='CardInformation__form'>
        <form>
          <div className='CardInformation__input__inputDiv'>
            <label>Card Name</label>
            <input
              className='CardInformation__input'
              type="text"
              value={localCardName}
              onChange={(e) => setLocalCardName(e.target.value)}
              maxLength="100"
              placeholder="Enter card name"
            />
          </div>
          <div className='CardInformation__input__inputDiv'>
            <label>Card Type</label>
            <select value={localCardType} onChange={(e) => setLocalCardType(e.target.value)} className='CardInformation__input'>
              <option value="">Choose</option>
              <option value="Gift Card">GIFT CARD</option>
              <option value="Purchase History">PURCHASE HISTORY CARD</option>
              <option value="Browsing Behaviour">BROWSING BEHAVIOUR CARD</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className='CardInformation__input__inputDiv'>
            <label>Description</label>
            <textarea
              className='CardInformation__input'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength="100"
              placeholder="This card to..."
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardInformation;
