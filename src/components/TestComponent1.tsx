import * as React from 'react';
import styled from 'styled-components';

interface BackgroundProps {
    text?: string;
}

class TestComponent1 extends React.Component<BackgroundProps, null> {
    constructor(props: BackgroundProps) {
        super(props);
    }

    render() {
        return (
            <TestBackground background='yellow'>
                {this.props.text}
            </TestBackground>
        );
    }
}

const TestBackground = styled('div') < { background: string } >`
margin: auto;
width: 50%;
height: 50px;
text-align: center;
background: ${props => props.background};
`;

export default TestComponent1;