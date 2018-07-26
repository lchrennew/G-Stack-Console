import React from "react";
import ScenarioList from "./ScenarioList";
import {SpecTitle} from "./SpecProvider";
import Placeholder from "./Placeholder";


class File extends React.Component {

    getDir() {
        let {match: {isExact, params: {dir}, url}, location: {pathname}} = this.props
        return isExact ?
            dir :
            [dir, pathname.substr(url.length).replace('/', '')].join('/')
    }

    render() {
        return <Placeholder>
                <div className="commit-tease">
                    <div className="mr-auto">
                        <SpecTitle/>
                    </div>
                </div>
                <div className="file-wrap">
                    <ScenarioList/>
                </div>
        </Placeholder>
    }
}

export default File