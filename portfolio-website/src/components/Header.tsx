import { useEffect, useRef, useState } from "react";
import "./Header.scss";

interface HeaderProps {
  heading: string;
}

export default function Header({ heading }: HeaderProps): JSX.Element {

  let headingClass = heading


  if (heading.includes("  —  ")) {
    headingClass = heading.replace("  —  ", "-")
  }

  
  const headRef = useRef<HTMLDivElement>(null);
  const [headPos, setHeadPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if ( !headRef.current) return;
      
      const divRect = headRef.current.getBoundingClientRect();
      const mouseX = e.clientX - divRect.left;
      const mouseY = e.clientY - divRect.top;

      setHeadPos({ x: mouseX, y: mouseY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [])

  return (
    <h1 
      ref={headRef} 
      className={`headline-${headingClass}`}
      style={{
        backgroundImage: `radial-gradient(circle farthest-side at ${headPos.x}px ${headPos.y}px, white 0%, #505050 50%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {heading}
    </h1>
  )
}