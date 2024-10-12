import React from 'react'


const NewsItem =(props)=>{

    let { title, description, imageUrl, newsUrl, date } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imageUrl?"https://img.freepik.com/premium-photo/close-up-news-sign-store-window-with-city-lights-blurring-background_14117-1111102.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <b> <p class="card-text"><small className="text-body-secondary"> {new Date(date).toGMTString()}</small></p></b>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-dark">Full Story</a>

          </div>
        </div>
      </div>
    )
}

export default NewsItem
