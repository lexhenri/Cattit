import React from 'react'

const LinkPostForm = props => {


  return (
    <div className="post-body-container">
      <textarea 
        className="link-desc"
        placeholder="Url"
        value={props.linkUrl}
        onChange={e => props.handleUrl(e)}
        >
      </textarea>
      </div>


  )
}

export default LinkPostForm;