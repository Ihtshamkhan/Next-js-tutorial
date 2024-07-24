"use client";

export default function Categories(){

       const selectCategory = (CategoryName: string)=>{
        console.log(CategoryName);
       }

    return(
        <>
        <button onClick={()=>{selectCategory("Mobiles")}}>Mobiles</button>
        <button onClick={()=>{selectCategory("laptops")}}>laptops</button>
        <button onClick={()=>{selectCategory("Cars")}}>Cars</button>
        <button onClick={()=>{selectCategory("Bikes")}}>Bikes</button>
        </>
    )
}