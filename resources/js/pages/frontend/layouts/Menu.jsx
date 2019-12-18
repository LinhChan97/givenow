import React from "react";
import {Route,Link} from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import LocalStorageHelper from "../../../helpers/LocalStorageHelper";

const menus=[
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "Live Event",
        to: "/events",
        exact: true
    },
    {
        name: "Charities",
        to: "/charities",
        exact: true
    },
    {
        name: "About us",
        to: "/about",
        exact: true
    },
    {
        name: "Contact us",
        to: "/contact-us",
        exact: true
    }
];

const MenuLink=({label,to,activeOnlyWhenExact}) => {
    return (
        <Route
            path={to}
            axact={activeOnlyWhenExact}
            children={({match}) => {
                var active=match? "active":"";
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cartNotification: ''
        }
    }
    componentDidMount() {
        this.setState({cartNotification: LocalStorageHelper.getItem('addedProducts')!==null? LocalStorageHelper.getItem('addedProducts').length:0})
    }
    onClick=(e) => {
        LocalStorageHelper.removeItem('authToken')
    }
    render() {
        let {cartNotification}=this.state
        return (
            <div className="position-relative">
                <nav className="navbar navbar-inverse mg-0 ">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a
                                className="navbar-brand"
                                href="/"
                            >
                                Give now
                                                            </a>
                        </div>
                        <ul className="nav navbar-nav">
                            {this.showMenus(
                                menus
                            )}
                        </ul>
                        <div className={(LocalStorageHelper.getItem('authToken')!=null? 'hidden':'')}>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a
                                        href="#signup"
                                        data-toggle="modal"
                                    >
                                        <span className="glyphicon glyphicon-user"></span>
                                        Signup
                                                                      </a>
                                    <Register />
                                </li>
                                <li className={(LocalStorageHelper.getItem('authToken')!=null? ' d-none':'')}>
                                    <a
                                        href="#login"
                                        data-toggle="modal"
                                    >
                                        <span className="glyphicon glyphicon-log-in "></span>
                                        Login
                            </a>
                                    <Login />
                                </li>
                            </ul>
                        </div>
                        <div className={(LocalStorageHelper.getItem('authToken')==null? 'hidden':'')}>
                            <ul className="nav navbar-nav navbar-right">
                                {/* <li> <a href="/cart/payment"> <i className="fa fa-shopping-cart"></i>Cart <span className="badge badge-danger">{cartNotification}</span></a>
                            </li> */}
                                <li className={(LocalStorageHelper.getItem('user')!=null? ' d-none':'')}>
                                    <a
                                        href='#user'
                                        data-toggle="modal"
                                    >
                                        <span className="glyphicon glyphicon-user "></span>{LocalStorageHelper.getItem('authToken')!==null? LocalStorageHelper.getItem('authToken').user.name:'Admin'}
                                    </a>
                                    <div className="modal fade" id="user">
                                        <div className="modal-dialog">
                                            <div className="modal-content w-50">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                    <h4 className="modal-title text-center">User Information</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <span>Name:</span>
                                                        </div>
                                                        <div className="col-sm-6">

                                                            <span>{LocalStorageHelper.getItem('authToken')!==null? LocalStorageHelper.getItem('authToken').user.name:'Admin'}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <span>Email:</span>
                                                        </div>
                                                        <div className="col-sm-6">

                                                            <span>{LocalStorageHelper.getItem('authToken')!==null? LocalStorageHelper.getItem('authToken').user.email:'Admin'}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <span>Address:</span>
                                                        </div>
                                                        <div className="col-sm-6">

                                                            <span>{LocalStorageHelper.getItem('authToken')!==null? LocalStorageHelper.getItem('authToken').user.address:'Admin'}</span>
                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                        </div>
                                                        <div className="col-sm-2">
                                                            <span>Phone number:</span>
                                                        </div>
                                                        <div className="col-sm-6">

                                                            <span>{LocalStorageHelper.getItem('authToken')!==null? LocalStorageHelper.getItem('authToken').user.phone_number:'Admin'}</span>
                                                        </div>

                                                    </div>
                                                    <div className="text-right">
                                                        <button type="button" className="btn btn-default" data-dismiss="modal">Edit</button>
                                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        onClick={this.onClick}
                                    >
                                        <span className="glyphicon glyphicon-log-out "></span>Logout
                                </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </div>
        );
    }
    showMenus=(menus) => {
        var result=null;
        if(menus.length>0) {
            result=menus.map((menu,index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={
                            menu.axact
                        }
                    />
                );
            });
        }
        return result;
    };
}
export default Menu;
