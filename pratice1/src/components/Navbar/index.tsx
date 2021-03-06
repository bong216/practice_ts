import * as React from 'react';

export default class Navbar extends React.PureComponent {

    public render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation </span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="/">Project name</a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/">Default</a></li>
                            <li><a href="/">Static top<a></li>
                            <li className="active"><a href="/">Fixed top <span className="sr-only">(current)</span></a><li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
