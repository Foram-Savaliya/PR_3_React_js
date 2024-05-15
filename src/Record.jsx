import React from "react";
import './Style.css'

const Record = ({ category, filterBtn , product }) => {
    return (
        <div className="container">
            <div className="row">

                <h1 align="center" className="mb-3 text-danger"> Apple Store</h1>

                <div className="btngroup text-center mb-4">
                    <button onClick={() => filterBtn("all")} className="me-2 border-0 px-3 py-1 rounded-pill fs-5 text-success">All</button>
                    {
                        category.map((cat) => {
                            console.log(cat.name);
                            return <button key={cat.id} onClick={() => filterBtn(cat.name)} className="me-2 border-0 px-3 py-1 rounded-pill fs-5 text-success">{cat.name}</button>
                        })
                    }
                </div>

                <div className="row d-flex">                        {
                            product.map((p) => {
                                return (
                                    <div className="col-3 p-2">
                                       <div className="card w-100 h-100">
                                       <div key={p.id} className="" >
                                        <div className="image overflow-hidden text-center">
                                        <img src={p.image} alt=""/>
                                        </div>
                                        <div className="box-title text-center">
                                            <h4>Name:- {p.name}</h4>
                                            <p>Price:-  {p.price}</p>
                                        </div>
                                        </div>
                                       </div>
                                    </div>
                                )
                            })
                        }
                    </div>

            </div>
        </div>
    )
}
export default Record
