import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { postCommentThunk } from "../../store/comments";
import { useParams,useHistory} from 'react-router-dom';
import image from "./logo-create-comment/message.png"

function CreateSongComment() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { trackId } = useParams();




  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});

  const user = useSelector((state) => state.session.user);
  if (!user) { return history.push(`/`) };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({});
    const formData = new FormData();
    formData.append("comment", comment);

    dispatch(postCommentThunk(formData, songId))
      .then((res) => {
        if (typeof res === "string") {
          errors.content = res
          console.log(errors)
          setErrors(errors)
        }

    })
setComment("")


}



  return (
<>
        {errors.content ? (<>{errors.content}</>) : (
            <div className="post-a-comment">


          <form onSubmit={handleSubmit}>

                    <div className="errors">{errors.comment}</div>
                   <div className="input-field-1">
                    <label>

                        <input
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write a comment"
                            required
                        />
                    </label>


                    <button id="submit-for-post-a-comment"type="submit" ><img id="send-logo"src={image} style={{width:"20px", height:"20px"}}/></button>
        </div>
                </form>
</div>
        )}

      </>


  );
}

export default CreateSongComment;
