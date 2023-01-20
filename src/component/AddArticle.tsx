import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_ARTICLE } from '../features/MySlice'

const AddArticle = () => {
    const dispatch=useDispatch()

    const formSubmitted=(e:any)=>{
        e.preventDefault();
        let title=e.target.title.value
        let body=e.target.body.value
        if(title&&body){
            dispatch(ADD_ARTICLE({title,body}))
        }
        e.target.reset()
    }

    return (
        <>
            <h3 className='my-3'>My Articles</h3>
            <form onSubmit={formSubmitted} className="d-flex flex-column align-items-center p-4 bg-white rounded">
                <div className="mb-3">
                    <input type="text" required name='title' className="form-control widths" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <input type="text" required name='body' className="form-control widths" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary wids rounded-pill" type='submit'>Add article</button>
                </div>
            </form>
        </>
    )
}

export default AddArticle