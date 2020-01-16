

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }

  render() {
    const pane = this.props.panes[this.state.selectedPane];

    return (
      <div>
        <h1>Tabs</h1>
        <div className='tabs'>
          <Headers
            selectedPane={this.state.selectedPane}
            onTabChosen={this.selectTab}
            panes={this.props.panes}>
          </Headers>
          <div className='tab-content'>
            <article>
              {pane.content}
            </article>
          </div>
        </div>
      </div>
    );
  }
}