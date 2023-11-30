import { useEffect, useState, useContext } from 'react';
import { UserContext }  from '../../Context/userContext.jsx'
import './style.css';
import { useQuery, gql, useMutation } from "@apollo/client";
import { AlertsContext } from '../../Context/alertContext';


const query = gql`
    query GetComments($input: inputComment) {
      getComments(input: $input) {
        id
        content
        likeCount
        user {
          userName
          imgURL
        }
      }
    }
    
`;


const mutationquery = gql`
    mutation Comments($input: inputComment!) {
      createComment(input: $input) {
        id
        content
        likeCount
        user {
          userName
          imgURL
        }
      }
    }
`





const Comments = ({ type, movie }) => {
  const { token } = useContext(UserContext)
  const [comments, setComments] = useState([])
  const [Comments] = useMutation(mutationquery)
  const { addAlert } = useContext(AlertsContext)
  const { data, loading } = useQuery(query, {
    variables: {
        input: {
            entityID: movie?.id,
            entityType: type
        }
    },
    context: {
      headers: {
        'x-token': token
      }
    }
})

  useEffect( () =>{
    if(data && data?.getComments){
      setComments(data?.getComments)
    }
  }, [data])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!token) return addAlert('You must be logged in to comment', 'error')
    const form = new FormData(e.target)
    const data = Object.fromEntries(form)
    const { comment } = data
    
    const { data: { createComment } } = await Comments( {
      variables: {
        input: {
          content: comment,
          entityID: movie?.id,
          entityType: type
        }
      },
      context: {
        headers: {
          'x-token': token
        }
      }
    })
    if(createComment){
      setComments([createComment, ...comments])
    }

    e.target.reset()
    addAlert('Comment added', 'success')
  }

  return (
  <>
    { loading && ( <h2>Loading...</h2> )}
    {
      comments != [] && comments && (
        <>
        <div className="container-input">
          <form onSubmit={handleSubmit} className='comment-input'>
            <input type="text" placeholder='Add your comment' name='comment' autoComplete='off' />
          </form>
        </div>
        <div className='comment-container'>
          {
            comments.map( comment => (
              <div key={comment.id} className='comment'>
                <div className="comment-user">
                  <img src={comment.user.imgURL || "https://static.vecteezy.com/system/resources/previews/011/948/549/original/profile-does-not-exist-icon-customer-white-contour-marked-with-red-line-remote-avatar-erased-from-online-memory-graphic-line-design-social-media-communication-and-correspondence-character-vector.jpg"} alt={comment.user.userName} />
                  <h3>{comment.user.userName}</h3>
                </div>
                <p>{comment.content}</p>
              </div>
            ))
          }
        </div>
        </>
       /*  <div className="comments-container">
          <div className="comments">
            <h2>Comentarios</h2>
            <input type="text" placeholder='Add your comment'/>
              <div className="comments-list">
                {
                  comments.map( comment => (
                    <div className="comment" key={comment.id}>
                      <div className="comment-user">
                        <img src={comment.user.imgURL} alt={comment.user.userName} />
                        <h3>{comment.user.userName}</h3>
                      </div>
                      <p>{comment.content}</p>
                    </div>
                  ))
                }
              </div>
          </div>
        </div> */
      )
    }
    </>
  );
};

export default Comments;
