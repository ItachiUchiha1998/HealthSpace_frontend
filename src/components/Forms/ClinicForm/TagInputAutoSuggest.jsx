import React from 'react'

import TagsInput from 'react-tagsinput'

import theme from 'assets/css/tagsuggestion.css'

import Autosuggest from 'react-autosuggest'

class AutocompleteExample extends React.Component {
  constructor (props) {
    super(props);
    this.state = {tags: [], suggestionsState:[]},
    this.autocompleteRenderInput = this.autocompleteRenderInput.bind(this);
  }

  CallReadApi = () => {
    const BASE_URL = 'http://localhost:7000/' + this.props.tagname + '/read?role=' + this.props.role;
    return fetch(BASE_URL,{
      method : 'POST'
    }).then( response => {return response.json();}).
      then( json => { console.log(json);
                      this.setState({suggestionsState: json.data });
                    });
  }

  componentWillMount(){
    this.CallReadApi();
  }

   autocompleteRenderInput ({addTag, ...props}) {
    const handleOnChange = (e, {newValue, method}) => {
      var flag = 0;
      var i;
      for(i in this.props.tags)
      {
        if(this.props.tags[i] === newValue){
          flag = 1;
          console.log(flag);
        }
      }
        if (method === 'enter' && flag == "0" ) {
          e.preventDefault()
        } else {
          props.onChange(e)
        }
    }

    const inputValue = (props.value && props.value.trim().toLowerCase()) || ''
    const inputLength = inputValue.length

    let suggestions = this.state.suggestionsState.filter((state) => {
      return state.text.toLowerCase().slice(0, inputLength) === inputValue
    });

    return (
      <Autosuggest
        ref={props.ref}
        theme={theme}
        suggestions={suggestions}
        shouldRenderSuggestions={(value) => value && value.trim().length > 0}
        getSuggestionValue={(suggestion) => suggestion.text}
        renderSuggestion={(suggestion) => <span>{suggestion.text}</span>}
        inputProps={{...props, onChange: handleOnChange}}
        onSuggestionSelected={(e, {suggestion}) => {
          var flag = 0;
          var i;
          for(i in this.props.tags)
          {
            if(this.props.tags[i] === suggestion.text){
              flag = 1;
            }
          }
          if(flag === 0){
            addTag(suggestion.text)
          }
          else{
            addTag("")
          }
        }}
        onSuggestionsClearRequested={() => {}}
        onSuggestionsFetchRequested={() => {}}
      />
    )
  }

  render () {
      if(this.props.tagname == "speciality"){
          return <TagsInput tagProps={{ className: "react-tagsinput-tag info" }} renderInput={this.autocompleteRenderInput} value={this.props.specialities} onChange={this.props.handleChangeSpecialities} />
      }
      else if (this.props.tagname == "service"){
          return <TagsInput tagProps={{ className: "react-tagsinput-tag info" }} renderInput={this.autocompleteRenderInput} value={this.props.services} onChange={this.props.handleChangeServices} />
      }
      else if (this.props.tagname == "category"){
          return <TagsInput tagProps={{ className: "react-tagsinput-tag info" }} renderInput={this.autocompleteRenderInput} value={this.props.categories} onChange={this.props.handleChangeCategories} />
      }
  }
}

export default AutocompleteExample
