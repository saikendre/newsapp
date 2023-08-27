import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title,description,imgurl, newsurl, date, author} = this.props
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imgurl} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{title}..</h5>
                            <p className="card-text">{description}...</p>
                            <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-primary btn-sm bg-primary">Read in details</a>
                            <p className="card-text"><small>{author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
