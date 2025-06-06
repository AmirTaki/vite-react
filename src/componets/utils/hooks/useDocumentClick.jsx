import { useEffect } from "react";

export function useDocementClick() {
    useEffect(()=>{
        console.log("useDocumentClick");
        const handleDocumentClick = (e)=>{
            console.log("Clicked Document");
        }
    
        document.addEventListener("click", handleDocumentClick);
        return ()=>{
            document.removeEventListener('click', handleDocumentClick);
        }   
    },[])
}