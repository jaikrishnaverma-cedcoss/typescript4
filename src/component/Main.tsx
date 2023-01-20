import React from 'react'
import AddArticle from './AddArticle'
import Article from './Article'

const Main = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center my-5 rounded " >
                <AddArticle />
                <Article />
            </div>
        </>
    )
}

export default Main