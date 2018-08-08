import React from 'react'
import PropTypes from 'prop-types'
import Color from './Color'
import '../stylesheets/ColorList.scss'

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f, onEdit=f=>f }) =>
    <div className="color-list">
        {(colors.length === 0) ?
            <p>색이 없습니다. (색을 추가해 주세요)</p> :
            colors.map(color =>
                <Color key={color.id}
                    {...color}
                       onRate={(rating) => onRate(color.id, rating)}
                       onRemove={() => onRemove(color.id)}
                       onEdit={colorCode => onEdit(color.id, colorCode)}
				/>
            )
        }
    </div>

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func,
	onEdit: PropTypes.func
}

export default ColorList
