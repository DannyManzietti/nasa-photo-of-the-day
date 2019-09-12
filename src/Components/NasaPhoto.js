import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

export default function NasaPhoto(){
const [data, setData] = useState([]);  

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=h1pcSvDdtUjcu8xxWa09Xv8REkEhHC8yMVh4htnt")
        .then(response => {
            const info = response.data;
            console.log(info);
            setData(info);
        })
        .catch(error => {
            console.log("Error! Error!", error);
        })
    },[])

    return(
        <div>
            <NasaCard
            title={data.title}
            date={data.date}
            hdurl={data.hdurl}
            explanation={data.explanation}
            />
        </div>
    )

    }