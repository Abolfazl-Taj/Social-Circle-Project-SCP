import { useEffect, useRef } from "react"

const Cursor = () => {
    const cursore = useRef<HTMLDivElement>(null)
    const CursorMove = (e: MouseEvent) => {
        setTimeout(() => {
            if (cursore.current) {
                cursore.current.style.left = window.innerWidth <= e.clientX ? `${e.clientX - 10}px` : `${e.clientX - 10}px`
                cursore.current.style.top = `${e.clientY + 5}px`
                cursore.current.style.bottom = `${e.clientY - 10}px`
            }
        }, 40);
    }

    useEffect(() => {
        document.addEventListener("mousemove", CursorMove)
        document.addEventListener("mouseout", CursorMove)
        return () => {
            document.removeEventListener("mousemove", CursorMove)
            document.removeEventListener("mouseout", CursorMove)
        }
    }, [])
    return (
        <div ref={cursore} className=" hidden lg:flex overflow-hidden absolute w-[10px] h-[10px] rounded-full bg-gradient-to-b from-slate-300  to-slate-500 backdrop-blur-3xl top-0 left-7  ease-in-out  justify-center items-center shadow z-[99]">
        </div>
    )
}

export default Cursor