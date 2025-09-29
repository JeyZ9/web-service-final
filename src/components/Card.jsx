import React from 'react'

const Card = (props) => {
    const { title, author, coverImage, description } = props;
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
          <img src={coverImage} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <p>{author}</p>
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card