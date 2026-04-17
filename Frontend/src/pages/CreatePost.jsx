import React from 'react'
import App from '../App'

function CreatePost() {
  return (
    <section className='create-post-section'>
      
      <form>
        <h1>Create post</h1>
        <input type="file" name='image' accept='image/*' />
        <input type="text" name='caption' placeholder='Enter caption'required />
        <button type='submit'>Submit</button>
      </form>



    </section>
  )
}

export default CreatePost

