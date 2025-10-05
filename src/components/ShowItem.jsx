import React from 'react'
import Card from './Card'

const ShowItem = (props) => {
    const { items } = props;
  return (
    <>
        <div className='container grid grid-cols-3 gap-4'>
        {items &&
          items.filter((item) => item.status === "AVAILABLE").map((item) => (
              <Card
                key={item.itemId}
                id={item.itemId}
                itemType={item.itemType}
                itemId={item.id}
                title={item.title}
                author={item.author}
                coverImage={item.coverImage}
                description={item.description}
              />
          ))}
      </div>
    </>
  )
}

export default ShowItem