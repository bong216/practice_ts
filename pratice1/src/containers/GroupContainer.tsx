import * as React from 'react';

import { GroupCard, Header, Navbar, } from '../components';
import { getPartnerList } from '../lib/serverAck';
import { IGroupType } from '../types/interface';

export default class GroupContainer extends React.Component<{}, IGroupType> {

    constructor(props: {})
    {
        super(props);
    }

    public componentDidMount()
    {
        getPartnerList()
        .then()
        .catch();
    }

    public render()
    {
        return (
            <div>
                <Navbar/>
                <Header/>
                <div className="container">
                    <div className="row">
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                            <GroupCard/>
                    </div>
                </div>
            </div>
        );
    }
}
