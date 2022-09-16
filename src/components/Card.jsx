import React, { useState } from 'react';
import Modal from './Modal';

function Card({ book }) {

    console.log(book);
    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState();

    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let title = item.volumeInfo.title;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail !== undefined && amount !== undefined)
                    {
                        return (
                            <>
                                <div className='card' onClick={() => {setShow(true); setBookItem(item)}} key={item.id}>
                                    <img src={thumbnail} alt="thumbnail" />
                                    <div className="bottom">
                                        <h3 className="title">{title}</h3>
                                        <p className="amount">&#8377;{amount}</p>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={()=>setShow(false)} />
                            </>
                        )
                    }
                })
            }
        </>
    )
}

export default Card;