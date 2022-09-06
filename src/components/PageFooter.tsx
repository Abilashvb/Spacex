import React from "react";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/esm/Col";
import Pagination from 'react-bootstrap/Pagination';
import { ILaunch } from "../schemas/launchSchema";
import { AppConfig } from "../const/common";

const PageFooter: React.FunctionComponent<IProps> = ({ launches, activePage, onPageClick }) => {
    const totalItems = launches.length;
    const totalPages = totalItems ? Math.ceil(totalItems / AppConfig.defaultPageItemCount) : 1;
    let pagingItems = [];
    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        pagingItems.push(
            <Pagination.Item
                key={pageNum}
                active={pageNum === activePage}
                onClick={(e) => onPageClick(pageNum)}
            >
                {pageNum}
            </Pagination.Item>
        );
    }

    return (
        <Row className="pageFooter">
            <Col xs={12} md={12} >
                <Pagination>{pagingItems}</Pagination>
            </Col>
        </Row>
    )
}

export default PageFooter;


interface IProps {
    launches: ILaunch[];
    activePage: number;
    onPageClick: (e: number) => void;
}