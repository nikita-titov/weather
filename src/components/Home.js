import React from "react";
import { connect } from "react-redux";
import { handleClickTag, handleClick, enterClick, deleteTag } from "../redux/actions/actions";
import Tag from "../components/Tag"
import { App, AppBlock, H1, H3, TextBlock, TextBlockTitle, TextBlockInput, TextBlockButton, 
  TextBlockTitleH5, WheatherBlockH3, WheatherUl, WheatherLi, WheatherBlock, Center, Tags } from "../components/Style"

class Home extends React.Component {
  render() {
    return (
      <App>
        <AppBlock>
          <TextBlock>
            <H1>Weather App</H1>
            <H3>Enter the name of the city and press "Enter"</H3>
            <TextBlockTitle>
              <i className="fa fa-search" />
              <TextBlockInput type="text" onKeyDown={e => this.props.enterClick(e)} />
            </TextBlockTitle>
            {this.props.warning && (
              <TextBlockTitleH5>Please, enter corect city</TextBlockTitleH5>
            )}
            <Center>
              <Tags>
                {this.props.tags && (
                  this.props.tags.map((tag, key) => (
                    <Tag
                      key={key}
                      text={tag}
                      deleteTag={e => this.props.deleteTag(e)}
                      handleClickTag={e => this.props.handleClickTag(e)}
                    />
                  ))
                )}
              </Tags>
            </Center>
            <H3>Or click to find automatically.</H3>
            <TextBlockButton onClick={this.props.handleClick}>Find</TextBlockButton>
          </TextBlock>
          {this.props.temp && (
            <WheatherBlock>
              <WheatherBlockH3>{this.props.city} {this.props.temp} &#176;</WheatherBlockH3>
              <WheatherUl>
                <WheatherLi>Speed Wind: {this.props.speedWind} m/s</WheatherLi>
                <WheatherLi>Humidity: {this.props.humidity} %</WheatherLi>
                <WheatherLi>Clouds: {this.props.clouds} %</WheatherLi>
              </WheatherUl>
            </WheatherBlock>
          )}
        </AppBlock>
      </App>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state.city,
    speedWind: state.speedWind,
    temp: state.temp,
    humidity: state.humidity,
    clouds: state.clouds,
    warning: state.warning,
    tags: state.tags
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(handleClick()),
    enterClick: e => dispatch(enterClick(e)),
    deleteTag: e => dispatch(deleteTag(e)),
    handleClickTag: e => dispatch(handleClickTag(e))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
