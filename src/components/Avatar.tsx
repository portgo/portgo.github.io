import { FC } from "react";

interface Prop{
    url : string
    className : string
}

const Avatar : FC<Prop>  = ({url, className}) => {
    return (
      <img 
      loading='lazy'
      className={`h-10 w-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="profile picture" />
    )
  }
  export default Avatar;