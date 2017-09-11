Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Input/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _FloatingLabel=require('../FloatingLabel');var _FloatingLabel2=_interopRequireDefault(_FloatingLabel);var _Underline=require('../Underline');var _Underline2=_interopRequireDefault(_Underline);var _props2=require('./props');var _styles=require('./styles');var _styles2=_interopRequireDefault(_styles);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Input=function(_React$Component){_inherits(Input,_React$Component);function Input(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Input);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Input.__proto__||Object.getPrototypeOf(Input)).call.apply(_ref,[this].concat(args))),_this),_this.elements={},_this.state={height:_this.props.height,isFocused:false,text:_this.props.value},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Input,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(this.props.text!==nextProps.value){nextProps.value.length!==0?this.elements.floatingLabel.floatLabel():this.elements.floatingLabel.sinkLabel();this.setState({text:nextProps.value});}if(this.props.height!==nextProps.height){this.setState({height:nextProps.height});}}},{key:'focus',value:function focus(){this.elements.input.focus();}},{key:'blur',value:function blur(){this.elements.input.blur();}},{key:'isFocused',value:function isFocused(){return this.state.isFocused;}},{key:'measureLayout',value:function measureLayout(){var _elements$wrapper;(_elements$wrapper=this.elements.wrapper).measureLayout.apply(_elements$wrapper,arguments);}},{key:'render',value:function render(){var _this2=this;var _props=this.props,label=_props.label,highlightColor=_props.highlightColor,duration=_props.duration,labelColor=_props.labelColor,borderColor=_props.borderColor,textColor=_props.textColor,textFocusColor=_props.textFocusColor,textBlurColor=_props.textBlurColor,_onFocus=_props.onFocus,_onBlur=_props.onBlur,_onChangeText=_props.onChangeText,_onChange=_props.onChange,value=_props.value,dense=_props.dense,inputStyle=_props.inputStyle,wrapperStyle=_props.wrapperStyle,labelStyle=_props.labelStyle,height=_props.height,autoGrow=_props.autoGrow,multiline=_props.multiline,props=_objectWithoutProperties(_props,['label','highlightColor','duration','labelColor','borderColor','textColor','textFocusColor','textBlurColor','onFocus','onBlur','onChangeText','onChange','value','dense','inputStyle','wrapperStyle','labelStyle','height','autoGrow','multiline']);return _react2.default.createElement(_reactNative.View,{ref:function ref(_ref5){_this2.elements.wrapper=_ref5;},style:[dense?_styles2.default.denseWrapper:_styles2.default.wrapper,this.state.height?{height:undefined}:{},wrapperStyle],__source:{fileName:_jsxFileName,lineNumber:69}},_react2.default.createElement(_reactNative.TextInput,_extends({style:[dense?_styles2.default.denseTextInput:_styles2.default.textInput,{color:textColor},this.state.isFocused&&textFocusColor&&{color:textFocusColor},!this.state.isFocused&&textBlurColor&&{color:textBlurColor},inputStyle,this.state.height&&{height:this.state.height}],multiline:multiline,onFocus:function onFocus(){_this2.setState({isFocused:true});_this2.elements.floatingLabel.floatLabel();_this2.elements.underline.expandLine();_onFocus&&_onFocus();},onBlur:function onBlur(){_this2.setState({isFocused:false});!_this2.state.text.length&&_this2.elements.floatingLabel.sinkLabel();_this2.elements.underline.shrinkLine();_onBlur&&_onBlur();},onChangeText:function onChangeText(text){_this2.setState({text:text});_onChangeText&&_onChangeText(text);},onChange:function onChange(event){if(autoGrow){_this2.setState({height:event.nativeEvent.contentSize.height});}_onChange&&_onChange(event);},ref:function ref(_ref2){_this2.elements.input=_ref2;},value:this.state.text},props,{__source:{fileName:_jsxFileName,lineNumber:77}})),_react2.default.createElement(_Underline2.default,{ref:function ref(_ref3){_this2.elements.underline=_ref3;},highlightColor:highlightColor,duration:duration,borderColor:borderColor,__source:{fileName:_jsxFileName,lineNumber:116}}),_react2.default.createElement(_FloatingLabel2.default,{isFocused:this.state.isFocused,ref:function ref(_ref4){_this2.elements.floatingLabel=_ref4;},focusHandler:this.focus.bind(this),label:label,labelColor:labelColor,highlightColor:highlightColor,duration:duration,dense:dense,hasValue:!!this.state.text.length,style:labelStyle,__source:{fileName:_jsxFileName,lineNumber:123}}));}}]);return Input;}(_react2.default.Component);Input.propTypes=_props2.propTypes;Input.defaultProps=_props2.defaultProps;exports.default=Input;