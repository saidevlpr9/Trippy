"use client";
import { cn } from "../../../lib/utils";

export function DestinationCard({ title, description, imageLink, price, stays, highlights }) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-[400px] rounded-xl shadow-xl mx-auto flex flex-col justify-end p-6 border border-transparent dark:border-neutral-800 transition-all ease-in-out duration-500 transform hover:scale-105",
          imageLink ? `bg-[url(${imageLink})] bg-cover` : 'bg-gray-500', // fallback background if imageLink is not available
          "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
        )}
        style={{
          backgroundImage: imageLink ? `url(${imageLink})` : 'none',
        }}
      >
        <div className="text relative z-50 text-center text-white">
          <h1 className="font-extrabold text-2xl md:text-3xl text-shadow-lg mb-2">{title}</h1>
          <p className="font-normal text-lg md:text-xl text-gray-100 mb-4">{description}</p>

          <div className="mt-4 space-y-2">
            <p className="font-semibold text-lg">{price}</p>
            <p className="font-medium text-md">{stays}</p>
            <p className="font-medium text-sm text-gray-300">{highlights}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
