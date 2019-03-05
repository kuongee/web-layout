import * as React from 'react';
import styled from 'styled-components';

interface Panel {
    location: string;
    component?: any;
}

export interface AppProps {
    panels: Panel[];
}

interface LayoutState {
    background: string;
    width: string;
    height: string;
    left: string;
    right: string;
    top: string;
    bottom: string;
    text?: string;
}

class MyLayout extends React.Component<AppProps, null> {
    constructor(props: AppProps) {
        super(props);
    }

    createLayout() {
        const panels: Panel[] = this.props.panels;
        if(panels.length === 0) {
            panels.push(
                {location: 'center'}
            );
        }

        let topValue: number = 0;
        let leftValue: number = 0;
        let rightValue: number = 0;
        let bottomValue: number = 0;

        panels.forEach(function (panel) {
            const checkLocation = panel.location.toLowerCase();
            if (checkLocation === 'top') {
                topValue = 20;
            }
            else if (checkLocation === 'left') {
                leftValue = 20;
            }
            else if (checkLocation === 'right') {
                rightValue = 20;
            }
            else if (checkLocation === 'bottom') {
                bottomValue = 20;
            }
        });

        return (
            <div>
                {this.setPaneltoLayout(panels, topValue, leftValue, rightValue, bottomValue)}
            </div>
        );

    }

    setPaneltoLayout(panels: Panel[], topValue: number, leftValue: number, rightValue: number, bottomValue: number) {
        let setPanels: any[] = [];
        panels.forEach(function (panel) {
            const checkLocation = panel.location.toLowerCase();
            if (checkLocation === 'top') {
                setPanels.push(
                    <Background background='bisque' width='100%' height='20%' left='0%' right='' top='0%' bottom=''>
                        <p> Top Background </p>
                        {panel.component}
                    </Background>
                );
            }
            else if (checkLocation === 'left') {
                let height: string = (100 - topValue - bottomValue).toString() + '%';
                let top: string = topValue.toString() + '%';
                setPanels.push(
                    <Background background='lavender' width='20%' height={height} left='0%' right='' top={top} bottom=''>
                        <p> left Background </p>
                        {panel.component}
                    </Background>
                );
            }
            else if (checkLocation === 'center') {
                let width: string = (100 - leftValue - rightValue).toString() + '%';
                let height: string = (100 - topValue - bottomValue).toString() + '%';
                let left: string = leftValue.toString() + '%';
                let top: string = topValue.toString() + '%';
                setPanels.push(
                    <Background background='powderBlue' width={width} height={height} left={left} right='' top={top} bottom=''>
                        <p> Center Background </p>
                        {panel.component}
                    </Background>
                );
            }
            else if (checkLocation === 'right') {
                let height: string = (100 - topValue - bottomValue).toString() + '%';
                let left: string = (100 - rightValue).toString() + '%';
                let top: string = topValue.toString() + '%';
                setPanels.push(
                    <Background background='lightYellow' width='20%' height={height} left={left} right='' top={top} bottom=''>
                        <p> right Background </p>
                        {panel.component}
                    </Background>
                );
            }
            else if (checkLocation === 'bottom') {
                let top: string = (100 - bottomValue).toString() + '%';
                setPanels.push(
                    <Background background='mistyRose' width='100%' height='20%' left='0%' right='' top={top} bottom=''>
                        <p> Bottom Background </p>
                        {panel.component}
                    </Background>
                );
            }
        });
        return (
            <div>
                {setPanels}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.createLayout()}
            </div>
        );
    }
}

const Background = styled("div") <LayoutState>`
    background: ${props => props.background};
    
    position: absolute;
    width: ${props => props.width};
    height: ${props => props.height};
    
    left: ${props => props.left};
    top: ${props => props.top};
    bottom: 0;
    
    margin: 0px;
`;

export default MyLayout;
