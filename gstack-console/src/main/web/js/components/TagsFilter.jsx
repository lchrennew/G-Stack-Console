import React from 'react'
import {connect} from 'react-redux'
import {Dropdown, Header} from "semantic-ui-react";
import Icon from "./Icon";
import {jsonPath} from "../utils";
import Placeholder from "./Placeholder";


const getTags = (idx) => Object.keys(Object.assign({}, ...jsonPath(idx, '$..tags.*')
    .map(tag => {
        let o = {}
        o[tag] = 1
        return o
    })))

const mapStateToProps = (state, props) => {
    return {
        tags: getTags(state.index.idx)
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

class TagsFilter extends React.Component {

    getOptions() {
        let {tags} = this.props
        // let ops = ['(', ')', '&', '|', '!']

        return [
            // ...ops.map(op => ({
            //     value: op,
            //     text: op,
            //     type: 'code',
            //     content: <Placeholder><Icon name="code"/> {op}</Placeholder>
            // })),
            ...tags.map((tag) => ({
                value: tag,
                text: tag,
                type: 'tag',
                content: <Placeholder><Icon name="tag"/> {tag}</Placeholder>
            })),
        ]
    }

    render() {
        let options = this.getOptions()

        const renderLabel = label => ({
            content: `${label.text}`,
            icon: <Icon name={label.type} size={14}/>
        })
        return <Dropdown
            fluid multiple search selection labeled
            options={options}
            placeholder='Choose tags and operators'
            renderLabel={renderLabel}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsFilter)