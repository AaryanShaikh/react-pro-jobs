import React, { Component } from 'react'

export default class Jobs extends Component {
    render() {
        return (
            <div>
                <div className="search">
                    <h1>Pro Jobs</h1>
                    <h4>Search</h4>
                    <input type="text" name="" id="" />
                </div>
                <div className="pages">
                    <button>&lt;</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>&gt;</button>
                </div>
                <div className="jobs">
                    <div className="job">
                        <p>Senior C Software Engineer - Bot Smart Diagonostics - <span>Ocado Technology</span></p>
                        <img src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2019/05/Toyota-logo-min.png" alt="" />
                        <div className="tags">
                            <p>Full Time</p>
                            <p>Fully Remote</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate architecto necessitatibus temporibus itaque similique!</p>
                        <button>View Details</button>
                        <div className="details">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
