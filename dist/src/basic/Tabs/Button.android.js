var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/basic/Tabs/Button.android.js";var React=require("react");
var ReactNative=require("react-native");var
TouchableNativeFeedback=ReactNative.TouchableNativeFeedback,View=ReactNative.View,Platform=ReactNative.Platform,TouchableOpacity=ReactNative.TouchableOpacity;

var Button=function Button(props){
if(Platform["Version"]<=21){
return(
React.createElement(TouchableOpacity,{__source:{fileName:_jsxFileName,lineNumber:8}},
props.children));


}

return(
React.createElement(TouchableNativeFeedback,_extends({
delayPressIn:0},
props,{__source:{fileName:_jsxFileName,lineNumber:15}}),

props.children));


};

module.exports=Button;
//# sourceMappingURL=Button.android.js.map