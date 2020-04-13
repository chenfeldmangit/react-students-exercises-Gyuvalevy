import React, {Component} from 'react';
import NavigationMenu from "./Tweeter/NavigationMenu/NavigationMenu";
import CenterPage from "./Tweeter/CenterPage/CenterPage";
import Loading from "./Tweeter/Loading/Loading";
import RightPage from "./Tweeter/RightPage/RightPage";
import './css/twitter.css';
import './css/twitter-basics.css';
import './css/twitter-icons.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = { showLoading: true };
    }

    changeLoading = (show) => {
        this.setState({ showLoading: show });
    }

    render() {
        return (
            <div className="main-wrapper">
                <NavigationMenu />
                <Loading show={this.state.showLoading}/>
                <CenterPage changeLoading={this.changeLoading}/>
                <RightPage />
            </div>
        );
    }
}

export default App;
