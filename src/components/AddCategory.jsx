import {useState} from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('One Punch')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    if(inputValue.trim().length < 1) return
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a category"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}