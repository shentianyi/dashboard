/**
 * Created with JetBrains WebStorm.
 * User: Tianyi
 * Date: 13-8-27
 * Time: 上午10:07
 * To change this template use File | Settings | File Templates.
*/

var brilliantech = brilliantech || {};


//class graph
brilliantech.widget = function widget(id,type,options){
    /*@field 全局唯一的ID号*/
    this.id = id;

    /*@field 图表类型*/
    this.type= type;

    this.interval = options["auto_refresh_time"];

    this.get_data = options["get_data_callback"];

    this.after_render = options["after_render_callback"];

    this.before_render = options["before_render_callback"];

    this.auto_refresh = function(){
        if(this.interval > 0) {
           //set interval with this.render
        }
    };

    this.render = function(){
        this.before_render();
        this.get_data(this._create_widget);
    };

    this._create_widget=function(data,options){
        brilliantech.dashboard.widgets[this.type](data,options);
        this.after_render();
    }

};
