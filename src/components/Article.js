import React, {Component, PureComponent} from 'react';
class Article extends PureComponent{
    constructor (props){
        super(props);
        this.state={
            count:0
        }
        // console.log(props.defaultOpen)
    }
    // shouldComponentUpdate(nextprops,nextState){
    //     return  this.state.isOpen !== nextState.isOpen
    // }
    componentWillMount(){
        console.log('---','mounting');
    }
    // componentWillReceiveProps(nextProps){
    //     // console.log('--- ' , 'will recive');
    //     if (nextProps.defaultOpen !== this.props.defaultOpen){
    //         // console.log('nextProps.defaultOpen',nextProps.defaultOpen)
    //         // console.log('nextProps.defaultOpen',nextProps.defaultOpen)
    //
    //         this.setState({
    //             isOpen:nextProps.defaultOpen
    //         })
    //     }
    // }
    componentWillUpdate(){
        console.log('--- ' , 'will update');
    }
    // state ={
    //     isOpen: false
    // };
    render(){
        const {info , isOpen , onButtonClick} = this.props;
        const content = isOpen && <div>
                            <h5 className="card-text text-muted">FirstName:<span>{info.firstname}</span></h5>
                            <h5 className="card-text text-muted">LastName:<span>{info.lastname}</span></h5>
                            <h5 className="card-text text-muted">Age:<span>{info.age}</span></h5>
                        </div>;
        // console.log(this.props)
        return (
            <div className="card">
                <div className="card-header">
                    <h1 onClick={this.incrementCounter} className="text-danger">ID:
                        <span className="mr-5">{info.id}</span>
                        clicked {this.state.count}
                        <button onClick={onButtonClick} className="btn btn-success float-right">{isOpen ? 'Close' : 'Open'}</button>
                    </h1>
                </div>
                <div className="card-body">
                    {content}
                </div>
            </div>
        )
    }
    toggle = () => {
        // console.log('---', 'clicked');
        // this.setState({
        //     isOpen: !this.state.isOpen
        // })
    }
    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
}


export default Article