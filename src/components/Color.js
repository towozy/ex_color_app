import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import '../stylesheets/Color.scss'

class Color extends Component {

	constructor(props) {
		super(props);
		this.state = {
			color: props.color,
		};
	}

    componentWillMount() {
        this.style = { backgroundColor: "#CCC" }
    }

    shouldComponentUpdate(nextProps, nextState) {
		if (this.state.color !== nextState.color) {
			return true;
		}
        const { rating } = this.props
        return rating !== nextProps.rating;
    }

    componentWillUpdate(nextProps) {
        const { title, rating } = this.props
        this.style = null
        this._title.style.backgroundColor = "red"
        this._title.style.color = "white"
    }

    componentDidUpdate(prevProps) {
        const { title, rating } = this.props
		// alert(`${title}: 평점 ${prevProps.rating} -> ${rating}`)
        const status = (rating > prevProps.rating) ? '좋아짐' : '나빠짐'
        // console.log(`${title} 평점이 ${status}`)
        this._title.style.backgroundColor = ""
        this._title.style.color = "black"
    }

    onChange = () => {
    	console.log(this.color.value);
    	this.setState({
			color: this.color.value,
		});
    	// this.props.onEdit(this.color.value);
	};

    render() {
        const { title, rating, onRemove, onRate} = this.props;
        const color = this.state.color;

        return (
            <section className="color" style={this.style}>
                <h1 ref={input => this._title = input}>{title}ㄴㅇㄹㅁㄴㄹㅁ</h1>
                <button onClick={onRemove}>X</button>
                <div className="color"
                     style={{ backgroundColor: color }}
				>
					<input
						className="color"
						style={{display: "block", width: "100%", height: "100%", opacity: 0}}
						ref={input => this.color = input}
						type="color"
						onChange={this.onChange}
					/>
                </div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }

}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

Color.defaultProps = {
    rating: 0,
    onRemove: f=>f,
    onRate: f=>f,
	onEdit: f=>f
}

export default Color
