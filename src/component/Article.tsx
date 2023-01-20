import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_ARTICLE } from '../features/MySlice'

const Article = () => {
    const state = useSelector((state: any) => state.articles)
    const dispatch = useDispatch()

    return (
        <div className="d-flex flex-column align-items-center mt-3 wid">
            <ol className="list-group list-group w-100 ">
                {state.map((x: any, index: number) => <li key={x.toString() + index} className="list-group-item d-flex justify-content-between align-items-start border-0 my-1 rounded">
                    <div className="ms-2 me-auto text-secondary">
                        <div className="fw-bold text-dark fs-5">{x.title}</div>
                        {x.body}
                    </div>
                    <small className="badge bg-primary rounded-pill bg-danger p-2" onClick={() => dispatch(REMOVE_ARTICLE(index))}>Delete</small>
                </li>)
                }
            </ol>
        </div>
    )
}

export default Article