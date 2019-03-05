# Web Layout
This is a prototype of web layout like a workbench.

## Goal
Make a react component that can have panels in each layout grid.

## Implementation
The component is called MyLayout that is referenced as one of the JAVA GUI layouts, border layout [(link)](https://docs.oracle.com/javase/tutorial/uiswing/layout/border.html).  
The layout can be divided into 5 portions, TOP, BOTTOM, LEFT, RIGHT, and CENTER.  
TOP, BOTTOM, LEFT, RIGHT can be added around CENTER without the order of addition.  

Implementing with **React, typescript** and styling with **styled-component**  

### Example 1
```javascript
<MyLayout panels={[
       { location: 'top', component: < TestComponent1 text='top panel' /> },
       { location: 'right', component: < TestComponent1 text='right panel' /> },
       { location: 'center', component: <MyLayout panels={[{location: 'bottom'}, {location: 'center'} ]}/> }
   ]}
/>
```

### Example 2
```javascript
<MyLayout
    panels={[
      {
        location: "top",
        component: <TestComponent1 text="top panel" />
      },
      {
        location: "left",
        component: <TestComponent1 text="left panel" />
      },
      {
        location: "center",
        component: (
          <MyLayout
            panels={[
              { location: "bottom" },
              {
                location: "center",
                component: <TestComponent1 text="center" />
              }
            ]}
          />
        )
      },
      {
        location: "right",
        component: <TestComponent1 text="right panel" />
      },
      {
        location: "bottom",
        component: <TestComponent1 text="bottom panel" />
      }
    ]}
  />
```

## You can run this with below
Recommend to open with chrome  
https://codesandbox.io/s/mm2o5m4lvj
