import React,{useState,useEffect,useRef} from "react";
import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet';
import axios from 'axios'
import './search-item.css'

import BarChart from "../PredictionBar/prediction-bar";



function SearchItem(){

    const [load,setLoad]=useState(false);
    const [model,setModel]=useState(false);
    const [image,setImage]=useState(null)
    const [results,setResults]=useState([]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImage(reader.result);
          setResults([]);
        };
      };

    const loadModel=async()=>{
        setLoad(true);
        setResults([]);
        try{
            const mod=await mobilenet.load();
            setModel(mod);
            setLoad(false);
            
        }catch(error){
            console.log(error);
            setLoad(false);
        }
    }

    const ImageIdentification= async(image)=>{
        const img=document.createElement("img")
        
        img.src=image;
        console.log(img.src)
        img.onload=async()=>{
            const pred=await model.classify(img);
            setResults(pred);
        }
    }
    // const ImageIdentification = async (image) => {
    //     const img = document.createElement("img");
    //     img.src = image;
    //     console.log(img.src);
    //     try {
    //       const pred = await model.classify(img);
    //       setResults(pred);
    //       console.log(pred);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    
    useEffect(()=>{
        loadModel()
    },[])

    return(
        <div className="cardWrapper">
            <div className="uploadWrapper">
                <h2>What is it?</h2> 
                <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>

            <div className="resultsWrapper">
                {image && (
                <div className="preview">
                    <h3>Uploaded Image:</h3>
                    <div className="previewImg">
                        <img src={image} alt="Uploaded Image" />
                    </div>
                    <button onClick={()=>ImageIdentification(image)}>Search</button>
                </div>
                )}
                
                {image && results.length>0 && 
                <div className="predict">
                    <h2>result</h2>
                    <BarChart results={results}/>

                </div>}
            </div>
            
            
        
        </div>
        
    )
}

export default SearchItem;