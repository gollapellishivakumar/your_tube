import React, { useState } from 'react';
import "./Comment.css";
import Displaycomment from './Displaycomment';
import { useSelector } from 'react-redux';
const Comment = ({ videoid }) => {
    const [commenttext, setcommentext] = useState("");
    const currentuser=useSelector(state => state.currentuserreducer);
    const commentlist = [{
        _id: 1,
        commentbody: "hello",
        usercommented: "Abc",
        videoid: "video1"
    },
    {
        _id: 2,
        commentbody: "hello",
        usercommented: "Abc",
        videoid: "video2"
    }];

    const handleonsubmit = (e) => {
        e.preventDefault();
        if (currentuser) {
            if (!commenttext) {
                alert("please type your comment!!");
            } else {

                setcommentext("");
            }
        } else {
            alert("Please login to comment");
        }
    };

    const filteredComments = commentlist.filter(comment => comment.videoid === videoid);

    return (
        <>
            <form className='comments_sub_form_comments' onSubmit={handleonsubmit}>
                <input type="text" onChange={(e) => setcommentext(e.target.value)} placeholder='add comment...' value={commenttext} className='comment_ibox' />
                <input type="submit" value="add" className='comment_add_btn_comments' />
            </form>
            <div className="display_comment_container">
                {filteredComments.map((comment) => (
                    <Displaycomment
                        key={comment._id}
                        cid={comment._id}
                        userid={comment.userid}
                        commentbody={comment.commentbody}
                        usercommented={comment.usercommented}
                    />
                ))}
            </div>
        </>
    );
};

export default Comment;
