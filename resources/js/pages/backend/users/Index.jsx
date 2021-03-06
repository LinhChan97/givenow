import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import RouteConst from '../../../constants/Route';
import UsersRequests from '../../../requests/backend/UsersRequests';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            listRecords: [],
            messageError: '',
            idDelete: '',
            status: 0
        };
    }

    componentDidMount() {
        this.getAllRecords();
    }

    onChange = event => {
        let status = event.target.checked ? 1 : 0;
        let data = new FormData();
        data.append("status", status)
        UsersRequests.update(event.target.value,data).then((response) => {
            if(response.meta.status===200) {
                window.location.href=RouteConst.backEnd.users.index.path;
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }

    getAllRecords=() => {
        UsersRequests.getAll().then((response) => {
            if(response.meta.status===200) {
                this.setState({listRecords: response.data});
            } else {
                this.state.messageError=response.meta.message;
            }
        });
    }

    deleteRecord=(event) => {
        event.preventDefault();
        UsersRequests.deleteByID(this.state.idDelete).then((response) => {
            this.getAllRecords();
        });
    }

    confirmDetele=(id) => (event) => {
        event.preventDefault();
        this.setState({idDelete: id});
    }


    render() {
        const tableElement=(
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="text-center" width="150">Role</th>
                        <th className="text-center" width="150">Status</th>
                        <th className="text-center" width="150">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.listRecords.map((item,index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.role==0?"Donor":item.role==1?"Charity":"Admin"}</td>
                                <td className="text-center">
                                    <label className="switch">
                                    <input type="checkbox" name="status" value={item.id} checked={item.status==1} onChange={this.onChange}/>
                                    <span className="slider round"></span>
                                    </label>
                                </td>
                                <td>
                                <Link className="btn btn-info btn-sm mr-2 ml-4"
                                    to={`${RouteConst.backEnd.users.index.path}/${item.id}`}>
                                    <i className="fas fa-eye"></i>
                                </Link>
                                <Link className="btn btn-warning btn-sm mr-2"
                                    to={`${RouteConst.backEnd.users.index.path}/${item.id}/edit`}>
                                    <i className="fas fa-edit"></i>
                                </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );

        const modalDeleteElement=(
            <div className="modal fade show" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteRecord" aria-modal="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteRecord">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <button className="btn btn-primary" onClick={this.deleteRecord} data-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );

        const breadcrumbElement = (
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to={RouteConst.backEnd.home.index.path}>Home</Link>
                </li>
                <li className="breadcrumb-item active">Users</li>
            </ol>
        );

        return (
            <div>
                {breadcrumbElement}

                <div className="card mb-3">
                    <div className="card-header">
                        <div className="float-left">
                            <p className="mb-0 mt-1">
                                <i className="fas fa-table"></i> List users
                            </p>
                        </div>
                        <div className="float-right">
                            <Link to={RouteConst.backEnd.users.create.path}>
                                <button className="btn btn-success">Create</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="table-responsive">
                                    {tableElement}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {modalDeleteElement}
            </div>
        );
    }
}
