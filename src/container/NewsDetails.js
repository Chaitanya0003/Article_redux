import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectedNews,clearSelectedNews} from '../action';
import LikeCounter from "./LikeCounter";;

class NewsDetails extends Component{
    componentDidMount(){
        console.log(this.props);
        this.props.dispatch(selectedNews(this.props.match.params.id))
    }
    renderDetails = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"/>
                                {data.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"/>
                                {data.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"/>
                                {data.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Artcile By:{data.author}</span>
                            <img src={`/images/article/${data.img}`}/>
                            <div className="body_news">
                                {data.body}
                            </div>
                            <div>
                                <LikeCounter
                                    articleId={data.id}
                                    likes= {data.likes[0]}
                                    disLikes= {data.likes[1]}
                                />                              
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    render(){
        return(
            <div className="news_container">
                {this.renderDetails(this.props.articleData)}
            </div>  

        )
    }
    componentWillUnmount(){
        this.props.dispatch(clearSelectedNews())
    }

}

function mapStateToProps(state){
    return{
        articleData:state.articles
    }
}

NewsDetails.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(NewsDetails)