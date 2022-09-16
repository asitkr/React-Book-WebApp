import axios from 'axios';
import React, { useState } from 'react';
import bg2 from '../image/bg2.png';
import Card from './Card';

function Main() {

    const [search, setSearch] = useState("");
    const [bookData,setData]=useState([]);

    const searchBook = (e) => {
        if(e.key === "Enter") {
            const url = "https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyDcDwOzYSNmA-P7IerNstQwz0DuawiqZ1g"+"&maxResults=40";
            axios.get(url).then(res => setData(res.data.items));
        }
    }

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2 className='heading'>Find Your Book</h2>
                    <div className="search">
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={searchBook} placeholder="Enter Your Book Name" />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src={bg2} alt="bg2" />
                </div>
            </div>
            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    )
}

export default Main;