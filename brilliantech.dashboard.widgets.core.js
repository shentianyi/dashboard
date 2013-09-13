/**
 * Created with JetBrains WebStorm.
 * User: Tianyi
 * Date: 13-8-27
 * Time: 上午9:06
 * To change this template use File | Settings | File Templates.
 */



var brilliantech  = brilliantech || {};


brilliantech.dashboard = brilliantech.dashboard || {};

brilliantech.dashboard.widgets = brilliantech.dashboard.widgets || function(){};






/*
* 各个图表的生成方法，方法应该向指定的DOM容器中生成图表代码，封装原先的form_chart方法
* @params
* data: 生成图表需要的数据，不同的图表类型应该有不同的数据要求
* options：图表的专有设置HASH表，至少包括下列设置
*   container：html selector string:显示图表的HTML容器
*   resizable:boolean:是否允许在运行时改变大小
*   getData:function(target):获取数据的方法应返回获取的更新数据，此方法用于页面设置自动更新数据
*
* 可能包括下列属性
*   height
*   width
* 以及其他的属性
*
*
*
* */

brilliantech.dashboard.widgets.pie = function(){
   this.generate = function(data,options){};
};

brilliantech.dashboard.widgets.pie.template = function(){};


brilliantech.dashboard.widgets.line= function(data,options){

};

brilliantech.dashboard.widgets.bar = function(data,options){

};





//add the chart functions you need

