import React, { useCallback, useContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppContext from "../AppContext/AppContext";
import LaunchCard from "./LaunchCard";
import PageFooter from "./PageFooter";
import PageActions from "./PageActions";
import { AppConfig, LaunchStatus } from "../const/common";

const Dashboard: React.FunctionComponent = () => {

    const { allLaunches } = useContext(AppContext);
    const [activePage, setActivePage] = useState<number>(1);
    const [showFutureLaunch, setShowFutureLaunch] = useState<boolean>(false);
    const [activeLaunchStatus, setSctiveLaunchStatus] = useState<number>(LaunchStatus.All);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const onPageCick = useCallback((clickedPage: number) => {
        setActivePage(clickedPage);
    }, []);

    const onLaunchStatusSelect = useCallback((e: any) => {
        setSctiveLaunchStatus(parseInt(e.target.value));
        setActivePage(1);
    }, []);

    const onLaunchToggleChange = useCallback((e: any) => {
        setShowFutureLaunch(e.target.checked);
        setActivePage(1);
    }, []);

    const onSearchChange = useCallback((event: any) => {
        const searchValue = event.currentTarget.value;
        setSearchQuery(searchValue);
        setActivePage(1);
    }, []);

    const filteredData = allLaunches && allLaunches
        .filter(_launch => (showFutureLaunch ? _launch.upcoming : true) && (
            (activeLaunchStatus === LaunchStatus.Success ? _launch.success === true : true) &&
            (activeLaunchStatus === LaunchStatus.fail ? _launch.success === false : true) &&
            ((searchQuery && _launch.name) ?
                _launch.name.toLowerCase()?.indexOf(searchQuery.toLowerCase()) >= 0 : true)
        ));

    const sliceStart = activePage === 1 ? 0 :
        (activePage * AppConfig.defaultPageItemCount) - AppConfig.defaultPageItemCount;
    const sliceEnd = activePage === 1 ? AppConfig.defaultPageItemCount :
        activePage * AppConfig.defaultPageItemCount;
    const activePageData = filteredData && filteredData.slice(sliceStart, sliceEnd);

    return (
        <Container>
            <PageActions
                onLaunchStatusSelect={onLaunchStatusSelect}
                onLaunchToggleChange={onLaunchToggleChange}
                onSearchChange={onSearchChange}
            />
            <Row>
                {activePageData?.map(_launch => {
                    return (
                        <Col key={_launch.id} xs={12} md={3} >
                            <LaunchCard launch={_launch} />
                        </Col>
                    )
                })}
            </Row>
            <PageFooter launches={filteredData} activePage={activePage} onPageClick={onPageCick} />
        </Container>
    )
}

export default Dashboard;