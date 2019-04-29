import React , {PureComponent} from 'react';
import Article from '../Article';
import './style.css'

export default class InfoList extends  PureComponent{
    state = {
        openInfoID:null
    }
    render () {
        console.log('----' , 2);
        const infoElements = this.props.infos.map((info , index) =>

            <li key = {info.id} >
                <Article info={info}
                         isOpen = {this.state.openInfoID === info.id}
                         onButtonClick={this.toggle.bind(this,info.id)}
                />
            </li>
        );
        return (
            <ul className="list-none pl-0">
                {infoElements}
            </ul>
        )
    }
    toggle = openInfoID => this.setState({
        openInfoID : this.state.openInfoID === openInfoID ? null : openInfoID
    })
}