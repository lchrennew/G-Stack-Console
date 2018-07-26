import React from 'react'
import ResultsProvider from "./ResultsProvider";
import {withRouter} from 'react-router-dom'
import VisibleResults from "./VisibleResults";
import Placeholder from "./Placeholder";

class Logs extends React.Component {

    render() {
        return <Placeholder>
            <ResultsProvider>
                <VisibleResults/>
            </ResultsProvider>
        </Placeholder>
    }
}

export default withRouter(Logs)