import React from 'react';
import { TextTab } from './tab';

class Tabs extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  // Toggle currently active tab
  handleTabClick(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
    });
  }

  // Encapsulate <Tabs/> component API as props for <Tab/> children
  renderChildrenWithTabsApiAsProps() {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex
      });
    });
  }

  // Render current active tab content
  renderActiveTabContent() {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    if (children[activeTabIndex]) {
      return children[activeTabIndex].props.children;
    }
  }

  render() {
    return (
      <div className="tab-container">
      
          {/* {this.renderChildrenWithTabsApiAsProps()} */}
    
        <div className="tab-button">
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
};

export default Tabs;