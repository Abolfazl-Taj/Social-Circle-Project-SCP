import { useEffect, useRef } from "react"

const Cursor = () => {
    const cursore = useRef<HTMLDivElement | null>(null)
    const CursorMove = (e: MouseEvent) => {
        setTimeout(() => {
            cursore.current.style.left = `${e.screenX}px`
            cursore.current.style.top = `${e.screenY - 110}px`
        }, 100);     
    }
    useEffect(()=>{
        document.addEventListener("mousemove", CursorMove)
        return ()=> document.removeEventListener("mousemove", CursorMove)
    } , [])
    return (
        <div ref={cursore} className="absolute w-[15px] h-[15px] rounded-full bg-gradient-to-b from-slate-300  to-slate-500 backdrop-blur-3xl top-0 left-7  ease-in-out flex justify-center items-center shadow">
        </div>
    )
}

export default Cursor