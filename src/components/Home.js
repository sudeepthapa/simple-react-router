import React,{Component} from 'react';
import axios from 'axios';
class Home extends Component{
    state ={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            this.setState({
                posts:res.data.slice(0,20)
            })
        })
        
    }
    render(){
        const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolorem eligendi nobis aut fugit a, non animi tenetur hic ab aperiam saepe placeat culpa id totam assumenda officiis. Molestias, qui!";
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}{lorem+lorem}</p>
                    </div>
                </div>
                )
            })
        ) : (
            <div className="center">
                No Posts Found
            </div>
        );
        return(
            <div className="container">
                <h4 className="center">
                    Home
                </h4>
                {postList}
            </div>
    
        )
    }
}

export default Home;