import React from 'react';
import Cause from '../causes/Index';
import Banner from '../layouts/Banner';
import RouteConst from '../../../constants/Route';
import Event from '../events/Index';
import {Route,Link} from "react-router-dom";

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
class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Banner />
                </div>
                <div className="container mg-10">
                    <div id="logo" className="row">
                        <div className="col-sm-4">

                        </div>
                        <div className="col-sm-2 mg-10">
                            <a href="/">
                                <img className="img-responsive" src="/images/givenowlogo.png" alt="Eden Valley Hospice" title="Eden Valley Hospice" /></a>
                        </div>
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-4">
                            <div className="">
                                <p>
                                    <a id="header_donate_btn" className="btn btn-primary btn-lg" href="/events"><i className="fa fa-heart"></i> Donate</a>
                                </p>
                                <p>
                                    <a id="header_shop_btn" className="btn btn-primary btn-lg" href="/categories"><i className="fa fa-shopping-cart"></i>Our Shop</a></p>
                                <p>
                                    <a id="header_shop_btn" className="btn btn-primary btn-lg" href="/charities"><i className="fa fa-user"></i> Our parner</a></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <nav className="navbar navbar-dark bg-primary mg-10" role="navigation">
                        <ul className="nav navbar-nav navbar-default">
                            {this.showMenus(
                                menus
                            )}
                        </ul>
                    </nav>
                    <hr></hr>
                    <div className="container text-center">
                        <h4><i>Support any charity with an online drive for brand-new items they need</i></h4>
                    </div>
                    <Cause />
                    <hr></hr>
                    <div className="container text-center">
                        <h4><i>Looking to support a charity close to your heart but want an alternative to traditional fundraising? Raise much-needed, brand-new goods for donation to charity with an online drive. Corporations, schools, religious organizations, groups, and individuals can start a drive free-of-charge at Givenow and start raising items charities need most.</i></h4>
                        <div className="container">
                            {/* <div className="row col-sm-4"></div> */}
                            <div className="col-sm-6 col-md-4 col-xs-12 text-center">
                                <div className="col-sm-8 col-md-8">
                                    <h4>Ready to learn more: </h4>
                                </div>
                                <div className="col-4 col-md-4">
                                    <a href={RouteConst.frontEnd.contactUs.path} type="button" className="btn btn-info hard-button">Contact us</a>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="container">
                            <div className="row text-center">
                                <img src="/images/makedonation.png"></img>
                                <h4><i>Make it easy to donate, come with us and find your trusted place for your giving</i></h4>
                            </div>
                            <div className="row">
                                <img src="/images/volunteer.jpg"></img>
                                <h4><i>We are still finding all of you guys as a volunteer for helping us building system. Register as a volunteer <a href="/">here</a></i></h4>

                            </div>
                        </div>
                        <div className="container">
                            <h1><i className="fa fa-truck" aria-hidden="true"></i> 4 easy steps</h1>
                            <hr className="style5"></hr>
                            <div className="col-xs-6 col-sm-6 col-4 col-md-3 col-lg-3">
                                <h1>1</h1>
                                <b><hr></hr></b>
                                <h4>Start raising goods for your charity by setting up a custom drive page</h4>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-4 col-md-3 col-lg-3">
                                <h1>2</h1>
                                <b><hr></hr></b>
                                <h4>Spark the support of your network for your cause with built-in tools and tips</h4>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-4 col-md-3 col-lg-3">
                                <h1>3</h1>
                                <b><hr></hr></b>
                                <h4>Supporters visit your page and purchase goods to donate to your nonprofit</h4>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-4 col-md-3 col-lg-3">
                                <h1>4</h1>
                                <b><hr></hr></b>
                                <h4>When the drive ends, we deliver all new items directly to your nonprofit</h4>
                            </div>
                        </div>
                        <hr></hr>
                        {/* <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-5 text-center">
                                    <h2 className="text-black mb-4">Make A Donation Now! You May Change Lives Forever</h2>
                                    <p><a href="#" className="btn btn-primary px-4 py-3 btn-block">Donate Now</a></p>
                                </div>
                            </div>
                        </div> */}

                        <div className="container">
                            <h1>Ready to raise for your cause?</h1>
                            <div className="row mg-10 text-center">
                                <br></br>
                                <a className="btn btn-primary hard-button" href={RouteConst.frontEnd.events.create.path} role="button">Start an event</a>
                                <span>Or</span>
                                <a className="btn btn-danger hard-button" href={RouteConst.frontEnd.events.index.path} role="button">Donate a cause</a>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Index;
