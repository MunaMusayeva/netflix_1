import { themeStore } from "common/Store";
import ScrollButton from '../../../common/ScrollButton'
import { useState, useEffect } from "react";
import { useStore } from "zustand";
import Card from "../../../common/Card";

const Similar = ({ id, type }) => {
  const [data, setData] = useState([])
  const { token } = useStore(themeStore)
  const getSimilar = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/v1/${type}/${id}/similar`, {
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await response.json()
      if (response.ok) {
        setData(data.similar)
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getSimilar()
  }, [type, id])

  return (
    <div className="mt-10 w-full px-[40px]  h-[300px]">
      <h2 className="text-white text-2xl mb-3">Similar {type === "tv" ? "TV Shows" : "Movies"}</h2>
      <div className="relative w-full b">
        <ScrollButton direction="left" />
        <div id="movie-card-container" className="w-full flex overflow-x-scroll gap-4 no-scrollbar">
          {data.map(item => <Card item={item} type={type} />)}
        </div>
        <ScrollButton direction="right" />
      </div>
    </div>
  )
}

export default Similar