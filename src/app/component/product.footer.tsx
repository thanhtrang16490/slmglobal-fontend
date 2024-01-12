'use client'
import { Col, Row } from "antd";
import { Footer } from "antd/es/layout/layout";

export default function ProductFooterModule() {

    return (
        <Footer style={{ color: 'white', backgroundColor: '#17274f', width: '100%', textAlign: 'center' }}>
            <Row style={{ alignItems: 'center', display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <Col>SLM GLOBAL © 2024</Col>
                <Col>|</Col>
                <Col>Privacy & Legal</Col>
            </Row>
        </Footer>
    )
}
