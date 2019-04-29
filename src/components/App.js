import React , {PureComponent} from 'react';
import InfoList from './InfoList';
import infos from '../info.js';
import 'bootstrap/dist/css/bootstrap.css'

class  App extends PureComponent {
    state = {
        reverted: false
    };
    infos = infos.slice();
    render(){
        console.log('----' , 1);
        // console.log('---', '2' ,this.state,infos.map(item => item.id));
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="jumbotron px-4">
                        <div className="display-3">
                            <h1 className="text-success d-flex  mb-0 ">App Name
                                <button className="btn btn-info ml-auto align-self-center" onClick={this.revert}>Revert</button>
                            </h1>
                        </div>
                    </div>
                    <InfoList infos={this.state.reverted ? infos.slice().reverse() : infos}/>
                </div>
            </div>
        )
    }
    revert = () => {
        // console.log('---', '1')
        this.setState({
            reverted:!this.state.reverted
        })
    }
}
export default App