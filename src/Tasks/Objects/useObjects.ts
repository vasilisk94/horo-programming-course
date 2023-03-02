import { useState } from "react"


///

type Day = {
  [key: string]: string
}

const daysMap: Day = {
  '1': 'monday',
  '2': 'tuesday',
  '3': 'wednesday',
  '4': 'thursday',
  '5': 'friday',
  '6': 'saturday',
  '7': 'sunday'  
}

const getDayNameByNumber = (dayNumber: number): string => {
  return daysMap[dayNumber]
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