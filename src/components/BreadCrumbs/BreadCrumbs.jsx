import React from "react";


const BreadCrumbs = ({title,subtitle}) =>{
    return(
        <div className="breaddcrumbs-wrapper">
            <div className="container">
                <div className="breadcrumbs-content">
                    <div className="breadcrumbs-heading">
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BreadCrumbs;