import * as React from 'react';
import MyLayout from './MyLayout';
import TestComponent1 from './TestComponent1';

export interface AppProps {
    compiler: string;
    framework: string;
}

export const App = (props: AppProps) => (
    <MyLayout panels={[
        {
            location: 'top',
            component: < TestComponent1 text='top panel' />
        },
        {
            location: 'left',
            component: < TestComponent1 text='left panel' />
        },
        {
            location: 'center',
            component: < MyLayout panels={[{ location: 'bottom' }, { location: 'center', component: < TestComponent1 text='center' /> }]} />
        },
        {
            location: 'right',
            component: < TestComponent1 text='right panel' />
        },
        {
            location: 'bottom',
            component: < TestComponent1 text='bottom panel' />
        },
    ]}
    />
);
