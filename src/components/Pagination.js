import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";


const Pagination = () => {

    const [Items, setItems] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    //setting tha initial page
    const [page, setPage] = useState(0);
    //we need to know if there is more data
    const [HasMore, setHasMore] = useState(true);

    //on initial mount
    useEffect(() => {
        loadMoreItems();
    }, []);

    function loadMoreItems() {
        setIsFetching(true);

        //using axios to access the third party API
        axios({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/albums",
            params: { _page: page, _limit: 40 },
        })
            .then((res) => {
                setItems((prevTitles) => {
                    return [...new Set([...prevTitles, ...res.data.map((b) => b.title)])];
                });
                setPage((prevPageNumber) => prevPageNumber + 1);
                setHasMore(res.data.length > 0);
                setIsFetching(false);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <div>
            {Items.map((item, index) => {
                if (Items.length === index + 1) {
                    return (
                        <div key={index}>
                            {item} - <b>last</b>
                        </div>
                    );
                } else {
                    return <div key={index}>{item}</div>;
                }
            })}
            {isFetching && <p>Fetching items...</p>}
            {!isFetching && HasMore && (
                <button onClick={loadMoreItems}>Load more</button>
            )}
        </div>

    );
}
export default Pagination