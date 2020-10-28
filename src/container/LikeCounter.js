import React,{Component} from "react";
import {connect} from "react-redux";
import propTypes from "prop-types";
import {handleLikes} from "../action";

class LikeCounter extends Component{
    addLikes = (userClick) => {
        const newLikes = (userClick)==="Add"?[this.props.likes+1,this.props.disLikes]:[this.props.likes,this.props.disLikes+1]
        console.log(newLikes)
        this.props.dispatch(handleLikes(newLikes,this.props.articleId))
    }

    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How About The Article</h3>
                <div className="addlikes-container">
                    <div className="btn btn-likes"
                    onClick={()=>this.addLikes("Add")}>
                        <div className="hits">
                            {this.props.likes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <div className="btn btn-dislikes"
                    onClick={()=>this.addLikes("Remove")}>
                        <div className="hits">
                            {this.props.disLikes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LikeCounter.protoTypes={
    dispatch:propTypes.func
}

export default connect()(LikeCounter);