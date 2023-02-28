import { useState } from "react"


////

const getDayNameByNumber = (dayNumber: number): string => {
  let dayName = ''
  if (dayNumber === 1) {
    dayName = 'monday'
  }
  if (dayNumber === 2) {
    dayName = 'tuesday'
  }
  if (dayNumber === 3) {
    dayName = 'wednesday'
  }
  if (dayNumber === 4) {
    dayName = 'thursday'
  }
  if (dayNumber === 5) {
    dayName = 'friday'
  }
  if (dayNumber === 6) {
    dayName = 'saturday'
  }
  if (dayNumber === 7) {
    dayName = 'sunday'
  }

  return `${dayName}!` 
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