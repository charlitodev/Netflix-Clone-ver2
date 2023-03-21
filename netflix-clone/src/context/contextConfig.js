import { createContext, useState } from "react";
import { movieData } from "../data/indexData";
export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
  const [activeMedia, setActiveMedia] = useState(movieData[0]);
  const [mapData, setMapData] = useState(movieData);

  const handleHoverActive = (item) => {
    setActiveMedia({
      id: item.id,
      mediaName: item.mediaName,
      movieDescription: item.movieDescription,
      poster: item.poster,
    });

    const updateData = movieData.map((data) => {
      if (data.id === item.id) {
        return {
          ...data,
          isHovered: true,
        };
      }

      return data;
    });

    setMapData(updateData);
  };

  const handleHoverLeave = (item) => {
    const updateData = movieData.map((data) => {
      if (data.id === item.id) {
        return {
          ...data,
          isHovered: false,
        };
      }

      return data;
    });

    setMapData(updateData);
  };

  return (
    <ContextProvider.Provider
      value={{
        mapData,
        handleHoverLeave,
        handleHoverActive,
        activeMedia,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
