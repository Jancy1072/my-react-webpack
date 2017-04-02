require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片数据
let imageDatas=require('../data/imageDatas.json');
//利用只执行函数，将图片名转为图片URL
imageDatas=(function(imageDatasArr){
	for(let i=0;i<imageDatasArr.length;i++){
		let singleImageData=imageDatasArr[i];
		singleImageData.imageUrl=require('../images/'+singleImageData.fileName);
		imageDatasArr[i]=singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      	<section className="img-sec"></section>
      	<nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
