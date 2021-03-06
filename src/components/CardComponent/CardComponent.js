import React from 'react'

const CardComponent = ({image, name, status}) => {
    return (
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img alt='' className="activator" src={image} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    )
}

export default CardComponent
