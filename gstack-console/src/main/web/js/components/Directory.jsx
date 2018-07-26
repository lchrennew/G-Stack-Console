import React from "react"
import VisibleDir from "./VisibleDir";
import Placeholder from "./Placeholder";

class Directory extends React.Component {

    getDir() {
        let {match: {isExact, params: {dir}, url}, location: {pathname}} = this.props
        return isExact ?
            dir :
            [dir, pathname.substr(url.length).replace('/', '')].join('/')
    }

    render() {
        return <Placeholder>
                <div className="commit-tease">
                    <div className="mr-auto">test</div>
                </div>
                <div className="file-wrap">
                    <VisibleDir dir={this.getDir()}/>
                </div>
        </Placeholder>
    }
}

export default Directory