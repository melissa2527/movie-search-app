import React, {Component} from "react";


class Favorite extends Component {
    state = {
        isFavorited: false
    }
    
    toggleFavorite = () => {
        this.setState(prevState => {
            return {
                isFavorited: !prevState.isFavorited
            }
        })
    }
    
    render() {
        return (
            <div className="favorite">
                {this.state.isFavorited ? <h5 className="liked">{this.props.name} has been added to favorites</h5> : <h5 className="like">Click to like</h5>}
                    <span 
                        onClick={this.toggleFavorite}>
                        {/* {this.state.isFavorited ? "❤️" : "♡"} */}
                        <span>
                        {this.state.isFavorited ? <i className="fas fa-thumbs-up"/> : <i className="far fa-thumbs-up"/>}
                        </span>
                    </span>
            </div>
        ) 
    }
}

export default Favorite