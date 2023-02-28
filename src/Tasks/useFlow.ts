import { useState } from "react"


////

const getDayNameByNumber = (dayNumber: number): string => {
  switch (dayNumber) {
    case 1:
      return 'monday'
    case 2:
      return 'tuesday'
    case 3:
      return 'wednesday'
    case 4:
      return 'thursday'
    case 5:
      return 'friday'
    case 6:
      return 'saturday'
    case 7:
      return 'sunday'
    default:
      return 'I don\'t know...'
  }
} 

/////

export const useFlow = () => {
  const [dayName, setDayName] = useState('')

  const updateDay = (dayNumber: number) => {
    setDayName(getDayNameByNumber(dayNumber))
  }

  return {
    dayName,
    updateDay
  }
}