import React from 'react'

const UnderBar = () => {
    return (
        <div className="row">
            <div className="col">
                <div className={`card text-white mb-2 bg-danger`}>
                    <div className="card-header">Team A</div>
                </div>
            </div>
            <div className="col">
                <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        To Fighter
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-item">Fighter1</li>
                        <li className="dropdown-item">Fighter1</li>
                        <li className="dropdown-item">Fighter1</li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Select Action
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-item">Attack</li>
                        <li className="dropdown-item">Move</li>
                    </ul>
                </div>
            </div>
            <div className="col">
                <button type="button" className="btn btn-primary">
                    Do Order
                </button>
            </div>
        </div>
    )
}

export default UnderBar