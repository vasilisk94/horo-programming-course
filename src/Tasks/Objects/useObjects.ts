import { useState } from "react"


////

const getDayNameByNumber = (dayNumber: number): string => {
  return 'ooops'
} 

/////

export const useObjects = () => {
  const [dayName, setDayName] = useState('')

  const updateDay = (dayNumber: number) => {
    setDayName(getDayNameByNumber(dayNumber))
  }

  return {
    dayName,
    updateDay
  }
}