import * as React from 'react';

export default class GroupCard extends React.PureComponent {

    public render() {
        return (
            <div className="card col-xs-12 col-sm-2 col-md-2 col-lg-2">
                <img className="card-img-top" src="" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        );
    }
}
