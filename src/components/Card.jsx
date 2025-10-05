import React from 'react'
import { Link } from 'react-router';

const Card = (props) => {
    const { id, title, author, coverImage, description, itemType } = props;
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className={`w-[122px] h-full`}>
          <img src={coverImage} alt="Album" className={`w-full h-full  object-cover`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title truncate text-ellipsis w-[235px]">{title}</h2>
          <p className='text-wrap truncate text-ellipsis w-[235px] h-[42px]'>{description}</p>
          <div className="card-actions justify-between">
            <p>{author}</p>
            <Link to={`/${itemType.toLowerCase()}/${id}`} className="btn btn-primary">Listen</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card