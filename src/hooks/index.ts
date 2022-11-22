import { useState,useEffect } from 'react'
export function useDebounce(value:unknown,delay:number){
  const [debouncedValue,setDebouncedValue] = useState(value)
  useEffect(()=>{
    const timeId = setTimeout(()=>{
      setDebouncedValue(value)
    },delay);
    return ()=>clearTimeout(timeId)
  })
  return debouncedValue
}
