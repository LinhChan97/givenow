import React,{Component} from 'react';
import CausesRequests from '../../../requests/backend/CausesRequests'
import RouteConst from '../../../constants/Route'

class Show extends Component {
    constructor(props) {
        super(props);
        this.state={
            cause: {},
        }
    }
    setStyle=(width) => {
        return {
            width: width
        }
    }
    componentDidMount() {
        let {match}=this.props;
        let id=match.params.id
        CausesRequests.showByID(id).then((response) => {
            if(response.meta.status===200) {
                this.setState({cause: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }

    render() {
        let {cause}=this.state
        return (
            <div className="container">
                <h1 className="text-center">{cause.name}</h1>
                <hr></hr>
                <div className="container">
                    <div className="col-sm-12">
                        <div className="col-sm-6">
                            <p>{cause.description}</p>
                            <button className="btn btn-primary">Explore products</button>
                        </div>
                        <div className="col-sm-6">
                            <img src={cause.image} className="image-content-thumbnail"></img>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="container">
                    <h3><i>Ready to raise for your cause?</i></h3>
                    <div className="row mg-10 text-center">
                        <br></br>
                        <a class="btn btn-primary hard-button" href={RouteConst.frontEnd.events.create.path} role="button">Start an event</a>
                        <span>Or</span>
                        <a class="btn btn-danger hard-button" href={RouteConst.frontEnd.events.index.path} role="button">Donate a cause</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;