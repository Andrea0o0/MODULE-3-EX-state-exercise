import React, {useState} from 'react'

const Switch = () => {

    const [counter, setCounter] = useState(0)
    const [counter_light, setCounter_light] = useState(0)
    const [counter_dark, setCounter_dark] = useState(0)
    const [theme, setTheme] = useState(true)
    const [theme_light, setTheme_light] = useState('no_display')
    const [theme_dark, setTheme_dark] = useState('no_display')
    
    const switchtheme_light = () => {
      setTheme('light')
      setTheme_dark('no_display')
      setTheme_light('')
      setCounter(counter + 1)
      setCounter_light(counter_light + 1)
    }

    const switchtheme_dark = () => {
      setTheme('dark')
      setCounter(counter + 1)
      setCounter_dark(counter_dark + 1)
      setTheme_light('no_display')
      setTheme_dark('')
    }

    
  

  return (
    <div className={`switch ${theme}`}>
      <h2>Theme picker</h2>
      <h4>Total Times changed: {counter} </h4>
      <h4 className={theme_light}>Light Times changed: {counter_light} </h4>
      <h4 className={theme_dark}>Dark Times changed: {counter_dark} </h4>
      <button onClick={switchtheme_light}>Light theme</button>
      <button onClick={switchtheme_dark}>Dark theme</button>
      {console.log({theme})}
    </div>
  )
}

export default Switch;
