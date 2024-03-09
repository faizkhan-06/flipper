import Cards from "./Cards";
import { useState } from "react";
function HomePage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX - 30, y: e.clientY - 30 });
  };
  const cardArray = [
    {
      id: 1,
      title: "Video",
      img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Group chat",
      img: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div
      className="bg-black h-screen w-screen flex-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className={`h-20 w-20 bg-red-500 absolute rounded-full blur-md`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <Cards data={cardArray} />
    </div>
  );
}

export default HomePage;
