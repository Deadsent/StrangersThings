import React, { useState } from 'react';
import { createMessage } from '../api'


const Messages = ({post, postId}) => {
      const [content, setContent ] = useState()
    return (
        <div key={post._id} className="user-message-component-main-container">
     <form id="newMessage" onSubmit={async (event) => {
         event.preventDefault();
         try {
             const { data } = await createMessage(
               postId,
               content
             )

             return data
         } catch (error) {
             console.error(error);
             
         }
     }}>
         <fieldset>
             <label className = 'sendMessage'>
                 Send a message
             </label>
             <input id='receiveMessage'
             type='text'
             placeholder='enter message'
             value={content}
             onChange={(event) => {
                 setContent(event.target.value)
             }}
            
             />
             
             
         </fieldset>
         <button type='submit'>Send</button>

     </form>
     
    </div>
    )
}

export default Messages