import { useState } from "react"


////

const getDayNameByNumber = (dayNumber: number): string => {
  return `${dayNumber}`
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