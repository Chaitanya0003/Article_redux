import React,{Component} from "react";
import {connect} from "react-redux";
import {latestNews,articleNews,galleryNews} from "../action";
import propTypes from "prop-types";
import LatestDisplay from "../component/Home/LatestDisplay";
import ArticleDisplay from "../component/Home/ArticleDisplay";
import GalleryDisplay from "../component/Home/GalleryDisplay";

class Home extends Component{

    componentDidMount(){
        this.props.dispatch(latestNews());
        this.props.dispatch(articleNews());
        this.props.dispatch(galleryNews())
    }
    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestNews} />
                <ArticleDisplay adata={this.props.datalist.articleNews}/>
                <GalleryDisplay gdata={this.props.gallerydata.galleryNews}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("ct",state);
    return{
        datalist: state.articles,
        gallerydata: state.gallery
    }
}

Home.protoTypes={
    dispatch:propTypes.func 
}

export default connect(mapStateToProps)(Home);