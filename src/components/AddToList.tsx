import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
  people: Props['people']
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    img: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.note || !input.img) {
      alert('Please fill out all fields')
      return
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: +input.age,
        note: input.note,
        url: input.img,
      },
    ])

    setInput({
      name: '',
      age: '',
      note: '',
      img: '',
    })
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        name="img"
        value={input.img}
        onChange={(e) => handleChange(e)}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        name="note"
        value={input.note}
        onChange={(e) => handleChange(e)}
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  )
}

export default AddToList
