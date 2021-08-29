import React from "react";

const ContentContainer = (OriginalComponent) => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent />;
    }
  }
  return NewComponent;
};

export default ContentContainer;

// *Visibility Container Component (<ContentContainer>)
//   Implement a container component to control the visibility of the above two components
//   This component should contain logic to alter the visibility of the Counter and To-do List components
//   (For instance, two checkboxes for each component and when checked/unchecked, display/hide it)
//   Recommend use HOC as component wrapper to add extra visible prop to each component

//   For HOC implementation:
//   *App.js
//     <div className="App">
//       <ContentContainer />
//     </div>

//   *ContentContainer.js
//     <>
//       ...(logic for visibility control)
//       <HOCCounter visibie={somethingValue}/>
//       <HOCTdList />
//     </>
