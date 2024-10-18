import React from 'react'
import './blog.css'
import { Article } from '../../components';
import {blog1 , blog2 , blog3 , blog4 , blog5} from './import';
function Blogs() {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening,We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
         <div className='gpt3__blog-container-groupA'>
          <Article imgUrl={blog4} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
         </div>
        <div className='gpt3__blog-container-groupB'>
        <Article imgUrl={blog2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog3} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog1} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog5} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          
        </div>
      </div>
    </div>
  )
}

export default Blogs;